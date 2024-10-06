import React from "react";
import { Button } from "./ui/button";
import { TbShoppingBagHeart } from "react-icons/tb";
import Link from "next/link";

const Hero = ()=> {
    return(
        <div className="mb-[100px]">

<div
  className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center  text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Helloo <span className="text-myverydarkpink">Womens</span> </h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
      Discover the beauty within with our premium makeup collection, crafted for every woman. Whether it’s bold, natural, or glamorous, find the perfect products to enhance your unique style. Elevate your look and embrace your confidence!
      </p>
      <Link href={"/payment"}>
      <Button className="outline outline-offset-2 text-myWhite group hover:rounded-3xl  duration-300 hover:outline-myverydarkpink ">
        <TbShoppingBagHeart  className="mr-2 h-8 w-8 group-hover:text-mynormalpink group-hover:animate-bounce" /> Shop Now
    </Button>
    </Link>
    </div>
  </div>
</div>

        </div>
           
    
    )
}
export default Hero; 
