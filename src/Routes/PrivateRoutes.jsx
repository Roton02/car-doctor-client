import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-screen my-auto items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
