import React from "react";
import Image from "next/image";


const Offer = () =>
    {
        return (
            <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Currently on offer.</h1>
        <p className="text-white xl:text-xl">
         This part is to include the various products currently on offer.
        </p>
        
        <button className="bg-rose-800 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offer.jpeg" alt="" fill className="object-contain" />
      </div>
    </div>
        );
    } ;

    export default Offer;
    
