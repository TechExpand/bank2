import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Container, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../pages/utils/Widgets";
import { GeneralInfoForm } from "../../pages/utils/Forms";
import { useLocation } from "react-router-dom";
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import "../../css/custom.css";
import Sidebar from "../utils/Sidebar";
import Navbar from "../utils/Navbar";
import { getProfile } from "../../Service/Network";
import { useState, useEffect } from 'react';
import { TransferForm } from "../utils/TransferForn";
import { ToastContainer } from "react-toastify";


function Transfer() {

    const [profileData, setProfile] = useState();
   
  
  let handleProfile = (value)=>{
      setProfile(value);
  }
  
  
  
   // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      getProfile(
        handleProfile,
      );
  
    }, []);
  

  return (

<>
<Sidebar></Sidebar>
<ToastContainer></ToastContainer>
      <main className="content">
      <Navbar profile={{name:''}}/>
          <Container>
      
       {profileData?<Col xs={12} xl={12}>
          <TransferForm data={profileData} admin={true} />
        </Col>:
        <>
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
       
      </Container>
      </main>
</>
  );
};


export default Transfer;