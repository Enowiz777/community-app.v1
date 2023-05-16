import React, {useState, useEffect} from 'react';
import styled from "styled-components";

// firebase import
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app } from "./BE/firebase";

import Router from "./Router/Router.js";

// import Auth page.
import LoginPage from "./Pages/LoginPage.js";

// import css file.
import "index.css";

const auth = getAuth(app);

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  })
});

  // Check Firebase App connection
  if (app.name) {
    console.log('Firebase app is connected');
  } else {
    console.log('Firebase app is not connected');
  }

  return (
    <>
    { isLoggedIn ? 
      <Router /> : <LoginPage />
    }
    </>
  );
}

export default App;
