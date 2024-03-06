import { RouteInfo } from "./RouteInfo.type.ts";
import HomePage from "../pages/HomePage/HomePage.tsx";
import MountainsListPage from "../pages/MountainsListPage/MountainsListPage.tsx";
import MountainsFormPage from "../pages/MountainsFormPage/MountainsFormPage.tsx";
import MountainsDetailsPage from "../pages/MountainsDetailsPage/MountainsDetailsPage.tsx";
import ArchitecturePage from "../pages/ArchitecturePage/ArchitecturePage.tsx";
import RequirementsPage from "../pages/RequirementsPage/RequirementsPage.tsx";

export const ROUTE_PATHS = {
  home: "/",
  mountainsList: "/mountains",
  mountainsCreate: "/mountains/create",
  mountainsDetails: "/mountains/:mountainId",
  mountainsEdit: "/mountains/:mountainId/edit",
  architecture: "/architecture",
  requirements: "/requirements",
} as const;

export const routesConfig: RouteInfo[] = [
  {
    path: ROUTE_PATHS.home,
    label: "Home",
    element: <HomePage />,
    showInNavigation: true,
  },
  {
    path: ROUTE_PATHS.mountainsList,
    label: "Mountains",
    element: <MountainsListPage />,
    showInNavigation: true,
  },
  {
    path: ROUTE_PATHS.architecture,
    label: "Architecture",
    element: <ArchitecturePage />,
    showInNavigation: true,
  },
  {
    path: ROUTE_PATHS.requirements,
    label: "Requirements",
    element: <RequirementsPage />,
    showInNavigation: true,
  },
  {
    path: ROUTE_PATHS.mountainsDetails,
    element: <MountainsDetailsPage />,
  },
  {
    path: ROUTE_PATHS.mountainsCreate,
    element: <MountainsFormPage />,
  },
  {
    path: ROUTE_PATHS.mountainsEdit,
    element: <MountainsFormPage />,
  },
];

export const navigationRoutes = routesConfig.filter(
  (route) => route.showInNavigation,
);
