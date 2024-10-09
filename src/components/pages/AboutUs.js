
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import circle from "../images/circle.png";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
// import img from "../images/img.png";
import invoicingshape1 from "../images/invoicing/invoicing-shape1.png";
import invoicingshape2 from "../images/invoicing/invoicing-shape2.png";
import invoicingshape3 from "../images/invoicing/invoicing-shape3.png";
import invoicingshape4 from "../images/invoicing/invoicing-shape4.png";
import invoicingcircle1 from "../images/invoicing/invoicing-circle1.png";
import invoicingmainpic from "../images/invoicing/invoicing-main-pic.png";
import invoicingcircle2 from "../images/invoicing/invoicing-circle2.png";
import map from "../images/map.png";
import partner1 from "../images/partners/partner1.png";
import partner2 from "../images/partners/partner2.png";
import partner3 from "../images/partners/partner3.png";
import partner4 from "../images/partners/partner4.png";
import partner5 from "../images/partners/partner5.png";
import partner6 from "../images/partners/partner6.png";
import partner7 from "../images/partners/partner7.png";
import partner8 from "../images/partners/partner8.png";
import partner9 from "../images/partners/partner9.png";
import mobileapp1 from "../images/mobile-app1.png";
import mobileapp2 from "../images/mobile-app2.png";
import mainmobile from "../images/main-mobile.png";
import team1 from "../images/team/team1.jpg";
import team2 from "../images/team/team2.jpg";
import "../css/custom.css";
import team3 from "../images/team/team3.jpg";
import aboutimg1 from "../images/about-img1.jpg";
import { Link } from 'react-router-dom';
import HamburgerDrawer from 'react-hamburger-drawer';

