"use client";

import React from "react";
import Image from "next/image";
import foryou11 from '../../public/foryou11.jpeg';
import foryou2 from '../../public/foryou2.jpg';
import foryou3 from '../../public/foryou3.jpg';
import foryou4 from '../../public/foryou4.jpeg';
import foryou5 from '../../public/foryou5.jpeg';
import foryou6 from '../../public/foryou6.jpg';
import foryou7 from '../../public/foryou7.jpg';
import foryou8 from '../../public/foryou8.jpg';
import foryou9 from '../../public/foryou9.jpg';
import foryou10 from '../../public/foryou10.jpg';
import foryoueleven from '../../public/foryoueleven.jpg';
import foryou12 from '../../public/foryou12.jpeg';
import { Button } from "./ui/button";
import Foryoucomp from "./Foryoucomp";
import { useAppSelector } from "@/app/store/hooks";

const Foryou = ()=>{
  const product= useAppSelector((state)=>state.products);
  const Compforyou = product.slice(0,12);
  
  // const Compforyou = [
  //   {
  //     src:'/foryou11.jpeg',
  //     alt: 'picone1',
  //     title: 'Lipstick',
  //     description: 'Huda Beauty Matte Lipstick ',
  //     price: 2800,
  //     catogry:"Eyes",
  //     detail:"shadow"
  //   },
  //   {
  //     src:'/foryou2.jpg',
  //     alt: 'picone2',
  //     title: 'Nail Polish',
  //     description: ' Longwear Mehroon Nail Polish',
  //     price: 5099,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //  {
  //     src:'/foryou3.jpg',
  //     alt: 'picone3',
  //     title: 'Eye shadow',
  //     description: '  Huda Beauty Eye Shadow Palette',
  //     price: 19450,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou4.jpeg',
  //     alt: 'picone4',
  //     title: 'Blender',
  //     description: '  Beautyblender ',
  //     price: 599,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou5.jpeg',
  //     alt: 'picone5',
  //     title: 'Cream',
  //     description: 'Gel Cream Extra-Dry Skin',
  //     price: 4897,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou6.jpg',
  //     alt: 'picone6',
  //     title: 'Conditioner',
  //     description: 'Hydrating Conditioner 250ml',
  //     price: 2500,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou7.jpg',
  //     alt: 'picone7',
  //     title: 'Foundation',
  //     description: 'added ',
  //     price: 280000,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou8.jpg',
  //     alt: 'picone8',
  //     title: 'Blushon',
  //     description: 'added',
  //     price: 280000,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou9.jpg',
  //     alt: 'picone9',
  //     title: 'Gloss',
  //     description: 'added',
  //     price: 280000,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryou10.jpg',
  //     alt: 'picone10',
  //     title: 'Nails',
  //     description: 'Fake Nails Reusable Stick On Nails',
  //     price: 400,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:'/foryoueleven.jpg',
  //     alt: 'picone11',
  //     title: 'Face Wash',
  //     description: ' Glow up by Anusha Face Wash',
  //     price: 1795,
  //     catogry:"added",
  //     detail:"added",
  //   },
  //   {
  //     src:"/foryou12.jpeg",
  //     alt: 'picone12',
  //     title: 'Eyes Liner',
  //     description: ' Adhesive Liquid Eyliner ',
  //     price: 500,
  //     catogry:"added",
  //     detail:"added",
  //   },
  // ]
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