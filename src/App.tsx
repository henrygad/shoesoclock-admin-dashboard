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
import { getAdminInfo} from "./store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./store";
import { HeaderNav, SideNav } from "./sections";

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user.isLogin) {
      dispatch(
        getAdminInfo({
          adminInfo: {
            name: "henry",
            profilePhoto: "profilephoto.png",
            isAdmin: true,
          },
        })
      );
    }
  }, [user.isLogin]);

  return (
    <div className="relative font-main size-full h-screen flex flex-col bg-white group/design-root overflow-hidden">
      <div className="layout-container flex-1 flex h-full grow flex-col">
        {/* Header section*/}
        {user.isLogin && (
          <header className="border-b border-solid border-b-[#f4f0f0] px-10 py-3">
            {/* Header navigation for logo , notification btn, admin profile photo */}
            <nav className="flex-1 flex items-center justify-between whitespace-nowrap">
              <HeaderNav />
            </nav>
          </header>
        )}
        {/* Main content section */}
        <main className="flex-1 flex overflow-hidden">
          {/* Side navigation section */}
          {user.isLogin && (
            <nav className="flex justify-start w-60 md:w-72 overflow-y-auto scroll-smooth overflow-x-hidden">
              <SideNav />
            </nav>
          )}
          {/* The section that hold each page content */}
          <div className="flex-1 overflow-y-auto scroll-smooth overflow-x-hidden">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route
                  path="/"
                  element={
                    user.isLogin ? <DashboardPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/login"
                  element={!user.isLogin ? <LoginPage /> : <Navigate to="/" />}
                />
                <Route
                  path="/products"
                  element={
                    user.isLogin ? <ProductsPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/orders"
                  element={
                    user.isLogin ? <OrdersPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/add-product"
                  element={
                    user.isLogin ? <AddProductPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/customers"
                  element={
                    user.isLogin ? <CustomersPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    user.isLogin ? (
                      <NotificationsPage />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/discounts"
                  element={
                    user.isLogin ? <DiscountsPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/add-discount"
                  element={
                    user.isLogin ? (
                      <AddDiscountsPage />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/order-details/:id"
                  element={
                    user.isLogin ? (
                      <OrderDetailsPage />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/analytics"
                  element={
                    user.isLogin ? <AnalyticsPage /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/product-details/:id"
                  element={
                    user.isLogin ? (
                      <ProductDetailsPage />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
                <Route
                  path="/settings"
                  element={
                    user.isLogin ? <SettingsPage /> : <Navigate to="/login" />
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
        </main>
        {/* footer section */}
        {user.isLogin && (
          <footer className="h-4">
            <span className="block text-center">Footer</span>
          </footer>
        )}
      </div>
    </div>
  );
};

export default App;
