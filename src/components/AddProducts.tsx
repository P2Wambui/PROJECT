"use client";

import React , {useState} from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const AddProducts = () => {
  return (
    <form className="">
    
    {/* grid grid-cols-1 gap-2*/}
        <div className="w-full flex flex-col ">
          <label className="text-sm font-semibold">Title</label>
            <input className="bg-gray-200 p-2 rounded-md placeholder:text-gray-400"
               type="text" placeholder="Bella Napoli" name="title" />
        </div>
      <br/>

        <div className="w-full flex flex-col">
          <label className="text-sm font-semibold">Description</label>
             <textarea rows={2}  className="bg-gray-200 p-2 rounded-md placeholder:text-gray-400"
                placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
                 name="desc"/>
        </div>
      <br/>

        <div className=" w-full flex flex-col">
           <label className="text-sm font-semibold">Price</label>
             <input className="bg-gray-200 p-2 rounded-md placeholder:text-gray-400"
                type="number" placeholder="29" name="price" />
        </div>
      <br/>
  
        <div className="w-full flex flex-col">
           <label className="text-sm font-semibold">Options</label>
             <div className="flex">
               <input className="bg-gray-200 p-2 rounded-md placeholder:text-gray-400 w-40"
                  type="text" placeholder="Small" name="title"/>
                
                <input className="bg-gray-200 p-2 rounded-md placeholder:text-gray-400 w-40"
                  type="number"  placeholder="Additional Price" name="additionalPrice"/> 
              <button className="bg-rose-700 p-2 text-white rounded">Add Option </button>
            </div>  
        </div>  
       <br/>
    
           <div>
             <label className='text-sm font-semibold'>Upload a picture of the food item</label>
               <CldUploadWidget uploadPreset='ml_default'>
                  {({open}) => {
                    return <button className=' text-white py-2 px-2 rounded-md hover:white bg-rose-700' onClick={() => open()}>Upload Image</button>}}
                </CldUploadWidget>
            </div>
        <br/>
     
         <div className=''>  
            <button type="submit" className="bg-rose-700 p-2 text-white w-48 rounded-md relative  flex justify-center items-center">Submit </button>
         </div>
   
     </form>
  )
}

export default AddProducts;
