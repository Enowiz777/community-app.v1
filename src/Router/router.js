import React from 'react';
import ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";

// Import components

import Home from "Components/home";
import Chat from "Components/chat";
import Photos from "Components/photos";
import Videos from "Components/videos";
import Jobs from "Components/jobs";

/* 
Note: 
- If logged in, it routes to Home
*/

/*
Create a route to a different page (components)

*/

const Router = ({isLoggedIn, userObj}) => {
    return (
      <>
        <Routes>
          <Route path="/">
            <Route index element={<Home userObj={userObj}/>}/>
            <Route path="chat" element={<Chat userObj={userObj}/>} />
            <Route path="jobs" element={<Jobs userObj={userObj} />} />
            <Route path="photos" element={<Photos userObj={userObj} />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </>
    );
  }

export default Router;
