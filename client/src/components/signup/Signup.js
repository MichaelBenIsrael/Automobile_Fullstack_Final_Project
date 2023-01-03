import { React } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../common/Navbar";
import Button from "../common/Button";
import FormControl from "../common/FormControl";
import { validateEmail, validatePassword } from "../../assets/validations";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const CreateAccount = () => {
    if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
      SendSignupRequest();
    } else {
      // display modal.
    }
  }

  const SendSignupRequest = () => {
    // post request for login.
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <h1>Create a new account</h1>
        <form>
          <FormControl
            inputType="email" inputId="email" placeHolder="Email Address" isRequired={true}
            containToolTip={true} toolTipContent="Example: johndoe@gmail.com" onChangeCallback={setEmail} />

          <FormControl
            inputType="password" inputId="password" placeHolder="Password" isRequired={true}
            containToolTip={true} toolTipContent="Password must be atleast 6 characters long.
        Password must contain:
        Upper case letter
        Lower case letter
        Special character
        A number." onChangeCallback={setPassword} />

          <FormControl
            inputType="password" inputId="confirmPassword" placeHolder="Confirm Password" isRequired={true}
            containToolTip={true} toolTipContent="Confirm password should match password." onChangeCallback={setConfirmPassword} />

          <Button className="btn" content="Create Account" onClickCallback={CreateAccount} />

          <p className="text">
            Already have an account? <NavLink to="/">Login</NavLink>
            <br />
            <NavLink to="/forgotpassword">Forgot Password?</NavLink>
          </p>
        </form>
      </main>
    </>
  );
}

export default Signup;
