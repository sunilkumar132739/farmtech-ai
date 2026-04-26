import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { Identity } from "@icp-sdk/core/agent";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ActivityEventType, createActor } from "../backend";
import type { UserProfile } from "../types";

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  principal: string | null;
  identity: Identity | undefined;
  login: () => void;
  logout: () => void;
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Inner component that has access to the actor (must be inside caffeineai providers)
function AuthProviderInner({ children }: { children: ReactNode }) {
  const {
    identity,
    login: iiLogin,
    clear,
    isInitializing,
  } = useInternetIdentity();
  const { actor } = useActor(createActor);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const principal = identity?.getPrincipal().toText() ?? null;
  const isAnonymous =
    !principal || principal === "2vxsx-fae" || principal === "";
  const isAuthenticated = !!identity && !isAnonymous;
  const isLoading = isInitializing;

  // Clear profile when identity is cleared
  useEffect(() => {
    if (!isAuthenticated) {
      setUserProfile(null);
    }
  }, [isAuthenticated]);

  function login() {
    try {
      iiLogin();
    } catch {
      // Log failed login fire-and-forget
      if (actor) {
        actor
          .logActivity(ActivityEventType.FailedLogin, "Login failed")
          .catch(() => {});
      }
    }
  }

  // Log login event when authentication state transitions to true
  const [wasAuthenticated, setWasAuthenticated] = useState(false);
  useEffect(() => {
    if (isAuthenticated && !wasAuthenticated && actor) {
      actor
        .logActivity(ActivityEventType.Login, "User logged in")
        .catch(() => {});
    }
    setWasAuthenticated(isAuthenticated);
  }, [isAuthenticated, wasAuthenticated, actor]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        principal,
        identity,
        login,
        logout: clear,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthProviderInner>{children}</AuthProviderInner>;
}

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}
