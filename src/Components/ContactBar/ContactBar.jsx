import React  from "react"; 
import './ContactBar.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const ContactBar = () =>{
    return (
        <div className="contact_bar_wrapper">
            <div className="contact_bar">
                <a href="http://" target="_blank"
                className="contact_bar_icon"><LinkedInIcon /></a>
                 <a href="http://" target="_blank"
                className="contact_bar_icon">
                    <GitHubIcon />
                </a>
                 <a href="http://" target="_blank"
                className="contact_bar_icon"><InstagramIcon /></a>
                 <a href="http://" target="_blank"
                className="contact_bar_icon"><TwitterIcon /></a>
                <div className="contact_bar_line"></div>
            </div>
            <div className="contact_bar">
                <a
                href="mailto:Harshraj02032002@gmail.com"
                className="contact_bar_email"
                >
                  Harshraj02032002@gmail.com  
                </a>
                <div className="contact_bar_line"></div>
            </div>
        </div>
    );
};
export default ContactBar;