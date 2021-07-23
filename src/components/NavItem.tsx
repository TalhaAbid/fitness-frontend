import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Button } from "@chakra-ui/react";
import "./NavBar.css";
type NavItemProps = {
  path: string;
  title: string;
};
export default function NavItem({ path, title }: NavItemProps) {
  console.log(path);
  return (
    <Link as={NavLink} to={path} paddingRight="1">
      <Button background="teal">{title}</Button>
    </Link>
  );
}
