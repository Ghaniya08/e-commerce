"use client";
import Foryoucomp from "@/components/Foryoucomp";
import { useAppSelector } from "../store/hooks";
const Catogrypage = ({params} : {params:{catogry:string}}) => {
    const product = useAppSelector((state)=>state.products)
    const Compforyou = product.filter((val)=>val.catogry == params.catogry);
    return (
    
    <div>
      <div className="text-center mb-14">
      <h1 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-myverydarkpink capitalize">
        <strong>{params.catogry}</strong>
      </h1>
      <div className="flex mt-2 justify-center ">
        <div className="w-16 h-1 8 rounded-full bg-myverydarkpink inline-flex" />
      </div> 
    </div>

            {/* pg1 */}


            <div className=" flex flex-wrap justify-center lg:gap-5 gap-1 ">
        {
          Compforyou.map((items:any , i) =>(
            <Foryoucomp
            key={i}
             src={items.imgage[0]}
             alt={items.title}
             title={items.title} 
             description={items.description} 
             price={items.price}
             catogry={items.catogry}
             detail={items.detail} 
            />
          ))
        }
        </div>
    </div>
  )
}

export default Catogrypage
