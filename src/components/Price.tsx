"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
    
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-black rounded-md"
            style={{
              background: selected === index ? "black" : "white",
              color: selected === index ? "white" : "black",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-60 p-2 ring-1 ring-black rounded-md">
         <span>Quantity</span>
          <div className="flex gap-3 items-center">
            <button onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))} >
                {"<"}
            </button>
         <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
       </div>
         
        {/* CART BUTTON */}
      
        <Link className="w-40 bg-rose-700 text-white p-3 ring-1 rounded-md" href="/cart">
          Add to Cart
        </Link>
       

     
    </div>
  );
};

export default Price;
