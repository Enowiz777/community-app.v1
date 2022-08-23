import React from "react"
import {auth } from "BE/firebase";
import {useNavigate } from "react-router-dom";

const Home = () => {
    const history = useNavigate();
    const onLogOutClick = () => {
        auth.signOut();
        history("/");
    };

    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
            <div>Home</div>
        </>
        
    );
}

export default Home;