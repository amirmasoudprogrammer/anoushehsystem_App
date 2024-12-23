import React from 'react';
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
function Footer(props) {
    return (
        <div className="flex flex-col items-center justify-between container mt-8">
            <div className="text-black md:flex justify-around w-screen items-center border-t-2 border-t-emerald-50 pb-12 w-full m-auto pt-14  dark:bg-gray-800   ">
                <ul className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h2 className="text-xl mb-3 text-red-500 font-medium dark:text-white ">mramirmasoud.ir</h2>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">درباره ما</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">فرصت های شغلی</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">گواهینامه</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">بلاگ</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                </ul>
                <ul  className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h2 className="text-xl mb-3 text-black font-thin dark:text-white">یادگیری</h2>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">ارتباط با ما</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">نظرات دانشجویان</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">قیمت گزاری</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">سوالات متداول</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                </ul>
                <ul  className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h2 className="text-xl mb-3 text-black font-thin dark:text-white ">بیشتر</h2>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">مدرس شوید</Link>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">وبینارها</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">رزومه ساز</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white">
                        <Link className="group-hover:text-red-500 " href="/">پشتیبانی</Link>
                        <span
                            className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </li>
                </ul>
                <ul  className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <h2  className="text-xl mb-3 text-black font-thin dark:text-white">شبکه های اجتماعی</h2>
                    <li className="font-thin mb-2 group relative w-max dark:text-white"><Link className="flex items-center group-hover:text-red-500 " href="/">
                        <FaTelegram />
                        <span className="mr-2 group-hover:text-red-500">تلگرام</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </Link></li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white"><Link className="flex items-center group-hover:text-red-500 " href="/">
                        <FaInstagram />
                        <span className="mr-2 group-hover:text-red-500">اینستاگرام</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </Link></li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white"><Link className="flex items-center group-hover:text-red-500" href="/">
                        <CiLinkedin />
                        <span className="mr-2 group-hover:text-red-500">لینکدین</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </Link></li>
                    <li className="font-thin mb-2 group relative w-max dark:text-white"><Link className="flex items-center group-hover:text-red-500" href="/">
                        <CgMail />
                        <span className="mr-2 group-hover:text-red-500">جیمیل</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-red-400 group-hover:w-full"></span>
                    </Link></li>
                </ul>
            </div>
            <div className="text-black dark:text-white flex items-center justify-center w-screen border-t-2 border-t-emerald-50 mt-0.5 m-auto text-center pt-5  dark:bg-gray-800 ">
                <Link className="text-red-600 hover:dark:text-amber-100 " href="/">2024 mramirmasoud.ir</Link>
                <span>Copyright ©</span>
            </div>
        </div>
    );
}

export default Footer;