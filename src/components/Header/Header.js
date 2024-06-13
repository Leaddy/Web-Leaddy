import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projelerim
          </NavLink>
          <NavLink className="menu-item" to="about">
            Hakkımda
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Bana ulaş
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://www.instagram.com/kayabaris__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devam
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
