import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {GetStorage, Ref, UploadString, ListAll, GetDownloadURL  } from "BE/firebase";

const Photos = ({userObj}) => {
    const [attachment, setAttachment] = useState();
    const [photoURL, setPhotoURL] = useState([]);
    let URLsArray = [];
    useEffect(() => {
        const storage = GetStorage();
        const listRef = Ref(storage, 'pictures');
        ListAll(listRef)
        .then((res) => {
        res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
            // All the items under listRef.
                GetDownloadURL(itemRef)
                .then((url) => {
                    URLsArray.push(url)
                })
            });
        }).catch((error) => {
        // Uh-oh, an error occurred!
        });
    }, [URLsArray]);
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
    console.log(URLsArray);
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

        </div>
    );
}

export default Photos;