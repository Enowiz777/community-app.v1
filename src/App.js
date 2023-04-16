import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import "index.css";
import Router from "./Router/Router.js";
import {app} from "./BE/firebase.js";

function App() {
  console.log(app);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
