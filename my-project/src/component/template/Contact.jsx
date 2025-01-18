import React from 'react';
import Link from "next/link";

function Contact(props) {
    return (
        <>
            <div className="mt-10 container m-auto  ">
                <div className="flex mr-8">
                    <Link href="/" className="text-red-400 ml-2 dark:text-white">صفحه اصلی </Link>
                    <span className="text-black font-thin dark:text-white">/</span>
                    <span className="text-black font-thin mr-3 dark:text-white">تماس با ما</span>

                </div>
                <div className="flex flex-col md:flex-row items-center justify-between h-auto w-full">
                    <div className='mt-20 flex-col flex ml-24 md:ml-0'>
                        <h2 className="font-medium text-zinc-800 md:text-5xl text-black dark:text-white">با ما در تماس باشید</h2>
                        <div className="mt-8">
                            <div className="flex">
                           <span className="text-xl ">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot"
                               className="text-xl w-8 h-8 p-2 rounded-full bg-red-500" role="img"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 384 512"><path fill="currentColor"
                                                           d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
                            </span>
                                <div className="flex flex-col text-black mr-3">
                                    <p className="md:text-xl font-thin dark:text-white">آدرس</p>
                                    <p className="md:text-xl font-thin mt-1 dark:text-white">ایران، خراسان جنوبی، فردوس</p>
                                </div>
                            </div>
                            <div className="flex mt-12   ">
                            <span className="text-xl ">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                                 className="text-xl w-8 h-8 p-2 rounded-full bg-red-500"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                                fill="currentColor"
                                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path></svg>
                            </span>
                                <div className="flex flex-col text-black mr-3">
                                    <p className="md:text-xl font-thin dark:text-white">تلفن</p>
                                    <p className="md:text-xl font-thin mt-1 dark:text-white">09302153874</p>
                                </div>
                            </div>
                            <div className="flex mt-12   ">
                            <span className="text-xl ">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                     className="text-xl w-8 h-8 p-2 rounded-full bg-red-500" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor"
                                                                                                    d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path></svg>
                            </span>
                                <div className="flex flex-col text-black mr-3">
                                    <p className="md:text-xl font-thin dark:text-white">ایمیل</p>
                                    <p className="md:text-xl font-thin mt-1 dark:text-white">info@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-100 dark:bg-gray-800 mt-10 shadow-xl flex flex-col  justify-between w-[320px] md:w-[600px] h-auto p-5">
                        <span className="text-black text-center text-3xl font-thin dark:text-white">پیام بگذارید</span>
                        <div className="flex flex-col mt-5">
                            <input type="text" placeholder="نام و نام خانوادگی" className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                            <input type="text" placeholder="ایمیل" className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                            <input type="text" placeholder="شماره تماس" className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                            <input type="text" placeholder="پیام" className="dark:text-white outline-0 text-black mt-3 bg-transparent h-24 border p-2 pb-14 dark:border-gray-700"/>
                        </div>
                       <button type="button" className="mt-5 bg-red-500 p-2 rounded">
                           ارسال پیام
                       </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;