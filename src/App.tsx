import { Route, Routes, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import {
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
} from "./pages";
import { login, logout } from "./store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const navigate = useNavigate();

  return <div className="">
    <header>
      global  header
      <button
        onClick={() => { navigate("/login"); }}
      >go to login</button>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/discounts" element={<DiscountsPage />} />
          <Route path="/add-discounts" element={<AddDiscountsPage />} />
          <Route path="/product-images" element={<ProductImagePage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order-details/:id" element={<OrderDetailsPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
    <footer>
      global  footer
    </footer>
  </div>;

  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <Routes>
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/" element={<DashboardPage />} />
  //       <Route path="/notifications" element={<NotificationsPage />} />
  //       <Route path="/discounts" element={<DiscountsPage />} />
  //       <Route path="/add-discounts" element={<AddDiscountsPage />} />
  //       <Route path="/product-images" element={<ProductImagePage />} />
  //       <Route path="/customers" element={<CustomersPage />} />
  //       <Route path="/products" element={<ProductsPage />} />
  //       <Route path="/orders" element={<OrdersPage />} />
  //       <Route path="/order-details/:id" element={<OrderDetailsPage />} />
  //       <Route path="/add-product" element={<AddProductPage />} />
  //       <Route path="/analytics" element={<AnalyticsPage />} />
  //       <Route path="/product-details/:id" element={<ProductDetailsPage />} />
  //       <Route path="/settings" element={<SettingsPage />} />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </Suspense>
  // );

};

export default App;
