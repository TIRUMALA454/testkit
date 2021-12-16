// imr - import React
// sfc - stateless functional component
import React from "react";
import { NavLink } from "react-router-dom";
import Product from "./product";
import Card from "./card";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/product">Products</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/addproduct">AddProducts</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="navbar-brand" to="/viewproducts">ViewProducts</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/card">card</NavLink>
          
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/addcard">addcard</NavLink>
              </li>
             
             
              
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/payment">payment</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#" to="/addpayment">addpayment</NavLink>
              </li>
              
             
              
             
             
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Nav;