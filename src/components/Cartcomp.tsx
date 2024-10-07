"use client";
import React from 'react';
import Image from 'next/image'
import { ImBin2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { FaPlus , FaMinus} from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addCart, dltItem, subCart } from '@/app/store/features/cart';
const CartComp = (
  ) => {
    const cartArray = useAppSelector((state)=>state.Cart)
    const deelete = useAppDispatch()
    
  return (
  <div className='lg:w-auto lg:ml-auto lg:mr-auto -ml-1 -mr-1 w-[100px]'>
    {cartArray.length >= 1 &&
      cartArray.map((items, i )=>(
      <div key={i} className=" p-5 lg:p-7 lg:ml-10 flex sm:-m-8 ">
    <div className="flex lg:w-[750px]  bg-pink-100 lg:h-[150px] w-[300px] ">
    <div  className='lg:w-[100px] lg:h-[100px] w-14 h-10 mt-6 ml-3 '>
      <Image 
    src={items.imgage[0]}
    alt={""}  
    width={80}
     height={80}
      /></div>
   {/* infoss */}
   <div className="lg:flex  px-5 justify-between items-center w-full "> 
    {/* title and brande name */}
        <div >
        <h1 className="text-myverydarkpink font-semibold lg:text-xl mt-5 ">{items.title} </h1>
        <h1 className="lg:mt-2 text-myverydarkpink mb-2 font-semibold text-1xl">{items.detail}</h1>
        {/* <h1 className='flex gap-3 text-myverydarkpink  font-semibold text-1xl'> Color  <button key={i}  className="border-2 rounded-full w-4 h-4 mt-1 focus:outline-none" style={{backgroundColor:items.color}}/>
        </h1> */}
        </div>
        <div className="lg:ml-14  lg:flex gap-4  "> 
    <h1 className="text-myverydarkpink title-font font-medium mt-5 mr-2 lg:text-xl">Rs.{items.price*items.quantity}</h1>
        <h1 onClick={()=>deelete(dltItem(items.uid))} className="text-myverydarkpink lg:mt-7"><ImBin2 /></h1>
        </div>
    <div className="flex items-center gap-2 -mt-8 mg:ml-20 ml-28">
    <Button   onClick={()=>deelete(subCart(items))}
    className="group cursor-pointer text-myWhite bg-mylitpink rounded-btn hover:bg-myverydarkpink border-myverydarkpink duration-300  lg:ml-0 -ml-7" > 
    <FaMinus  
    className="lg:text-xl  text-myWhite"/>
    </Button>

    <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight text-myverydarkpink">{items.quantity}</div>
    
    <Button onClick={()=>deelete(addCart(items))}
    className="group cursor-pointer text-myWhite bg-mylitpink rounded-btn hover:bg-myverydarkpink border-myverydarkpink duration-300" > 
    <FaPlus  
    className="lg:text-xl  text-myWhite"/>
    </Button>

    </div>
      </div>            
        </div>
</div>


    ))}
    
     
    </div>
  )
}
export default CartComp;
