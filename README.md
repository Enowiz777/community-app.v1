# Young Professional

- This website is a community website.

# DEV REPORT

20220818

1. Initiated ReactJS project.
2. Installed TailwindCSS
3. Initiated TailwindCSS
4. Add the paths to all of your template files in your 'tailwind.config.js'
```
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. Created a form FE

20220819

- Familarize with the Firebase interface.

Work on the BE:
1. Create a Firebase Project called "sb-young-professionals"
2. Create a web app.
3. Register an app on your React Project.
- Then, initialize Firebase and begin using the SDKs for the products you'd like to use.
Steps:
a. npm install firebase
b. create a separate .js file that handles the backend communication.
src/BE/firebase.js
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  <API key information>
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
```
c. Validate access by console.logging firebaseApp.

4. Secure your API keys
a. Create .env file
b. Store value in variables
c. Use variables from .env file. 
d. Create a real-time DB and include that var file in there. 

5. Create a router for later routes

6. Brainstorm routes

- Home
- Chat
- Videos
- Photos
- Job offer
- Contacts

7. Create a router
a. npm install react-router-dom@6
b. 

20220822

1. Create a login to take inputs.
- created a useState that takes input onChange.

2. Create new button. 
3. 

20220824

1. Create Google, Facebook, Twitter logins.

- Make Google login
- If it works, go for it. 


20220825

Firestore.
- Set up NoSQL database. 
- Create a input that post data in the DB. 
- Pass a parameter of userObject once the user logs in because we can use that data for a profile or comment. 

- Using the Firestore DB - I created a real-time chat room. 

20220826

- Create a page structure and navbar at home
- I set up the router and the navbar - basic

- CSS to design the front home page. 

20220829

- Create a storage from the firebase.
- Install uuid to create a random unique id
```
npm install uuid
```
- learn to create reference to firebase storage 
- learned to lsit items
- Cannot create setState array of list items.
