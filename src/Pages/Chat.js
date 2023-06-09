import React, {useState, useEffect } from "react"
import {db} from "../BE/firebase.js";
import { collection, addDoc } from "firebase/firestore"; 

function Chat({userObj}) {

    let nextId=0;

    const [nweet, setNweet] = useState("");
    const [chatArray, setChatArry] = useState([]);
    const onSubmit = async (event) => {
      event.preventDefault();
      // const docRef = await addDoc(collection(db, "nweets"), {
      //   name: "Tokyo",
      //   country: "Japan"
      // });
      // console.log("Document written with ID: ", docRef.id);
      setNweet("");
      function getTimestampInSeconds () {
        let given_seconds = Math.floor(Date.now() / 1000);
        let dateObj = new Date(given_seconds * 1000);
        let hours = dateObj.getUTCHours();
        let minutes = dateObj.getUTCMinutes();
        let seconds = dateObj.getSeconds();

        let timeString = hours.toString().padStart(2, '0') + ':' + 
            minutes.toString().padStart(2, '0') + ':' + 
            seconds.toString().padStart(2, '0');
        var pstDate = dateObj.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles"
        })
        return pstDate;
      }
      setChatArry(
        [
          ...chatArray,
          {id: nextId++, chat: nweet, time: getTimestampInSeconds()}
        ]
      );
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNweet(value);
    };
    
    return(
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" value="Nweet" />
        </form>
          <div class="flex flex-col h-screen bg-gray-100">
          <div class="flex-1 p-4">
            <div class="overflow-y-auto max-h-full">
              
           {
              chatArray.map(({id, chat, time}) => {
                return (

                  <div key={id} class="flex flex-col space-y-2 mb-3">
                    <div class="flex items-start">
                      <div class="bg-blue-500 text-white rounded-lg p-2">
                        <p class="text-sm">{chat}</p>
                      </div>
                      <p class="text-xs text-gray-500 ml-2">{time}</p>
                    </div>
                  </div>
                )
              })
            } 
              
              <div class="flex flex-col space-y-2">
                <div class="flex items-start">
                  <div class="bg-blue-500 text-white rounded-lg p-2">
                    <p class="text-sm">Hello!</p>
                  </div>
                  <p class="text-xs text-gray-500 ml-2">12:30 PM</p>
                </div>
              </div>
                {/* <div class="flex items-end">
                  <div class="bg-gray-200 text-gray-800 rounded-lg p-2">
                    <p class="text-sm">Hi there!</p>
                  </div>
                  <p class="text-xs text-gray-500 ml-2">12:32 PM</p>
                </div> */}
              
            </div>
          </div>
         
        </div>
      </div>
    );
}

export default Chat;