import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/Login" state={location} />;
  }

  return <Outlet />;
};
