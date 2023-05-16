import React,{useState, useEffect} from "react";

const Jobs = ({userObj}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [blogPost, setBlogPost] =useState({});
    const [blogArray, setBlogArray] = useState([]);
    useEffect(() => {

    }, []);

    const onChangeTitle = (event) => {
        const {
          target: { value },
        } = event;
        setTitle(value);
      };
      const onChangeDesc = (event) => {
        const {
          target: { value },
        } = event;
        setDescription(value);
      };

    const onSubmit = (e) => {
        e.preventDefault();
        try{
            let obj ={}
            obj["title"]=title;
            obj["description"]=description;
            setBlogPost({
                ...obj
            })
            setBlogArray(oldArray=> [...oldArray, obj]);

        } catch {

        }
        
    }
    console.log(blogArray)
    return(
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div>Title: </div>
                    <input 
                        id="title"
                        name="title"
                        value={title}
                        onChange={onChangeTitle}
                        className="border-black border-2 w-[390px]"
                        type="text"
                    />
                    <div>Description:</div>
                    <textarea
                        id="description"
                        name="description"
                        className="border-black border-2"
                        value={description}
                        onChange={onChangeDesc}
                        rows={10}
                        cols={50}
                    />
                    
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>

            { blogArray.map((item)=>
                <div className="p-2 mb-2 w-[70vw] bg-red-200 border-black border-4 rounded-lg">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p>{blogPost.description}</p>
                </div>
            )

            }
            
        </>
    );
}

export default Jobs;