import React from "react";
import Link from 'next/link'
export default function Header() {
  const containerStyle = {
    backgroundColor: "white",
  }; 
  const logo1 = {
    width: "100%",
    margin:'0',
    height:'70px'
  };
  const toplog = {
    marginTop:'-20px',
  };
  
  return (
    <div className="">
      <header id="header" style={containerStyle}>
        <div id="topbar">
          <div className="container">
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className="logo float-left">
            <h1 className="text-light"  style={toplog}>
              <a href="#setheader" className="scrollto">
                <span>
                  {/* Take Over Summit */}
                <img style={logo1} src="takeover1.png"/>

                </span>
              </a>
            </h1>
            <a href="#header" className="scrollto">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

              </div>  
               <div className="col-md-6">
               <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#setheader">Home</a>
              </li>
              <li>
                <a href="#team">Guest</a>
              </li>
              <li>
                <a href="#contact">Register</a>
              </li>
              <li>
                <a href="#portfolio">Podcast</a>
              </li>
              {/* <li>
                <a href="#team">Guest</a>
              </li>
              <li className="drop-down">
                <a href="">Join</a>

                <ul>
                  <li>
                    <a href="#pricing">Pricing</a>
             
                    <a href="#testimonials">Testimonial</a>
                  </li>
                  <li>
                    <a href="#clients">Clients</a>
                  </li>
                  <li>
                    <a href="#faq">Freqently Asked Question</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#footers">Contact Us</a>
              </li> */}
            </ul>
          </nav>              </div>
          </div>
        
        
        </div>
      </header>
      {/* <section id="intro" className="clearfix">
                    <div className="container d-flex h-100">
                    <div className="row justify-content-center align-self-center">
                    <div className="col-md-6 intro-info order-md-first order-last">
                        <h2>Unified Innovation<br/> and Communication <span>Software!</span></h2>
                        <div>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                        
                        
                
                        <div className="col-md-6 intro-img order-md-last order-first">
                        <img src="assets/img/intro-img.svg" alt="" className="img-fluid"/>
                        </div>
                    </div>

                    </div>
                </section> */}

      <main id="main" />
    </div>
  );
}