function AboutUs(){

    const [loader, setLoader] = useState(true);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setTimeout(function() {
            setLoader(false)
         }, 3000);
    });


    return (
        <>
        <div id="__next">
        <div id="navbar" class="navbar-area">
                <div class="luvion-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                        <div
                  id="marginCustom"
                  class="navbar-toggler navbar-toggler-right collapsed"
                >
                  <HamburgerDrawer>
                    <ul>
                      <li className="nav-item">
                        <Link to={"/"}>
                          <a className="nav-link top_padding" href="/about-us/">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/about"}>
                          <a className="nav-link" href="/about-us/">
                            About
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/feature"}>
                          <a className="nav-link" href="/#">
                            Features{" "}
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to={"/faq"}>
                          <a className="nav-link" href="/#">
                            Faq
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to={"/blog"}>
                          <a className="nav-link" href="/#">
                            Blog{" "}
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                                <Link to={localStorage.getItem('id')?localStorage.getItem('email')=="admin@gmail.com"?"/users":"/dashboard":"/signin"}>
                                    <a className="nav-link"href="/login/"><i class="flaticon-user"></i> {localStorage.getItem('id')?"Dashboard":"Login"}</a>
                                    </Link>
                                </li>
                    </ul>
                  </HamburgerDrawer>
                </div>
                            <a class="navbar-brand" href="/"><img src={`${logo}`} alt="logo" /><img src={`${blacklogo}`} alt="logo" /></a>
                            <button
                                class="navbar-toggler navbar-toggler-right collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                               
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                   
                                <li className="nav-item">
                                    <Link to={"/"}>
                                        <a className="nav-link top_padding" href="/about-us/">Home</a>
                                    </Link>
                                    </li>
                                  
                                  
                                   
                                    <li className="nav-item">
                                    <Link to={"/about"}>
                                        <a className="nav-link" href="/about-us/">About</a>
                                    </Link>
                                    </li>
                                    
                                   
                                    
                                   
                                    <li className="nav-item">
                                    <Link to={"/feature"}>
                                        <a className="nav-link" href="/#">Features </a>
                                        </Link>
                                    </li>
                               

                                   
                                    <li className="nav-item">
                                    <Link to={"/faq"}>
                                        <a className="nav-link" href="/#">Faq</a> 
                                        </Link>
                                    </li>
                                    


                                    
                                   
                                    
                                    <li className="nav-item">
                                    <Link to={"/blog"}>
                                        <a className="nav-link" href="/#">Blog </a>
                                        </Link>
                                    </li>
                                   


{/*                                    
                                    <li className="nav-item">
                                    <Link to={"/blog"}>
                                        <a className="nav-link" href="/contact/">Contact</a>
                                        </Link>
                                        </li> */}
                                   

                                </ul>
                                <div class="others-options">
                                <Link to={localStorage.getItem('id')?localStorage.getItem('email')=="admin@gmail.com"?"/users":"/dashboard":"/signin"}>
                                    <a class="login-btn" href="/login/"><i class="flaticon-user"></i> {localStorage.getItem('id')?"Dashboard":"Login"}</a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="page-title-area item-bg1">
                <div class="container">
                    <div class="page-title-content">
                        <h2>About Us</h2>
                        <p>The Haiper story</p>
                    </div>
                </div>
            </div>
            <div class="about-area ptb-70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-content">
                                <span>How we were founded</span>
                                <h2>Easy, fee-free banking for All</h2>
                                <p>Every month they moved their money the old way – which wasted their time and money. So they invented a beautifully simple workaround that became million-dollar business.</p>
                                <p>
                                 
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-image">
                                <img src={`${aboutimg1}`} alt="image" />
                                <div class="video-btn"><i class="fas fa-play"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="team-area pt-70 pb-50 bg-f7fafd">
                <div class="container">
                    <div class="section-title">
                        <h2>Meet our team</h2>
                        <div class="bar"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-team-member">
                                <div class="member-image">
                                    <img src={`${team1}`} alt="Team Image" />
                                    <ul class="social">
                                        <li>
                                            <a target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="member-content">
                                    <h3>Harry Kane</h3>
                                    <span>Founder &amp; Consultant</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-team-member">
                                <div class="member-image">
                                    <img src={`${team2}`} alt="Team Image" />
                                    <ul class="social">
                                        <li>
                                            <a target="_blank" ><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" ><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="member-content">
                                    <h3>Raheem Sterling</h3>
                                    <span>Head Manager</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-team-member">
                                <div class="member-image">
                                    <img src={`${team3}`} alt="Team Image" />
                                    <ul class="social">
                                        <li>
                                            <a target="_blank" ><i class="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" ><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a target="_blank" ><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="member-content">
                                    <h3>Kyle Walker</h3>
                                    <span>Marketing Specialist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="partner-area ptb-70">
                <div class="container">
                    <div class="section-title">
                        <h2>Our trusted partner</h2>
                        <div class="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​</p>
                    </div>
                    <div class="partner-inner">
                        <div class="row align-items-center">
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner1}`} alt="Partner" /><img src={`${partner1}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner2}`} alt="Partner" /><img src={`${partner2}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner3}`} alt="Partner" /><img src={`${partner3}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner4}`} alt="Partner" /><img src={`${partner4}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner5}`} alt="Partner" /><img src={`${partner5}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank"><img src={`${partner6}`} alt="Partner" /><img src={`${partner6}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner7}`} alt="Partner" /><img src={`${partner7}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner8}`} alt="Partner" /><img src={`${partner8}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner9}`} alt="Partner" /><img src={`${partner9}`} alt="Partner" /></a>
                            </div>
                            <div class="single-partner-item">
                                <a target="_blank" ><img src={`${partner7}`} alt="Partner" /><img src={`${partner7}`} alt="Partner" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="account-create-area">
                <div class="container account-create-content">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h2>Apply for an account in minutes</h2>
                            <p>Get your Haiper account today!</p>
                        </div>
                        <div class="col-lg-4">
                            <div class="create-account">
                            <Link to={localStorage.getItem('id')?localStorage.getItem('email')=="admin@gmail.com"?"/users":"/dashboard":"/signin"}>
                            <a class="btn btn-primary" href="/sign-up/">Get Your Account</a>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget">
                                <div class="logo">
                                    <a href="/"><img src={`${logo}`} alt="logo" /></a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p> */}
                                </div>
                                <ul class="social-links">
                                    <li>
                                        <a target="_blank" href="/#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/#"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul class="list">
                                    <li>
                                    <Link to={"/about"}>
                                        <a >About Us</a>
                                    </Link>
                                       </li>
                                    <li><a >Services</a></li>
                                    <li>
                                    <Link to={"/about"}>
                                        <a >Features</a>
                                    </Link>
                                        </li>
                                   
                                    <li>
                                    <Link to={"/blog"}>
                                        <a >Latest News</a>
                                   </Link>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget">
                                <h3>Support</h3>
                                <ul class="list">
                                    <li>
                                    <Link to={"/faq"}>
                                        <a >FAQ&#x27;s</a>
                                </Link>
                                        </li>
                                    <li><a >Privacy Policy</a></li>
                                    <li><a >Terms &amp; Condition</a></li>
                                    <li><a >Community</a></li>
                                    <li><a >Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget">
                                <h3>Address</h3>
                                <ul class="footer-contact-info">
                                    <li>
                                        <span class="mr-1">Location:</span>27 Division St, New York, <br />
                                        NY 10002, USA
                                    </li>
                                    <li><span class="mr-1">Email:</span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4b22252d240b232a223b2e3965282426">[email&#160;protected]</a></li>
                                    <li><span class="mr-1">Phone:</span>+ (321) 984 754</li>
                                    <li><span class="mr-1">Fax:</span>+1-212-9876543</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-area">
                        <p>
                            ©
                           2022
                            FirsttrustFinancials - All rights Reserved 
                        </p>
                    </div>
                </div>
            </footer>
            <div className={`preloader ${!loader&&"hidden"}`}>
                <div class="loader">
                    <div class="shadow"></div>
                    <div class="box"></div>
                </div>
            </div>
            <div class="back-to-top show-back-to-top"></div>
        </div>
        </>
    )
}


export default AboutUs;