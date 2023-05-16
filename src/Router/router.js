import React from 'react';
import ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import styled from "styled-components";


// Import pages
import Home from "Pages/Home";
import Chat from "Pages/Chat";
import Photos from "Pages/Photos";
import Videos from "Pages/Videos";
import Jobs from "Pages/Jobs";
import Auth from "Pages/LoginPage";

// Import Components
import Header from "Components/Header";
import Footer from "Components/Footer";
import Navbar from "Components/Navbar";


const Content = styled.div`
  margin: 0 72px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;


const Router = ({isLoggedIn, userObj}) => {
    return (
      <>
        <Header />
        <Navbar />
        <FlexWrapper>
          <Content>
            <Routes>
              <Route path="/">
                <Route index element={<Home />}/>
                <Route path="chat" element={<Chat/>} />
                <Route path="jobs" element={<Jobs userObj={userObj} />} />
                <Route path="photos" element={<Photos userObj={userObj} />} />
                <Route path="videos" element={<Videos />} />
                <Route path="auth" element={<Auth />} />
              </Route>
            </Routes>
          </Content >
          <Footer />
        </FlexWrapper >
      </>
    );
  }

export default Router;
