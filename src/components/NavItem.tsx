import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { NavItemProps } from '../types'

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
