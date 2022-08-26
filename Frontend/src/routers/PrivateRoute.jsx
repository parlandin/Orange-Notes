import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isUser = true;

  return isUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
