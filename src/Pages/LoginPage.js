import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }

    return (
      <div>
        { !showCreateAccount ? (
          <div>
            <h1>Login</h1>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button onClick={submitHandler}>Login</button>
              <br />
              <button onClick={handleCreateNew}>Create New</button>
            </form>
          </div>
        ) : (
          <div>
          <h1>Create New</h1>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <br />
            <button onClick={createHandler}>Create</button>

          </form>
        </div>

        )
      
      
      }
  

      </div>
    );
  };
  
  export default LoginPage;