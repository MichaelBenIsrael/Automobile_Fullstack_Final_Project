import { React } from "react";
import { Link } from "react-router-dom";

const Login = () => (
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
      <h1>Login to your account</h1>
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

        <div style={{ textAlign: "center" }}>
          <input type="checkbox" name="remember" id="remember" />
          <span>Remember Me</span>
        </div>
        <button className="btn">Login</button>

        <p className="text">
          Don't have an account? <Link to="signup">Signup</Link>
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

export default Login;
