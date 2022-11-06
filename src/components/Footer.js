import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";


function Footer() {
  return( 
  <div className="footer">
    <div className="socialMedia">
        <a href = "https://www.instagram.com/official.kamalissa/"><InstagramIcon /></a>
        <a href = "https://www.facebook.com/profile.php?id=100071127400229"><FacebookIcon /></a>
        <a href='https://www.linkedin.com/in/kamal-issa-075636204/'><LinkedInIcon /></a>
    </div>
    <p>&copy; 2022 kamalissa.com</p>
  </div>
  );
}

export default Footer