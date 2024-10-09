
import '../css/8e765d14296b14b53f23.css'
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import blacklogo from "../images/black-logo.png";
import signupbg from "../images/signup-bg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {Register} from '../../components/Service/Network';
import {Spinner} from 'react-bootstrap';
import "../css/custom.css";

function SignUp (){
    const notify = (value) => toast(value);
    const history = useNavigate();
    const [loader, setLoader] = useState(true);
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);

let handleName = (e)=>{
     setName(e.target.value);
}


let handleEmail = (e)=>{
    setEmail(e.target.value);
}


let handlePassword = (e)=>{
    setPassword(e.target.value);
}


let handleSubmit = ()=>{
    if(fullname=="" || email=="" || password==""){
        notify("Fields cannot be empty")
    }else if(!email.toString().includes("@")){
        notify("invalid email entry")
    }else{
        setLoad(true);
        Register(
            {
                fullname: fullname,
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
           

        <div class="signup-area">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="signup-image"><img src={`${signupbg}`} alt="image" /></div>
                    </div>
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="signup-content">
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="signup-form">
                                        <div class="logo">
                                            <a href="/"><img src={`${blacklogo}`} alt="image" /></a>
                                        </div>
                                        <h3>Open up your FirsttrustFinancials account now</h3>
                                        <p>Already signed up? <Link to={"/signin"}>
                                            <a>Log in</a>
                                            </Link></p>
                                        <form>
                                            <div class="form-group"><input type="text" name="name" id="name" placeholder="Your name" value={fullname} onChange={handleName} class="form-control" /></div>
                                            <div class="form-group"><input type="email" name="email" id="email" placeholder="Your email address" value={email} onChange={handleEmail}  class="form-control" /></div>
                                            <div class="form-group"><input type="password" name="password" id="password" placeholder="Create a password" value={password} onChange={handlePassword} class="form-control" /></div>
                                            <div class="btn btn-primary" onClick={handleSubmit}>Sign Up<Spinner className={`${!load&&"visually-hidden"}`} animation="border" size="sm" /></div>
                                            {/* <div class="connect-with-social">
                                                <span>Or</span><button type="submit" class="facebook"><i class="fab fa-facebook-square"></i> Connect with Facebook</button>
                                                <button type="submit" class="google"><i class="fab fa-google"></i> Connect with Google</button>
                                            </div> */}
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


export default SignUp;