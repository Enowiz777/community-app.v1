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
            // add newly added url into URLs state.
            setURLs((oldArray => [...oldArray,url]));
        })
        .catch((error) => {
            console.log(error);
          // Handle any errors
        });
        console.log(URLs);

    }

    function handleEnter (e) {
        handleUpload();
        setFilename("");
    }


    // handle Test
    const handleTest = () => {
  
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
                setURLs((oldArray => [...oldArray,url]));
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
                    console.log(event.target.files[0]);
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
        <input className="btn btn-blue ml-4" type="button" value="Test" onClick={handleTest}/>
        <br />
        <br />
       {        
        // display picture
        URLs &&
        ( 
        URLs.map((item) =>
            <div>
            <img src={item}></img>
          
            </div>
        )
        )
        }
        

               

      </div>
    );
}

export default Photos;