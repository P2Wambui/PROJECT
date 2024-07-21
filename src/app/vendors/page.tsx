import React from 'react';

import AddProducts from '@/components/AddProducts';

const Vendorspage = () => {
  
  return (
    <div className=" text-black bg-fuchsia-50 font-bold p-4  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
           
       {/* BOX */}
        <div className=" h-full shadow-2xl rounded-md md:flex-row md:h-[100%] md:w-full lg:w-[90%] 2xl:w-1/3">
   
      {/* FORM CONTAINER */}
          <div className="p-8 md:w-full h-full">

          <h1 className="font-bold text-xl xl:text-3xl text-center  text-black">Add new products!</h1>
      
              <AddProducts/>
          </div>
        </div>
      </div>
  )
}

export default Vendorspage;
