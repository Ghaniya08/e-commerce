"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const Detailcomp = ({image}:string|string[]|StaticImageData|any)=>{
        const [path, setpath ] = useState("")
    return(

        <div>
            <Image
             src={path ? path :  image[0]}  
             alt="pic" 
             width={400} 
             height={400} 
             />
               {/* <div className="lg:block hidden">
               <h1 className="mt-32 font-semibold text-myverydarkpink text-xl ">You May also Like This</h1>
            <div className=" flex gap-3  items-center justify-evenly mx-auto mt-2">
                {image.map((item:string,i:number)=>{
                    <div key={i} className="cursor-pointer lg:w-32 lg:h-28 ">
                    <Image
                     src={item}
                     width={200 } 
                     height={200}  
                     alt="abc" 
                     onClick={()=> setpath(item)}
                     className="lg:w-[180px] lg:h-[150px]  h-[100px] w-[100px]"/>
               </div>
                })}
                

            </div>
               </div> */}
         </div>
    )
} 

export default Detailcomp;