import { lazy } from "react";

const DashboardPage = lazy(() => import("./DashboardPage"));
const SettingsPage = lazy(() => import("./SettingsPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const NotificationsPage = lazy(() => import("./NotificationsPage"));
const DiscountsPage = lazy(() => import("./DiscountsPage"));
const AddDiscountsPage = lazy(() => import("./AddDiscountsPage"));
const ProductImagePage = lazy(() => import("./ProductImagesPage"));
const CustomersPage = lazy(() => import("./CustomersPage"));
const ProductsPage = lazy(() => import("./ProductsPage"));
const OrdersPage = lazy(() => import("./OrdersPage"));
const OrderDetailsPage = lazy(() => import("./OrderDetailsPage"));
const ProductDetailsPage = lazy(() => import("./ProductDetailsPage"));
const AddProductPage = lazy(() => import("./AddProductPage"));
const AnalyticsPage = lazy(() => import("./AnalyticsPage"));
const LoginPage = lazy(() => import("./LoginPage"));

export {
  DashboardPage,
  SettingsPage,
  NotFoundPage,
  NotificationsPage,
  DiscountsPage,
  AddDiscountsPage,
  ProductImagePage,
  CustomersPage,
  ProductsPage,
  OrdersPage,
  OrderDetailsPage,
  AddProductPage,
  AnalyticsPage,
  ProductDetailsPage,
  LoginPage
};
