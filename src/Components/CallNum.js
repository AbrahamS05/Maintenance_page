//CallNum.js

import React from "react";


function CallNum() {
    const bubbleStyle = {
        display: 'flex',
        backgroundColor: "rgb(125,0,0)",
        boxShadow: '0 6px 6px rgba(0,0,0,0.2)',
        borderRadius: '10px',
        padding: '10px',
        marginLeft: 'auto', // Adjust the spacing between the bubble and the links
    };
  
    return (
      <div style={bubbleStyle}>
        <span style={{color: 'white'}}>Call (480)757-5148</span>
      </div>
    );
  }

  export default CallNum