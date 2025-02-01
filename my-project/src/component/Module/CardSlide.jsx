import React from 'react';
import Image from "next/image";



function CardSlide({data}) {
    const {name, author, img, description} = data
    return (
        <div className="flex items-center justify-center flex-col">
                <div className="bg-red-300 overflow-hidden rounded-full mt-16 ">
                <Image src={img} alt="icon" width={150} height={150} priority={true}/>
                </div>
            <div className=" flex items-center justify-center animate-spin w-48 h-48 fixed top-[42px] border-t-[1px]  rounded-full border-red-400">

            </div>
            <div className="dark:text-white text-black md:text-xl md:w-[50%] text-center font-thin mt-16">
                <p>{description}</p>
            </div>
            <div className="dark:text-white flex flex-col items-center justify-center text-center text-black mt-10 font-thin">
                <span>{author}</span>
                <p className="mt-3">{name}</p>
            </div>
        </div>
    );
}

export default CardSlide;