import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Logo" />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>

                  {/* Services with 6 sub-items */}
                  <li className="nav-item submenu">
                    <Link className="nav-link" to="#">Services</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" to="/services/service1">Service 1</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/service2">Service 2</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/service3">Service 3</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/service4">Service 4</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/service5">Service 5</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/services/service6">Service 6</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn d-inline-flex">
                <Link to="/contact" className="btn-default">Contact Us</Link>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}

            <div className="navbar-toggle"></div>
          </div>
        </nav>

        <div className="responsive-menu"></div>
      </div>
    </header>

  );
}

export default Header;
