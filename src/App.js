import React, {useState} from 'react';
import firebaseApp from 'BE/firebase';
import Router from 'Router/router.js';

function App() {
  // Check whether the user is logged in or not.
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(isLoggedIn);
  return (
  <>
    <Router isLoggedIn={isLoggedIn} />
  </>
  );
}

export default App;
