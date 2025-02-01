import React from 'react';
import Link from "next/link";
import dataCards from "@/helper/DataCards";
import Cart from "@/component/Module/Cart";
import RevealOnScroll from "@/helper/RevealOnScroll";


function CardHomePage(props) {


    return (
        <RevealOnScroll>
            <div className="flex flex-col items-center justify-around container mt-36 m-auto">
                <div className="text-center">
                    <span className="text-green-400">دوره ها</span>
                    <p className="text-black font-medium md:text-4xl mt-5 dark:text-white">دوره مد نظر خود را پیدا
                        کنید</p>
                </div>
                <div className="flex items-center justify-between mt-20 flex-col md:flex-row">
                    {
                        dataCards.slice(2, 6).map((item) => <Cart key={item.id} data={item}/>)
                    }
                </div>
                <div className="mt-20">
                    <button type="button"
                            className=" md:mr-0 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <Link
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                            href="/Courses">مشاهده تمام دوره ها</Link>
                    </button>
                </div>
            </div>
        </RevealOnScroll>

    );
}

export default CardHomePage;