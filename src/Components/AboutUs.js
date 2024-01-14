import React from "react";

function AboutUs(){

    const paraStyle = {
        marginTop: '200px',
        padding: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        
        //backgroundColor: 'black',

    }

    const listItemStyle = {
        fontSize: '1.2rem', // Adjust the font size as needed
        
    };


    return (
        <div>
            <p className="text-lg" style={{ ...paraStyle, ...listItemStyle }}>
                <span className="list-disc list-inside">
                    <span className="block">
                        Thank you for visiting our website!
                    </span>
                    <span className="block">
                        We're currently hard at work behind the scenes to bring you an enhanced online experience.
                    </span>
                    <span className="block">
                        While our site is under construction, we appreciate your patience and understanding.
                    </span>
                    <br /> {/* Line break */}
                    <span className="block">
                        In the meantime, feel free to reach out to us through our phone number located at the top. 
                    </span>
                    <span className="block">
                        Additionally at the bottom you can find our email if you have any inquiries
                        or if there's anything specific you're looking for. 
                    </span>
                    <br/>
                    <span className="block">
                        We can't wait to share the finished product with you soon!
                    </span>
                </span>
            </p>
        </div>
    );
}

export default AboutUs