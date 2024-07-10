import React from "react";
import Link from "next/link";

const Menupage = () =>
    {
        return(
            /*first 'h' for smaller screens; 2nd for larger screens*/
         <div className="p-4 lg:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center"> 
         This is to be the Menupage...(to contain the different foods that can be ordered.)  
         Should be linked to the categorypage.
        </div>
        )
    }
    export default Menupage;
