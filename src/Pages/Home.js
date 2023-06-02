import React, {useState, useEffect } from "react"
import {db} from "../BE/firebase.js";
import { 
    collection, 
    addDoc, 
    getDocs,
    getCountFromServer,
    query
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Home() {
    
    const [communityData, setCommunityData] = useState([]);
    
    // Toggle form
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [buttonText, setButtonText] = useState('Show Form');

    // Save UserData
    const [userData, setUserData] = useState("");
    
    // destructure useForm
    const { register, 
            handleSubmit, 
            formState: { errors },
            resetField
        
        } = useForm();

    // getData function will get the data from the firestore DB.
    const getData = async () => {
        // query the documents
        const q = query(collection(db, "community"));

        // go through each document and store data in an array
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            const dataObject = {
                // destruct and put in each data
                ...doc.data(),
                id: doc.id,

            };
            setCommunityData((oldArray ) => [dataObject, ...oldArray]);
            // console.log(doc.id, " => ", doc.data());
        });
    }

    // get userdata
    const getUserData = async () => {

        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          const displayName = user.displayName;
          const email = user.email;
          const photoURL = user.photoURL;
          const emailVerified = user.emailVerified;
          setUserData(email);
          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
        }
        
    }


    // run useEffect hook every render (without [])
    // run only in an inital render
    useEffect( () => {
        getData(); 
        getUserData();
    }, []);

    // Toggle form handler
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        setButtonText(isFormVisible ? 'Show Form' : 'Hide Form');

      };

    // Submit handler
    const onSubmit = async (data) => {
        // clear existing array
        setCommunityData([]);
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "community"), 
            data
        );
        console.log("Document written with ID: ", docRef.id);
        resetField("name");
        resetField("description");
        resetField("email");
        resetField("password");
        getData();
    }



    return (
      <div>
        <h1 className="text-center my-3">Community News</h1>
        
        {/* Toogle logic */}
        {/* Create a form  */}
        {isFormVisible && (
            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <h2 className="block">Name</h2>
                    <input 
                        className="shadow-sm w-2/5 h-7 bg-[#f6e58d] focus:bg-white" 
                        type="text"
                        {...register("name")}
                    />
                </div>

                <div className="mb-6">
                    <h2 className="block">Description</h2>
                    <textarea 
                        className="shadow-sm w-2/5 h-24 bg-[#f6e58d] focus:bg-white"
                        rows="4" 
                        cols="50"
                        {...register("description")}
                    >
                    </textarea>
                </div>
                <div className="mb-6">
                    <h2 className="block">Email</h2>
                    <input 
                        className="shadow-sm w-2/5 h-7 bg-[#f6e58d] focus:bg-white"
                        type="text" 
                        {...register("email")}
                    />
                </div>
                <div className="mb-6">
                    <h2 className="block">Password</h2>
                    <input 
                        className="shadow-sm w-2/5 h-7 bg-[#f6e58d] focus:bg-white" 
                        type="password" 
                        {...register("password")}
                    />
                </div>
                <div className="mb-6">
                    <button type="submit" className="m-2 p-3 bg-slate-300 hover:bg-black hover:text-white">Submit </button>
                </div>
            </form>
        )}

        <button onClick={toggleForm} className="my-3 p-3 bg-slate-300 hover:bg-black hover:text-white">{buttonText}</button>
        
        <div>{userData}</div>
        {/* Create tables after getting the data from the firebase */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Password
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        communityData.map((eachData)=> (
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {eachData.id}
                                </th>
                                <td className="px-6 py-4">
                                    {eachData.name}
                                </td>
                                <td className="px-6 py-4">
                                    {eachData.description}
                                </td>
                                <td className="px-6 py-4">
                                    {eachData.email}
                                </td>
                                <td className="px-6 py-4">
                                    {eachData.password}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default Home;