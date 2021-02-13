import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, withRouter } from "react-router-dom";
import axios from 'axios';

 const API_URL = "https://facebookclone11.herokuapp.com/";
 export const Register = () => {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [profileUrl, setProfileUrl] = useState("");
    let history = useHistory();
    const signup = () => {
        console.log(firstName,email,password,profileUrl)
        axios.post(API_URL+"signUp",{
            "firstName": firstName,
            "lastName": firstName,
            "email": email,
            "password":password,
            "profileUrl": profileUrl
            }).then((response)=>{
                console.log(response);
                history.push("/login");        
            }).catch((err) => {alert('invalide email adress')});
    }
    return <div className="signup__page">
     <Form>
    <Form.Group controlId="formBasicusername">
         <Form.Label>username</Form.Label>
         <Form.Control type="text" placeholder="Enter username" onChange={(e) => {setFirstName(e.target.value)}} />
      </Form.Group>
     
      <Form.Group controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group >
          <Form.Label>imageUrl</Form.Label>
      <Form.Control type="text" placeholder="imageUrl" onChange={(e) => {setProfileUrl(e.target.value)}} />
      </Form.Group>
         
     <Button variant="primary"  className="submitButton" onClick={signup}>
         Submit
      </Button>
   </Form> 
            
  </div>
}

export default withRouter(Register);