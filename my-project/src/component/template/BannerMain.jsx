import React from 'react';
import Image from "next/image";
import img1 from "../../../public/bai-img.png";
import Link from "next/link";
import RevealOnScroll from "@/helper/RevealOnScroll";

function BannerMain(props) {
    return (
        <RevealOnScroll>
            <div
                className="dark:bg-gray-800 flex mt-28 flex-col md:flex-row items-center justify-around container m-auto bg-slate-100 p-16 md:w-[70%] w-auto rounded shadow-2xl">
                <div className="bg-yellow-200 rounded-full overflow-hidden">
                    <Image className="" src={img1} alt="img" width={300} height={300}/>
                </div>
                <div className="flex flex-col items-center mt-10 md:mt-0 text-center">
                    <span className="text-black font-medium text-4xl dark:text-white">مدرس شوید</span>
                    <p className="text-red-400 mt-5 md:text-xl">اگر علاقه مند به تولید محتوا هستید با ما در ارتباط
                        باشید</p>
                    <div className="mt-10">
                        <button type="button"
                                className=" md:mr-0 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <Link
                                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                                href="/">ثبت درخواست</Link>
                        </button>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
}

export default BannerMain;