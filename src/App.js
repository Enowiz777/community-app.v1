import React from 'react';
import Login from 'Login';
import firebaseApp from 'BE/firebase';
import Router from 'Router/router.js';

function App() {
  const LoggedIn = false;

  return (
  <>
    {
      LoggedIn ? 
      <Login /> : 
      <Router />
    } 
  </>
  );
}

export default App;
