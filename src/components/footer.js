import React from 'react'
import '../style/app.css'
import * as bsIcons from "react-icons/bs";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as mdIcons from "react-icons/md";
const Footer = () => {
    return (
        <footer className="d-flex  flex-row justify-content-around bg-dark  mt10" id="i">
            <div className="d-flex ">
                <div className="p-2" ><bsIcons.BsTelegram className="text-light" /></div>
                <div className="p-2" ><faIcons.FaInstagram className="text-light" /></div>
                <div className="p-2" ><aiIcons.AiFillTwitterCircle className="text-light" /></div>
            </div>
            <div className="d-flex">
                <div className="text-light p-2" id="number-dir"><aiIcons.AiOutlineMail className="text-light" /></div>
                <div className="text-light p-2" id="number-dir"><span>gmail@mail.com</span></div>
            </div>
            <div className="d-flex">
                <div className="text-light p-2" id="number-dir"><mdIcons.MdCallEnd className="text-light" /></div>
                <div className="text-light p-2" id="number-dir"><span>+00-000-000</span></div>
            </div>
        </footer>
    )
}
export default Footer;
