import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "IDK";
      case false:
        return <a href="/auth/google">Login with Google</a>;
      default:
        return <a href="/api/logout">LogO</a>;
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left-logo" style={{ margin: "0 10px" }}>
            EmailS
          </a>
          <ul className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
