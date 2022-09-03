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
import Note from "../pages/private/Notes/Note";
import NewNote from "../pages/private/Notes/NewNote";
import EditNote from "../pages/private/Notes/EditNote";
import ConfigPage from "../pages/private/configPage";
import MindMap from "../pages/private/MindMap";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateArea />}>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:id" element={<Note />} />
            <Route path="/notes/newnote" element={<NewNote />} />
            <Route path="/notes/edit/:id" element={<EditNote />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/pomodorotime" element={<Pomodoro />} />
            <Route path="/configs" element={<ConfigPage />} />
            <Route path="/mindmap" element={<MindMap />} />
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
