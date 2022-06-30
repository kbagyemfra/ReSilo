import React from "react";
import { NavLink } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Form,
//   FormControl,
//   NavDropdown,
//   Button,
// } from "react-bootstrap";

const Header = () => {
  return (
    <nav className="navbar">
      <h1>The Bible</h1>
      <div className="links">
        <NavLink to="/" className="home-button">
          Home
        </NavLink>
        <NavLink
          to="/old"
          // style={{
          //   color: "white",
          //   backgroundColor: "",
          //   borderRadius: "8px",
          // }}
          className="old-testament"
        >
          Old Testament
        </NavLink>
        <NavLink
          to="/new"
          // style={{
          //   color: "white",
          //   backgroundColor: "#f1356d",
          //   borderRadius: "8px",
          // }}
          className="new-testament"
        >
          New Testament
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
