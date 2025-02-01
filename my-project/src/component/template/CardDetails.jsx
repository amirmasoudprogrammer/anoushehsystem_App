"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import Image from "next/image";
import Headline from "@/component/Module/Headline";
import Description from "@/component/Module/Description";
import Teacher from "@/component/Module/Teacher";
import Comments from "@/component/Module/Comments";

const tabs = [
    { name: "سرفصل", component: () => <Headline /> },
    { name: "توضیحات", component: () => <Description /> },
    { name: "مدرس", component: () => <Teacher /> },
    { name: "نظرات", component: () => <Comments /> }
];

function CardDetails({ data }) {
    const [activeId, setActiveId] = useState(0);
    const ActiveComponent = tabs[activeId].component;
    const { title, author, image, price } = data;

    return (
        <>
            <div className="mt-10 container mx-auto px-4">
                <div className="flex flex-wrap text-sm md:text-base">
                    <Link href="/" className="text-red-400 ml-2 dark:text-white">صفحه اصلی</Link>
                    <span className="text-gray-500 dark:text-gray-300">/</span>
                    <Link href="/Courses" className="text-red-400 font-thin mx-2 dark:text-white">دوره ها</Link>
                    <span className="text-gray-500 dark:text-gray-300">/</span>
                    <span className="text-gray-700 font-thin dark:text-white">آموزش {title}</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row container mx-auto items-start justify-center mt-10 px-4">
                <div className="flex flex-col w-full md:w-auto items-start">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded shadow-lg w-full md:w-[800px] h-auto p-6">
                        <span className="text-lg md:text-3xl font-medium text-gray-700 dark:text-white">
                            آموزش {title}
                        </span>
                        <div className="text-yellow-400 flex mt-3">
                            <p>(4.5)</p>
                            <span><FaStarHalfAlt /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm ml-2">(230 نظر)</p>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 mt-2">دانش‌آموزان دوره - 220</span>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            مدرس - <strong className="text-red-400 font-thin">{author}</strong>
                        </p>
                        <span className="text-gray-700 dark:text-gray-300 mt-2">آخرین بروزرسانی - آبان 1401</span>
                        <span className="text-gray-700 dark:text-gray-300 mt-2">زبان - فارسی</span>
                    </div>

                    <div className="flex flex-col mt-8 w-full">
                        <div className="flex flex-wrap gap-2 md:w-[450px]">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveId(index)}
                                    className={`rounded shadow-lg px-4 py-2 text-sm md:text-base transition-all ${
                                        activeId === index
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 w-full">
                            <ActiveComponent />
                        </div>
                    </div>
                </div>

                <div className="rounded-md mt-10 md:mr-10 md:mt-0 md:ml-10 w-full md:w-[400px] bg-gray-100 dark:bg-gray-800 shadow-lg p-6">
                    <div className="w-full flex justify-center">
                        <Image className="rounded w-[300px] md:w-[350px]" src={image} alt="img" width={400} height={400} />
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <span className="text-gray-700 dark:text-gray-300"><del>100.000</del></span>
                        <span className="text-3xl font-medium text-gray-800 dark:text-white">{price}</span>
                        <span className="text-red-400 font-medium">51% تخفیف</span>
                    </div>
                    <div className="mt-5">
                        <p className="text-gray-800 dark:text-white text-lg font-medium">ویژگی‌های دوره</p>
                        <ul className="mt-2 space-y-1">
                            <li className="text-gray-700 dark:text-gray-300">150 درس</li>
                            <li className="text-gray-700 dark:text-gray-300">پروژه محور</li>
                            <li className="text-gray-700 dark:text-gray-300">پشتیبانی رایگان</li>
                        </ul>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            className="w-full md:w-[350px] shadow-lg hover:bg-red-600 transition-all py-2 bg-red-500 rounded text-white"
                        >
                            خرید دوره
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDetails;
