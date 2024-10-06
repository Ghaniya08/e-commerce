"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navlinks";
import { useAppSelector } from "@/app/store/hooks";
const Navbar =()=>{
  const cart = useAppSelector((state)=>state.Cart)
    return(
        <div>
           <div className="navbar bg-mylitpink">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
        <GiHamburgerMenu/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li className="hover:text-mynormalpink duration-300"><Link  href={"/"}>Home</Link></li>
      <li>
        <details>
          <summary className="hover:text-mynormalpink duration-300">Makeup</summary>
          <ul className="p-2">
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/eyes"}>Eyes</Link>
            </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/face"}>Face</Link>
            </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/lips"}>Lips</Link>
            </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/nails"}>Nails</Link>
              </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/accessories"}>Accessories</Link>
              </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/hair"}>Hair Care</Link>
              </li>
            <li className="hover:text-mynormalpink duration-300">
              <Link href={"/skincare"}>Skin Care</Link>
              </li>
          </ul> 
        </details>
      </li>
      <li className="hover:text-mynormalpink duration-300">
        <Link  href={"/about"}>About</Link>
        </li>  
      <li className="hover:text-mynormalpink duration-300">
        <Link  href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    {/* <Link  href={"#"} className="btn btn-ghost text-xl">daisyUI</Link> */}
    <Image src="/forimgpic.jpg" 
    width={200}
     height={40}
      alt="" 
      className="hidden lg:block ml-5 "/>

  </div>
  <div className="navbar-center ">
  <Image src="/forimgpic.jpg" 
    width={200}
     height={40}
      alt="" 
      className="block lg:hidden "/>
    <div className="hidden lg:flex">
      <NavigationMenuDemo/>
    </div>
  </div>
  <div className="navbar-end">
    <Link href={"/cart"}>
    <div tabIndex={0} role="button" className="pr-4 cursor-pointer group  ">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 group-hover:text-myWhite text-mydarkpink duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cart.length>0&&(
           <span className="badge badge-sm indicator-item font-semibold text-myblack  group-hover:text-myWhite group-hover:bg-myblack">
           {cart.length}
         </span>)}
         
        </div>
      </div>
    
    </Link>
     
  </div>
</div>
        </div>
    )
}
export default Navbar;
