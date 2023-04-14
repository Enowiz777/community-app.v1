import React, {useState} from 'react';
import { auth, createUser, signInUser, signInPopup, GoogleUser, OAuthProviderForYahoo } from "BE/firebase";

// Logo
import YahooLogo from "img/yahoo.svg"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Checks whether the user is a new or a old user.
    const [newAccount, setNewAccount] = useState(false);
    const [isLoggedIn, setIsLogedIn] = useState(false);

    // OnChange Handler
    const onChange = (event) => {
        
        const {
            target: { name, value },
          } = event;
          if (name === "email") {
            setEmail(value);
          } else if (name === "password") {
            setPassword(value);
          }
          
      };
    
    // Submit handler
    const onSubmit = async (e) => {
        e.preventDefault();
        // if newAccount, create a new user. if not, log them in with the existing account.
        try {
            let data;
            if (newAccount) {
              data = await createUser(auth, email, password)
            } else {
              data = await signInUser(auth, email, password)
              setIsLogedIn(true);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    // Google User Handler.
    const onGoogleUser = () => {
        const provider = new GoogleUser();
        signInPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleUser.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleUser.credentialFromError(error);
                // ...
                console.log(error);
            });
        }

        // Facebook handler.

    const onYahooUser = () => { 
        const provider = new OAuthProviderForYahoo('yahoo.com');
        signInPopup(auth, provider)
        .then((result) => {
            // IdP data available in result.additionalUserInfo.profile
            // ...

            // Yahoo OAuth access token and ID token can be retrieved by calling:
            const credential = OAuthProviderForYahoo.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
        })
        .catch((error) => {
            // Handle error.
        });
    }

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border-[7px] border-sky-500 drop-shadow-lg py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Young Professionals Login
                </h1>
            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    name="email"
                    className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    name="password"
                    className={`w-full p-2 text-primary border-2 focus:border-sky-500 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
            </div>
            
            <input 
                className={`mb-3 bg-sky-500 hover:bg-sky-700 py-3 px-5 text-sm
                            text-white rounded-xl border border-green 
                            focus:outline-none focus:border-green-dark`}
                type="submit" 
                value={newAccount ? "Create Account" : "Log In"}
            />
            </form>
            <div className="flex flex-col">   
                <button type="button" className="text-white bg-[#1e6cea] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                onClick={onGoogleUser}
                >
                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                </button>
                
                <button type="button" className="text-white bg-[#3D1EAF] hover:bg-[#7F65FA]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 justify-center text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                onClick={onYahooUser}
                >
                    <span><img className="mr-2"src={YahooLogo} alt="Yahoo Logo" width="20" height="20"/></span>
                    Sign in with Yahoo
                </button>
                
                <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                    Sign in with Twitter
                </button>
               
            </div>
        </div>
    </div>
    );
};

export default Login;