import { Form, Container, Button } from "react-bootstrap";
import Sidebar from "./utils/Sidebar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from "./utils/Navbar";
import {Spinner} from 'react-bootstrap';
  const notify = (value) => toast(value);

function Fund() {
    // let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    // let init_date = utc;
    const notify = (value) => toast(value);
    const history = useNavigate();
    const [file, setFile] = useState();
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [load, setLoad] = useState(false);
    const location = useLocation();
    const profileData = location.state.data;

    let handleAmount = (e)=>{
        setAmount(e.target.value);
   }



   let handleDate = (e)=>{
    setDate(e.target.value);
}
   
   
   
   


    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     // setFileName(e.target.files[0].name);
    //   };

     const uploadFile = () =>{
if(date ===""|| amount ===""){
  toast('Field is required')
}else{
      setLoad(true)
      let status;
    let emaildb =  localStorage.getItem('email');
       let namedb = localStorage.getItem('name');
        let id = localStorage.getItem('id');
      fetch(`https://bankc.onrender.com/api/transaction/${profileData.amount}/${profileData._id}`, {
    method: 'post',
    headers: {
      'Content-Type':  'application/json',
      // 'Authorization': `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      user: profileData.user,
      email: profileData.email,
      name: profileData.name,
      amount: amount,
      date: date.toString().slice(0,10).replace(/-/g,'/'),
    })
    }).then((res) => {
      status = res.status
      
      return res.json();
    })
    .then(function (res){ 
      if(status >= 300){
        setLoad(false)
      
        // setLoad(false)
        notify('failed')
      }else{
        setLoad(false)
       
        // setLoad(false)
        history('/users');
        notify('success')
        console.log(res)
      } 
      });
    }
    } 

      // const uploadFile = async (e) => {
      // let emaildb =  localStorage.getItem('email');
      //  let namedb = localStorage.getItem('name');
      //   let id = localStorage.getItem('id');
      //   const formData = new FormData();
      //   // formData.append("image", file);
      //   formData.append("user", id);
      //   formData.append("email", emaildb);
      //   formData.append("name", namedb);
      //   formData.append('amount', amount)
      //   try {
      //     const res = await axios.post(
      //       `https://bankc.onrender.com/api/transaction/${profileData.amount}`,
      //       formData
      //     );
      //     if(res.status >= 300){
      //       setLoad(false)
      //       notify('Failed')
      //     }else{
      //       // console.log(res.message)
      //       notify('Successfull')
      //       setLoad(false)
      //       history('/users');
      //     } 
      //   } catch (ex) {
      //     console.log(ex);
      //   }
      // };


  return (

<>
<ToastContainer></ToastContainer>
<Sidebar></Sidebar>
      <main className="content">
      <Navbar profile={{name:''}}/>
          <Container>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Price: </Form.Label>
                <Form.Control type="number" onChange={handleAmount} value={amount} placeholder="your amount" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Date: </Form.Label>
                <Form.Control type="date" onChange={handleDate} value={date} placeholder="Select Date" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                {/* <Form.Label>Image: </Form.Label>
                <Form.Control type="file" onChange={saveFile} /> */}
              </Form.Group>
              <Button variant="danger" onClick={uploadFile}>SUBMIT<Spinner className={`${!load&&"visually-hidden"}`} animation="border" size="sm" /></Button>
            </Form>
          </Container>
      </main>
</>
  );
}

export default Fund;
