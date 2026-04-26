import Map "mo:core/Map";
import Queue "mo:core/Queue";
import Principal "mo:core/Principal";
import Types "types/user-auth";
import ActivityTypes "types/activity";
import UserAuthLib "lib/user-auth";
import UserAuthApi "mixins/user-auth-api";
import ActivityApi "mixins/activity-api";
import Migration "migration";

(with migration = Migration.run)
actor self {
  // Capture the deployer principal at construction time.
  // This principal always has implicit admin access and can never be demoted.
  let deployer : Principal = Principal.fromActor(self);

  let users : UserAuthLib.UserStore = Map.empty<Principal, Types.UserProfile>();

  let activityLog : Queue.Queue<ActivityTypes.ActivityEntry> = Queue.empty<ActivityTypes.ActivityEntry>();
  let activityCounter : { var value : Nat } = { var value = 0 };

  include UserAuthApi(users);
  include ActivityApi(users, activityLog, activityCounter, deployer);
};
