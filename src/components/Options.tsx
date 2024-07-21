"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Options = () => {

  return (
    <div className="flex flex-col lg:flex-row bg-fuchsia-50">
      
      {/* CUSTOMER CONTAINER */}
      <div className="flex-1 flex items-center h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem) justify-center flex-col gap-3 text-rose-800 font-bold">
        <Image src="/customer.jpeg" alt="" width={400} height={400}/>
        <h3 className="text-5xl text-center">Join as a customer.</h3>
        <p className="text-center  p-4">
         Order meals from your favourite restaurants and get them delivered anywhere you are.
        </p>
 
        <Link className="bg-rose-800 text-white py-4 px-8 rounded-md" href="/SignupUsers">REGISTER HERE</Link>
        
      </div>
      
      {/* VENDOR CONTAINER */}
      <div className="flex-1 flex items-center h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem) justify-center flex-col gap-3 text-rose-800 font-bold">
        <Image src="/restaurant.jpeg" width={300} height={300} alt="" className="object-cover"/>
        <h3 className="text-5xl text-center">Join as a partner.</h3>
        <p className="text-center  p-4">
         Ready to expand your business? Increase your sales by leveraging our technology and user community.
        </p>
 
          
        <Link className="bg-rose-800 text-white py-4 px-8 rounded-md" href="/SignupVendors">REGISTER HERE</Link>
      
      </div>
    </div>
  );
};

export default Options;
