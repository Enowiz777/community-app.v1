import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {storage } from "../BE/firebase";
import { ref, uploadBytes, listAll  } from "firebase/storage";

const Photos = () => {

    // store the file object that user upload.
    const [selectedImage, setSelectedImage] = useState(null);
    // store the filename that user input.
    const [filename, setFilename] = useState(null);
    // send success message when the picture gets uploaded to the firebase storage.
    const [uploaded, setUploaded ] = useState(false);

    // receive each key that users input and set it to a filename state.
    const handleFilename = (event) => {
        const {
            target: {value}
        } = event;
        setFilename(value);
        
    }   

    const handleUpload = () => {
        setSelectedImage(null)
        // create a reference of the upload (set the filename)
        const storageRef = ref(storage, filename);
        // upload the picture 
        uploadBytes(storageRef, selectedImage).then((snapshot) => {
            setUploaded(true);
          });
    }

    function handleEnter (e) {
        handleUpload();
        setFilename("");
    }


    // handle Test
    const handleTest = () => {
        const listRef = ref(storage);
        listAll(listRef)
            .then((res) => {
            res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
                console.log(folderRef);
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                // console.log(itemRef);
                console.log(itemRef);
            });
            }).catch((error) => {
            // Uh-oh, an error occurred!
            });
    }


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


               

      </div>
    );
}

export default Photos;