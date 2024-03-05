import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import MountainsListPage from "../pages/MountainsListPage/MountainsListPage.tsx";
import MountainsFormPage from "../pages/MountainsFormPage/MountainsFormPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function Root() {
  return useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <HomePage />, index: true },
        { path: "mountains", element: <MountainsListPage /> },
        { path: "mountains/create", element: <MountainsFormPage /> },
        { path: "mountains/:id/edit", element: <MountainsFormPage /> },
        { path: "*", element: <Navigate to={"/"} /> },
      ],
    },
  ]);
}

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
