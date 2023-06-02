import React, {useState, useEffect } from "react"
import {db} from "../BE/firebase.js";
import { collection, addDoc } from "firebase/firestore"; 

function Chat({userObj}) {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      // const docRef = await addDoc(collection(db, "nweets"), {
      //   name: "Tokyo",
      //   country: "Japan"
      // });
      // console.log("Document written with ID: ", docRef.id);
      setNweet("");
      console.log("pressed");
      console.log(nweet);
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
              <div class="flex flex-col space-y-2">
                <div class="flex items-start">
                  <div class="bg-blue-500 text-white rounded-lg p-2">
                    <p class="text-sm">Hello!</p>
                  </div>
                  <p class="text-xs text-gray-500 ml-2">12:30 PM</p>
                </div>
                <div class="flex items-end">
                  <div class="bg-gray-200 text-gray-800 rounded-lg p-2">
                    <p class="text-sm">Hi there!</p>
                  </div>
                  <p class="text-xs text-gray-500 ml-2">12:32 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 bg-white">
            <div class="flex rounded-lg border border-gray-300">
              <input type="text" placeholder="Type a message..." class="flex-1 p-2 focus:outline-none" />
              <button class="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chat;