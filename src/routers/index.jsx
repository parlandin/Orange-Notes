import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/public/Login";
import NewAccount from "../pages/public/NewAccount";
import NotFound from "../pages/public/NotFound";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/private/Home";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/newaccount" element={<NewAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
