import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ActivityEntry {
    id: bigint;
    metadata: string;
    userId: Principal;
    timestamp: bigint;
    eventType: ActivityEventType;
}
export interface ActivityFilter {
    startTime?: bigint;
    endTime?: bigint;
    eventType?: ActivityEventType;
}
export interface UserProfile {
    principal: Principal;
    displayName: string;
    createdAt: bigint;
    fullName: string;
    isAdmin: boolean;
}
export enum ActivityEventType {
    Login = "Login",
    FailedLogin = "FailedLogin",
    ProfileUpdate = "ProfileUpdate",
    MarketplaceClick = "MarketplaceClick",
    CropDoctorUpload = "CropDoctorUpload",
    IrrigationToggle = "IrrigationToggle",
    BestPriceSearch = "BestPriceSearch"
}
export interface backendInterface {
    getActivityLog(filter: ActivityFilter): Promise<Array<ActivityEntry>>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getUserProfile(): Promise<UserProfile | null>;
    isAdmin(): Promise<boolean>;
    logActivity(eventType: ActivityEventType, metadata: string): Promise<void>;
    promoteToAdmin(target: Principal): Promise<boolean>;
    removeAdmin(target: Principal): Promise<boolean>;
    updateUserProfile(displayName: string, fullName: string): Promise<UserProfile>;
}
