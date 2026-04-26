import Map "mo:core/Map";
import Principal "mo:core/Principal";
import NewTypes "types/user-auth";

module {
  // Old UserProfile definition (copied from .old/src/backend/types/user-auth.mo)
  type OldUserProfile = {
    principal : Principal;
    displayName : Text;
    fullName : Text;
    createdAt : Int;
  };

  type OldActor = {
    users : Map.Map<Principal, OldUserProfile>;
  };

  type NewActor = {
    users : Map.Map<Principal, NewTypes.UserProfile>;
  };

  public func run(old : OldActor) : NewActor {
    let users = old.users.map<Principal, OldUserProfile, NewTypes.UserProfile>(
      func(_id, oldProfile) {
        { oldProfile with isAdmin = false };
      }
    );
    { users };
  };
};
