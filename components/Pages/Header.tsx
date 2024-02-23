import React from "react";
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const containerStyle = {
    backgroundColor: "white",
  };
  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  const logo1 = {
    width: "100%",
    margin: '0',
    // height: isMobile ? '7vh' : '13vh', 
    };

  const toplog = {
    marginTop: '-20px',
  };

  return (
    <div className="">
      <header id="header" style={containerStyle}>
        <div id="topbar">
          <div className="container">
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100080508302832" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/takeover-thesummit-4036bb26a/" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/takeoversummit/?igshid=YmMyMTA2M2Y%3D" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo float-left">
                <h1 className="text-light" style={toplog}>
                  <a href="/#setheader" className="scrollto" aria-label="Go to Home">
                    <span>
                      <img src="logo11.png" alt="Take Over Summit Logo" style={logo1} />
                    </span>
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-md-6">
              <nav className="main-nav float-right d-none d-lg-block" role="navigation">
                <ul>
                  <li className="">
                    <a href="/#setheader" aria-label="Go to Home">Home</a>
                  </li>
                  <li>
                    <a href="/#team" aria-label="Go to Guest">Faculty </a>
                  </li>
                  <li>
                    <a href="/#register" aria-label="Go to Register">Register</a>
                  </li>
            
                  <li style={{ color:'white'}}className="drop-down"><a href="">Resources</a>
                                <ul>
                                <li><a href="/#podcast">Videos</a></li>
                                {/* <li><a href="/books">Books</a></li> */}
                                </ul>
                            </li> 
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
      </header>

      <main id="main" />
    </div>
  );
}
