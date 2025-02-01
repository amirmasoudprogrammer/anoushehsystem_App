import React from 'react';
import Image from "next/image";
import svg1 from "@/../public/images/instructor/1.png";
import { FaStar, FaPlayCircle } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";

function Teacher() {
    return (
        <div dir="rtl" className="p-5 md:p-10 bg-slate-50 text-black dark:bg-gray-800 dark:text-white rounded-xl shadow-xl mt-5 w-full md:w-[800px] flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center">
                <Image
                    src={svg1}
                    alt="teacher-icon"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="rounded-full self-center md:self-start mb-5 md:mr-10"
                />
                <div className="text-center md:text-right">
                    <span className="text-gray-800 dark:text-gray-300 text-sm font-semibold">
                        امیر مسعود اسدی طلب (Front-end Developer)
                    </span>
                    <div className="flex items-center justify-center md:justify-start mt-1">
                        <FaStar className="text-yellow-400"/>
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">4.5</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-1">
                        <FaPlayCircle className="text-blue-500"/>
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">10 دوره</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mt-1">
                        <TiStarburst className="text-green-500"/>
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">1000 دانشجو</span>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-justify text-sm w-full md:w-auto">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...
                </p>
            </div>
        </div>
    );
}

export default Teacher;
