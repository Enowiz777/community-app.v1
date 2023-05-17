import React, {useState, useEffect } from "react"
import styled from "styled-components";
import { getAuth, signOut } from "firebase/auth";

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
        z-index: 3;
    `;
    const Text = styled.button`
        color: white;
        margin: 0px 30px;
        font-weight: 700;
        :hover {
            color: yellow;
        }
    `;

    // sign out the user once button is clicked.
    const signOutHandler = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Signed out");
        }).catch((error) => {
            console.log("Sign out failed.");
        });
    };


    return(
        <Container>
            <Text>DEMO LOGO</Text>
            <Text onClick={signOutHandler}>LOGOUT</Text>
        </Container>
    );
}

export default Header;