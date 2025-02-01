import React from "react";

function Description() {
    const sections = [
        {
            title: "توضیحات",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
        },
        {
            title: "این دوره برای چه کسانی مناسب است؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
        },
        {
            title: "چرا باید در این دوره شرکت کنید؟",
            content:
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...",
        },
    ];

    return (
        <div className="p-5 md:p-10 bg-gray-100 dark:bg-gray-800 rounded shadow-lg mt-5 w-full md:w-[800px] flex flex-col">
            {sections.map((section, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-gray-800 dark:text-white font-medium text-lg md:text-xl">{section.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 font-thin mt-2 text-sm md:text-lg w-full md:w-auto leading-relaxed">
                        {section.content}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Description;
