import React from 'react';
import Link from "next/link";

function RegisterPage(props) {
    return (
        <>
            <div className="flex md:mr-28 mr-5 mt-10">
                <Link href="/" className="text-red-400 ml-2 dark:text-white">صفحه اصلی </Link>
                <span className="text-black font-thin dark:text-white">/</span>
                <span className="text-black font-thin mr-3 dark:text-white">ثبت نام</span>

            </div>
            <div className="bg-slate-100 dark:bg-gray-800 mt-32 mb-32  shadow-xl m-auto flex flex-col  justify-center w-[320px] md:w-[550px] h-auto p-5">
                <span className="text-black text-center text-3xl font-thin dark:text-white">ایجاد حساب کاربری</span>
                <div className="flex flex-col mt-5">
                    <input type="text" placeholder="نام و نام خانوادگی"
                           className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                    <input type="text" placeholder="ایمیل"
                           className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                    <input type="text" placeholder="رمز عبور"
                           className="dark:text-white outline-0 text-black mt-3 bg-transparent h-12 rounded border p-2 dark:border-gray-700"/>
                </div>
                <button type="button" className="mt-5 bg-red-500 p-2 rounded">
                    ثبت نام
                </button>
                <div className="flex items-center justify-center mt-5 ">
                    <span className="text-black dark:text-white">حساب کاربری دارید؟</span>
                    <Link href="/Login" className="text-red-400">ورود</Link>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;