"use client"
import React from 'react';
import {MdArrowRightAlt} from "react-icons/md";
import {LuMoveLeft} from "react-icons/lu";

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


import Image from "next/image";

import svg1 from "@/../public/arrow-left.svg"
import svg2 from "@/../public/arrow-right.svg"
import Data from "@/helper/DataSlider";
import CardSlide from "@/component/Module/CardSlide";
import RevealOnScroll from "@/helper/RevealOnScroll";


function SliderCard(props) {
    return (
        <RevealOnScroll>
            <div className="flex flex-col mt-20 ">
                <div className="text-center">
                    <span className="text-green-400">نظر دانشجویان</span>
                    <p className="text-black font-medium md:text-4xl mt-5 dark:text-white">درمورد ما چه می گویند</p>
                </div>
                <div>
                    <Swiper breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        }
                    }} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={2.5}
                            coverflowEffect={{rotate: 0, stretch: -75, depth: 250, modifier: 3.5, slideShadows: false,}}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Navigation]}>

                        {
                            Data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <CardSlide data={item}/>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper>


                </div>
                <div className="flex items-center m-auto mt-16">
                    <div className="ml-10 ">
                        <button className='swiper-button-next  bg-red-400 text-xl p-3 rounded-full '>
                            <MdArrowRightAlt/>
                        </button>
                    </div>

                    <div className="">
                        <button className='swiper-button-next bg-red-400 text-xl p-3 rounded-full '>
                            <LuMoveLeft/>
                        </button>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    );
}

export default SliderCard;