"use client"
import React from 'react';
import CountUp from 'react-countup';
import RevealOnScroll from "@/helper/RevealOnScroll";

function Number(props) {
    return (
        <RevealOnScroll>
            <div className="dark:text-white rounded dark:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] md:h-40 flex text-black mt-32 flex-col md:flex-row items-center container justify-around m-auto">
                <div className="flex flex-col items-center  mt-10 md:mt-0">
                    <span className="text-3xl"> <CountUp start={0} end={800} duration={3.75}/>K</span>
                    <p className="text-xl font-thin mt-2">دانش اموز</p>
                </div>
                <div className="flex  flex-col items-center  mt-10 md:mt-0">
                    <span className="text-3xl flex items-center justify-center text-green-400"><strong
                        className="font-thin -mt-2">+</strong><CountUp start={0} end={500} duration={3.75}/></span>
                    <p className="text-xl font-thin mt-2"> دوره اموزشی</p>
                </div>
                <div className="flex flex-col items-center  mt-10 md:mt-0">
                    <span className="text-3xl flex items-center justify-center text-red-400"><strong
                        className="font-thin -mt-2">+</strong><CountUp start={0} end={50} duration={3.75}/></span>
                    <p className="text-xl font-thin mt-2">کشور</p>
                </div>
                <div className="flex flex-col items-center  mt-10 md:mt-0">
                    <span className="text-3xl flex items-center justify-center text-red-300"><strong
                        className="font-thin -mt-2">+</strong><CountUp start={0} end={100} duration={3.75}/></span>
                    <p className="text-xl font-thin mt-2">استاد مجرب</p>
                </div>
            </div>
        </RevealOnScroll>
    );
}

export default Number;