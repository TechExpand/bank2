import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button,Container, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../pages/utils/Widgets";
import { GeneralInfoForm } from "../pages/utils/Forms";
import { useLocation } from "react-router-dom";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import "../css/custom.css";
import Sidebar from "./utils/Sidebar";
import Navbar from "./utils/Navbar";

function Settings() {

  const location = useLocation();
  const profileData = location.state.data;

  return (

<>
<Sidebar></Sidebar>
      <main className="content">
      <Navbar profile={{name:''}}/>
          <Container>
      
        <Col xs={12} xl={12}>
          <GeneralInfoForm data={profileData} admin={false}/>
        </Col>
       
      </Container>
      </main>
</>
  );
};


export default Settings;