"use client";
import CartComp from '@/components/Cartcomp'
import { Button } from "@/components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import React from 'react'  
import { useAppSelector } from '../store/hooks';
import Link from 'next/link';
const Cartpage = () => {
    const cartArray = useAppSelector((state)=>state.Cart)
    const total = cartArray.reduce((total, arra) => total + arra.price*arra.quantity, 0);
  return (
    <div>
       <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="col-span-2 ">
                        <CartComp />
                </div>
                <div className="bg-myblack/10 lg:p-5 p-3 rounded-xl  lg:mr-5 ml-9 justify-center lg:w-[400px] w-[250px]">
                <h2 className="text-xl text-myverydarkpink"><strong>Location </strong><IoLocationOutline className="text-myverydarkpink text-xl"/></h2>
                <div className="divider mt-0 mb-1 text-mylitpink"></div>
                <h1 className="text-xl text-myverydarkpink">Order Summary</h1>
                {/* pricess */}
                <div>
                   <div className="flex item-center justify-between capitalize">
                       
                        <h2 className="text-myverydarkpink text-base
                        "><strong>Subtotal</strong></h2>
                        <h2 className="text-myverydarkpink text-base"><strong>Rs.{total}</strong></h2>
                    </div>

                    <div className="flex item-center justify-between capitalize">
                       
                       <h2 className="text-myverydarkpink text-base
                       "><strong>Shipping Fee</strong></h2>
                       <h2 className="text-myverydarkpink text-base"><strong>Free Shipping</strong></h2>

                   </div>
                </div>
                 
                <div className="divider mt-0 mb-1 text-mylitpink"></div>
                
                {/* totallll */}

                <div className="flex item-center justify-between uppercase">
                       
                        <h2 className="text-myverydarkpink text-base
                        "><strong>Total</strong></h2>
                        <h2 className="text-myverydarkpink text-base"><strong>Rs.{total}</strong></h2>
                    </div>
                <div className="divider mt-0 mb-1 text-mylitpink"></div>
                {/* button */}
                <div className="flex items-center justify-center w-full hover:bg-myverydarkpink/95 duration-75 bg-myverydarkpink text-myWhite">
                    <Button > <Link href={"/payment"}> PROCEED TO CHECKOUT </Link></Button>
                </div>
                </div>

            </div>
    </div>
  )
}

export default Cartpage
