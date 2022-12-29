import { React } from "react";
import { Link } from "react-router-dom";

const Signup = () => (
  <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="#" className="nav-logo">
            SiteLogo
          </a>
        </div>
      </div>
    </nav>

    <main className="page">
      <h1>Create a new account</h1>
      <form>
        <div className="form-control">
          <input type="email" id="email" placeholder="Email Address" required />
          <div className="tooltip">
            <span className="tooltiptext">Example: johndoe@gmail.com</span>
          </div>
        </div>

        <div className="form-control">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <div className="tooltip">
            <span className="tooltiptext">
              Password must be atleast 6 characters long.
              <br />
              Password must contain:
              <br />
              Upper case letter
              <br />
              Lower case letter
              <br />
              Special character
              <br />A number.
            </span>
          </div>
        </div>

        <div className="form-control">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <div className="tooltip">
            <span className="tooltiptext">
              Confirm password should match password.
            </span>
          </div>
        </div>

        <button className="btn">Create Account</button>

        <p className="text">
          Already have an account? <a href="login.html">Login</a>
          <br />
          <a href="forgotpassword.html">Forgot Password?</a>
        </p>
      </form>
    </main>

    <footer className="page-footer">
      <p>
        &copy; <span id="date"></span>
        <span className="footer-logo"> SiteLogo </span>Built by MBI & SS
      </p>
    </footer>
  </>
);

export default Signup;
