import React, {useState, useEffect } from "react"
import styled from "styled-components";

const Footer = () => {
    
    const Footer = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height: 150px;
    background-color: #D0DAEE;
    `;

    return(
        <Footer />
    );
}

export default Footer;