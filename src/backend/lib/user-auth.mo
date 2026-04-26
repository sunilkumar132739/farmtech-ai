import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Types "../types/user-auth";

module {
  public type UserStore = Map.Map<Principal, Types.UserProfile>;

  public func getUserProfile(users : UserStore, caller : Principal) : ?Types.UserProfile {
    users.get(caller);
  };

  public func updateUserProfile(
    users : UserStore,
    caller : Principal,
    displayName : Text,
    fullName : Text,
  ) : Types.UserProfile {
    let existing = users.get(caller);
    let (createdAt, isAdmin) = switch (existing) {
      case (?p) (p.createdAt, p.isAdmin);
      case null (Time.now(), false);
    };
    let profile : Types.UserProfile = {
      principal = caller;
      displayName;
      fullName;
      createdAt;
      isAdmin;
    };
    users.add(caller, profile);
    profile;
  };
};
