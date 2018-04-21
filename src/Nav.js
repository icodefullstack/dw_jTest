import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Home from './Home';
import Description from './Description';

const Nav = () => (
  <Router>
<div>
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
        <li>
          <Link to="/about">Description</Link>
        </li>
      </ul>
    </div>
  </nav>

  <Route exact path="/" component={Home} />
  <Route path="/about" component={Description} />

</div>
  </Router>
);






export default Nav;
