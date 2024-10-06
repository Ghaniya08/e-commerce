import React from "react";
import Image from "next/image"; 
import { Button } from "./ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import Popforforyou from "./Popforforyou";
import { TbShoppingBagHeart } from "react-icons/tb";
import Successfulyymess from "./Successfulyymess";
const Foryoucomp = ({
  src ,
  alt ,
  title, 
  description , 
  price,
  catogry,
  detail,
 } :{
    src:string , 
    alt:string ,
    title:string, 
    description:string , 
    price:number,
    catogry:string,
    detail : string,
})=>{
    return(
        <div className=" mb-[100px]  ">
<div className="text-gray-600 body-font  ">
  <div className="">
    <div className="flex flex-wrap -m-4 lg:gap-5 gap-1 lg:py-24 mx-auto lg:-mt-28 ">
    <Link href={`${catogry}/${detail}`}>
        <div className="lg:w-[300px] lg:h-[100px] md:w-1/2 p-4 lg:gap-5 gap-1 w-full ">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-110 hover:duration-500">
            <Image 
            src={src}  
            alt={alt}
            width={300}
            height={230}
            />  
        </div>
        <div className="mt-4">
          <h1 className="">{title}</h1>
          <h2 className="text-gray-900 title-font text-sm font-medium line-clamp-1">
         {description}
          </h2>
          <p className="mt-1">Rs.{price}</p>       
        </div>
      </div>
      </Link>
      </div >
      <div className="flex gap-2 mt-5 lg:mt-32 ml-5  ">
        <Popforforyou details={detail}/>
        {/* <Successfulyymess cartItem={cartItem}/> */}
         {/* <Button className="group cursor-pointer text-myWhite bg-mylitpink text-[15px] hover:bg-myverydarkpink border-myverydarkpink duration-300" > <TbShoppingBagHeart className="text-xl group-hover:animate-bounce text-myWhite"/><strong> Add to cart</strong></Button> */}
         <Button  className="  group cursor-pointer text-myWhite bg-mylitpink hover:bg-myverydarkpink text-[15px] border-myverydarkpink duration-300"> <IoIosCheckmarkCircle className="text-xl group-hover:animate-bounce text-myWhite" /> <Link href={"/payment"}>Buy now</Link></Button>
         </div>
  </div>
</div>
        </div>
    )
}
export default Foryoucomp;