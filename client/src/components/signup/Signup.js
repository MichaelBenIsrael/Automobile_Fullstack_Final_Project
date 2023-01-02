import { React } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Button from "../common/Button";
import FormControl from "../common/FormControl";

const Signup = () => (
  <>
    <Navbar />

    <main className="page">
      <h1>Create a new account</h1>
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

        <FormControl
          inputType="password" inputId="confirmPassword" placeHolder="Confirm Password" isRequired={true}
          containToolTip={true} toolTipContent="Confirm password should match password."
        />

        <Button className="btn" content="Create Account" />

        <p className="text">
          Already have an account? <Link to="/">Login</Link>
          <br />
          <Link to="forgotpassword">Forgot Password?</Link>
        </p>
      </form>
    </main>
  </>
);

export default Signup;
