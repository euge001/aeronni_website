import React, { Component } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Footer extends Component {
  render() {
    return (
      <div className="bottomNav">
        <div className="divcenter">
          <Link className="bottomNavLink" to="/">
            Main
          </Link>

          <Link className="bottomNavLink" to="/Aerial-Application-Robot">
            Aerial Application Robot
          </Link>

          <Link className="bottomNavLink" to="/Manned-Drone-System">
            Manned Drone System
          </Link>

          <Link className="bottomNavLink" to="/Contacts">
            Contacts
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
