import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (

    <div className="h-12 text-rose-800 p-4 flex items-center justify-between border-b-2 uppercase md:h-24 lg:px-20 xl:px-40">
      
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/homepage">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
     
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">The Food-Ferry</Link>
      </div>
     
      {/* Display for smaller screens e.g phones.*/}
      <div className="md:hidden">
        <Menu />
      </div>
     
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
          <Link href="/login">Login</Link>
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
