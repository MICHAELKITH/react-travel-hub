// eslint-disable-next-line
import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" width={70} />
          <h1>Travel-Hub</h1>
        </div>
      </nav>

    </div>

  );
}
export default Header;