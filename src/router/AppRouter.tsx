import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import { routesConfig } from "./routes.config.tsx";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function Root() {
  return useRoutes(routesConfig);
}

export default function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
