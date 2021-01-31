import "./Login.css";
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export const Login = () => {
    const login = () => {}
    return (<div className='login__page'>
<Form>
   <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
 </Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>

<Button variant="primary" type="submit" onClick={login}>
  Login
 </Button>
</Form>
  
  
</div>)}