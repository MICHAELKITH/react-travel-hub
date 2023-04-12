import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" width={60} />
          <h1>Travel-Hub</h1>
          <div className="routeLinks">
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
            <NavLink to="/dragons">Dragons</NavLink>
            <NavLink to="/myProfile">My Profile</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
export default Header;
