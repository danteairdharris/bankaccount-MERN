import React, { Component } from 'react';   
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
              <div class="container">
            <a class="navbar-brand" href="/">
              <img src="../docs/cash_icon_home.png" width="10" height="10" class="d-inline-block align-top" alt=""></img>
              Home
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Accounts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/new" className="nav-link">CreateAccount</Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>  
        )}
}