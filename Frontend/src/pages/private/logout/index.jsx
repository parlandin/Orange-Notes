import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { removeToken } from "../../../services/authToken";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [, setAuthUser] = useAuth();
  const date = {
    isLoading: false,
    isUser: false,
    validToken: false,
    token: null,
    user: {
      username: null,
      picture: null,
      id: null,
      consecutive_days: null,
    },
  };
  useEffect(() => {
    removeToken();
    setAuthUser((prev) => {
      return { ...prev, ...date };
    });
  }, []);
  return <Navigate to="/login" replace={true} />;
};

export default Logout;
