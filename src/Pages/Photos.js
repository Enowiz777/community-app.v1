import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {storage } from "../BE/firebase";
import { 
    ref, 
    uploadBytes, 
    listAll,
    getDownloadURL
    
} from "firebase/storage";

const Photos = () => {

    // store the file object that user upload.
    const [selectedImage, setSelectedImage] = useState(null);
    // store the filename that user input.
    const [filename, setFilename] = useState(null);
    // send success message when the picture gets uploaded to the firebase storage.
    const [uploaded, setUploaded ] = useState(false);
    // picture ulrs
    const [URLs, setURLs] = useState([]);


    // User inputs -> update filename state.
    const handleFilename = (event) => {
        const {
            target: {value}
        } = event;
        setFilename(value);
        
    }   

    const handleUpload = async () => {
        setSelectedImage(null)
        // create a reference of the upload (set the filename)
        const storageRef = ref(storage, `img/${filename}`);
        // upload the picture 
        const uploadPic = await uploadBytes(storageRef, selectedImage).then((snapshot) => {
            setUploaded(true);
          });

        // once uploaded make sure to add it to the state.
        const addPicToURLs = await getDownloadURL(ref(storage, `img/${filename}`))
        .then((url) => {
          const picObj = {};
          picObj.name=storageRef.name;
          picObj.url=url;
          // add newly added url into URLs state.
          setURLs((oldArray => [...oldArray,picObj]));
        })
        .catch((error) => {
            console.log(error);
          // Handle any errors
        });


    }

    function handleEnter (e) {
        handleUpload();
        setFilename("");
    }

       
       
    // useEffect will only run once in the beginning.
      useEffect(() => {
        // Fetch data from the firebase/storage.
        const listRef = ref(storage, 'img/');
        listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {

            
            // All the items under listRef.
            getDownloadURL(itemRef).then((url)=>{
              // create a picture object
              // holds name and url
              const picObj = {};
              picObj.name=itemRef.name;
              picObj.url=url;
                setURLs((oldArray => [...oldArray,picObj]));
            })
          });
        }).catch((error) => {
          // Uh-oh, an error occurred!
        });


    }, []);


    return(
        <div>
        {/*         
        // show the preview of the image that you will upload.
        selectedImage && (
          <div>
            <h1>Preview of the image that you will upload.</h1>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
          </div>
        ) */}
        {
           selectedImage ? 
           
           (<div>
           <h1>Preview of the image that you will upload.</h1>
           <img
             alt="not found"
             width={"250px"}
             src={URL.createObjectURL(selectedImage)}
           />
           <br />
         </div>) : <div></div>
        }


        <br />
        <br />
        <form>
            <label>Name your file: </label>
            <input 
                className="shadow-sm w-100 h-7 bg-gray-200 focus:bg-white" 
                type="text" 
                name="picName"
                onChange={handleFilename}
                value={filename}
            />
            <input className="btn btn-blue ml-4" type="button" value="Upload" onClick={handleEnter}/>
            <br />
            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                    setUploaded(false);
            }}
            />
        </form>
        {
            uploaded && 
            (
                <div>
                    Image is uploaded ! :)
                </div>
            )
        }
        <br />
        <br />
        <div className="container grid grid-cols-3 gap-7 mx-auto">
        {        
            // display picture
            
            URLs &&
            ( 
              URLs.map((item) => 
                <div>
                  <img className="h-80 w-full rounded"src={item.url} />
                  <h1>{item.name}</h1>
                </div>
              )
                
            )
          }
        </div>
        

               

      </div>
    );
}

export default Photos;