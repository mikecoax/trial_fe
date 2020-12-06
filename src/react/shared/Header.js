import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <img className="header--logo" src="/images/React.js_logo.png" width="30"/>

      <p className="header--title">COAX Software</p>

      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  )
};

export default Header;
