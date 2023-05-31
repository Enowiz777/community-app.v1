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

20220830

- Make the pictures display on the photos page.
- Mix of Promise and Async...await
- Learned about PRomise and Async and written on the note. 
- Try using Async...await always be consistent.

20220901

- Create a form that takes in the Title and Description
- Make the Title and Desciption gets printed on the page as they submit. 
  - Maybe change the font and styles to make it readible.
- Date posted should automatically be generated.


20220902

Idea:
- Create like buttons or going button.
- Create heart buttons. 
- Create a checkin button. 

- Change the navbar - if select create a color

20220908

Idea:

=============
PENDING IDEA
=============
1. Create like buttons
2. Create heart buttons
3. Create a checkin button.
4. Create a memberlist on the left side. 

20230406

- import firebase service.


# Reforming the website

1. Create a community website.

2. Create a globalStyle

- Install styled-components.


- Reset CSS.
(in the tech doc)

- Add GlobalStyle component inside the index.js
- import tailwind from app.js.
- Create a router.js


Next... create a header and footer.

20230415

- Added the Header and the Footer
- Create a margin on the right and the left on the Content Section
- Connect your app to Firebase.
- Create a 게시판 like Craiglist
https://codepen.io/hongjiseong/pen/gOOrdvL

20230420

- Use useForm() hook to save you time on creating the form. 

https://codesandbox.io/s/login-form-forked-9so04x?file=/src/App.js

- It may be work it to create a form without the hook because it helps you understand how it works. 

20230421

- Creating the field with 

- Saving codes without using useForm() react hook.
```js
 // create states that will contain variable.
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleInputChange = (event) => {
        const {
            target: {value, name}
        } = event;

        if (name == "author"){
            setAuthor(value);
        } else if (name == "description") {
            setDescription(value);
        } else {
            setDate(value);
        }
        
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();


        
      };

    // Get the total count on the articles.
  const getTotal = async () => {
    const coll = collection(db, "community");
    const snapshot = await getCountFromServer(coll);
    console.log('count: ', snapshot.data().count);
  }
  getTotal();

  // test forms


  useEffect(() => {

```

20230424

- Creating many fields are tedious. You can use react-hook-form to make this process simple.

20230425

- Add the data received in the form to Firebase/FireStore DB.
- Display what is in DB in a tabular format.

- Take off: I need to change the useEffect so that it would upate the data everytime the data gets uploaded to db.

20230426

- I finished working on useEffect(). I just make it render in the beginning and called the paint() function whenever the submit button is clicked*. 
- I need to work on the chat section but I can't because I need to first create the authentication app so that the user name informaiton will be displayed on the chat seciton when they start putting data. 
- I can move on to working on photos. I can upload photo from the PC and display them in a grid format.
- Later if I want to, I can create a S3 bucket to store the image. Or I can give option for user to either use the link so that it would store the information on the firstore instead.

20230427

- Work on the photo upload function. I will store photos in the Storage in the Firebase. 
- Create the photo upload and user can decide the name; need to clean the code. 
- Need to get download files url and show image of the storage. Display in a grid format.

20230505

Plan.
- Create a img folder within the storage and make the image gets stored in the storage. 

- Before the whole thing start, useEffect will fetch the data from the backend and store them in the state.

- When the user input the data, it will be add both to the state and the backend. This way, the user will still see the data gets painted. Once the page is refreshed, it will get the fresh data from the storage. 

- What I learned:
getDownloadURL 


20230504

- Create a grid for photo booth.
- Then, photo should display the photo and the title of the photo.

20230509 
- Worked on the CSS of the header and the footer. 
- Created the LOGO and LOGIN div in header. 
- Made header sticky. 
- Made the footer appear on the bottom of the content or body.

20230510
- Styling the NavBar.
- Add Contact page into the NavBar.

20230511
- Build an authentication page.
- Read the firebse doc.
- 

20230515
- Built an authentication page. 
- Need to test existing user
- Create create user option. 
- The UI is already there. I have it.

20230517
- Allow users to create the login account. 
- Worked on the loginform CSS
- I should just take it from the web and use it. 
- Make it simple. 
- align
- Do the later design.

20230523
- Worked on the UI of the login page. 
- I need to get the user logged in information and post it to the Firebase Db. 
- 

20230525
- Get user logged in information
- Add to the table when the user put an inpute.

Try to create a zeroboard type of community board where the user can post contents.

Examples: https://www.missycoupons.com/zero/board.php#id=pet&no=4569

20230530
- Created a Hide and Show form button
- I need to change the ID to List and start counting 1 to 100
- Start getting user ID information from the login data. Then, use that information to create an input.
- Remove Password input.
- People should be able to click on the table to view the content.