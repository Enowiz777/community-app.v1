import React, {useState, useEffect } from "react"
import {db} from "../BE/firebase.js";
import { collection, getCountFromServer } from "firebase/firestore";
import { useForm } from "react-hook-form";


function Home() {
    // destructure useForm
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Submit handler
    const onSubmit = (data) => {
        console.log(data);
        /* output: {
            name: 'Enoch Park', 
            description: '111', 
            email: 'enochpark89@gmail.com', 
            password: '111'
        } */
      }

    return (
      <>
        <div className="text-center my-3">
          <h1>Community News</h1>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
                <label className="block">Name</label>
                <input 
                    className="shadow-sm w-2/5 h-7 bg-gray-200 focus:bg-white" 
                    placeholder='name'
                    type="text"
                    {...register("name")}
                />
            </div>

            <div className="mb-6">
                <label className="block">Description</label>
                <textarea 
                    className="shadow-sm bg-gray-200 focus:bg-white"
                    placeholder="description" 
                    rows="4" 
                    cols="50"
                    {...register("description")}
                >
                </textarea>
            </div>
            <div className="mb-6">
                <label className="block">Email</label>
                <input 
                    className="shadow-sm w-2/5 h-7 bg-gray-200 focus:bg-white"
                    placeholder='email'
                    type="text" 
                    {...register("email")}
                />
            </div>
            <div className="mb-6">
                <label className="block">Password</label>
                <input 
                    className="shadow-sm w-2/5 h-7 bg-gray-200 focus:bg-white" 
                    placeholder="password"
                    type="password" 
                    {...register("password")}
                />
            </div>
            <div className="mb-6">
                <button type="submit" className="p-3 bg-slate-300 hover:bg-black hover:text-white	">Submit </button>
            </div>
        </form>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
    );
}

export default Home;