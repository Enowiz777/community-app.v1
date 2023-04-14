import React, {useState, useEffect } from "react"

const Home = ({userObj}) => {

    const [admin, setAdmin] = useState(false);
    
    useEffect(() => {
        // if (userObj.email == 'enochpark89@gmail.com') {
        //     setAdmin(true);
            
        // } else {
            
        // }
    });
    
    return(
        admin ? 
            <div>you are admin</div>
        :
            <div className="grid grid-cols-3 gap-2">

                <div className="col-span-2" >
                    <h1 className=" p-2 font-bold underline underline-offset-2">Upcoming Events</h1>
                    <div className="p-2 mb-2 w-[55vw] bg-yellow-200 border-black border-4 rounded-lg">
                        <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                        <h1 className="text-2xl font-bold">Beach Baptism</h1>
                        <p>We are gathing at the park. Please join :)</p>
                    </div>
                    <div className="p-2 mb-2 w-[55vw] bg-yellow-200 border-black border-4 rounded-lg">
                        <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                        <h1 className="text-2xl font-bold">Beach Baptism</h1>
                        <p>We are gathing at the park. Please join :)</p>
                    </div>
                    <div className="p-2 mb-2 w-[55vw] bg-yellow-200 border-black border-4 rounded-lg">
                        <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                        <h1 className="text-2xl font-bold">Beach Baptism</h1>
                        <p>We are gathing at the park. Please join :)</p>
                    </div>
                    <h1 className=" p-2 font-bold underline underline-offset-2">Highlights</h1>
                </div>

                <div className="col-span-1 bg-slate-300">
                    <div className="mt-4 bg-yellow-100 rounded-xl border-black border-4">
                        <h1 className="text-xl font-bold p-2 border-black border-b-4 border-">Members List</h1>
                        <ul>
                            <li>dkjsf</li>
                            <li>dkjsf</li>
                            <li>dkjsf</li>
                            <li>dkjsf</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Home;