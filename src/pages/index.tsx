import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const SettingsPage = lazy(() => import("./SettingsPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

export {
  HomePage,
  SettingsPage,
  NotFoundPage  
};
