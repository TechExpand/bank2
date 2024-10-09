
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
// import {editProfile} from '../../Service/Network';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Spinner } from "react-bootstrap";
import logo from "../../images/logo.png";
import "../../css/custom.css";
import axios from "axios";

export const TransferForm = (propss) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmonunt] = useState("");
  const [info, setInfo] = useState({});
  const [load, setLoad] = useState(false);
  const [load2, setLoad2] = useState(false);
  const history = useNavigate();

  const notify = (value) => toast(value);

  let handleEmail = (e)=>{
    setEmail(e.target.value);
}


let handleName = (e)=>{
  setName(e.target.value);
}

let handleAmount = (e)=>{
  setAmonunt(e.target.value);
  
}






const handleConfirm = () =>{
  if(email ===""||amount ===""){

  }else{
    let status;
    setLoad2(true)
    // let url = `https://bankc.onrender.com/api/profile/${email}/`;

    fetch(`https://bankc.onrender.com/api/transferprofile`, {
  method: 'post',
  body: JSON.stringify({"email": email}),
  headers: {
    'Content-Type':  'application/json',
  },
  }).then((res) => {
    status = res.status
    return res.json();
  })
  .then(function (res){ 
    if(status >= 300){
          setInfo({})
          setLoad2(false)
          notify('Failed')
    }else{
            if(!res.hasOwnProperty('email')){
                setInfo(res)
                setLoad2(false)
                console.log(res)
                notify('user does not exist')
            }else{
                setInfo(res)
                setLoad2(false)
                console.log(res)
                notify('Confirmed')
            }
    } 
    });


 
  }
} 


const handleClick = () =>{
    setLoad(true)
   let id = localStorage.getItem('id');
   let email = localStorage.getItem('email');
   let name = localStorage.getItem('name');
   let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let status;
    let url = `https://bankc.onrender.com/api/transfer`;
    

    fetch(url, {
  method: 'post',
  body: JSON.stringify({
    "amount": amount,
      'recieveremail': info.email,
      'recievername': info.name,
      'senderemail': email,
      'sendername': name,
      'date': utc.toString()
}),
  headers: {
    'Content-Type':  'application/json',
  },
  }).then((res) => {
    status = res.status
    return res.json();
  })
  .then(function (res){ 
    if(status >= 300){
        setLoad(false)
        notify(res.message)
    }else{
        setLoad(false)
        if(propss.admin == true){
          history('/dashboard');
        }else{
          
          history('/users');
        }
       
        notify('Successfull')  
    } 
    });


  } 
  

  return (
      <>
       <ToastContainer></ToastContainer>
       <Card  border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Tranfer Money</h5>
        <Form>
          <Row>      
          <Col md={6} className="mb-3">
              <Form.Group id="amount">
                <Form.Label>Enter Amount</Form.Label>
                <Form.Control required type="number"  onChange={handleAmount} value={amount} placeholder="Enter Amount"/>
              </Form.Group>
            </Col>                                                                                                                                                                                           
            <Col md={6} className="mb-3">
              <Form.Group id="fullName">
                <Form.Label>Enter Beneficiary Email</Form.Label>
                <Form.Control required type="email"  onChange={handleEmail} value={email} placeholder="Enter Email"/>
              </Form.Group>
            </Col>
           {info.hasOwnProperty("name")?<div></div>: <div className="mt-3">
            <Button variant="primary" onClick={
              handleConfirm
            }>Confirm<Spinner className={`${!load2&&"visually-hidden"}`} animation="border" size="sm" /></Button>
          </div>}
{info.hasOwnProperty("name")?<Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Beneficiary Name</Form.Label>
                <Form.Control required type="text"  value={!info.hasOwnProperty("name")?"":info.name} placeholder="Beneficiary Name" disabled/>
              </Form.Group>
            </Col>:<div></div>}
          </Row>
          
          

      
         {info.hasOwnProperty("name")? <div className="mt-3">
            <Button variant="primary" onClick={
              handleClick
            }>Tranfer <Spinner className={`${!load&&"visually-hidden"}`} animation="border" size="sm" /></Button>
          </div>:<div></div>}
        </Form>
      </Card.Body>
    </Card>
      </>
      
  
    
  );
};
