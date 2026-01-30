import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  // console.log("authstate", auth)
  const location = useLocation();

  if (auth?.loading) {
    return <LoadingSpinner />;
  }
  if (auth?.user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
