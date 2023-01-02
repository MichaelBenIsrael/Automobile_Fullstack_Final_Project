import { React } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";

const Error = () =>
    <>
        <Navbar />
        <main class="page">

            <h1 style="font-size:6rem;">404</h1>
            <h3>Page Not Found</h3>
            <p class="text">It looks like you found a glitch in the matrix..<br /><Link to="dashboard.html" style="text-decoration: none;"><i class="fas fa-arrow-circle-left"></i> Back to Dashboard</Link></p>

        </main>
    </>;

export default Error;
