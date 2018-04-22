import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">

      <a className="navbar-brand" href = "/">
        Design Wizard
      </a>

    </div>
      <ul className = "nav navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Nav;
