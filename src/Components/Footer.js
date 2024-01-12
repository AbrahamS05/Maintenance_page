//Footer.js

import React from "react";

function Footer(style){
    const footerStyle = {     
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: 0,
        minHeight: '90vh',
        width: '100%'
          
    }

    const infoBox = {
        padding: '15px',
        backgroundColor: 'rgb(213,213,213)',
        minHeight: '25vh',
        position: 'relative',
        bottom: 0,
        width:'100%',

    }

    const infoStyle = {
        marginLeft: '5px',
    }

    const copyStyle = {
        fontSize: '1rem',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        bottom: -200,
    }

    return(
        <footer style={footerStyle}>
            <div style={infoBox}>
                <span>geoff@glelectronics.net |</span>
                <span style={infoStyle}>8531 E Milagro Ave, Mesa, AZ 85209</span>
                <h6 style={copyStyle}>&copy; Copyright 2023 </h6>
            </div>
        </footer>
            
    )
}

export default Footer