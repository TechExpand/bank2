import "../css/8e765d14296b14b53f23.css";
import React, { useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { getBlogPost } from "../Service/Network";
import "../css/custom.css";
import HamburgerDrawer from "react-hamburger-drawer";

function HomePageApp() {
  const [loader, setLoader] = useState(true);

  const [blogs, setBlog] = useState([]);

  let handleBlog = (value) => {
    setBlog(value);
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 3000);

    getBlogPost(handleBlog);
  }, []);

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
                <a class="navbar-brand" href="/">
                  <img src={`${logo}`} alt="logo" />
                  <img src={`${blacklogo}`} alt="logo" />
                </a>

                <div class="navbar-toggler navbar-toggler-right collapsed"></div>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav">
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

                    {/* <li className="nav-item">
                                    <Link to={"/blog"}>
                                        <a className="nav-link" href="/contact/">Contact</a>
                                        </Link>
                                        </li> */}
                  </ul>
                  <div class="others-options">
                    <Link
                      to={
                        localStorage.getItem("id")
                          ? localStorage.getItem("email") == "admin@gmail.com"
                            ? "/users"
                            : "/dashboard"
                          : "/signin"
                      }
                    >
                      <a class="login-btn" href="/login/">
                        <i class="flaticon-user"></i>{" "}
                        {localStorage.getItem("id") ? "Dashboard" : "Login"}
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="main-banner">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="main-banner-content">
                  <h1>Easy free Banking Experience</h1>
                  <p>
                    Get the financial tools and insights to build, and grow your
                    business.
                  </p>

                  <Link
                    to={
                      localStorage.getItem("id")
                        ? localStorage.getItem("email") == "admin@gmail.com"
                          ? "/users"
                          : "/dashboard"
                        : "/signin"
                    }
                  >
                    <a class="btn btn-primary">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-boxes-area">
          <div class="container">
            <div class="featured-boxes-inner">
              <div class="row m-0">
                <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div class="single-featured-box">
                    <div class="icon color-fb7756">
                      <i class="flaticon-piggy-bank"></i>
                    </div>
                    <h3>Transparent</h3>
                    <p>
                      We are commited in serving her client with top notch
                      services.
                    </p>
                    <a class="read-more-btn" href="/features-one/">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div class="single-featured-box">
                    <div class="icon color-facd60">
                      <i class="flaticon-data-encryption"></i>
                    </div>
                    <h3>Fully Encrypted</h3>
                    <p>
                      Banking with us without fear. our service is fully Encrypted
                      and secured.
                    </p>
                    <a class="read-more-btn" href="/features-one/">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div class="single-featured-box">
                    <div class="icon color-1ac0c6">
                      <i class="flaticon-wallet"></i>
                    </div>
                    <h3>Instant Cashout</h3>
                    <p>Withdraw with no delay, Bank with freedom.</p>
                    <a class="read-more-btn" href="/features-one/">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div class="single-featured-box">
                    <div class="icon">
                      <i class="flaticon-shield"></i>
                    </div>
                    <h3>Safe and Secure</h3>
                    <p>
                      Secured, with high strong securities in financial
                      management.
                    </p>
                    <a class="read-more-btn" href="/features-one/">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="currency-rates-area pt-70">
          <div class="container">
            <div class="section-title">
              <h2>Currency Rates</h2>
              <div class="bar"></div>
              {/* <p>Latest Currency Rates Based on <strong>EUR</strong></p> */}
            </div>
            {/* <div class="table-responsive currency-rates-table">
                        <table class="table">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div> */}
            {/* <div class="row currency-rates-info">
                        <div class="col-lg-6 col-md-6 col-6"><a href="https://exchangeratesapi.io/" target="_blank">Source</a></div>
                        <div class="col-lg-6 col-md-6 col-6 text-right"><p>Date:</p></div>
                    </div> */}
          </div>
        </section>
        <div class="services-area ptb-70">
          <div class="container-fluid p-0">
            <div class="overview-box">
              <div class="overview-content">
                <div class="content left-content">
                  <h2>
                    Online Bank for Businesses, entrepreneurs, sole traders and
                    families
                  </h2>
                  <div class="bar"></div>
                  <p>
                    Stay one step ahead of your finances with our online bank,
                    our web service specially designed for you.
                  </p>
                  <ul class="services-list">
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Free plan available
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Full data privacy
                        compliance
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>100% transparent
                        costs
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Commitment-free
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Real-time spending
                        overview
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Debit Mastercard
                        included
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overview-image">
                <div class="image">
                  <img src={`${feature1}`} alt="image" />
                  <div class="circle-img">
                    <img src={`${circle}`} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services-area ptb-70 bg-f7fafd">
          <div class="container-fluid p-0">
            <div class="overview-box">
              <div class="overview-image">
                <div class="image">
                  <img src={`${feature2}`} alt="image" />
                  <div class="circle-img">
                    <img src={`${circle}`} alt="image" />
                  </div>
                </div>
              </div>
              <div class="overview-content">
                <div class="content">
                  <h2>Small to medium-sized businesses</h2>
                  <div class="bar"></div>
                  <p>
                    From saving your hard-earned money, running a hassle-free
                    business account, to carrying out seamless international
                    transfers and much more, our accounts varieties have got you
                    covered always.
                  </p>
                  <ul class="services-list">
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Easy transfers
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Deposit checks
                        instantly
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>A powerful open API
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Coverage around the
                        world
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Business without
                        borders
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Affiliates and
                        partnerships
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="services-area ptb-70">
          <div class="container-fluid p-0">
            <div class="overview-box">
              <div class="overview-content">
                <div class="content left-content">
                  <h2>Large or enterprise level businesses</h2>
                  <div class="bar"></div>
                  <p>
                    We offer you a variety of savings accounts that suit every
                    stage of your life, with unique benefits designed to match
                    your personal banking needs.
                  </p>
                  <ul class="services-list">
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Corporate Cards
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>International
                        Payments
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Automated accounting
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Request Features
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Premium Support
                      </span>
                    </li>
                    <li>
                      <span>
                        <i class="flaticon-check-mark"></i>Direct Debit
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="overview-image">
                <div class="image">
                  <img src={`${feature3}`} alt="image" />
                  <div class="circle-img">
                    <img src={`${circle}`} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="comparisons-area ptb-70 bg-f7fafd">
          <div class="container">
            <div class="section-title">
              <h2>Compare us with others</h2>
              <div class="bar"></div>
              <p>
                We are committed to growing our people, minimizing our
                environmental impacts, meeting the needs of our customers.
              </p>
            </div>
            <div class="comparisons-table table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Packages</th>
                    <th scope="col">Freelancer</th>
                    <th scope="col">Householder</th>
                    <th scope="col">Business Man</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Control payout timing</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Transparent payouts</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Automate evidence submission</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Collaboration notes</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Deposit tagging</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Technical support over IRC</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>24×7 support</td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                    <td>
                      <i class="flaticon-check-mark"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section class="features-area ptb-70 bg-f6f4f8">
          <div class="container">
            <div class="section-title">
              <h2>Our features</h2>
              <div class="bar"></div>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon">
                    <i class="flaticon-settings"></i>
                  </div>
                  <h3>Incredible infrastructure</h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon bg-f78acb">
                    <i class="flaticon-envelope-of-white-paper"></i>
                  </div>
                  <h3>Fast Delivery</h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon bg-cdf1d8">
                    <i class="flaticon-menu"></i>
                  </div>
                  <h3>Simple dashboard</h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon bg-c679e3">
                    <i class="flaticon-info"></i>
                  </div>
                  <h3>Information retrieval</h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon bg-eb6b3d">
                    <i class="flaticon-cursor"></i>
                  </div>
                  <h3>Drag and drop functionality</h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="single-features-box">
                  <div class="icon">
                    <i class="flaticon-alarm"></i>
                  </div>
                  <h3>Deadline reminders</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="invoicing-area ptb-70">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="invoicing-content">
                  <h2>Easy Payment</h2>
                  <div class="bar"></div>
                  <p>
                    We create opportunities to help you grow your business. We
                    innovate projects to better the lives of people in our host
                    communities.
                  </p>

                  <Link
                    to={
                      localStorage.getItem("id")
                        ? localStorage.getItem("email") == "admin@gmail.com"
                          ? "/users"
                          : "/dashboard"
                        : "/signin"
                    }
                  >
                    <a class="btn btn-primary">Get Started</a>
                  </Link>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="invoicing-image">
                  <div class="main-image">
                    <img
                      src={`${invoicingshape1}`}
                      class="animate__animated animate__zoomIn animate__delay-0.7s"
                      alt="image"
                    />
                    <img
                      src={`${invoicingshape2}`}
                      class="animate__animated animate__fadeInLeft animate__delay-0.1s"
                      alt="image"
                    />
                    <img
                      src={`${invoicingshape3}`}
                      class="animate__animated animate__fadeInLeft animate__delay-0.2s"
                      alt="image"
                    />
                    <img
                      src={`${invoicingshape4}`}
                      class="animate__animated animate__fadeInRight animate__delay-1s"
                      alt="image"
                    />
                  </div>
                  <div class="main-mobile-image">
                    <img
                      src={`${invoicingmainpic}`}
                      class="animate__animated animate__zoomIn animate__delay-0.7s"
                      alt="image"
                    />
                  </div>
                  <div class="circle-image">
                    <img src={`${invoicingcircle1}`} alt="image" />
                    <img src={`${invoicingcircle2}`} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="funfacts-area ptb-70 pt-0">
          <div class="container">
            <div class="section-title">
              <h2>We always try to understand customers expectation</h2>
              <div class="bar"></div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                <div class="funfact">
                  <h3>
                    <span>24/7</span>
                  </h3>
                  <p>online</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                <div class="funfact">
                  <h3>
                    <span>20</span>K
                  </h3>
                  <p>Feedback</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                <div class="funfact">
                  <h3>
                    <span>500</span>+
                  </h3>
                  <p>Workers</p>
                </div>
              </div>
              <div class="col-lg-3 col-sm-3 col-md-3 col-6">
                <div class="funfact">
                  <h3>
                    <span>70</span>+
                  </h3>
                  <p>Contributors</p>
                </div>
              </div>
            </div>
            <div class="contact-cta-box">
              <h3>Have any questions about us?</h3>
              <p>Don&#x27;t hesitate to contact us</p>
              <a class="btn btn-primary">Contact Us</a>
            </div>
            <div class="map-bg">
              <img src={`${map}`} alt="map" />
            </div>
          </div>
        </section>

        <div class="partner-area ptb-70">
          <div class="container">
            <div class="section-title">
              <h2>Our trusted partner</h2>
              <div class="bar"></div>
            </div>
            <div class="partner-inner">
              <div class="row align-items-center">
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner1}`} alt="Partner" />
                    <img src={`${partner1}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner2}`} alt="Partner" />
                    <img src={`${partner2}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner3}`} alt="Partner" />
                    <img src={`${partner3}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner4}`} alt="Partner" />
                    <img src={`${partner4}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner5}`} alt="Partner" />
                    <img src={`${partner5}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner6}`} alt="Partner" />
                    <img src={`${partner6}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner7}`} alt="Partner" />
                    <img src={`${partner7}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner8}`} alt="Partner" />
                    <img src={`${partner8}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner9}`} alt="Partner" />
                    <img src={`${partner9}`} alt="Partner" />
                  </a>
                </div>
                <div class="single-partner-item">
                  <a target="_blank" href="/#">
                    <img src={`${partner7}`} alt="Partner" />
                    <img src={`${partner7}`} alt="Partner" />
                  </a>
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
                  <Link
                    to={
                      localStorage.getItem("id")
                        ? localStorage.getItem("email") == "admin@gmail.com"
                          ? "/users"
                          : "/dashboard"
                        : "/signin"
                    }
                  >
                    <a class="btn btn-primary" href="/sign-up/">
                      Get Your Account
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="blog-area ptb-70 pb-50">
          <div class="container">
            <div class="section-title">
              <h2>The news from our blog</h2>
              <div class="bar"></div>
            </div>
            <div class="row">
              {blogs.map((e) => {
                return (
                  <>
                    <div key={e._id} class="col-lg-4 col-md-6">
                      <div class="single-blog-post">
                        <div class="blog">
                          <a href="/single-blog/">
                            <img src={`${e.image}`} alt="image" />
                          </a>
                        </div>
                        <div class="blog-post-content">
                          <ul class="entry-meta">
                            <li>
                              <i class="far fa-user"></i>
                              <a href="/blog-one/#">Admin</a>
                            </li>
                            <li>
                              <i class="far fa-calendar"></i>
                              {e.date}
                            </li>
                          </ul>
                          <h3>
                            <a href="/single-blog/">{e.title}</a>
                          </h3>
                          <p>{e.detail.toString().substring(0,50)}...</p>
                          <Link
                            to={"/detail"}
                            state={{
                              data: e,
                            }}
                          >
                            <a class="btn btn-primary">Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <footer class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget">
                  <div class="logo">
                    <a href="/">
                      <img src={`${logo}`} alt="logo" />
                    </a>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p> */}
                  </div>
                  <ul class="social-links">
                    <li>
                      <a target="_blank" href="/#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
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
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <Link to={"/about"}>
                        <a>Features</a>
                      </Link>
                    </li>

                    <li>
                      <Link to={"/blog"}>
                        <a>Latest News</a>
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
                        <a>FAQ&#x27;s</a>
                      </Link>
                    </li>
                    <li>
                      <a>Privacy Policy</a>
                    </li>
                    <li>
                      <a>Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a>Community</a>
                    </li>
                    <li>
                      <a>Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget">
                  <h3>Address</h3>
                  <ul class="footer-contact-info">
                    <li>
                      <span class="mr-1">Location:</span>27 Division St, New
                      York, <br />
                      NY 10002, USA
                    </li>
                    <li>
                      <span class="mr-1">Email:</span>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="4b22252d240b232a223b2e3965282426"
                      >
                        [email&#160;protected]
                      </a>
                    </li>
                    <li>
                      <span class="mr-1">Phone:</span>+ (321) 984 754
                    </li>
                    <li>
                      <span class="mr-1">Fax:</span>+1-212-9876543
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="copyright-area">
              <p>© 2022 FirsttrustFinancials - All rights Reserved</p>
            </div>
          </div>
        </footer>
        <div className={`preloader ${!loader && "hidden"}`}>
          <div class="loader">
            <div class="shadow"></div>
            <div class="box"></div>
          </div>
        </div>
        <div class="back-to-top show-back-to-top"></div>
      </div>
    </>
  );
}

export default HomePageApp;
