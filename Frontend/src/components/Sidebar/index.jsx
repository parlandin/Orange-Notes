import React, { useState } from "react";
import S from "./sidebar.style";
import { NavLink } from "react-router-dom";
import { FaCog, FaHome, FaTasks, FaFileAlt, FaClock } from "react-icons/fa";

import { RiMindMap } from "react-icons/ri";

const menuLlist = [
  {
    path: "/",
    name: "Inico",
    icon: <FaHome size="100%" />,
  },
  {
    path: "/notes",
    name: "Anotações",
    icon: <FaFileAlt size="100%" />,
  },
  {
    path: "/tasks",
    name: "Tarefas",
    icon: <FaTasks size="100%" />,
  },
  {
    path: "/mindmap",
    name: "Mapa mental",
    icon: <RiMindMap size="100%" />,
  },
  {
    path: "/pomodorotime",
    name: "Pomodoro Timer",
    icon: <FaClock size="100%" />,
  },
  {
    path: "/configs",
    name: "Configurações",
    icon: <FaCog size="100%" />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <S.Menu isOpen={isOpen}>
        {menuLlist.map((item) => (
          <S.Item isOpen={isOpen} key={item.name}>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to={item.path}
            >
              <S.Icon>{item.icon}</S.Icon>
              <S.Text isOpen={isOpen}>{item.name}</S.Text>
            </NavLink>
          </S.Item>
        ))}
      </S.Menu>
    </S.Container>
  );
};

export default Sidebar;
