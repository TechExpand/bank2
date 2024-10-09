
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import loginbg from "../images/login-bg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {login} from '../../components/Service/Network';
import {Spinner} from 'react-bootstrap';
import "../css/custom.css";


function SignIn (){

    const [loader, setLoader] = useState(true);

    const notify = (value) => toast(value);
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);



let handleEmail = (e)=>{
    setEmail(e.target.value);
}


let handlePassword = (e)=>{
    setPassword(e.target.value);
}


let handleSubmit = ()=>{
    if(email=="" || password==""){
        notify("Fields cannot be empty")
    }else if(!email.toString().includes("@")){
        notify("invalid email entry")
    }else{
        setLoad(true);
        login(
            {
                password: password,
                email: email,
            },
            setLoad,
            toast,
            history,
        );
    }
}

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setTimeout(function() {
            setLoader(false)
         }, 3000);
    });


    return (
        <>
        <ToastContainer />
        <div id="__next">
           

        <section class="login-area">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="login-image"><img height={100} src={`${loginbg}`} alt="image" /></div>
                    </div>
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="login-content">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="login-form">
                                        <div class="logo">
                                            <a href="/"><img src={`${blacklogo}`} alt="image" /></a>
                                        </div>
                                        <h3>Welcome back</h3>
                                        <p>New to FirsttrustFinancials Bank? 
                                            <Link to={"/signup"}>
                                            <a>Sign up</a>
                                            </Link>
                                           </p>
                                        <form>
                                            <div class="form-group"><input type="email" name="email" id="email" value={email} onChange={handleEmail} placeholder="Your email address" class="form-control" /></div>
                                            <div class="form-group"><input type="password" name="password" id="password" value={password} onChange={handlePassword} placeholder="Your password" class="form-control" /></div>
                                            <div class="btn btn-primary" onClick={handleSubmit}>Login<Spinner className={`${!load&&"visually-hidden"}`} animation="border" size="sm" /></div>
                                            <div class="forgot-password"><a href="">Forgot Password?</a></div>
                                            {/* <div class="connect-with-social">
                                                <button type="submit" class="facebook"><i class="fab fa-facebook-square"></i> Connect with Facebook</button>
                                                <button type="submit" class="google"><i class="fab fa-google"></i> Connect with Google</button>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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


export default SignIn;