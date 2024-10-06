import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-mylitpink">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h3 className=" scroll-m-20 font-semibold tracking-tight mb-3 text-myverydarkpink ">
        How I Am Transforming My E-Commerce Practice Project
        </h3>
        <nav className="list-none mb-10">
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          In the pursuit of becoming a professional web developer, I am currently working on building my first e-commerce website. This website serves as a practical project to help me learn and apply the core concepts of web development, from designing a user-friendly interface to integrating essential features for online shopping.
          </p>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
         <h2 className=" scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink ">
         Challenges and Learning Process
        </h2>
        <nav className="list-none mb-10">
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li> */}
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          As a student still in the process of learning, this project is a significant stepping stone. I am learning how to work with technologies like HTML, CSS , Tailwind CSS , JavaScript, and TypeScript, and applying frameworks such as Next.js . Each stage of the project brings new challenges, but I am committed to mastering these skills and creating a website that not only looks good but also performs effectively.
          </p>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
         <h2 className=" scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink ">
         Future Aspirations and Goals
        </h2>
        <nav className="list-none mb-10">
          <li>
          <p className=" flex  text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/80 duration-300">
          With this project, I aim to build a solid foundation in e-commerce development. In the future, I plan to enhance the website with additional features like personalized recommendations, product reviews, and a more robust backend system. My ultimate goal is to develop professional-grade e-commerce solutions that cater to real-world business needs while also learning how to handle backend processes such as payment integration, inventory management, and user authentication.          .
          </p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-base font-semibold tracking-tight mb-3 text-myverydarkpink">
        Subcategories and Brands
        </h2>
        <nav className="list-none mb-10">
        <li>
          <Link href={"/"}  className="text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
          Face
          </Link>
          </li>
        
          <li>
            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Foundation:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> MAC, NARS, Estee Lauder, Bobbi Brown</p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Concealer:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Urban Decay, Tarte, Benefi</p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Powder & blush:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Rimmel, L'Oreal, Maybelline , NARS, Tarte, Clinique</p>
{/* eyess */}
          </li>
          <li>
          <Link href={"/"}  className="text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
          Eyes
          </Link>
          </li>
        
          <li>
            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Eyeshadow:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Urban Decay, MAC, Huda Beauty</p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300"> Mascara & Eyeliner:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Benefit, Tarte, Lancome  Kat Von D, Stila, Bobbi Brown </p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Powder & blush:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Rimmel, L'Oreal, Maybelline , NARS, Tarte, Clinique</p>

          </li>
        </nav>
      </div>
     

      <div className="lg:w-1/6 md:w-1/2 w-full px-4">

        <nav className="list-none mb-10">
        <li>
          <Link href={"/"}  className=" mt-4 text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
          Lips
          </Link>
          </li>
        
          <li>
            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Lipstick:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> MAC, NARS, Tom Ford</p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Lip Gloss</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Fenty Beauty , Kylie Cosmetics, Bobbi Brown </p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Lip Liner:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> MAC , Maybelline , NARS , Tarte, Clinique</p>
{/* eyess */}
          </li>
          <li>
          <Link href={"/"}  className="text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
          Accessories
          </Link>
          </li>
        
          <li>
            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300"> Brushes:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> MAC, Real Techniques, Hakuro</p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300"> Sponges  :</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Beautyblender, Real Techniques </p>

            <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Makeup Bags:</p>
            <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Sephora, Ulta, elf Cosmetic</p>
          </li>
        </nav>
      </div>



      <div className="lg:w-1/6 md:w-1/2 w-full px-4">

<nav className="list-none mb-10">
<li>
  <Link href={"/"}  className=" mt-4 text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
  Hair Care
  </Link>
  </li>

  <li>
    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Shampoo:</p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Pantene, L'Oreal, Redken    </p>

    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Conditioner: </p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Moroccanoil, Aveda, Bumble and bumble    </p>

    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Oil:</p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Moroccanoil, argan oil, Kerastase    </p>
{/* eyess */}
  </li>
  <li>
  <Link href={"/"}  className="text-base font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">
  Skin Care
  </Link>
  </li>

  <li>
    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Moisturizer:</p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300">Neutrogena, Olay, La Roche-Posay    </p>

    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300"> Scrub:</p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> St. Ives, L'Oreal, Dermalogica    </p>

    <p className="text-xs font-semibold tracking-tight text-myverydarkpink hover:text-myverydarkpink/45 duration-300">Face Cream    :</p>
    <p className="text-xs font-semibold tracking-tight text-mydarkpink hover:text-myverydarkpink/45 duration-300"> Olay, Neutrogena, Laneige    </p>
  </li>
</nav>
</div>
     





    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-myverydarkpink"
          >
            Enter Your Email here 
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full bg-myWhite bg-opacity-50 rounded border border-myverydarkpink focus:ring-2 focus:bg-transparent focus:ring-myverydarkpink focus:border-myverydarkpink text-base outline-none text-myverydarkpink py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="inline-flex text-white bg-myverydarkpink border-0 py-2 px-6 focus:outline-none hover:bg-mynormalpink rounded">
         Submit
        </button>
        <p className="text-myverydarkpink text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
            For connecting withus and get notified for
          <br className="lg:block hidden" />
         our sales , offers and new varity of beautiful makeup.
        </p>
      </div>
      
    </div>
  </div>
  <div className="bg-mylitpink">
    <h1 className="ml-14 text-myverydarkpink text-xl "><strong>Ghaniya's Makeup Store</strong></h1>
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" flex text-gray-500 text-sm text-center sm:text-left title-font items-center font-medium justify-center">
     <Image src="/forimgpic.jpg" 
    width={200}
     height={40}
      alt="" 
      />
        <a
         href="https://github.com/Ghaniya08"
        >
          © Ghaniya's Makeup Store
        </a>
      </p>
      <span className=" text-myverydarkpink gap-3 lg:ml-auto lg:mt-0 mt-4 w-full justify-center md:justify-start md:w-auto">
        <p className="text-myverydarkpink inline-flex mr-3"><strong>Follow me on</strong></p>
       <div className="text-2xl font-semibold  flex gap-4">
       <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
        <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
       </div>
      </span>
    </div>
  </div>
</footer>
        </div>
    )
}
export default Footer;