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