import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10">
      <NavLink to="/">
        {(e) => {
          return {
            color: e.isActive ? "tomato" : "black",
            fontWeight: e.isActive ? "bold" : "normal",
          };
        }}
        <span>Home</span>
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "black",
            fontWeight: e.isActive ? "bold" : "normal",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-500" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
