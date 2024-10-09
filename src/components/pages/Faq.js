
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import faq from "../images/faq.png";
import { Link } from 'react-router-dom';
import HamburgerDrawer from 'react-hamburger-drawer';
import "../css/custom.css";

function Faq (){

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
                                   


                                   
                                    {/* <li className="nav-item">
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
                        <h2>FAQ</h2>
                        <p>Frequently Asked Questions</p>
                    </div>
                </div>
            </div>
            <div class="faq-area ptb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12">
                            <div class="faq-content">
                                <h2>Frequently Asked Questions</h2>
                                <div class="bar"></div>
                                <p>Find answers to frequently asked questions around all our products, services and more</p>
                               
                                <div class="faq-image"><img src={`${faq}`} alt="image" /></div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="faq-accordion">
                                <div data-accordion-component="Accordion" class="accordion">
                                    <div data-accordion-component="AccordionItem" class="accordion__item">
                                        <div data-accordion-component="AccordionItemHeading" role="heading" class="accordion__heading" aria-level="3">
                                            <div
                                                class="accordion__button"
                                                id="accordion__heading-a"
                                                aria-disabled="false"
                                                aria-expanded="true"
                                                aria-controls="accordion__panel-a"
                                                role="button"
                                                tabindex="0"
                                                data-accordion-component="AccordionItemButton"
                                            >
                                               How can I open this account?
                                            </div>
                                        </div>
                                        <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region" aria-labelledby="accordion__heading-a" id="accordion__panel-a">
                                            <p class="accordion-content">
                                            Simply create an account with us by signing up.
                                            </p>
                                        </div>
                                    </div>
                                    <div data-accordion-component="AccordionItem" class="accordion__item">
                                        <div data-accordion-component="AccordionItemHeading" role="heading" class="accordion__heading" aria-level="3">
                                            <div
                                                class="accordion__button"
                                                id="accordion__heading-b"
                                                aria-disabled="false"
                                                aria-expanded="false"
                                                aria-controls="accordion__panel-b"
                                                role="button"
                                                tabindex="0"
                                                data-accordion-component="AccordionItemButton"
                                            >
                                               Can I make transactions on my account?
                                            </div>
                                        </div>
                                        <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region" aria-labelledby="accordion__heading-b" id="accordion__panel-b" hidden="">
                                            <p class="accordion-content">
                                                Yes, you can.
                                            </p>
                                        </div>
                                    </div>
                                    <div data-accordion-component="AccordionItem" class="accordion__item">
                                        <div data-accordion-component="AccordionItemHeading" role="heading" class="accordion__heading" aria-level="3">
                                            <div
                                                class="accordion__button"
                                                id="accordion__heading-c"
                                                aria-disabled="false"
                                                aria-expanded="false"
                                                aria-controls="accordion__panel-c"
                                                role="button"
                                                tabindex="0"
                                                data-accordion-component="AccordionItemButton"
                                            >
                                               Are references required for an Account?
                                            </div>
                                        </div>
                                        <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region" aria-labelledby="accordion__heading-c" id="accordion__panel-c" hidden="">
                                            <p class="accordion-content">
                                            No references are required to open this account.
                                            </p>
                                        </div>
                                    </div>
                                    <div data-accordion-component="AccordionItem" class="accordion__item">
                                        <div data-accordion-component="AccordionItemHeading" role="heading" class="accordion__heading" aria-level="3">
                                            <div
                                                class="accordion__button"
                                                id="accordion__heading-d"
                                                aria-disabled="false"
                                                aria-expanded="false"
                                                aria-controls="accordion__panel-d"
                                                role="button"
                                                tabindex="0"
                                                data-accordion-component="AccordionItemButton"
                                            >
                                                How much do I need to open this account?
                                            </div>
                                        </div>
                                        <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region" aria-labelledby="accordion__heading-d" id="accordion__panel-d" hidden="">
                                            <p class="accordion-content">
                                               You Don’t need any amount to open an account
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div data-accordion-component="AccordionItem" class="accordion__item">
                                        <div data-accordion-component="AccordionItemHeading" role="heading" class="accordion__heading" aria-level="3">
                                            <div
                                                class="accordion__button"
                                                id="accordion__heading-f"
                                                aria-disabled="false"
                                                aria-expanded="false"
                                                aria-controls="accordion__panel-f"
                                                role="button"
                                                tabindex="0"
                                                data-accordion-component="AccordionItemButton"
                                            >
                                                How To Get Start With Us?
                                            </div>
                                        </div>
                                        <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region" aria-labelledby="accordion__heading-f" id="accordion__panel-f" hidden="">
                                            <p class="accordion-content">
                                               Simply by signing up.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="faq-contact">
                        <div class="section-title">
                            <h2>Do You Have Any Questions</h2>
                            <div class="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class="faq-contact-form">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group"><input type="text" name="name" class="form-control" required="" data-error="Please enter your name" placeholder="Name" value="" /></div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group"><input type="email" name="email" class="form-control" required="" data-error="Please enter your email" placeholder="Email" value="" /></div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group"><input type="text" name="phone" class="form-control" placeholder="Phone" value="" /></div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group"><input type="text" name="subject" class="form-control" placeholder="Subject" value="" /></div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group"><textarea name="message" class="form-control" id="message" cols="30" rows="6" required="" data-error="Write your message" placeholder="Your Message"></textarea></div>
                                    </div>
                                    <div class="col-lg-12 col-md-12"><button type="submit" class="btn btn-primary">Send Message</button></div>
                                </div>
                            </form>
                        </div>
                    </div> */}
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


export default Faq;