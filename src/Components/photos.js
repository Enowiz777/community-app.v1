import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import {GetStorage, Ref, UploadString, ListAll, GetDownloadURL  } from "BE/firebase";
import { list } from "firebase/storage";
import { data } from "autoprefixer";

const Photos = ({userObj}) => {
    const [attachment, setAttachment] = useState();
    const [photoURL, setPhotoURL] = useState([]);
    let urlArray = "";
    useEffect(() => {
        const storage = GetStorage();
        const FolderRef = Ref(storage, 'pictures');
        let arraytest = [];
        function urlReceiver(url) {
            arraytest.push(url);
        }


        try {
            const waitForList = async () => 
            {
                ListAll(FolderRef)
                .then((res) => {
                    res.items.forEach((itemRef)=> {
                        GetDownloadURL(itemRef).then((url)=>
                        {
                            urlReceiver(url);
                        })
                    });
                });
            }   
            waitForList();
        } finally {
            arraytest.map((item)=> {
                console.log(item);
            })
        }


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
            {photoURL.map((item) => 
            <li>
                {item}
            </li>
            )}
            

        </div>
    );
}

export default Photos;