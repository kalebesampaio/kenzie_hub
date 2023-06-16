import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="*" element={<Navigate to="/login" />}></Route>
  </Routes>
);
