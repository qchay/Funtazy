import React, { Component } from "react";
import logo from "../img/logo.svg";
import "../css/App.css";
import CredentialsModal from "./CredentialsModal";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>
              Welcome to{" "}
              <strong>
                <font color="red">Fun</font>
              </strong>
              <font color="pink">tazy</font>
            </h1>
          </div>
          <CredentialsModal />
        </header>
        {/* <div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.a16baaa7ad59918160631468521c3a4d.1562616053688.1562616053688.1562929111879.2&__hssc=57440181.7.1562929111879&__hsfp=489456929" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      </div>
    );
  }
}

export default Home;
