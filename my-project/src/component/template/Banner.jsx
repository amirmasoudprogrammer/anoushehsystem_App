import React from 'react';
import Image from "next/image";
import img1 from "@/../public/banner-img.png"
import Link from "next/link";
import RevealOnScroll from "@/helper/RevealOnScroll";

function Banner(props) {
    return (
        <RevealOnScroll>
            <div className="flex md:flex-row flex-col-reverse container items-center justify-between  m-auto mt-20">
                <div className=" text-black flex items-start flex-col justify-between md:mr-8">
                    <span
                        className="text-black flex items-center md:justify-center m-auto md:m-0 dark:text-white md:text-2xl mb-5 mt-5  md:mt-0 font-thin md:mb-5">سرمایه گذاری در دانش بهترین سود را دارد</span>
                    <p className="text-black dark:text-white md:text-3xl flex items-center justify-center m-auto  md:m-0 md:text-4xl font-normal mb-5">اموزشگاه
                        انوشه سیستم</p>
                    <span className="text-black dark:text-white md:text-2xl font-thin mb-5 md:mt-5">برای مشاهده دوره ها روی دکمه زیر کلیک کنید</span>
                    <button type="button"
                            className=" mr-24 md:m-0  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <Link
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                            href="/Courses">دوره ها</Link>
                    </button>


                </div>
                <div className="bg-red-300 dark:bg-red-400 rounded-full md:ml-28 overflow-hidden flex items-center justify-center ">
                    <Image className="-mt-3" src={img1} alt="icon" width={300} height={300}/>
                </div>
            </div>
        </RevealOnScroll>
    );
}

export default Banner;
