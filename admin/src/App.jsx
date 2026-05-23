import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";

import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignedIn>
            <Navigate to="/dashboard" replace />
          </SignedIn>
        }
      />

      <Route
        path="/login"
        element={
          <SignedOut>
            <LoginPage />
          </SignedOut>
        }
      />

      <Route
        element={
          <SignedIn>
            <DashboardLayout />
          </SignedIn>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
