import React, { useState } from 'react';
import styled from "styled-components";

import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from "firebase/auth";


// styled components
const StyledInput = styled.input`
    border:0; 
    padding:5px; 
    font-size: 12px; 
    color:black; 
    border:solid 1px #ccc; 
    margin:0 0 10px; 
    width: 70%;
    -moz-box-shadow: inset 0 0 4px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2); 
    box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px; 
    -moz-border-radius: 3px; 
    border-radius: 3px;   
    :focus {
      outline: none !important;
      border-color: #719ECE;
      box-shadow: 0 0 10px #719ECE;
    }
`;

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCreateAccount, setShowCreateAccount] = useState(false);

    // Your authentication logic will go here
  
    // SubmitHandler
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(`username is ${username}. password is ${password}`);
      
      // Check the login credentials
      const auth = getAuth();
      signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      
      // clear username and password
      setUsername('');
      setPassword('');
    }

    // CreateHandler
    const handleCreateNew = (e) => {
      e.preventDefault();
      setShowCreateAccount(true);
    }

    // CreateHandler
    const createHandler = (e) => {
      e.preventDefault();
      console.log(`username is ${username}. password is ${password} confirmPassword is ${confirmPassword}`);
      // confirm password checker
      if (password !== confirmPassword) {
        console.log("Not matching passwords");
      } else {
        console.log("Great it matches!")
      }
      // use the inputs to create a new account.
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user information:" + user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });

      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }

    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-1/4">
        { !showCreateAccount ? (
          <>
            <h1 className="text-center">Login</h1>
            <form>
              <label className="font-bold	">Username:</label>
              <br/>
              <StyledInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              
              <br />
              <label className="font-bold	">Password: </label>
              <br/>
                <StyledInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              
              <br />
              <button className="my-2 p-3 w-[100%] rounded-xl bg-blue-400" onClick={submitHandler}>Login</button>
              <br />
              <button className="my-2 p-3 w-[100%] rounded-xl bg-blue-400" onClick={handleCreateNew}>Create New</button>
            </form>
          </>
        ) : (
        <>
          <h1>Create New</h1>
          <form>
            <label className="font-bold	">
              Username:
            </label>
            <br/>
              <StyledInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            
            <br />
            <label className="font-bold	">
              Password:
            </label>
            <br/>
              <StyledInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
            <br />
            <label className="font-bold	">
              Confirm Password:
            </label>
              <StyledInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            
            <br />
            <button className="my-2 p-3 w-[100%] rounded-xl bg-blue-400" onClick={createHandler}>Create</button>

          </form>
        </>

        )
      }
        <br />
        <button className="my-2 p-3 w-[100%] rounded-xl bg-blue-400">Login with Google</button>
        <br />
        <button className="my-2 p-3 w-[100%] rounded-xl bg-blue-400">Login with Yahoo</button>
        <br />
      </div>
    </div>
    );
  };
  
  export default LoginPage;