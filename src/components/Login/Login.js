import "./Login.css";
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import React from 'react';
import { useHistory, withRouter } from "react-router-dom";
import axios from 'axios';
 const API_URL = "https://facebookclone11.herokuapp.com/";
 
const Login = () => {
  let history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const login = () => {
      console.log("login")
      axios.post(API_URL+"signIn",{
        'email': email,
        'password': password
      }).then((response)=>{
        console.log("sucess",email,password)
        let newUrl = response.data.profileUrl.replaceAll("/","***")
        history.push("/app/"+response.data.firstName+"/"+newUrl);         
      }).catch((err)=>console.log("err",err)
      )
      
        
    }
    return (
    <div className='login__page'>
<Form>
   <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
 </Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
</Form.Group>

<Button variant="primary" onClick={login}>
  Login
 </Button>
</Form>
  
  
</div>)}

export default withRouter(Login);