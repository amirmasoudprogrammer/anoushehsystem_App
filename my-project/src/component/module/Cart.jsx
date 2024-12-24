import React from 'react';
import Image from "next/image";
import Link from "next/link";
import img from "@/../public/images/instructor/1.png"
import {FaStar} from "react-icons/fa6";
import {FaRegStarHalfStroke} from "react-icons/fa6";


function Cart({data}) {
    const {price, title, Category, image, author} = data
    return (
        <Link href="/" className="group mt-8 md:mt-0">
            <div className="m-3  ">
                <div className="absolute md:w-64 w-72 flex items-center justify-between mr-5 mt-3">
                    <span
                        className="bg-red-500 w-20 h-8 pt-2.5 pb-1 rounded flex items-center justify-center">{price}</span>
                    <span
                        className="bg-red-500 w-auto  pl-1 pr-1 font-thin rounded flex items-center justify-center">{Category}</span>
                </div>
                <Image className="rounded w-35" src={image} alt="img" width={400} height={400}/>
            </div>
            <div className="flex flex-col ">
                <span
                    className="font-thin group-hover:text-red-500 hover:text-red-500 text-black mr-2.5 mt-1 text-xl mb-2 dark:text-white">{title}</span>
                <div className="flex items-center">
                    <Image className="mr-2" src={img} alt="img" width={30} height={30}/>
                    <span
                        className="dark:text-white group-hover:text-red-500 hover:text-red-500 text-black mr-2 font-thin">{author}</span>
                </div>
                <div className="text-yellow-400 flex mt-3 mr-2.5">
                    <p>(4,5)</p>
                    <span><FaRegStarHalfStroke/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <span><FaStar/></span>
                    <p className="text-black font-thin text-sm">(504)</p>
                </div>
            </div>

        </Link>
    );
}

export default Cart;