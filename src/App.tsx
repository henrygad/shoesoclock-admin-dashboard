import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "./store";
import DashboardLayout from "./components/DashboardLayout";
import { fetchAdminInfo, status } from "./store/slices/userSlice";

const App = () => {
  const user = useAppSelector((state) => state.user);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    // Check whether user cookie session
    // in the backend is till valid on refresh.
    // This will return an object containing
    //  {email, username or id}, to prove user is till login from the backend
    appDispatch(status({ status: "UNAUTHENTICATED" }));    
  }, []);


  useEffect(() => {
    if (user.status !== "AUTHENTICATED") return;

      appDispatch(fetchAdminInfo({
        adminInfo: {
          name: "mrs admin",
          isAdmin: true,
          profilePhoto: "mrsadmin.png"
        }
      }));
    
  }, [user.status]);

  return (
    <div className="relative font-main size-full h-screen flex flex-col bg-white group/design-root overflow-hidden">
      <div className="layout-container flex-1 flex h-full grow flex-col">
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Routes>
            <Route
              path="/login"
              element={
                user.status === "UNAUTHENTICATED" ? (
                  <LoginPage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
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
              <Route
                path="/product-details/:id"
                element={<ProductDetailsPage />}
              />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>====
    </div>
  );
};

export default App;
