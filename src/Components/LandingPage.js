//this page will be the maintenance page for GLelectronics
//this file mainly deals with the header

import React from "react"
import "tailwindcss/tailwind.css";
import glElectronicsLogo from "../WebImg/GL-electronics-png.png";
import CallNum from "./CallNum";

function LandingPage(){
    const headerStyle = {
        backgroundColor: "rgb(213,213,213)",
        boxShadow: '0 10px 6px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        width: '100%',
        fontSize: '1.5rem',
        padding: '1rem',
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center',
      };

      const homeStyle = {
        fontWeight: 'bold',
        color: "rgb(150,0,0)",
      };

      const logoStyle = {
        width: '150px', // Adjust the width as needed
        height: '100px', // Maintain aspect ratio
        
    };

    return (
        <div style={headerStyle}>
             <img src={glElectronicsLogo} alt="GL Electronics Logo" style={logoStyle} />
             <CallNum/>
        </div>
        
    )
}

export default LandingPage