import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { UserProfile } from "../types";

function useBackendActor() {
  return useActor(createActor);
}

export function useIsAdmin() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isAdmin();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useGetUserProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.getUserProfile();
      if (!result) return null;
      return {
        ...result,
        principal: result.principal.toText(),
      };
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateUserProfile() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      displayName,
      fullName,
    }: {
      displayName: string;
      fullName: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updateUserProfile(displayName, fullName);
      return {
        ...result,
        principal: result.principal.toText(),
      };
    },
    onSuccess: (data) => {
      queryClient.setQueryData<UserProfile>(["userProfile"], data);
    },
  });
}
