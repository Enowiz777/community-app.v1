import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import "index.css";
import Router from "./Router/Router.js";
import {app, db} from "./BE/firebase.js";
import { collection, addDoc, getDocs, query  } from "firebase/firestore"; 

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
