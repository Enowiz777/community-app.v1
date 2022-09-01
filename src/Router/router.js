import React from 'react';
import ReactDOM from "react-dom/client";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";

// Import components
import Login from 'Login';
import Home from "Components/home";
import Chat from "Components/chat";
import Photos from "Components/photos";
import Videos from "Components/videos";
import Jobs from "Components/jobs";

/* 
Note: 
- If logged in, it routes to Home
*/

const Router = ({isLoggedIn, userObj}) => {
    return (
      <>
        { isLoggedIn ? 
        <navbar className="flex space-x-10 justify-center">
          <Link className="border-sky-300 focus:border-b-[5px] px-2" to="/">Home</Link>
          <Link className="border-sky-300 focus:border-b-[5px] px-2" to="/chat">Chat</Link>
          <Link className="border-sky-300 focus:border-b-[5px] px-2" to="/jobs">Jobs</Link>
          <Link className="border-sky-300 focus:border-b-[5px] px-2" to="/photos">Photos</Link>
          <Link className="border-sky-300 focus:border-b-[5px] px-2" to="/videos">Videos</Link>
        </navbar>
        :
        <></>
        }
        <Routes>
          <Route path="/">
          { isLoggedIn ? 
            <Route index element={<Home userObj={userObj}/>}/>
            :
            <Route index element={<Login />}/>
          }
            <Route path="chat" element={<Chat userObj={userObj}/>} />
            <Route path="jobs" element={<Jobs userObj={userObj} />} />
            <Route path="photos" element={<Photos userObj={userObj} />} />
            <Route path="videos" element={<Videos />} />
          </Route>

        </Routes>
      </>
    );
  }

  /* Route

      <navbar className="flex space-x-10">
      <div><a href="http://localhost:3000/">Home</a></div>
      <div><a href="http://localhost:3000/chat">Chat</a></div>
      <div>Jobs</div>
      <div>Photos</div>
      <div>Videos</div>
    </navbar>
    <Routes>
    { isLoggedIn ? 
    <Route path="/" element={<Home userObj={userObj}/>}>
    :
    <Route path="/" element={<Login />}>
    }
    <Route path="/chat" element={<Chat />} />
    <Route path="/photos" element={<Photos />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="/jobs" element={<Jobs />} />
      </Route>
      </Route>
    </Routes>
   
   */

export default Router;
