import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="/home" element={<Home />}></Route>
    </Route>
    <Route path="*" element={<Navigate to="/login" />}></Route>
  </Routes>
);
