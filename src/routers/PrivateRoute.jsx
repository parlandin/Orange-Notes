import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isUser = false;

  return isUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
