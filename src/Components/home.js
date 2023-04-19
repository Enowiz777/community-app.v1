import React, {useState, useEffect } from "react"
import {db} from "../BE/firebase.js";
import { collection, addDoc } from "firebase/firestore"; 



function Home() {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      const docRef = await addDoc(collection(db, "nweets"), {
        name: "Tokyo",
        country: "Japan"
      });
      console.log("Document written with ID: ", docRef.id);
      setNweet("");
      console.log("pressed");
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNweet(value);
    };
    return (
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
      </div>
    );
}

export default Home;