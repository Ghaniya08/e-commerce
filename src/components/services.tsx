import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { RiStarSmileFill } from "react-icons/ri";

const Services = () =>{
    return(
           <section className="body-font mb-[100px] mt-[100px]">
  <div className="container mb-11 px-5 mx-auto">
    <div className="text-center mb-20">
      <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
        <strong>My Services</strong>
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
      </div>
    </div>



    {/* Fast Shipping  */}



    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-5">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full bg-mylitpink/30 text-myverydarkpink   hover:text-myverydarkpink/85 duration-300 mb-5 flex-shrink-0">
        <MdOutlineLocalShipping className="hover:animate-bounce " />
        </div>
        <div className="flex-grow">
          <h2 className="text-myverydarkpink hover:text-mynormalpink hover:text-2xl duration-300 text-lg title-font font-medium mb-3">
           Fast Shipping 
          </h2>
          <p className="leading-relaxed text-base text-mydarkpink">
          Get your favorite beauty products delivered to your doorstep in no time with our fast and reliable shipping. We prioritize quick delivery so you can enjoy your new look without the wait. Beauty, delivered at the speed of style!
          </p>
          
        </div>
      </div>

 {/* Easy Returns */}



      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 text-5xl h-20 inline-flex items-center justify-center rounded-full bg-mylitpink/30 hover:text-myverydarkpink/85 duration-300  text-myverydarkpink mb-5 flex-shrink-0">
         <TbTruckReturn  className="hover:animate-bounce"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myverydarkpink hover:text-mynormalpink hover:text-2xl duration-300  text-lg title-font font-medium mb-3">
            Easy Returns
          </h2>
          <p className="leading-relaxed text-base text-mydarkpink">
          Shop with confidence knowing that our easy returns process has you covered. If youre not fully satisfied, returning your products is simple and hassle-free. We believe in making beauty shopping as effortless as possible!
          </p>
        </div>
      </div>


 {/* Authentic Products */}


      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 text-5xl h-20 inline-flex items-center justify-center rounded-full bg-mylitpink/30  hover:text-myverydarkpink/85 duration-300  text-myverydarkpink mb-5 flex-shrink-0">
        <RiStarSmileFill className="hover:animate-bounce" />
        </div>
        <div className="flex-grow">
          <h2 className="text-myverydarkpink hover:text-mynormalpink hover:text-2xl duration-300  text-lg title-font font-medium mb-3">
          Authentic Products
          </h2>
          <p className="leading-relaxed text-base text-mydarkpink">
          Discover the finest quality with our 100% authentic products, sourced directly from trusted brands. We guarantee genuine beauty essentials that deliver real results, so you can shop with confidence and peace of mind!          </p>
        </div>
      </div>
    </div>
    
  </div>
      </section>
    )
}



export default Services;
