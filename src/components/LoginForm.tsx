"use client"

import { useState } from "react";
import React from "react";


const LogInForm = () =>
    {
        const [email, setEmail]= useState('')
        const [phonenumber, setPhonenumber]= useState('')
        const [password, setPassword]= useState('')

        return (
            <form className="">
                <label>
                    <span>Email:</span>
                   <input required type="text" onChange={(e) => setEmail(e.target.value)} value={email}
                    className="bg-gray-200 placeholder:text-gray-400 p-3 rounded" placeholder="joe@gmail.com" />
                </label>
                  <br/>
                  <br/>
                <label>
                    <span>Phone Number:</span>
                    <input required type="text" onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} 
                    className="bg-gray-200 placeholder:text-gray-400 p-3 rounded" placeholder="01234567"/>
                </label>
                <br/>
                <br/>
                <label>
                    <span>Password:</span>
                    <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password}
                     className="bg-gray-200 placeholder:text-gray-400 p-3 rounded" placeholder="password"/>
                </label>
                <br/>
                <br/>
                <div className="flex justify-center ">
                <button className="text-white  py-3 px-8 rounded-md ring-black bg-rose-700">Submit</button>
                </div>
            </form>
    
        )
    }

    export default LogInForm;

