import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {storage } from "../BE/firebase";
import { ref, uploadBytes } from "firebase/storage";

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filename, setFilename] = useState(null);

    const storageRef = ref(storage, 'some-child');

    const handleFilename = (event) => {
        const {
            target: {value}
        } = event;
        setFilename(value);
        console.log(filename);
    }   
    function handleEnter (e) {
        setFilename("");
    }

    const handleUpload = () => {
        setSelectedImage(null)
        console.log(URL.createObjectURL(selectedImage));
        console.log(selectedImage.name);
        // uploadBytes(storageRef, selectedImage).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //   });
    }
    return(
        <div>
        <h1>Upload and Display Image usign React Hook's</h1>
  
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={handleUpload}>Remove</button>
          </div>
        )}
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
            <input className="btn btn-blue ml-4" type="button" value="Enter" onClick={handleEnter}/>
            <br />
            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
            }}
            />
        </form>


        

      </div>
    );
}

export default Photos;