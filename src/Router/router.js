import React from 'react';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

// Import components
import Login from 'Login';
import Home from "Components/home";
import Chat from "Components/chat";
import Photos from "Components/photos";
import Videos from "Components/videos";
import Jobs from "Components/jobs";

const Router = ({isLoggedIn}) => {
    return (
    <BrowserRouter>
        <Routes>
            { isLoggedIn ? 
            <Route path="/" element={<Login />} />
            :
            <Route path="/" element={<Home />} />
            }
            <Route path="/chat" element={<Chat />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/jobs" element={<Jobs />} />
        </Routes>
  </BrowserRouter>
    );
  }
  
export default Router;
  