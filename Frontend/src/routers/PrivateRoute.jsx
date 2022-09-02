import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const [authUser] = useAuth();
  const { isLoading, isUser } = authUser;

  if (isLoading) return <Loading />;

  return isUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
