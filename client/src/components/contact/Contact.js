import { React } from "react";
import Navbar from "../common/Navbar";
import { dashBoardLinkList } from "../../assets/links";

const Contact = () => {
    return <Navbar links={dashBoardLinkList} currentActive="Contact Us"/>
};

export default Contact;
