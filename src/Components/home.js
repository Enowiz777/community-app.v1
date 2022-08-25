import React, {useState, useEffect } from "react"
import {
    auth, 
    dbAddDoc,
    database, 
    dbCollection, 
    Query, 
    OnSnapshot  } from "BE/firebase";
import {useNavigate } from "react-router-dom";

const Home = ({userObj}) => {
    const history = useNavigate();
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const q = Query(dbCollection(database, "tweets"));
        const unsubscribe = OnSnapshot(q, (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
              data.push(doc.data());
          });
          setNweets(data);
        });
      }, []);

    // Logout handler.
    const onLogOutClick = () => {
        auth.signOut();
        history("/");
    };

    // 
    const onSubmit = async (event) => {
        event.preventDefault();
        
        // Add value to the DB.
        try {
            const docRef = await dbAddDoc(dbCollection(database, "tweets"), {
              comment: nweet,
              createdAt: Date.now(),
              creatorId: userObj.uid,
              displayName: userObj.displayName,
              photoURL: userObj.photoURL,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }


        event.target.text.value = "";
        setNweet("");
    };
    const onChange = (event) => {
        const {
        target: { value },
        } = event;
        setNweet(value);
    };
    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
            {/* Tweet form */}
            <div>
                <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    id="text"
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
                </form>
                <div>
                    {nweets.map((nweet) => 
                    <li key={nweet.id}>
                        {nweet.displayName}: {nweet.comment}
                    </li>
                    )}
                </div>  
            </div>
        </>
        
    );
}

export default Home;