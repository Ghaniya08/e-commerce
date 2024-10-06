import React from "react";
import Image from "next/image";
import deals from "../public/deals.jpg"
import maindeal from "../public/maindeal.jpg"
const Deals =()=>{
    return(
<div className="mb-[100px] mt-[100px]"> 
<div className="text-center mb-20 ">
      <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
        <strong>Mega Deals</strong>
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
      </div>
    </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:ml-56 lg:mr-36 lg:w-[900px]  justify-center md:w-1/2 p-4 w-full ">


      {/* Deal1 */}


      <div
  className="hero h-[25rem] pic1">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl tracking-tight duration-300  text-white font-medium title-font mb-2"><strong> 40% OFF</strong></h1>
      <p className="mb-5 text-myWhite">
      <strong>Get big savings on cosmetics Fresh Deal : 
      SuperStay Matte Lipstick , FitMe Foundation, Primer, Mascara, Face powder, Lip Pencil, Eye pencil and many more in just <span className="text-myWhite hover:text-myverydarkpink hover:text-4xl duration-500 scroll-m-20 text-3xl "> <br />Rs:6000</span></strong>
      </p>
    </div>
  </div>
</div>


  {/* deal2 */}
  <div
  className="hero h-[25rem] pic2">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl tracking-tight duration-300  text-white font-medium title-font mb-2"><strong>30% OFF </strong></h1>
      <p className="mb-5 text-myWhite">
     <strong> Get amazing offer on amazing brand. Get Facewash , Serumm, scrub, cleanser , Toner and Night cream and many more in just <br /> <span className=" text-myWhite hover:text-myverydarkpink hover:text-4xl duration-500 scroll-m-20 text-3xl ">Rs:5000</span></strong>
      </p>
    </div>
  </div>
</div>

 


  {/* deal3 */}


  <div
  className="hero h-[25rem] pic3">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl tracking-tight duration-300  text-white font-medium title-font mb-2"><strong> 30% OFF</strong></h1>
      <p className="mb-5 text-myWhite">
      <strong>Get amazing offer on amazing brand get Shampoo and Conditioner Hair Mask, Hair Serum , and Hair Creams and many more in just  <br /> <span className=" text-myWhite hover:text-myverydarkpink hover:text-4xl duration-500 scroll-m-20 text-3xl ">Rs:3000</span></strong>
      </p>
    </div>
  </div>
</div>

{/* deal4 */}

<div
  className="hero h-[25rem] pic4">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl tracking-tight duration-300  text-white font-medium title-font mb-2"><strong> 50% OFF</strong></h1>
      <p className="mb-5 text-myWhite">
      <strong>Big savings on Makeup Accesorries 
      Get Face brush , Beauty Blender , Tapered Brushes , fan brushes and many more in just  <br /> <span className=" text-myWhite hover:text-myverydarkpink hover:text-4xl duration-500 scroll-m-20 text-3xl ">Rs:1000</span></strong> 
      </p>
    </div>
  </div>
</div>
      </div>

        </div>
    )
}
export default Deals;