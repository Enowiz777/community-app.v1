import React, {useState, useEffect} from 'react';
import {auth} from 'BE/firebase';
import Router from 'Router/router.js';


function App() {
  // Init state will check whether the user state has been checked or not within this React app.
  const [init, setInit] = useState(false);
  
  // Check whether the user is logged in or not.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Query loggedin User data.
  const [userObj, setUserObj] = useState(null);

  // onAuthStateChanged adds an observer for changes in user's sign-in state.
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
      
    });
  }, []);

  return (
  <>
    <div className="m-[77px]">
    
    <header className="p-4 font-bold text-[30px] text-white bg-emerald-300 text-center">Welcome to Young Professionals</header>

    {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing..."}
    <footer>&copy; {new Date().getFullYear()} Young Professionals</footer>
    </div>
  </>
  );
}

export default App;
