import { useActor } from "@caffeineai/core-infrastructure";
import type { Principal } from "@icp-sdk/core/principal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ActivityEventType } from "../backend";
import { createActor } from "../backend";
import type {
  ActivityEntry,
  ActivityFilter,
  UserProfile,
} from "../types/admin";
function useBackendActor() {
  return useActor(createActor);
}

export function useGetActivityLog(filter: ActivityFilter) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ActivityEntry[]>({
    queryKey: ["activityLog", filter],
    queryFn: async () => {
      if (!actor) return [];
      const entries = await actor.getActivityLog(filter);
      return entries.map((e) => ({
        ...e,
        userId: e.userId.toText(),
      }));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllUsers() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<UserProfile[]>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      if (!actor) return [];
      const users = await actor.getAllUsers();
      return users.map((u) => ({
        ...u,
        principal: u.principal.toText(),
      }));
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePromoteToAdmin() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (principal: Principal) => {
      if (!actor) throw new Error("Actor not available");
      return actor.promoteToAdmin(principal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
    },
  });
}

export function useRemoveAdmin() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (principal: Principal) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeAdmin(principal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
    },
  });
}

export { ActivityEventType };
