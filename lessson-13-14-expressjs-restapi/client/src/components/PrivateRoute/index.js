import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated, loading } = state;
  if (loading) return <h1>Loading...</h1>;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
