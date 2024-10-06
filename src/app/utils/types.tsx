import { StaticImageData } from "next/image";

export type Product = {
     id:number,
     title:string,
     imgage?: string[] | StaticImageData | undefined,
    detail : string ,
    price: number ,
    catogry : string ,
    description:string,
    // color: string[] ,
    quantity: number,
    };


    export type Cart = {
        id:number;
        title:string;
        imgage: string | StaticImageData |any,
       detail : string ;
       price: number ; 
       catogry : string ;
       quantity: number;
       uid: number | string | undefined;
    //    color : string;
       };