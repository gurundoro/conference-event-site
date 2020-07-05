import React from 'react'
import logo from '../../js-logo.png'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <NavbarContainer>
        <nav className="navbar navbar-expand-lg navbar-light px-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/speakers-list">
                  Speakers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </NavbarContainer>
    );
  };
  
  export default Navbar;
  
  //NAVBAR CONTAINER
  const NavbarContainer = styled.div`
    .nav-link {
      color: #fff !important;
      cursor: pointer;
      &:hover {
        // background: #0ea;
        background: var(--tomato);
        color: #fff;
      }
    }
    .active {
      // background: #0ea;
      // background: #ee4540;
      background: var(--dark-red);
  
      color: #fff !important;
    }
  
    nav {
      // background: #189292;
      // background: #510a32;
      background: var(--yummy-burgundy);
    }
  
    img {
      width: 2.5rem;
      border-radius: 50%;
    }
  `;
  