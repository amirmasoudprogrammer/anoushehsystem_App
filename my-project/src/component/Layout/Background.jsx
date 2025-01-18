import React from "react";
import Image from "next/image";
import img1 from "@/../public/Ellipse.png";

function Background({ children }) {
    const positions = [
        { className: "absolute left-24 top-56" },
        { className: "absolute right-96 top-36" },
        { className: "absolute left-64 bottom-24" },
        { className: "absolute right-40 top-64" },
    ];

    return (
        <>
            <section className="md:flex hidden">
                {positions.map((pos, index) => (
                    <Image
                        key={index}
                        src={img1}
                        alt={`Background icon ${index + 1}`}
                        width={250}
                        height={250}
                        className={`z-20 animate-ping w-6 ${pos.className}`}
                    />
                ))}
            </section>
            {children}
        </>
    );
}

export default Background;
