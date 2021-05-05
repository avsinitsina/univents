import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.svg";
import user_pic from "./user.svg";
import settings_pic from "./settings.svg";
import login_pic from "./login.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  function authorize() {
    console.log("Вы авторизованы");
    setIsAuthorized(true);
  }
  function logout() {
    console.log("Вы вышли");
    setIsAuthorized(false);
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <img
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top Header__logo"
            alt="Univents Logo"
          />{" "}
          <h1 className="Header__title">Univents</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="Header__pages">
            <Nav.Link href="#events" className="Header__page">
              Мероприятия
            </Nav.Link>
            <Nav.Link href="#communities" className="Header__page">
              Сообщества
            </Nav.Link>
            <Nav.Link href="#teams" className="Header__page">
              Команды
            </Nav.Link>
            <Nav.Link href="#members" className="Header__page">
              Участники
            </Nav.Link>
          </Nav>
          <div className="Header__wrapper">
            {isAuthorized === false ? (
              <Nav className="Header__settings">
                <Nav.Link onClick={authorize}>
                  <img
                    src={login_pic}
                    width="37"
                    height="37"
                    className="d-inline-block align-top"
                    alt="Login Pic"
                  />
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="Header__settings">
                <Nav.Link href="#">
                  <img
                    src={user_pic}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="User Pic"
                  />
                </Nav.Link>
                <NavDropdown
                  title={
                    <div className="">
                      <img
                        src={settings_pic}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Settings Pic"
                      />
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={logout}>Выйти</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
