import { React } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Button from "../common/Button";
import FormControl from "../common/FormControl";

const Login = () => (
  <>
    <Navbar />

    <main className="page">
      <h1>Login to your account</h1>
      <form>
        <FormControl
          inputType="email" inputId="email" placeHolder="Email Address" isRequired={true}
          containToolTip={true} toolTipContent="Example: johndoe@gmail.com" />

        <FormControl
          inputType="password" inputId="password" placeHolder="Password" isRequired={true}
          containToolTip={true} toolTipContent="Password must be atleast 6 characters long.
        Password must contain:
        Upper case letter
        Lower case letter
        Special character
        A number."/>

        <div style={{ textAlign: "center" }}>
          <input type="checkbox" name="remember" id="remember" />
          <span>Remember Me</span>
        </div>
        <Button className="btn" content="Login" />

        <p className="text">
          Don't have an account? <Link to="signup">Signup</Link>
          <br />
          <Link to="forgotpassword">Forgot Password?</Link>
        </p>
      </form>
    </main>
  </>
);

export default Login;
