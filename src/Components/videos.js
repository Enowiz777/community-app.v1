import React, {useState, useEffect} from "react"

function Videos() {
    const [youTubeLink, setYouTubeLink] = useState("");
    const [youTubeArray, setYouTubeArray] = useState([]);
    const Array = [];
    
    const onChange = (e) => {
        const {
            target: { value },
            } = e;
            setYouTubeLink(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Convert to a embed link
        let watchLink = youTubeLink;
        let linkArray = watchLink.split("?v=");
        let embedLInk = "https://www.youtube.com/embed/" + linkArray[1]
        setYouTubeArray(oldArray => [...oldArray, embedLInk]);
        
        // YouTube API data fetch
        const apiKey = 'AIzaSyDQ_U1BrFw4gzK-leeO1TPYnWevL5M9IJQ'; // replace with your own YouTube Data API key
        const videoUrl = youTubeLink; // example YouTube video link
        const videoId = videoUrl.split('=')[1]; // extract video ID from link

        fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
        .then(response => response.json())
        .then(data => {
            const videoTitle = data.items[0].snippet.title; // extract video title
            const videoDescription = data.items[0].snippet.description; // extract video description
            console.log('Title:', videoTitle);
            console.log('Description:', videoDescription);
        })
        .catch(error => console.error(error));
    }
    

    return(
        <div>
            {/* Form to take a link input */}
            <h1>Videos</h1>
            <form onSubmit={onSubmit}>
                <label>
                    YouTube Link:
                    <input 
                    onChange={onChange}
                    id="link" 
                    type="text" 
                    name="name" 
                    />
                </label>
                <div>
                <input type="submit" />
                </div>
            </form>
            {/* Display YouTube Videos */}
            {youTubeArray.map((link) => 
                <div >
                  <iframe
                      className="rounded-2xl m-4"
                      src={link}
                      frameborder="1"
                      allowFullScreen
                      title="video"
                      width="400"
                      height="250"
                  />
                </div>
            )
            }
        </div>
    );
}

export default Videos;