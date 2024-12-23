import React from 'react';
import Image from "next/image";
import Link from "next/link";
import img from "@/../public/images/instructor/1.png"


function Cart({data}) {
    const {price, title, Category, image , author} = data
    return (
        <Link href="/" className="">
            <div className="m-3 ">
                <div className="absolute w-64 flex items-center justify-between mr-5 mt-3">
                    <span className="bg-teal-400 w-20 h-8 pt-2.5 pb-1 rounded flex items-center justify-center">{price}</span>
                    <span className="bg-teal-400 w-auto  pl-1 pr-1 font-thin rounded flex items-center justify-center">{Category}</span>
                </div>
                <Image className="rounded" src={image} alt="img" width={400} height={400}/>
            </div>
            <div className="flex flex-col ">
                <span className="font-thin text-black mr-2.5 mt-1 text-xl mb-2">{title}</span>
                <div className="flex items-center">
                    <Image className="mr-2" src={img} alt="img" width={30} height={30}/>
                    <span className="text-black mr-2 font-thin">{author}</span>
                </div>
            </div>
        </Link>
    );
}

export default Cart;