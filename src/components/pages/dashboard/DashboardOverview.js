
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row,Badge, Button, Dropdown,Container, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../utils/Widgets";
import ContentLoader, { Facebook } from 'react-content-loader'
import Sidebar from "../utils/Sidebar";
import Navbar from "../utils/Navbar";
import {AccountSeparation} from "../../Service/Network";
import "../../css/custom.css";
import { TransactionsTable } from "../../pages/utils/Tables";
import { useState, useEffect } from 'react';
import {getProfile, getTransaction} from '../../../components/Service/Network';
import { toast, ToastContainer } from "react-toastify";


function DashboardOverview() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState();
  const [transactions, setTransaction] = useState([]);
  const [totalTransaction, settotalTransaction] = useState(0)
  const notify = (value) => toast(value);

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

let clicked = ()=>{
  notify("Currently in Process")
}


  return (
    <>
     <ToastContainer></ToastContainer>
     <Sidebar></Sidebar>
      
    {
      profile?  <main className="content">
      <Navbar profile={profile} />
      {transactions.length > 0 || profile?  <Container >

<Container className="d-flex justify-content-md-evenly  flex-wrap flex-md-nowrap align-items-center py-4">

<Link
  to={"/fundaccount"}
>
<Button variant="outline-secondary"  className="mx-2" size="sm">Fund Account</Button>
</Link>

  

    <ButtonGroup>
      <Button variant="outline-secondary" size="sm" onClick={clicked}>Withdraw</Button>
      <Button variant="outline-secondary" size="sm">Export</Button>
    </ButtonGroup>
  </Container>

  <Row className="justify-content-md-center">
    
    {/* <Col xs={12} className="mb-4 d-sm-none">
      <SalesValueWidgetPhone
        title="Sales Value"
        value="10,567"
        percentage={10.57}
      />
    </Col> */}

    <Col xs={12} sm={6} xl={4} className="mb-4">
      <CounterWidget
        category="Account Balance"
        title={`$${AccountSeparation(Number(profile.amount.toString()))}`}
        period="Feb 1 - Apr 1"
        percentage={Number(profile.amount.toString())}
        icon={faChartLine}
        iconColor="shape-secondary"
      />
    </Col>

    <Col xs={12} sm={6} xl={4} className="mb-4">
      <CounterWidget
        category="Total Amount"
        title={`$${
          AccountSeparation(Number(totalTransaction))
        }`}
        period="Feb 1 - Apr 1"
        percentage={28.4}
        icon={faCashRegister}
        iconColor="shape-tertiary"
      />
    </Col>

    {/* <Col xs={12} sm={6} xl={4} className="mb-4">
      <CircleChartWidget
        title="Traffic Share"
        data={trafficShares} />
    </Col> */}

  </Row>

  <TransactionsTable />
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

export default DashboardOverview;