import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory, withRouter } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth";
const LoginPage = () => {
    let history = useHistory();
    const signup = (username,email,password,imageUrl) => {
        history.push("/login");
        // axios.post(API_URL+"signup",{
        //     username,
        //     email,
        //     password,
        //     imageUrl
        // }).then(()=>{

        // });
    }
    return <div className="signup__page">
    <Form>
    <Form.Group controlId="formBasicusername">
         <Form.Label>username</Form.Label>
         <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
     
      <Form.Group controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group >
          <Form.Label>imageUrl</Form.Label>
      <Form.Control type="text" placeholder="Password" />
      </Form.Group>
         
     <Button variant="primary" type="submit" className="submitButton" onClick={signup}>
         Submit
      </Button>
   </Form>

  </div>
}

export default withRouter(LoginPage);