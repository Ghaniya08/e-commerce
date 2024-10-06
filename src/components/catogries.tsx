import Image from "next/image";
import React from "react";
import Link from "next/link";
import catorigy1 from '../../public/catorigy1.jpg';
import catogry22 from '../../public/catogry22.jpg';
import catogry3 from '../../public/catogry3.webp';
import catogry4lips from '../../public/catogry4lips.jpg';
import haircatog from '../../public/haircatog.jpg';
import skincare from '../../public/skincare.jpg';
import assisories from '../../public/assisories.webp'
const Catogries = ()=>{
    return(

        
        <div className=" mt-[100px]">

<div className="text-center ">
      <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink">
        <strong>Categories</strong>
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
      </div>
    </div>

<div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 ">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href={"/eyes"}>
      <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
            <Image src={catorigy1} alt=" " className="w-[300px] h-[230px]  " width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
            Eyes
          </h2>
          <p className="mt-1 sm:text-sm  flex">Elevate your gaze with our expertly curated eyeshadows, eyeliners, and mascaras. Eye beauty that speaks volumes. Line, lash, and shine.</p>
        </div>
      </Link>
      
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={"/face"}>
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={catogry22} alt=" " className="w-[300px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
           Face
          </h2>
          <p className="mt-1 sm:text-sm flex">Unlock flawless complexion with our curated collection of foundations, concealers, and face powders. Flawless foundation starts here. Even tone, radiant glow.</p>
        </div>
        </Link>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

      <Link href="/lips">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={catogry4lips} alt=" " className="w-[300px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className="text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
           Lips
          </h2>
          <p className="mt-1 sm:text-sm flex ">Pucker up with vibrant lip colors, luxurious lipsticks, and nourishing lip balms. Color your smile. Soft, luscious lips guaranteed</p>
        </div>
        </Link>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link href="/nails">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={catogry3} alt=" " className="w-[300px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
            Nails
          </h2>
          <p className="mt-1 sm:text-sm flex">Elevate your nail game with trendy polishes, strengthening treatments, and stylish nail accessories. Nail perfection in every stroke. Strong, stunning nails every time.</p>
        </div>
        </Link>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full lg:ml-36">
      <Link href="/accessories">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={assisories } alt=" " className="w-[300px] h-[200px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
          Accessories
          </h2>
          <p className="mt-1 sm:text-sm flex">Complete your look with essential makeup tools, brushes, and stylish cases. Makeup essentials for pros. Effortless makeup application.</p>
        </div>
        </Link>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/hair">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={haircatog} alt=" " className="w-[300px] h-[230px]" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
          Hair Care
          </h2>
          <p className="mt-1 sm:text-sm flex">Nourish and style your locks with our range of shampoos, conditioners, and hair styling products. Healthy hair, beautiful you. Silky, manageable hair.</p>
        </div>
        </Link>
      </div>


      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href="/skincare">
        <div className="block relative h-48 rounded overflow-hidden hover:scale-105 hover:duration-500">
        <Image src={skincare} alt=" " className="w-[300px] h-[230px] md:ml-6 md:mr-0" width={0} height={0}/>
        </div>
        <div className="mt-4">
          <h3 className=" text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-myverydarkpink title-font text-xl font-medium">
            Skin Care
          </h2>
          <p className="mt-1 sm:text-sm flex">Reveal radiant skin with our collection of moisturizers, serums, and exfoliating treatments. Glowing skin, every day. Hydrated, youthful skin</p>
        </div>
        </Link>
      </div>


    </div>
  </div>
</div>




        </div>
    )
}
export default Catogries;