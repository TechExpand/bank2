
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import signupgbg from "../images/signup-bg.jpg";


function ForgetPassword (){

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
           

        <div class="signup-area">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="signup-image"><img src={`${signupgbg}`}  alt="image" /></div>
                    </div>
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="signup-content">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="signup-form">
                                        <div class="logo">
                                            <a href="/"><img src={`${blacklogo}`}  alt="image" /></a>
                                        </div>
                                        <h3>Forgot password</h3>
                                        <p>Already signed up? <a href="/login/">Log in</a></p>
                                        <form>
                                            <div class="form-group"><input type="email" name="email" id="email" placeholder="Your email address" class="form-control" /></div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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


export default ForgetPassword;