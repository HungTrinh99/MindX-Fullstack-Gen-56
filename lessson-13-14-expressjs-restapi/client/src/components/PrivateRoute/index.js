import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { state } = useContext(AuthContext);
  const { isAuthenticated, loading } = state;

  if (loading) return <h1>Loading...</h1>;
  return isAuthenticated ? <Component /> : <Navigate to="login" />;
};

export default PrivateRoute;
