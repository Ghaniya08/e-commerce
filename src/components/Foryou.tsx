"use client";

import React from "react";
import Foryoucomp from "./Foryoucomp";
import { useAppSelector } from "@/app/store/hooks";

const Foryou = ()=>{
  const product= useAppSelector((state)=>state.products);
  const Compforyou = product.slice(0,12);
    return(
        <div className="mb-[200px]">

<div className="text-center ">
      <h1 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
        <strong>For You</strong>
      </h1>
      <div className="flex mt-2 justify-center ">
        <div className="w-16 h-1 8 rounded-full bg-myverydarkpink inline-flex mb-14" />
      </div>
    </div>
    <div className=" flex flex-wrap justify-center lg:gap-5 gap-1 ">
        {
          Compforyou.map((items:any, i) =>(
            <Foryoucomp
            key={i}
             src={items.imgage[0]}
             alt={items.alt}
             title={items.title} 
             description={items.description} 
             price={items.price}
             catogry={items.catogry}
             detail={items.detail} />
          ))
        }
        </div>
        
       
       </div>
      
    )
}
export default Foryou;
