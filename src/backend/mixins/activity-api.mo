import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import ActivityTypes "../types/activity";
import UserAuthTypes "../types/user-auth";
import ActivityAdminLib "../lib/activity-admin";

mixin (
  users : ActivityAdminLib.UserStore,
  activityLog : ActivityAdminLib.ActivityLog,
  activityCounter : { var value : Nat },
  deployer : Principal,
) {
  /// Log an activity event — fire-and-forget, never traps.
  public shared ({ caller }) func logActivity(
    eventType : ActivityTypes.ActivityEventType,
    metadata : Text,
  ) : async () {
    // Reject anonymous callers silently — do not trap
    if (caller.isAnonymous()) return;
    try {
      ActivityAdminLib.appendEntry(activityLog, activityCounter, caller, eventType, metadata);
    } catch (_) {
      // Fire-and-forget: swallow any unexpected error, never block the caller
    };
  };

  /// Return filtered activity log — admin only.
  public shared query ({ caller }) func getActivityLog(
    filter : ActivityTypes.ActivityFilter,
  ) : async [ActivityTypes.ActivityEntry] {
    if (not ActivityAdminLib.checkIsAdmin(users, caller, deployer)) {
      Runtime.trap("Unauthorized");
    };
    ActivityAdminLib.queryLog(activityLog, filter);
  };

  /// Return all registered user profiles — admin only.
  public shared query ({ caller }) func getAllUsers() : async [UserAuthTypes.UserProfile] {
    if (not ActivityAdminLib.checkIsAdmin(users, caller, deployer)) {
      Runtime.trap("Unauthorized");
    };
    ActivityAdminLib.listAllUsers(users);
  };

  /// Grant admin role to a target principal — admin only. Returns true on success.
  public shared ({ caller }) func promoteToAdmin(target : Principal) : async Bool {
    if (not ActivityAdminLib.checkIsAdmin(users, caller, deployer)) {
      Runtime.trap("Unauthorized");
    };
    ActivityAdminLib.promote(users, target, deployer);
  };

  /// Revoke admin role from a target principal — admin only. Returns true on success.
  public shared ({ caller }) func removeAdmin(target : Principal) : async Bool {
    if (not ActivityAdminLib.checkIsAdmin(users, caller, deployer)) {
      Runtime.trap("Unauthorized");
    };
    ActivityAdminLib.demote(users, target, deployer);
  };

  /// Query whether the caller currently holds admin role.
  public shared query ({ caller }) func isAdmin() : async Bool {
    ActivityAdminLib.checkIsAdmin(users, caller, deployer);
  };
};
