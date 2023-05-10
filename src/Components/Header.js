import React, {useState, useEffect } from "react"
import styled from "styled-components";

const Header = () => {
    
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        height: 45px;
        position: sticky;
        top: 0;
        padding: 20px;
    `;
    const Text = styled.button`
        color: white;
        margin: 0px 30px;
        font-weight: 700;
        :hover {
            color: yellow;
        }
    `;

    return(
        <Container>
            <Text>DEMO LOGO</Text>
            <Text>LOGIN</Text>
        </Container>
    );
}

export default Header;