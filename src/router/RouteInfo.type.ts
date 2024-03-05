import { ReactNode } from "react";

export interface RouteInfo {
  path: string;
  element: ReactNode;

  label?: string;
  showInNavigation?: boolean;
}
