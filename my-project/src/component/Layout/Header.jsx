"use client"
import React, {useState} from 'react';
import Link from "next/link";
import svg from "../../../public/vercel.svg";

function Header(props) {
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className=" dark:bg-gray-800 border-b-2 dark:border-b-2 border-b-sky-100 dark:border-b-gray-600">
            <div className="flex items-center justify-start md:mr-24 ">
                <ul className="md:flex hidden uppercase items-center gap-8">
                    <li><Link href="/" className="hover:text-red-600 py-7 px-3 inline-block text-black dark:text-white">صفحه اصلی</Link></li>
                    <li className="py-7 px-3 inline-block text-black cursor-pointer group ">
                        <div className="hover:text-red-600  dark:hover:text-white flex items-center text-center justify-between">
                            <span className="ml-2 dark:text-white">دوره ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="size-5 -mt-1">
                                <path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <ul className="rounded dark:bg-gray-600 opacity-0 transition transition-transform invisible transform translate-y-11 group-hover:translate-y-0 group-hover:md:opacity-100 group-hover:md:visible hover:md:opacity-100 hover:md:visible text-lg absolute top-11 mt-9 pb-3 pr-3 bg-white w-56 h-28 grid grid-cols-1 gap-5">
                            <li className="dark:text-white hover:text-red-600 text-sm text-gray-600 my-2"><Link href="/">وب</Link></li>
                            <li className="dark:text-white hover:text-red-600 text-sm text-gray-600 my-1"><Link href="/">اپلکیشن</Link></li>

                        </ul>
                    </li>
                    <li className="py-7 px-3 inline-block text-black cursor-pointer duration-200 group ">
                        <div className="hover:text-red-600 dark:hover:text-white flex items-center justify-between">
                            <span className="ml-2 dark:text-white">صفحات</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="size-5 -mt-1">
                                <path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <ul className="rounded dark:bg-gray-600 opacity-0 transition transition-transform invisible transform translate-y-11 group-hover:translate-y-0 group-hover:md:opacity-100 group-hover:md:visible hover:md:opacity-100 hover:md:visible text-lg absolute top-11 mt-9 pb-3 pr-3 bg-white w-56 h-28 grid grid-cols-1 gap-5">
                            <li className="hover:text-red-600 text-sm text-gray-600 my-2 dark:text-white"><Link href="/Login">ورود</Link></li>
                            <li className="hover:text-red-600 text-sm text-gray-600 my-1 dark:text-white"><Link href="/register">ثبت نام</Link></li>

                        </ul>
                    </li>
                    <li><Link href="/Contact" className="hover:text-red-600 py-7 px-3 inline-block text-black dark:text-white">تماس با ما</Link></li>
                </ul>
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="#000" className="size-6 dark:text-white group-focus:dark:text-white">
                                <path d="M6 18 18 6M6 6l12 12"/>
                            </svg>) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="#000" className="size-6 dark:text-white group-focus:dark:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                            </svg>)}
                    </div>
                </div>

                {/* mobile menu */}
                <ul className={`md:hidden dark:bg-gray-800 bg-white z-20 absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[100%]"} `}>
                    <li className="hover:text-red-600 px-3 py-3 text-left md:cursor-pointer "><Link className="dark:text-white py-7 text-black" href="/">صفحه اصلی</Link></li>
                    <li className="px-3 py-3 text-left md:cursor-pointer text-black group" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="dark:hover:text-white flex items-center justify-between " onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke="#000" className="size-6">
                                    <path
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                                </svg>
                            ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor" className="size-6">
                                <path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>)}

                            <span className="dark:text-white">دوره ها</span>
                        </div>
                        <ul className={`hidden   group-hover:block  hover:block  text-lg relative right-64 p-5  w-20 h-36 grid grid-cols-1 gap-5`}>
                            <li className="text-sm text-black mt-5 my-2.5 dark:text-white"><Link href="/">وب</Link></li>
                            <li className="text-sm text-black mt-8 my-2.5 dark:text-white"><Link href="/">اپلکیشن</Link></li>
                        </ul>

                    </li>
                    <li className="px-3 py-3 text-left md:cursor-pointer text-black group" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="flex items-center justify-between dark:hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke="#000" className="size-6">
                                    <path
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                                </svg>
                            ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor" className="size-6">
                                <path d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>)}

                            <span className="dark:text-white">صفحات</span>
                        </div>
                        <ul className={`hidden  group-hover:block  hover:block  text-lg relative right-64 p-5 w-20 h-36 grid grid-cols-1 gap-5`}>
                            <li className="text-sm text-black mt-5 my-2.5 dark:text-white"><Link href="/Login">ورود</Link></li>
                            <li className="text-sm text-black mt-8 my-2.5 dark:text-white"><Link href="/register">ثبت نام</Link></li>
                        </ul>

                    </li>
                    <li className="hover:text-red-600 px-3 py-3 text-left md:cursor-pointer"><Link className="py-7 dark:text-white text-black" href="/Contact">تماس با ما</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;