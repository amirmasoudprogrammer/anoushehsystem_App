import React, { useState } from "react";
import { FaAngleDown, FaPlayCircle } from "react-icons/fa";

function Headline() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleShow = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const chapters = [
        {
            title: "فصل اول : آشنایی با مبانی و مفاهیم اساسی React Js",
            duration: "5 ساعت",
            lessons: [
                { title: "معرفی دوره جامع آموزش React Js", time: "04:00" },
                { title: "React چیست؟", time: "10:00" },
                { title: "نصب React", time: "07:00" },
            ],
        },
        {
            title: "فصل دوم : ساخت Todo App",
            duration: "4 ساعت",
            lessons: [
                { title: "مفهوم JSX", time: "06:00" },
                { title: "ایجاد کامپوننت", time: "12:00" },
            ],
        },
        {
            title: "فصل سوم : debugging(خطایابی) در react",
            duration: "3 ساعت",
            lessons: [
                { title: "مفهوم State", time: "08:00" },
                { title: "درک Props در React", time: "09:30" },
            ],
        },
        {
            title: "فصل چهارم : طراحی UI پروژه",
            duration: "3 ساعت",
            lessons: [
                { title: "مفهوم State", time: "08:00" },
                { title: "درک Props در React", time: "09:30" },
            ],
        },
    ];

    return (
        <div className="p-5 md:p-10 bg-gray-100 dark:bg-gray-800 rounded shadow-lg mt-5 md:w-[800px] w-full flex flex-col items-start">
            <span className="text-gray-800 dark:text-white font-thin text-lg md:text-xl">سرفصل‌های دوره</span>
            <div className="flex flex-col mt-5 md:w-full w-full">
                {chapters.map((chapter, index) => (
                    <div key={index} className="cursor-pointer border-b border-gray-300 dark:border-gray-700">
                        <div
                            className="flex flex-col md:flex-row items-center justify-between w-full p-4 md:p-5"
                            onClick={() => toggleShow(index)}
                        >
                            <p className="flex text-gray-800 dark:text-white text-sm md:text-lg font-thin">{chapter.title}</p>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <span className="ml-2 md:text-lg mt-1 md:mt-0 flex">{chapter.lessons.length} درس | {chapter.duration}</span>
                                <FaAngleDown className={`transition-transform duration-300 text-gray-800 dark:text-white ${openIndex === index ? "rotate-180" : ""}`} />
                            </div>
                        </div>

                        <div
                            className={`overflow-hidden transition-all ${
                                openIndex === index ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
                            }`}
                        >
                            {chapter.lessons.map((lesson, i) => (
                                <div key={i} className="flex justify-between items-center px-4 py-2">
                                    <div className="flex items-center">
                                        <FaPlayCircle className="text-gray-800 dark:text-white" />
                                        <span className="text-gray-800 dark:text-white text-sm md:text-lg font-normal mr-2">{lesson.title}</span>
                                    </div>
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">{lesson.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Headline;
