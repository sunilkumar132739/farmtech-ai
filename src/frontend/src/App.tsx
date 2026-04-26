import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

const LandingPage = lazy(() => import("./pages/Landing"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const PresentationPage = lazy(() => import("./pages/Presentation"));
const CropDoctorPage = lazy(() => import("./pages/CropDoctor"));
const MarketplacePage = lazy(() => import("./pages/Marketplace"));
const IncomeTrackerPage = lazy(() => import("./pages/IncomeTracker"));
const FarmPlanPage = lazy(() => import("./pages/FarmPlan"));
const GovernmentSchemesPage = lazy(() => import("./pages/GovernmentSchemes"));
const LearnCommunityPage = lazy(() => import("./pages/LearnCommunity"));
const LoginPage = lazy(() => import("./pages/Login"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 2, retry: 1 },
  },
});

function PageLoader() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="space-y-4 w-64">
        <Skeleton className="h-8 w-full bg-white/10" />
        <Skeleton className="h-4 w-3/4 bg-white/10" />
        <Skeleton className="h-4 w-1/2 bg-white/10" />
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LandingPage />
    </Suspense>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    </Suspense>
  ),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    </Suspense>
  ),
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    </Suspense>
  ),
});

const presentationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/presentation",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PresentationPage />
    </Suspense>
  ),
});

const cropDoctorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/crop-doctor",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CropDoctorPage />
    </Suspense>
  ),
});

const marketplaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/marketplace",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MarketplacePage />
    </Suspense>
  ),
});

const incomeTrackerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/income-tracker",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <IncomeTrackerPage />
    </Suspense>
  ),
});

const farmPlanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/farm-plan",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FarmPlanPage />
    </Suspense>
  ),
});

const governmentSchemesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/schemes",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GovernmentSchemesPage />
    </Suspense>
  ),
});

const learnCommunityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LearnCommunityPage />
    </Suspense>
  ),
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProtectedRoute>
        <AdminDashboardPage />
      </ProtectedRoute>
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  dashboardRoute,
  profileRoute,
  settingsRoute,
  presentationRoute,
  cropDoctorRoute,
  marketplaceRoute,
  incomeTrackerRoute,
  farmPlanRoute,
  governmentSchemesRoute,
  learnCommunityRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
