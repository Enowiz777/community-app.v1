import React, {useState, useEffect } from "react"
import styled from "styled-components";

const Footer = () => {
    
    const Footer = styled.div`
    bottom:0;
    left:0;
    width:100%;
    height: 150px;
    background-color: #D0DAEE;
    `;

    return(
        <footer className=" bottom-0 left-0 w-full bg-[#55efc4] py-32">
            <div className="container mx-auto text-center">
                <p className="text-gray-600">This is the footer content.</p>
            </div>
      </footer>
    );
}

export default Footer;