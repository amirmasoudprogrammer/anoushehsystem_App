import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Image from "next/image";
import svg1 from "@/../public/images/instructor/1.png";

// کامپوننت نمایش ستاره‌ها
const StarRating = ({ rating }) => {
    return (
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) =>
                index < Math.floor(rating) ? (
                    <FaStar key={index} />
                ) : (
                    <FaRegStarHalfStroke key={index} />
                )
            )}
        </div>
    );
};

// کامپوننت نوار پیشرفت برای امتیازات
const ProgressBar = ({ label, percentage }) => {
    return (
        <div className="flex items-center justify-center md:justify-start mr-5 md:mr-0">
            <span className="text-yellow-400 ml-3">{label} ستاره</span>
            <div className="w-[200px] md:w-[300px] bg-neutral-200 dark:bg-neutral-600 rounded overflow-hidden">
                <div
                    className="bg-red-600 p-1 text-center text-xs font-medium leading-none text-primary-100"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <span className="text-black dark:text-white mr-5 font-thin">
                {percentage}%
            </span>
        </div>
    );
};

// داده‌های آمار نظرات
const ratingStats = [
    { label: 5, percentage: 50 },
    { label: 4, percentage: 30 },
    { label: 3, percentage: 10 },
    { label: 2, percentage: 7 },
    { label: 1, percentage: 3 },
];

// داده‌های نظرات کاربران
const commentsData = [
    {
        name: "امیر مسعود اسدی طلب",
        role: "Front-end Developer",
        rating: 5,
        timeAgo: "1 هفته پیش",
        text: "یک دوره فوق العاده. من موارد زیادی رو در این دوره یاد گرفتم و از استاد دوره بخاطر فن بیان و تسلطشون تشکر میکنم.",
    },
    {
        name: "زهرا احمدی",
        role: "UI/UX Designer",
        rating: 4,
        timeAgo: "2 هفته پیش",
        text: "دوره خوبی بود، اما انتظار داشتم پروژه‌های بیشتری در آن بررسی شود.",
    },
    {
        name: "علی رضایی",
        role: "Back-end Developer",
        rating: 5,
        timeAgo: "3 روز پیش",
        text: "استاد خیلی خوب توضیح می‌ده و تمام موارد مورد نیاز رو پوشش می‌ده. پیشنهاد می‌کنم حتما این دوره رو ببینید.",
    },
];

// کامپوننت نمایش هر نظر
const Comment = ({ name, role, rating, timeAgo, text }) => {
    return (
        <div className="flex items-center mt-10">
            <Image
                src={svg1}
                alt="user-icon"
                width={60}
                height={60}
                loading="lazy"
                className="rounded-full"
            />
            <div className="mr-5">
                <span className="text-gray-800 dark:text-gray-300 text-[12px] md:text-sm  font-semibold">
                    {name} ({role})
                </span>
                <div className="flex items-center mt-1">
                    <StarRating rating={rating} />
                    <span className="text-gray-700 dark:text-gray-400 font-medium mt-2 mr-2">
                        {timeAgo}
                    </span>
                </div>
                <p className="text-black dark:text-white text-[12px] md:text-sm  text-center w-64 md:w-auto font-thin mt-2">
                    {text}
                </p>
            </div>
        </div>
    );
};

function Comments() {
    return (
        <div className="md:p-10 bg-slate-50 dark:bg-gray-800 rounded shadow-lg mt-5 w-full md:w-[800px] flex flex-col items-start">
            <span className="text-black dark:text-white font-thin text-xl mr-10 mt-5 md:mt-5 md:mr-0">
                نظرات دانشجویان
            </span>

            {/* بخش امتیازات */}
            <div className="mt-5 flex justify-center md:justify-evenly items-center md:flex-row flex-col md:w-[700px]">
                <div className="flex flex-col items-center">
                    <span className="text-black dark:text-white font-bold text-4xl">4.5</span>
                    <StarRating rating={4.5} />
                    <span className="text-black dark:text-white mt-3">230 نظر</span>
                </div>
                <div className="flex flex-col mt-5 md:mt-0 md:mr-20 space-y-2">
                    {ratingStats.map((item, index) => (
                        <ProgressBar key={index} label={item.label} percentage={item.percentage} />
                    ))}
                </div>
            </div>

            {/* فیلتر نظرات */}
            <div className="mt-5 flex flex-col w-full">
                <span className="text-black dark:text-white mr-5 md:mr-0">نظرات</span>
                <select className="mt-2 p-2 border bg-transparent text-black dark:text-white dark:bg-gray-600 w-[200px] rounded">
                    <option>تمامی نظرات</option>
                    <option>1 ستاره</option>
                    <option>2 ستاره</option>
                    <option>3 ستاره</option>
                    <option>4 ستاره</option>
                    <option>5 ستاره</option>
                </select>
            </div>

            {/* نمایش لیست نظرات */}
            <div className="mt-5">
                {commentsData.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </div>

            {/* دکمه مشاهده بیشتر */}
            <button className="mt-5 bg-red-500 p-2 text-white rounded mb-5 mr-10 md:mr-0 md:mb-0">
                نظرات بیشتر
            </button>
        </div>
    );
}

export default Comments;
