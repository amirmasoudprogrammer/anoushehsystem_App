"use client"
import React, {useState} from 'react';
import Link from "next/link";
import DataCourses from "@/helper/DataCourses";
import {FaAnglesLeft} from "react-icons/fa6";
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleLeft} from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";
import DataCards from "@/helper/DataCards";
import dataCards from "@/helper/DataCards";
import Cart from "@/component/Module/Cart";


function CoursesPage(props) {

    const [activeItem, setActiveItem] = useState(null);
    const [dataProduct, setDataProduct] = useState({});

    const handleClick = (id, name) => {
        setActiveItem(id);
        const dataItems = DataCards.filter(item => item.Category === name)
        setDataProduct(dataItems)
        console.log(dataProduct)
    };


    return (
        <>
            <div className="container m-auto">
                <div className="flex mr-5 mt-10">
                    <Link href="/" className="text-red-400 ml-2 dark:text-white">صفحه اصلی </Link>
                    <span className="text-black font-thin dark:text-white">/</span>
                    <span className="text-black font-thin mr-3 dark:text-white">دوره ها</span>
                </div>
                <div className="mt-20 flex flex-col items-center ">
                    <div className="text-center">
                        <span className="text-red-400 text-2xl font-thin">دوره های ما</span>
                        <p className="text-gray-600 font-medium mt-2 dark:text-white text-3xl">دوره مد نظر خود را پیدا
                            کنید </p>
                    </div>
                    <div className="flex items-center justify-center ">
                        {DataCourses.map((item) => (
                            <span
                                key={item.id}
                                onClick={() => handleClick(item.id, item.name)}
                                className={`text-black flex items-center justify-center m-3 mt-10 cursor-pointer h-10 w-24 font-thin rounded shadow ${
                                    activeItem === item.id ? "transition duration-75 animate-bounce ease-in-out delay-100  bg-red-500 text-white" : "bg-white "
                                }`}
                            >
          {item.name}
        </span>
                        ))}
                    </div>
                    <div>
                        {dataProduct.length === undefined ? (
                            <div className="flex items-center justify-between mt-5 flex-col md:flex-row">
                                {
                                    dataCards.slice(2, 6).map((item) => <Cart key={item.id} data={item}/>)
                                }
                            </div>
                        ) : (
                            <div className="flex items-center justify-between mt-10 flex-col md:flex-row">
                                {
                                    dataProduct.map((item) => <Cart key={item.id} data={item}/>)
                                }
                            </div>
                        )}

                    </div>
                </div>
                <div className="flex items-center justify-center mt-36">
                    <span
                        className="text-black text-[10px] hover:bg-red-500 w-10 h-10 flex items-center justify-center hover:text-white font-thin rounded-r-xl dark:text-white"><FaAngleDoubleRight/></span>
                    <span
                        className="text-black text-[10px] hover:bg-red-500 w-10 h-10 flex items-center justify-center hover:text-white font-thin dark:text-white"><FaAngleRight/></span>
                    <div className="text-center text-black flex items-center justify-between  ">
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">20</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">...</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">14</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">13</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">12</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">11</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">10</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">...</span>
                        <span
                            className="text-black text-[15px] mt-2 cursor-pointer hover:bg-red-500 hover:text-white p-2 md:w-10 md:h-10 font-thin dark:text-white">1</span>
                    </div>
                    <span
                        className="text-black text-[10px] hover:bg-red-500 w-10 h-10 flex items-center justify-center hover:text-white font-thin dark:text-white"><FaAngleLeft/></span>
                    <span
                        className="text-black text-[10px] hover:bg-red-500 w-10 h-10 flex items-center justify-center hover:text-white font-thin rounded-l-xl dark:text-white"><FaAnglesLeft/></span>


                </div>
            </div>
        </>
    );
}

export default CoursesPage;