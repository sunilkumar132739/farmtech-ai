import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Types "../types/user-auth";
import UserAuthLib "../lib/user-auth";

mixin (users : UserAuthLib.UserStore) {
  public shared query ({ caller }) func getUserProfile() : async ?Types.UserProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers are not allowed. Please authenticate with Internet Identity.");
    };
    UserAuthLib.getUserProfile(users, caller);
  };

  public shared ({ caller }) func updateUserProfile(displayName : Text, fullName : Text) : async Types.UserProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Anonymous callers are not allowed. Please authenticate with Internet Identity.");
    };
    UserAuthLib.updateUserProfile(users, caller, displayName, fullName);
  };
};
