import React, { useState } from "react";
import Logo from "../images/logo.png";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

const ListMenu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "FAQ",
    link: "/",
  },
  {
    id: 4,
    name: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => setNavbar(!navbar);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className={navbar ? "nav-menu active" : "nav-menu"}>
        {ListMenu.map((data) => (
          <li className="nav-item" key={data.id}>
            <a href={data.link}>{data.name}</a>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={handleNavbar}>
        {navbar ? (
          <FaTimes size={20} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={20} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
