import React from 'react';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (

    

<footer className='footer'>

        <p class="text">© 2023 MFER Friends —<a href="https://twitter.com/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@MFER</a></p>
        

        <div className='social'>
        <FaInstagram classname='icons'/>
        <FaFacebook classname='icons'/>
        <FaTwitter classname='icons'/>
        <FaLinkedin classname='icons'/>

         </div>

        <p class="text">Powered by:&nbsp;<a href="http://www.brdigitech.com" target="blank" class="text-blue-600 hover:text-blue-200">
    <i>Button R Digitech (bRd)</i></a></p>
    

       
  
    

    </footer>
    
   
  );
};

export default Footer;





