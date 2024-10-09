
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,Badge, Button, Dropdown,Container, ButtonGroup, Card } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "./utils/Widgets";
import ContentLoader, { Facebook } from 'react-content-loader'
import Sidebar from "./utils/Sidebar";
import Navbar from "./utils/Navbar";
import "../css/custom.css";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from 'react-toastify';
import { TransactionsTable } from "../pages/utils/Tables";
import { useState, useEffect } from 'react';
import {getProfile, getTransaction} from '../../components/Service/Network';

import checkout1 from "../assets/img/checkout/img-1.svg";
import checkout2 from "../assets/img/checkout/img-2.svg";
import checkout3 from "../assets/img/checkout/img-3.svg";
import checkout4 from "../assets/img/checkout/img-4.svg";

function FundAccount() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState();
  const [transactions, setTransaction] = useState([]);
  const [totalTransaction, settotalTransaction] = useState(0)


  let [qrcode, setqrCode] = useState('1DkXaTyEXNbvNUSBgRZe2B69wvsGbTH71q');

let changeQr = data =>  ()=>{
  console.log(data)
  setqrCode(data)
}

let handleProfile = (value)=>{
    setProfile(value);
}


let handleTransaction = (value)=>{
  setTransaction(value);
}


let handleTotalTransaction = (value)=>{
  settotalTransaction(value);
}



 // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getProfile(
      handleProfile,
    );


    getTransaction(
      handleTransaction,
      handleTotalTransaction,
    )
  }, []);

  let total = 0;


  return (
    <>
     <ToastContainer></ToastContainer>
     <Sidebar></Sidebar>
      
    {
      profile?  <main className="content">
      <Navbar profile={profile} />
      {transactions.length > 0 || profile?  <Container >

<Container className="d-flex justify-content-md-evenly  flex-wrap flex-md-nowrap align-items-center py-4">


  

   
  </Container>

  <Row className="justify-content-md-center">
    
    {/* <Col xs={12} className="mb-4 d-sm-none">
      <SalesValueWidgetPhone
        title="Sales Value"
        value="10,567"
        percentage={10.57}
      />
    </Col> */}

    


    <div className="tp-donation-page-area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-title section-title2 text-center">
                   
                    <h2>Fund Account</h2>
                  </div>
                  <center>
                  <div id="Donations" className="tab-pane">
                    <form action="#">
                     
                     
                      <div className="tp-doanation-payment">
                        <h2>Choose Your Payment Method</h2>
                        <div className="tp-payment-area">
                          <div className="row">
                            <div className="col-12">
                              <div className="tp-payment-option" id="open4">
                                
                                <div id="open5" className="payment-name">
                                  <ul>
                                    <li onClick={changeQr("1DkXaTyEXNbvNUSBgRZe2B69wvsGbTH71q")} className="visa">
                                      <input
                                        id={1}
                                        type="radio"
                                        name="size"
                                        defaultValue={30}
                                      />
                                      <label htmlFor={1}>
                                        <img
                                          src={`${checkout1}`}
                                          alt=""
                                        />
                                      </label>
                                    </li>
                                    {/* <li onClick={changeQr("lslskd")}   className="mas">
                                      <input
                                        id={2}
                                        type="radio"
                                        name="size"
                                        defaultValue={30}
                                      />
                                      <label htmlFor={2}>
                                        <img
                                          src={`${checkout2}`}
                                          alt=""
                                        />
                                      </label>
                                    </li>
                                    <li onClick={changeQr("xbbnxzm")}  className="ski">
                                      <input
                                        id={3}
                                        type="radio"
                                        name="size"
                                        defaultValue={30}
                                      />
                                      <label htmlFor={3}>
                                        <img
                                          src={`${checkout3}`}
                                          alt=""
                                        />
                                      </label>
                                    </li>
                                    <li onClick={changeQr('nxmskk')}  className="pay">
                                      <input
                                        id={4}
                                        type="radio"
                                        name="size"
                                        defaultValue={30}
                                      />
                                      <label htmlFor={4}>
                                        <img
                                          src={`${checkout4}`}
                                          alt=""
                                        />
                                      </label>
                                    </li> */}
                                  </ul>
                                  <div className="contact-form form-style">
                                    <div className="row">
                                     <center>
                                     <h4>Scan Wallet Address</h4>
                                     <QRCode value={`bitcoin:1DkXaTyEXNbvNUSBgRZe2B69wvsGbTH71q`} />
                                     </center>
                                    

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-area">


                      <div onClick={() => {
                        navigator.clipboard.writeText(qrcode)
                        toast("Copied")
                      }
                       
                        
                        } className="theme-btn submit-btn cusbtn">
                        <a>
                     
                        Copy Wallet Address
                        </a>
                        </div>
                     
                        
                      
                      </div>
                    </form>
                  </div>
                  </center>
                
                </div>
              </div>
            </div>
          </div>



    {/* <Col xs={12} sm={6} xl={4} className="mb-4">
      <CircleChartWidget
        title="Traffic Share"
        data={trafficShares} />
    </Col> */}

  </Row>

 
</Container>:<Container><ContentLoader/></Container>}
      
    </main>:<>
    <div className={`preloader`}>
                <div class="loader">
                    <div class="shadow"></div>
                    <div class="box"></div>
                </div>
            </div>
            <div class="back-to-top show-back-to-top">
            </div>
    </>
    }
   
     
    </>
  );
};

export default FundAccount;