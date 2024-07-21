
import React from "react";
import Image from "next/image";
import Link from "next/link";

import SignUpForm from "@/components/SignUpForm";

const SignupUsers = () =>
    {
        return (

            <div className=" text-black bg-fuchsia-50 font-bold p-4  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
           
            {/* BOX */}
            <div className=" h-full shadow-2xl rounded-md md:flex-row md:h-[100%] md:w-full lg:w-[90%] 2xl:w-1/3">
            
              {/* FORM CONTAINER */}
              <div className="p-10 md:w-full gap-8">

                <h1 className="font-bold text-xl xl:text-3xl text-center">Welcome!</h1>
                <h2 className="font-bold text-center underline">Sign Up to continue</h2>
                <br/>
                <SignUpForm/>
                <br/>
                <div className="flex justify-center">
                   <span>OR</span>
                 </div>
                <br/>

                <div className="flex justify-center">
                <button className="flex gap-4 p-4 ring-1 ring-black rounded-md">
                  <Image src="/google.png" alt="" width={30} height={30} className="object-contain"/>
                  <span className="font-bold">Sign Up with Google</span>
                </button>  
                </div>
                 <br/>

                 <div  className="flex justify-center">
                <p className="text-sm">
                  Have a problem?<Link className="underline" href="/">Contact us</Link>
                </p>
                 </div>

              </div>
            </div>
          </div>
        )
    }

    export default SignupUsers;
