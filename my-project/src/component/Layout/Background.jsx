import React from 'react';
import img1 from "@/../public/Ellipse.png"
import Image from "next/image";

function Background({children}) {
    return (
        <>
            <section className=" md:flex hidden">
                <Image
                    src={img1} alt="icon" width={250} height={250}
                    className="z-20 animate-ping w-6 absolute left-24 top-56"
                />
                <Image
                    src={img1} alt="icon" width={250} height={250}
                    className="z-20 animate-ping w-6 absolute right-96 top-36"
                />
                <Image
                    src={img1} alt="icon" width={250} height={250}
                    className="z-20 animate-ping w-6 absolute left-64 bottom-24"
                />
                <Image
                    src={img1} alt="icon" width={250} height={250}
                    className="z-20 animate-ping w-6 absolute right-40 top-64"
                />
            </section>

            {children}
        </>
    );
}

export default Background;