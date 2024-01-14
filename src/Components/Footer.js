//Footer.js

import React from "react";

function Footer(style){
    const footerStyle = {     
        //backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: 0,
        minHeight: '75vh',

        width: '100%'
          
    }

    const infoBox = {
        padding: '15px',
        backgroundColor: 'rgb(213,213,213)',
        minHeight: '25vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width:'100%',

    }

    const copyStyle = {
        fontSize: '1rem',
        position: 'absolute',
        display: 'flex',
    }

    return(
        <footer style={footerStyle}>
            <div style={infoBox}>
                <span>geoff@glelectronics.net</span>
                <span>8531 E Milagro Ave, Mesa, AZ 85209</span> 
            </div>
            <span style={copyStyle}>&copy; Copyright 2023 </span>
        </footer>
            
    )
}

export default Footer