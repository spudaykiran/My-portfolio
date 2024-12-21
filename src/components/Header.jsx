import React from "react";
import NavBar from "./NavBar";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>
          <Link to="/" style={{ color: "white" }}>
            Portfolio
          </Link>
        </h1>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
