import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.svg";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <strong>
            <font color="red"> Fun</font>
          </strong>
          <font color="pink">tazy</font>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Playoff Calculator
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
