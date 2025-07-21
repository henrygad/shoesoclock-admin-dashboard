import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { SettingsPage, HomePage, NotFoundPage } from "./pages";
import { login, logout } from "./store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user);
  
  console.log(user);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
