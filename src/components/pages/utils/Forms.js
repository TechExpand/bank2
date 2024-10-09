
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

export const GeneralInfoForm = (propss) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmonunt] = useState("");
  const [load, setLoad] = useState(false);
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




const [files,setFile]=useState([]);

const handleImage=(e)=>{    
  let allfiles=[]
 for(let i=0;i<e.target.files.length;i++){
  allfiles.push(e.target.files[i]);
 }
  if(allfiles.length>0){
    setFile(allfiles);  
  }
};

// const handleClick = () =>{
//   setLoad(true)
//   let status;
//   fetch(`https://bankc.onrender.com/api/profile`, 
//   {
// method: 'put',
// headers: {
//   'Content-Type':  'application/json',
//   // 'Authorization': `${localStorage.getItem('token')}`,
// },
// body: JSON.stringify(
//       {
//       user: propss.data.user,
//       name: name==""?propss.data.name:name,
//       email: propss.data.email,
//       amount: amount==""?propss.data.amount:amount,
//       image: propss.data.image,
//      }
// )
// }).then((res) => {
//   status = res.status
//   // return res.json();
// })
// .then(function (res){ 
//   if(status >= 300){
//     // setLoad(false)
//     setLoad(false)
//     notify('Failed')
//   }else{
//     setLoad(false)
//     // console.log(res.message)
//     // setLoad(false)
//     if(propss.admin == true){
//       history('/dashboard');
//     }else{
      
//       history('/users');
//     }
   
//     notify('Successfull')
//   } 
//   });
// } 

// const handleClick = ()=>{
 
//   editProfile(
//     {
//       user: propss.data.user,
//       name: name==""?propss.data.name:name,
//       email: email==""?propss.data.email:email,
//       amount: amount==""?propss.data.amount:amount,
//       image:  propss.data.image,
//      },
//    setLoad,
//    notify,
//    history
//   )
// }



const handleClick = () =>{
  setLoad(true)
  // let status;
  const data = new FormData() 
  data.append('image', files.length===0?propss.data.image:files[0])
  data.append('user', propss.data.user)
  data.append('name', name==""?propss.data.name:name)
  data.append('amount', amount==""?propss.data.amount:amount)
  // console.warn(files[0]);
  let url = "https://bankc.onrender.com/api/profile";

  axios.put(url, data)
  .then(res => { // then print response status
    // status = res.status
      console.warn(res);
      console.log(res);
      if(res.status >= 300){
        // setLoad(false)
        setLoad(false)
        notify('Failed')
      }else{
        setLoad(false)
        // console.log(res.message)
        // setLoad(false)
        if(propss.admin == true){
          history('/dashboard');
        }else{
          
          history('/users');
        }
       
        notify('Successfull')
      } 
  })


} 


  return (
    
       <Card  border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
        <Col md={6} className="mb-3">
        <Form.Label>Profile Picture</Form.Label>
             <div className="img-wrapper">
             <img className="img-container" src={`${propss.data.image==""?"https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png":propss.data.image}`}/>
             </div>
        </Col>
          <Row>                                                                                                                                                                                                 
            <Col md={6} className="mb-3">
              <Form.Group id="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control required type="text"  onChange={handleName} value={name==""?propss.data.name:name} placeholder="Enter your first name" disabled={propss.admin==true?false:true}/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email"  onChange={handleEmail} value={email==""?propss.data.email:email} placeholder="Email here" disabled/>
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Change Profile picture</Form.Label>
                <Form.Control
                 required 
                 accept="image/*"
                 onChange={handleImage}
                 type="file"/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Balance</Form.Label>
                <Datetime
                
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      
                      <Form.Control
                        required
                        value={amount}
                        onChange={handleAmount}
                        type="number"
                        placeholder={propss.data.amount}
                        disabled={propss.admin==true?true:false}
                        />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </Form.Select>
              </Form.Group>
            </Col> */}
          </Row>
          {/* <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+12-345 678 910" />
              </Form.Group>
            </Col>
          </Row> */}

      
          <div className="mt-3">
            <Button variant="primary" onClick={
              handleClick
            }>Save All <Spinner className={`${!load&&"visually-hidden"}`} animation="border" size="sm" /></Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  
    
  );
};
