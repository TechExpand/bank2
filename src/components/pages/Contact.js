
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import bgmap from "../images/bg-map.png";



function Contact (){

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
                            <a class="navbar-brand" href="/"><img src={`${logo}`}  alt="logo" /><img src={`${blacklogo}`}  alt="logo" /></a>
                            <button
                                class="navbar-toggler navbar-toggler-right collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="icon-bar top-bar"></span><span class="icon-bar middle-bar"></span><span class="icon-bar bottom-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact/#">Home <i class="fas fa-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link" href="/">Home demo one</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/index2/">Home demo two</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/index3/">Home demo three</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/index4/">Home demo four</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="/about-us/">About us</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact/#">Features <i class="fas fa-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link" href="/features-one/">Features style one</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/features-two/">Features style two</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact/#">Pages <i class="fas fa-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link" href="/about-us/">About us</a></li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/contact/#">New dropdown <i class="fas fa-chevron-down"></i></a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item"><a class="nav-link" href="/contact/#">2nd level</a></li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="/contact/#">Another dropdown <i class="fas fa-chevron-down"></i></a>
                                                        <ul class="dropdown-menu">
                                                            <li class="nav-item"><a class="nav-link" href="/contact/#">3rd level</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="/team/">Team</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/pricing/">Pricing</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/faq/">FAQ</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/sign-up/">Signup</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/login/">Login</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/404/">404 error</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="/pricing/">Pricing</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact/#">Blog <i class="fas fa-chevron-down"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="nav-link" href="/blog-one/">Blog grid</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/blog-two/">Blog right sidebar</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/single-blog/">Blog details</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a class="nav-link active" href="/contact/">Contact</a></li>
                                </ul>
                                <div class="others-options">
                                    <a class="login-btn" href="/login/"><i class="flaticon-user"></i> Login</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="page-title-area item-bg1">
                <div class="container">
                    <div class="page-title-content">
                        <h2>Contact</h2>
                        <p>If you have an idea, we would love to hear about it.</p>
                    </div>
                </div>
            </div>
            <div class="contact-area ptb-70">
                <div class="container">
                    <div class="section-title">
                        <h2>Drop us a message for any query</h2>
                        <div class="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-12">
                            <div class="contact-info">
                                <ul>
                                    <li>
                                        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                        <span>Address</span>27 Division St, New York, NY 10002, USA
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fas fa-envelope"></i></div>
                                        <span>Email</span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f79e9991989f969e879285b79f969e879285d994989a">[email&#160;protected]</a> <br />
                                        <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="a7c1c6dfe7cfc6ced7c2d589c4c8ca">[email&#160;protected]</a>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fas fa-phone-volume"></i></div>
                                        <span>Phone</span>+ (321) 984 754 <br />
                                        +1-212-9876543
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="contact-form">
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="name" placeholder="Name" class="form-control" value="" />
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="email" name="email" placeholder="Email" class="form-control" value="" />
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="number" placeholder="Phone" class="form-control" value="" />
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="subject" placeholder="Subject" class="form-control" value="" />
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group">
                                                <textarea name="text" cols="30" rows="5" placeholder="Write your message..." class="form-control"></textarea>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-sm-12"><button type="submit" class="btn btn-primary">Send Message</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-map"><img src={`${bgmap}`}  alt="image" /></div>
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
                                    <a href="/"><img src={`${logo}`}  alt="logo" /></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                </div>
                                <ul class="social-links">
                                    <li>
                                        <a target="_blank" href="/contact/#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/contact/#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/contact/#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="/contact/#"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul class="list">
                                    <li><a href="/about-us/">About Us</a></li>
                                    <li><a href="/contact/#">Services</a></li>
                                    <li><a href="/features-one/">Features</a></li>
                                    <li><a href="/pricing/">Our Pricing</a></li>
                                    <li><a href="/blog-one/">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="single-footer-widget">
                                <h3>Support</h3>
                                <ul class="list">
                                    <li><a href="/faq/">FAQ&#x27;s</a></li>
                                    <li><a href="/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="/terms-condition/">Terms &amp; Condition</a></li>
                                    <li><a href="/contact/#">Community</a></li>
                                    <li><a href="/contact/">Contact Us</a></li>
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
                                    <li><span class="mr-1">Email:</span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="51383f373e113930382134237f323e3c">[email&#160;protected]</a></li>
                                    <li><span class="mr-1">Phone:</span>+ (321) 984 754</li>
                                    <li><span class="mr-1">Fax:</span>+1-212-9876543</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-area">
                        <p>
                            ©
                           2021
                            Haiper - All rights Reserved <a href="http://envytheme.com/" target="_blank">EnvyTheme.com</a>
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


export default Contact;