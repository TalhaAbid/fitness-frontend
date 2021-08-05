import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Button } from "@chakra-ui/react";
import "./NavBar.css";
type NavItemProps = {
  path: string;
  title: string;
};

export default function NavItem({ path, title }: NavItemProps) {
  console.log(typeof NavLink);
  return (
    <li className="nav-item">
      <NavLink className="px-3 py-2
              flex items-center text-xs
              uppercase font-bold leading-snug
              text-white hover:opacity-75" to={path}>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}
