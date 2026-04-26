import Principal "mo:core/Principal";

module {
  public type UserProfile = {
    principal : Principal;
    displayName : Text;
    fullName : Text;
    createdAt : Int;
    isAdmin : Bool;
  };
};
