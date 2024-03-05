import { RouteInfo } from "./RouteInfo.type.ts";
import HomePage from "../pages/HomePage/HomePage.tsx";
import MountainsListPage from "../pages/MountainsListPage/MountainsListPage.tsx";
import MountainsFormPage from "../pages/MountainsFormPage/MountainsFormPage.tsx";

export const ROUTE_PATHS = {
  home: "/",
  mountainsList: "/mountains",
  mountainsCreate: "/mountains/create",
  mountainsEdit: "/mountains/:mountainId/edit",
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
