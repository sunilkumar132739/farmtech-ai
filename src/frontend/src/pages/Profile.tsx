import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  CalendarDays,
  CheckCircle2,
  Copy,
  Edit3,
  Fingerprint,
  Loader2,
  Save,
  ShieldCheck,
  Sprout,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ActivityEventType, createActor } from "../backend";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { useGetUserProfile, useUpdateUserProfile } from "../hooks/useQueries";

export default function Profile() {
  const { principal, setUserProfile } = useAuth();
  const { data: profileData, isLoading } = useGetUserProfile();
  const updateMutation = useUpdateUserProfile();
  const { actor } = useActor(createActor);

  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [fullName, setFullName] = useState("");
  const [displayNameError, setDisplayNameError] = useState("");
  const [copiedPrincipal, setCopiedPrincipal] = useState(false);

  // Pre-fill form with current data when entering edit mode
  function startEditing() {
    setDisplayName(profileData?.displayName || "");
    setFullName(profileData?.fullName || "");
    setDisplayNameError("");
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
    setDisplayNameError("");
  }

  function validateDisplayName(value: string) {
    if (!value.trim()) {
      setDisplayNameError("Display name cannot be empty");
      return false;
    }
    setDisplayNameError("");
    return true;
  }

  async function handleSave() {
    if (!validateDisplayName(displayName)) return;
    try {
      const updated = await updateMutation.mutateAsync({
        displayName: displayName.trim(),
        fullName: fullName.trim(),
      });
      setUserProfile(updated);
      setEditing(false);
      // Fire-and-forget activity log
      actor
        ?.logActivity(
          ActivityEventType.ProfileUpdate,
          "Profile updated: name or location",
        )
        .catch(() => {});
      toast.success("Profile updated successfully!", {
        description: "Your changes have been saved.",
        duration: 4000,
      });
    } catch {
      toast.error("Failed to update profile", {
        description: "Please try again.",
        duration: 5000,
      });
    }
  }

  async function copyPrincipal() {
    if (!principal) return;
    await navigator.clipboard.writeText(principal);
    setCopiedPrincipal(true);
    toast.success("Principal ID copied!");
    setTimeout(() => setCopiedPrincipal(false), 2000);
  }

  const joinedDate = profileData?.createdAt
    ? new Date(Number(profileData.createdAt) / 1_000_000).toLocaleDateString(
        "en-IN",
        { year: "numeric", month: "long", day: "numeric" },
      )
    : null;

  const truncatedPrincipal = principal
    ? `${principal.slice(0, 12)}...${principal.slice(-8)}`
    : null;

  return (
    <Layout>
      <div className="min-h-screen gradient-bg flex" data-ocid="profile-page">
        <Sidebar />

        <main className="flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-8 pt-16 md:pt-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* ── Header Banner ── */}
            <div className="welcome-banner" data-ocid="profile-header">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center shrink-0 shadow-lg">
                  {isLoading ? (
                    <Skeleton className="w-7 h-7 rounded-full bg-white/10" />
                  ) : (
                    <Sprout className="w-7 h-7 text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <h1 className="welcome-text">My Profile</h1>
                  {isLoading ? (
                    <Skeleton className="h-4 w-40 bg-white/10 mt-1" />
                  ) : (
                    <p className="welcome-subtitle">
                      Welcome back,{" "}
                      <span className="text-accent font-semibold">
                        {profileData?.displayName || "Farmer"}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ── Account Info Card ── */}
            <div className="glass-card space-y-4" data-ocid="account-info-card">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Account Information
                </h2>
                <Badge
                  variant="outline"
                  className="ml-auto border-primary/30 text-primary text-[10px] px-2 py-0.5"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                  Verified
                </Badge>
              </div>

              <Separator className="bg-white/10" />

              {/* Principal ID */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <Fingerprint className="w-3.5 h-3.5" />
                  Principal ID
                </div>
                {isLoading || !principal ? (
                  <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
                ) : (
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10 group">
                    <code className="flex-1 text-xs font-mono text-foreground truncate min-w-0">
                      {truncatedPrincipal}
                    </code>
                    <button
                      type="button"
                      onClick={copyPrincipal}
                      aria-label="Copy Principal ID"
                      className="shrink-0 p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-smooth"
                      data-ocid="btn-copy-principal"
                    >
                      {copiedPrincipal ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Joined Date */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <CalendarDays className="w-3.5 h-3.5" />
                  Member Since
                </div>
                {isLoading ? (
                  <Skeleton className="h-10 w-48 bg-white/10 rounded-lg" />
                ) : (
                  <p className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-sm text-foreground font-medium">
                    {joinedDate ?? "—"}
                  </p>
                )}
              </div>

              {/* Authentication method */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Authentication
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    Internet Identity
                  </span>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold">
                    SECURE
                  </span>
                </div>
              </div>
            </div>

            {/* ── Edit Profile Card ── */}
            <div className="glass-card space-y-4" data-ocid="edit-profile-card">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Profile Details
                </h2>
                {!editing && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={startEditing}
                    className="ml-auto border-white/20 text-foreground hover:bg-white/10 bg-transparent gap-1.5"
                    data-ocid="btn-edit-profile"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    Edit
                  </Button>
                )}
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                {/* Display Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="display-name"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    Display Name <span className="text-destructive">*</span>
                  </Label>
                  {editing ? (
                    <div className="space-y-1">
                      <Input
                        id="display-name"
                        className="auth-input"
                        value={displayName}
                        onChange={(e) => {
                          setDisplayName(e.target.value);
                          if (displayNameError)
                            validateDisplayName(e.target.value);
                        }}
                        onBlur={(e) => validateDisplayName(e.target.value)}
                        placeholder="Your display name"
                        maxLength={50}
                        aria-describedby={
                          displayNameError ? "display-name-error" : undefined
                        }
                        aria-invalid={!!displayNameError}
                        data-ocid="input-display-name"
                      />
                      {displayNameError && (
                        <p
                          id="display-name-error"
                          className="text-xs text-destructive px-1"
                        >
                          {displayNameError}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                      {isLoading ? (
                        <Skeleton className="h-4 w-32 bg-white/10" />
                      ) : (
                        <p className="text-sm text-foreground font-medium">
                          {profileData?.displayName || "—"}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="full-name"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    Full Name
                  </Label>
                  {editing ? (
                    <Input
                      id="full-name"
                      className="auth-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      maxLength={100}
                      data-ocid="input-full-name"
                    />
                  ) : (
                    <div className="px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                      {isLoading ? (
                        <Skeleton className="h-4 w-40 bg-white/10" />
                      ) : (
                        <p className="text-sm text-foreground font-medium">
                          {profileData?.fullName || "—"}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              {editing && (
                <div
                  className="flex gap-3 pt-2"
                  data-ocid="profile-edit-actions"
                >
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
                    onClick={handleSave}
                    disabled={updateMutation.isPending}
                    data-ocid="btn-save-profile"
                  >
                    {updateMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Saving…
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-foreground hover:bg-white/10 bg-transparent gap-2"
                    onClick={handleCancel}
                    disabled={updateMutation.isPending}
                    data-ocid="btn-cancel-edit"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>

            {/* ── Internet Identity Note ── */}
            <div
              className="glass p-4 flex items-start gap-3"
              data-ocid="ii-note"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Secured by Internet Identity
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Your email and password are managed by Internet Identity — a
                  privacy-preserving, password-free authentication system. Only
                  your display name and full name can be edited here.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
