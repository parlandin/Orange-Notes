import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/public/Login";
import NewAccount from "../pages/public/NewAccount";
import NotFound from "../pages/public/NotFound";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/private/Home";
import SucessCreateAccount from "../pages/public/SucessCreateAccount";
import PrivateArea from "../components/PrivateArea";
import Notes from "../pages/private/Notes";
import Logout from "../pages/private/Logout";
import Pomodoro from "../pages/private/Pomodoro";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateArea />}>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/pomodorotime" element={<Pomodoro />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/newaccount" element={<NewAccount />} />
        <Route path="/sucesscreateAccount" element={<SucessCreateAccount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
