import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../stylesheets/header-footer.css";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;
  return (
    <div className="header">
      {showHeader ? (
        <RiCloseLine
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenu3Fill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}
      <ul className={`${showHeader ? "show-menu" : "hide-menu"} n-box1`}>
        <li>
          <Link className={`${path === '/' && 'active'}`} to='/'>Home</Link>
        </li>
        <li>
          <Link className={`${path === '/project' && 'active'}`} to='/project'>Projects</Link>
        </li>
        <li>
          <Link className={`${path === '/courses' && 'active'}`} to='/courses'>Courses</Link>
        </li>
        <li>
          <Link className={`${path === '/contact' && 'active'}`} to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
