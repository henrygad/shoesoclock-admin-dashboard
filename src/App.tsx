import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import {
  DashboardPage,
  SettingsPage,
  NotFoundPage,
  NotificationsPage,
  DiscountsPage,
  AddDiscountsPage,
  CustomersPage,
  ProductsPage,
  OrdersPage,
  OrderDetailsPage,
  AddProductPage,
  AnalyticsPage,
  ProductDetailsPage,
  LoginPage,
} from "./pages";
import { useAppSelector } from "./store";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  const user = useAppSelector((state) => state.user);

  return <Suspense fallback={<div>Lazy Loading...</div>}>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/add-discount" element={<AddDiscountsPage />} />
        <Route path="/order-details/:id" element={<OrderDetailsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>;
};

export default App;
