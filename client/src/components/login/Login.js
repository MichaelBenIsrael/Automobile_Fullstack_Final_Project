import { React } from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Button from "../common/Button";
import FormControl from "../common/FormControl";
import Modal from "../common/Modal";
import { validateEmail, validatePassword } from "../../assets/validations";
import { getCookie, saveCookie } from "../../assets/cookies";

const Login = () => {

  useEffect(() => {
    document.title = "SiteLogo - Login";

    // Check cookies for "remember me"
    const email = getCookie("email");
    const password = getCookie("password");

    if (email && password) {
      setEmail(email);
      setPassword(password);
      SendLoginRequest();
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [modalMessage, setModalMessage] = useState("Please fill the email and password, requirement are in the tooltip.");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      if (remember) {
        saveCookie("email", email);
        saveCookie("password", password);
      }
      SendLoginRequest();
    } else {
      // display modal.
      setShowModal(true);
    }
  }

  const SendLoginRequest = () => {
    // post request for login.
  }

  return (
    <>
      <Navbar />

      <main className="page">
        <h1>Login to your account</h1>
        <form>
          <FormControl
            inputType="email" inputId="email" placeHolder="Email Address" isRequired={false}
            containToolTip={true} toolTipContent="Example: johndoe@gmail.com" onChangeCallback={setEmail} />

          <FormControl
            inputType="password" inputId="password" placeHolder="Password" isRequired={false}
            containToolTip={true} toolTipContent="Password must be atleast 6 characters long.
          Password must contain:
          Upper case letter
          Lower case letter
          Special character
          A number." onChangeCallback={setPassword} />

          <div style={{ textAlign: "center" }}>
            <input type="checkbox" name="remember" id="remember" onChange={(e) => setRemember(e.target.checked)} />
            <span>Remember Me</span>
          </div>
          <Button className="btn" content="Login" onClickCallback={onSubmit} />

          <p className="text">
            Don't have an account? <NavLink to="/signup">Signup</NavLink>
            <br />
            <NavLink to="/forgotpassword">Forgot Password?</NavLink>
          </p>
        </form>
        {showModal && <Modal errorMessage={modalMessage} setDisplay={setShowModal} />}
      </main>
    </>
  );
}
export default Login;
