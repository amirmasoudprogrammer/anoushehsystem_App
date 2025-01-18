"use client";

import React, { useState } from "react";

function LayoutTheme({ children }) {
    const [show, setShow] = useState(false);
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
        document.documentElement.classList.toggle("dark");
    };

    const toggleShow = () => setShow(!show);

    return (
        <>
            <div
                className={`flex items-center justify-between fixed ${
                    show ? "md:right-0 right-0" : "md:-right-56 -right-56"
                } transition-all ease-linear z-30 top-0 bottom-0`}
            >
                <div className="h-full bg-amber-50 dark:bg-gray-800 w-56 flex items-start shadow flex-col">
                    <p className="text-black dark:text-white mt-6 mr-5 font-normal text-xl border-b-2 border-b-slate-200 pb-1 w-48">
                        شخصی‌سازی
                    </p>
                    <div className="flex items-center justify-between w-60 pr-5 pl-7 pt-3">
                        <span className="text-black dark:text-white">حالت شب</span>
                        <label className="relative inline-block h-7 w-[48px] cursor-pointer rounded-full bg-gray-900 transition">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                onClick={toggleDarkMode}
                            />
                            <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-gray-300 transition-all peer-checked:start-7 peer-checked:bg-white"></span>
                        </label>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center w-10 h-10 cursor-pointer bg-red-600 rounded-l"
                    onClick={toggleShow}
                >
                    {show ? (
                        <Icon show={true} />
                    ) : (
                        <Icon show={false} />
                    )}
                </div>
            </div>
            {children}
        </>
    );
}

function Icon({ show }) {
    return show ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
            <path d="M6 18 18 6M6 6l12 12" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="animate-spin rotate-90 size-6 transform hover:rotate-90 ">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
    );
}

export default LayoutTheme;

