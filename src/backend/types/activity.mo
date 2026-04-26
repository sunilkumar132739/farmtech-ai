import Principal "mo:core/Principal";

module {
  public type ActivityEventType = {
    #Login;
    #FailedLogin;
    #CropDoctorUpload;
    #IrrigationToggle;
    #MarketplaceClick;
    #BestPriceSearch;
    #ProfileUpdate;
  };

  public type ActivityEntry = {
    id : Nat;
    eventType : ActivityEventType;
    userId : Principal;
    timestamp : Int;
    metadata : Text;
  };

  public type ActivityFilter = {
    eventType : ?ActivityEventType;
    startTime : ?Int;
    endTime : ?Int;
  };
};
