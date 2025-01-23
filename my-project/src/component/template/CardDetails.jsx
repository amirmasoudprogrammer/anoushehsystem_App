"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {FaRegStarHalfStroke, FaStar} from "react-icons/fa6";
import {DataCoursesLayout} from "@/helper/DataCourses";


function CardDetails({data}) {
    const {id, title, Category, Description, author, image, price} = data

    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (id) => {
        setActiveItem(id);
    };
    return (
        <>
            <div className="mt-10 container m-auto  ">
                <div className="flex mr-8">
                    <Link href="/" className="text-red-400 ml-2 dark:text-white">صفحه اصلی </Link>
                    <span className="text-black font-thin dark:text-white">/</span>
                    <Link href="/Courses" className="text-red-400 font-thin mr-3 dark:text-white">دوره ها</Link>
                    <span className="text-black font-thin mr-2 dark:text-white">/</span>
                    <span className="text-black font-thin mr-3 dark:text-white"> اموزش {title} </span>

                </div>
            </div>
            <div className="flex container flex-col items-start">
                <div className="flex flex-col items-center justify-between p-20">
                    <div
                        className="bg-slate-50 rounded shadow-lg w-[800px] h-64 pb pr-8 pt-6 flex flex-col items-start">
                        <span className="text-3xl font-medium text-gray-500 "> اموزش {title}</span>
                        <div className="text-yellow-400 flex mt-3">
                            <p>(4,5)</p>
                            <span><FaRegStarHalfStroke/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <p className="text-black font-thin text-sm">(230 نظر) </p>
                        </div>
                        <span className="text-black font-thin mt-2">دانش اموزان دوره - 220</span>
                        <p className="text-black mt-2"> مدرس- <strong
                            className="text-red-400 font-thin mr-1">{author}</strong></p>
                        <span className="text-black font-thin mt-2">آخرین بروزرسانی - آبان 1401</span>
                        <span className="text-black mt-2 font-thin">زبان - فارسی</span>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center mr-14">
                        {DataCoursesLayout.map((item) =>
                            <Link href={item.href} key={item.id} onClick={() => handleClick(item.id)}
                                  className={`rounded shadow-lg w-24 h-10  text-black font-thin  flex items-center justify-center mr-5 ${activeItem === item.id ? "bg-red-500 text-white transition" : "bg-slate-50"}`}>
                                {item.name}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardDetails;