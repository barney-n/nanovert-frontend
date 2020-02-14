import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { useHistory, Link } from "react-router-dom";

const LandingNavbar = ({}) => (
  <Navbar dark sticky="top" style={{ backgroundColor: "black" }}>
    <NavbarBrand
      tag={Link}
      to={"/"}
      className="mr-auto"
      style={{ fontSize: "30px" }}
    >
      nanovert
    </NavbarBrand>
    <NavLink tag={Link} to={"/vendor-home"} style={{ color: "white" }}>
      nanovert Vendor
    </NavLink>
  </Navbar>
);
export default LandingNavbar;
