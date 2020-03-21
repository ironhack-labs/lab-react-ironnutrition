import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ text, link }) => {
  return <Link to={link}>{text}</Link>;
};

export default NavItem;
