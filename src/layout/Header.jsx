import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          Logo
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
