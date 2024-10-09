
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import blog1 from "../images/blog/blog1.jpg";
import blog2 from "../images/blog/blog2.jpg";
import author1 from "../images/author1.jpg";
import author2 from "../images/author2.jpg";
import author3 from "../images/author3.jpg";
import author4 from "../images/author4.jpg";
import blog3 from "../images/blog/blog3.jpg";
import singleblog from "../images/blog/single-blog.jpg";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import HamburgerDrawer from 'react-hamburger-drawer';
import "../css/custom.css";


function BlogDetails(){

    const [loader, setLoader] = useState(true);
    const location = useLocation();
    const blogData = location.state.data;
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
                                        </li>
                                    */}

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
                        <h2>Single blog</h2>
                        <p>Our latest news</p>
                    </div>
                </div>
            </div>
            <div class="blog-details-area ptb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="blog-details">
                                <div class="article-image"><img src={`${blogData.image}`}alt="image" /></div>
                                <div class="article-content">
                                    <ul class="entry-meta">
                                        <li><i class="far fa-user"></i><a href="/single-blog#">Admin</a></li>
                                        <li><i class="far fa-calendar"></i> {blogData.date}</li>
                                        <li><i class="far fa-comment"></i> No Comments</li>
                                    </ul>
                                    <h3>{blogData.title}</h3>
                                    <p>
                                        {blogData.detail}
                                    </p>
                                  
                                    
                                
                                    <div class="article-footer">
                                        <div class="article-tags">
                                            <span><i class="fas fa-bookmark"></i></span><a >finance</a>,<a >banks</a>,<a >money</a>
                                        </div>
                                        <div class="article-share">
                                            <ul class="social">
                                                <li>
                                                    <a target="_blank" ><i class="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" ><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" ><i class="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" ><i class="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="widget-area" id="secondary">
                                <div class="widget widget_search">
                                    <form class="search-form">
                                        <label><input type="search" class="search-field" placeholder="Search..." /></label><button type="submit"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                                {/* <div class="widget widget_luvion_posts_thumb">
                                    <h3 class="widget-title">Popular posts</h3>
                                    <article class="item">
                                        <a class="thumb" href="/single-blog/"><span class="fullimage cover bg1" role="img"></span></a>
                                        <div class="info">
                                            <time>December 15, 2019</time>
                                            <h4 class="title usmall"><a href="/single-blog/">The security risks of changing package owners</a></h4>
                                        </div>
                                        <div class="clear"></div>
                                    </article>
                                    <article class="item">
                                        <a href="/single-blog" class="thumb"><span class="fullimage cover bg2" role="img"></span></a>
                                        <div class="info">
                                            <time>December 16, 2019</time>
                                            <h4 class="title usmall"><a href="/single-blog/">Tips to protecting business and Family</a></h4>
                                        </div>
                                        <div class="clear"></div>
                                    </article>
                                    <article class="item">
                                        <a href="/single-blog" class="thumb"><span class="fullimage cover bg3" role="img"></span></a>
                                        <div class="info">
                                            <time>December 17, 2019</time>
                                            <h4 class="title usmall"><a href="/single-blog/">Protect your workplace from cyber attacks</a></h4>
                                        </div>
                                        <div class="clear"></div>
                                    </article>
                                </div> */}
                                {/* <div class="widget widget_recent_entries">
                                    <h3 class="widget-title">Recent posts</h3>
                                    <ul>
                                        <li><a href="/single-blog/">The security risks of changing package owners</a><span class="post-date">December 15, 2019</span></li>
                                        <li><a href="/single-blog/">Tips to protecting business and Family</a><span class="post-date">December 16, 2019</span></li>
                                        <li><a href="/single-blog/">Protect your workplace from cyber attacks</a><span class="post-date">December 17, 2019</span></li>
                                        <li><a href="/single-blog/">Business debit Fees to increase in 2019</a><span class="post-date">December 18, 2019</span></li>
                                        <li><a href="/single-blog/">10 tips to reduce your card processing costs</a><span class="post-date">December 19, 2019</span></li>
                                    </ul>
                                </div>
                                <div class="widget widget_categories">
                                    <h3 class="widget-title">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="/blog-two/#">Business <span class="post-count">(05)</span></a>
                                        </li>
                                        <li>
                                            <a href="/blog-two/#">Privacy <span class="post-count">(10)</span></a>
                                        </li>
                                        <li>
                                            <a href="/blog-two/#">Technology <span class="post-count">(15)</span></a>
                                        </li>
                                        <li>
                                            <a href="/blog-two/#">Tips <span class="post-count">(12)</span></a>
                                        </li>
                                        <li>
                                            <a href="/blog-two/#">Uncategorized <span class="post-count">(02)</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget widget_tag_cloud">
                                    <h3 class="widget-title">Tags</h3>
                                    <div class="tagcloud">
                                        <a href="/blog-two/#">IT <span class="tag-link-count">(3)</span></a><a href="/blog-two/#">Luvion <span class="tag-link-count">(3)</span></a>
                                        <a href="/blog-two/#">Games <span class="tag-link-count">(2)</span></a><a href="/blog-two/#">Fashion <span class="tag-link-count">(2)</span></a>
                                        <a href="/blog-two/#">Travel <span class="tag-link-count">(1)</span></a><a href="/blog-two/#">Smart <span class="tag-link-count">(1)</span></a>
                                        <a href="/blog-two/#">Marketing <span class="tag-link-count">(1)</span></a><a href="/blog-two/#">Tips <span class="tag-link-count">(2)</span></a>
                                    </div>
                                </div> */}
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


export default BlogDetails;