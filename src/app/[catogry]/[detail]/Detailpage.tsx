"use client" ;
import { Button } from "@/components/ui/button";
import { TbShoppingBagHeart } from "react-icons/tb";  
import { FaPlus , FaMinus} from "react-icons/fa6";
import Detailcomp from "@/components/Detailcomp";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React, { useState } from "react";
import Successfulyymess from "@/components/Successfulyymess";
import Link from "next/link";
const Detailpage=({params}:{params:{detail:string}})=>{
    const products = useAppSelector((state)=>state.products)
    const details = products.filter((val)=>val.detail==params.detail);
    const dipatch = useAppDispatch();
    const [cartItem, setCartItem] = useState({
      id: details[0].id,
        title: details[0].title,
        imgage: details[0].imgage,
       detail : details[0].detail,
       price: details[0].price,
       catogry : details[0].catogry,
       quantity: details[0].quantity,
      // color : details[0].color[0],
    })    
    return (
          <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
     <Detailcomp image={details[0].imgage}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-pink-600 tracking-widest capitalize">
         {details[0].catogry}        
        </h2>
        <div className="rating rating-sm mt-3 mb-3">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-pink-600" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-pink-600"
    defaultChecked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-pink-600" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-pink-600" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-pink-600" />
</div>
        <h1 className="text-myverydarkpink title-font  mb-1 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {details[0].title}
        </h1>
        <p className="leading-relaxed scroll-m-20 text-base font-normal text-pink-700">
        {details[0].description}
        </p>
        {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3 text-pink-800">Color</span>
            {details[0].color?.map((item,i)=>(
              
                <button key={i} onClick={()=>setCartItem({...cartItem, color: item  })} className="border-2 border-gray-300  hover:border-black rounded-full w-6 h-6 focus:outline-none" style={{backgroundColor:item}}/>
            ))}
              </div>
        </div> */}
            <div className="flex items-center gap-2 ">

              <div className="mr-3 scroll-m-20 rext-base text-myverydarkpink font-semibold tracking-tight -mt-3"> Quantity</div>
            <Button  onClick={()=>(setCartItem({...cartItem,quantity:cartItem.quantity<=1?1:--cartItem.quantity}))}
             className="group cursor-pointer text-myWhite bg-mylitpink text-[15px] w-fit h-fit rounded-btn hover:bg-myverydarkpink border-myverydarkpink duration-300" > 
             <FaMinus  className="text-xl mr-2 text-myWhite"/>
             <strong>less</strong>
            </Button>

            <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight text-myverydarkpink">{cartItem.quantity}</div>
            <Button  onClick={()=>setCartItem({...cartItem,quantity:++cartItem.quantity})}
            className="group cursor-pointer text-myWhite bg-mylitpink text-[15px] w-fit h-fit rounded-btn hover:bg-myverydarkpink border-myverydarkpink duration-300" >
            <FaPlus  className="text-xl mr-2 text-myWhite"/>
            <strong>Add</strong>
          </Button>

            </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-myverydarkpink">
            Rs. {cartItem.price * cartItem.quantity}
          </span>
          <div className=" mt-14  lg:mt-20 -ml-14 lg:-ml-7 items-center justify-between ">
         <Button className="group cursor-pointer text-myWhite bg-mylitpink text-[15px] hover:bg-myverydarkpink rounded-btn border-myverydarkpink duration-300" > <TbShoppingBagHeart className="text-xl mr-2 group-hover:animate-bounce text-myWhite"/><strong> <Link href={"/payment"}>Buy now</Link></strong></Button>
         </div>
        <Successfulyymess cartItem={cartItem}/>
        </div>
      </div>
    </div>
  </div>
  ) 
}
export default Detailpage;
