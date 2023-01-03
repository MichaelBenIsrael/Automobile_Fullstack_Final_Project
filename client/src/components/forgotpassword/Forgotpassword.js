import { React } from "react";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { validateEmail } from "../../assets/validations";
import Button from "../common/Button";
import FormControl from "../common/FormControl";
import Navbar from "../common/Navbar";


const Forgotpassword = () => {

    const [email, setEmail] = useState("");

    const SendForgotPasswordRequest = () => {
        if (validateEmail(email)) {
            // post/get request for password
        } else {
            // display modal
        }
    }
    return (
        <>
            <Navbar />
            <main className="page">

                <h1>Forgot your password?</h1>
                <p className="text" style={{ textAlign: "left" }}>It's ok, happens to the best of the bests.<br />Fill up your email and we will resend your password.</p>
                <form>
                    <FormControl
                        inputType="email" inputId="email" placeHolder="Email Adress" isRequired={true}
                        containToolTip={true} toolTipContent="Enter the email assosiated with your account to reset your password.
                                    Example: johndoe@gmail.com" onChangeCallback={setEmail} />

                    <Button className="btn" content="Send Password" onClickCallback={SendForgotPasswordRequest} />

                    <p className="text">Don't have an account? <NavLink to="/signup">Signup!</NavLink></p>
                </form>
            </main>
        </>
    )
};

export default Forgotpassword;
