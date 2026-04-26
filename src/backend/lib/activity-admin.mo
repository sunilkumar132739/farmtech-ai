import Principal "mo:core/Principal";
import Queue "mo:core/Queue";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Types "../types/activity";
import UserAuthTypes "../types/user-auth";

module {
  public let MAX_LOG_SIZE : Nat = 2000;

  public type ActivityLog = Queue.Queue<Types.ActivityEntry>;
  public type UserStore = Map.Map<Principal, UserAuthTypes.UserProfile>;

  /// Push a new ActivityEntry onto the log. Evicts oldest entry if size exceeds 2000.
  /// Never traps.
  public func appendEntry(
    log : ActivityLog,
    counter : { var value : Nat },
    caller : Principal,
    eventType : Types.ActivityEventType,
    metadata : Text,
  ) : () {
    let id = counter.value;
    counter.value += 1;
    let entry : Types.ActivityEntry = {
      id;
      eventType;
      userId = caller;
      timestamp = Time.now();
      metadata;
    };
    log.pushBack(entry);
    // Evict oldest if over cap
    if (log.size() > MAX_LOG_SIZE) {
      ignore log.popFront();
    };
  };

  /// Return entries matching the filter. Most recent first.
  public func queryLog(
    log : ActivityLog,
    filter : Types.ActivityFilter,
  ) : [Types.ActivityEntry] {
    // Collect matching entries in insertion order, then reverse
    let matched = log.filter(func(entry : Types.ActivityEntry) : Bool {
      let typeMatch = switch (filter.eventType) {
        case null true;
        case (?et) entry.eventType == et;
      };
      let startMatch = switch (filter.startTime) {
        case null true;
        case (?t) entry.timestamp >= t;
      };
      let endMatch = switch (filter.endTime) {
        case null true;
        case (?t) entry.timestamp <= t;
      };
      typeMatch and startMatch and endMatch;
    });
    // Convert to array and reverse for most-recent-first
    matched.toArray().reverse();
  };

  /// Return all UserProfile values from the store.
  public func listAllUsers(users : UserStore) : [UserAuthTypes.UserProfile] {
    users.values().toArray();
  };

  /// Set isAdmin=true for target principal. Returns false if target not found.
  public func promote(
    users : UserStore,
    target : Principal,
    _deployer : Principal,
  ) : Bool {
    switch (users.get(target)) {
      case null false;
      case (?profile) {
        users.add(target, { profile with isAdmin = true });
        true;
      };
    };
  };

  /// Set isAdmin=false for target principal.
  /// The deployer principal itself can never be demoted. Returns false if not found.
  public func demote(
    users : UserStore,
    target : Principal,
    deployer : Principal,
  ) : Bool {
    if (Principal.equal(target, deployer)) return false;
    switch (users.get(target)) {
      case null false;
      case (?profile) {
        users.add(target, { profile with isAdmin = false });
        true;
      };
    };
  };

  /// Return true if caller is the deployer OR has isAdmin=true in the store.
  public func checkIsAdmin(
    users : UserStore,
    caller : Principal,
    deployer : Principal,
  ) : Bool {
    if (Principal.equal(caller, deployer)) return true;
    switch (users.get(caller)) {
      case null false;
      case (?profile) profile.isAdmin;
    };
  };
};
