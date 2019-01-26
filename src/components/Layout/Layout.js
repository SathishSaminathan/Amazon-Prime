import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* {this.props.children}
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Layout;
