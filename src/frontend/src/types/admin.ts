import { ActivityEventType } from "../backend";

export interface ActivityEntry {
  id: bigint;
  eventType: ActivityEventType;
  userId: string; // Principal as text
  timestamp: bigint;
  metadata: string;
}

export interface ActivityFilter {
  eventType?: ActivityEventType;
  startTime?: bigint;
  endTime?: bigint;
}

export interface UserProfile {
  principal: string; // Principal as text
  displayName: string;
  fullName: string;
  createdAt: bigint;
  isAdmin: boolean;
}

export { ActivityEventType };
