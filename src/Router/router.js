import React from 'react';
import ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import styled from "styled-components";


// Import components
import Home from "Components/Home";
import Chat from "Components/Chat";
import Photos from "Components/photos";
import Videos from "Components/videos";
import Jobs from "Components/jobs";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";

const Content = styled.div`
  margin: 0 120px;
`;


const Router = ({isLoggedIn, userObj}) => {
    return (
      <>
        <Header />
        <Navbar />
        <Content>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}/>
              <Route path="chat" element={<Chat/>} />
              <Route path="jobs" element={<Jobs userObj={userObj} />} />
              <Route path="photos" element={<Photos userObj={userObj} />} />
              <Route path="videos" element={<Videos />} />
            </Route>
          </Routes>
        </Content>
        <Footer />
      </>
    );
  }

export default Router;
