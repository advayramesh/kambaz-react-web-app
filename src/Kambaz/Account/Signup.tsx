import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
          <h3>Sign up</h3>
          <Form.Control placeholder="username" className="wd-username" />
          <Form.Control placeholder="password" type="password" className="wd-password" />
          <Form.Control placeholder="verify password" type="password" className="wd-password-verify" />
          
          <Link  to="/Kambaz/Account/Profile" > Sign up </Link><br />
          <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    );}
    