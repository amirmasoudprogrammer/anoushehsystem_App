"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {FaRegStarHalfStroke, FaStar} from "react-icons/fa6";
import {DataCoursesLayout} from "@/helper/DataCourses";
import Image from "next/image";


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
            <div className="flex container items-start justify-center mr-20 mt-16">
                <div className="flex flex-col items-start justify-start ">
                    <div className="bg-slate-50 rounded shadow-lg w-[800px] h-64  pr-8 pt-6 flex flex-col items-start">
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
                    <div className="flex flex-col mt-14 items-start justify-start ml-20  ">
                        <div className="flex items-start justify-between w-[450px] ">
                            {DataCoursesLayout.map((item) =>
                                <Link href={item.href} key={item.id} onClick={() => handleClick(item.id)}
                                      className={`rounded shadow-lg w-24 h-10  text-black font-thin flex items-center justify-center ${activeItem === item.id ? "bg-red-500 text-white transition" : "bg-slate-50"}`}>
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className="rounded mr-10 w-[400px] bg-slate-50 flex flex-col shadow-lg h-[580px]">
                    <div className="w-96 h-auto flex items-center justify-center mt-9 m-auto mb-0">
                        <Image className="rounded  w-[350px] h-auto" src={image} alt="img" width={400} height={400}/>
                    </div>
                    <div className="flex items-center justify-start pr-6 pt-5">
                        <span className="text-black font-thin"><del>100.000</del></span>
                        <span className="text-black text-3xl font-medium mr-2">{price}</span>
                        <span className="text-red-400  font-medium mr-2">51% تخفیف</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-gray-600 text-2xl font-medium pr-7 pt-5">ویژگی های دوره</p>
                        <ul className="flex flex-col pr-6 pt-2 mt-2">
                            <div className="flex items-center justify-start w h-8">
                                <span className="text-red-400 text-5xl mb-2">.</span>
                                <li className="text-black mr-3 font-thin">150 درس</li>
                            </div>
                            <div className="flex items-center justify-start w h-8">
                                <span className="text-red-400 text-5xl mb-2">.</span>
                                <li className="text-black mr-3 font-thin">پروژه محور</li>
                            </div>
                            <div className="flex items-center justify-start w h-8">
                                <span className="text-red-400 text-5xl mb-2">.</span>
                                <li className="text-black mr-3 font-thin">پشتیبانی رایگان</li>
                            </div>
                        </ul>

                    </div>
                    <div className="flex items-center justify-center mb-10 ">
                        <button type="button" className="w-[350px] shadow-lg hover:bg-red-600 transition-all h-auto mt-5 bg-red-500 p-2 rounded">
                            خرید دوره
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardDetails;