import React, {useState, useEffect } from "react"

const Home = ({userObj}) => {

    return(
        
        <div>
            <h1 className=" p-2 font-bold underline underline-offset-2">Upcoming Events</h1>
            <div className="p-2 mb-2 w-[70vw] bg-yellow-200 border-black border-4 rounded-lg">
                <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                <h1 className="text-2xl font-bold">Beach Baptism</h1>
                <p>We are gathing at the park. Please join :)</p>
            </div>
            <div className="p-2 mb-2 w-[70vw] bg-yellow-200 border-black border-4 rounded-lg">
                <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                <h1 className="text-2xl font-bold">Beach Baptism</h1>
                <p>We are gathing at the park. Please join :)</p>
            </div>
            <div className="p-2 mb-2 w-[70vw] bg-yellow-200 border-black border-4 rounded-lg">
                <h1 className="text-xl font-semibold">September 29th, 2022</h1>
                <h1 className="text-2xl font-bold">Beach Baptism</h1>
                <p>We are gathing at the park. Please join :)</p>
            </div>
            <h1 className=" p-2 font-bold underline underline-offset-2">Highlights</h1>

                
        </div>
        
    );
}

export default Home;