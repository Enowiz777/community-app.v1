import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {GetStorage, Ref, UploadString, ListAll, GetDownloadURL  } from "BE/firebase";
import { list } from "firebase/storage";
import { data } from "autoprefixer";

const Photos = ({userObj}) => {
    const [attachment, setAttachment] = useState();
    const [photoURL, setPhotoURL] = useState([]);
    
    useEffect(() => {
       
        const getUrls = async () => {
            const storage = GetStorage();
            const listRef = Ref(storage, "pictures")
            const list = await ListAll(listRef);
            const items = list.items.map((ref) => GetDownloadURL(ref));
            const urls = await Promise.all(items);
            setPhotoURL(oldArray => [...oldArray, ...urls]);
        }
        getUrls();

    }, []);
    
    const onFileChange = (event) => {
        // extract Filelist object from the event.
        const {
          target: { files },
        } = event;
        
        // I must choose the first index to select the File object. 
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
    const {
        currentTarget: { result },
        } = finishedEvent;
        setAttachment(result);
    };

    // This will turn to a long URL that you can access.
    reader.readAsDataURL(theFile);
    };
    const onSubmitAttadchment = async (event) => { 
        event.preventDefault();

        // Prepare upload

        // get storage location to save
        const storage = GetStorage();
        const storageRef = Ref(storage, `pictures/${uuidv4()}`);
        
        // Data URL string upload
        UploadString(storageRef, attachment, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        });

    }

    const onClearAttachment = () => setAttachment(null);
    return(
        <div>
            <h1>Upload your photo:</h1>
            <input type="file" accept="image/*" onChange={onFileChange} />
            {attachment && (
                <div>
                    <img src={attachment} width="300px" height="200px" />
                    <button onClick={onSubmitAttadchment}>Submit</button>
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
            <div>
                {photoURL.map((item) => 
                <li>
                    <img src={item} />
                </li>
                )}
            </div>  
            

        </div>
    );
}

export default Photos;