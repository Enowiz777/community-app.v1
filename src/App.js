import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import Router from "./Router/Router.js";
import {app} from "./BE/firebase.js";
import "index.css";

function App() {

  // Check Firebase App connection
  if (app.name) {
    console.log('Firebase app is connected');
  } else {
    console.log('Firebase app is not connected');
  }

  return (
    <>
      <Router />
    </>
  );
}

export default App;
