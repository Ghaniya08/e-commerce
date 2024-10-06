"use client";
import {
    Popover,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from "./ui/button";
import { TbShoppingBagHeart } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
const Popforforyou = ({details}:{details:string}) => { 
    const products = useAppSelector((state)=>state.products).find((valu)=>valu.detail==details);
    const dipatch = useAppDispatch();
    const [cartItem, setCartItem] = useState({
      id: products?.id,
        title: products?.title,
        imgage: products?.imgage,
       detail : products?.detail,
       price: products?.price,
       catogry : products?.catogry,
       quantity: products?.quantity,
    });
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
       <Popover>
      <PopoverTrigger asChild>
        <div  onClick={notify}>
        <Button onClick={()=>dipatch(addToCart(cartItem))}   className="group cursor-pointer text-myWhite bg-mylitpink text-[15px] hover:bg-myverydarkpink border-myverydarkpink duration-300" > <TbShoppingBagHeart className="text-xl group-hover:animate-bounce text-myWhite"/><strong> Add to cart</strong></Button> 
        </div>
      </PopoverTrigger>
    </Popover>
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

export default Popforforyou
