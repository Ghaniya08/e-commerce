"use client"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { addToCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';
import { PiShoppingCartFill } from "react-icons/pi";

const Successfulyymess = ({cartItem}:any) => {
    const dipatch = useAppDispatch();
    const notify = () => 
    toast.success(' Add to cart successfuly!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
  return (
    <div>
    <div onClick={()=>dipatch(addToCart(cartItem))} className='w-fit'>
        {/* <button onClick={notify}>Notify!</button> */}
        <Button onClick={notify} 
        className=" mt-14  lg:mt-20 ml-9 lg:ml-20 items-center justify-between group cursor-pointer rounded-btn text-myWhite bg-mylitpink hover:bg-myverydarkpink text-[15px] border-myverydarkpink duration-300"> 
        <PiShoppingCartFill 
        className="text-xl mr-2 group-hover:animate-bounce text-myWhite" /> 
        Add to cart
        </Button>
        
    </div>
    <ToastContainer
    autoClose={5000}
    position="top-right"
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
{/* Same as */}
<ToastContainer />
</div>
  )
}

export default Successfulyymess;
