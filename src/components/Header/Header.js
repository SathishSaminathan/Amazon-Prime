import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header_style">
        <ul className="home_community">
          <li>
            <a href="/">
              <img src={logo} />
            </a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Community</a>
          </li>
        </ul>
        <ul className="login_signup">
          {/* <li>
            <a>Login</a>
          </li> */}
          <li>
            <div className="fa fa-user tooltip">
              <span class="tooltiptext">Tooltip text</span>
            </div>
          </li>
          <li>
            <span className="fa fa-search" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
