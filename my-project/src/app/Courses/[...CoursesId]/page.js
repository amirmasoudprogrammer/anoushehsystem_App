"use client"
import React from 'react';
import {useParams} from "next/navigation";
import DataCards from "@/helper/DataCards";
import CardDetails from "@/component/template/CardDetails";


function Page(props) {
    const {CoursesId} = useParams()

    const dataItems = DataCards.find((items) => items.id === +CoursesId)
    if (!dataItems) {
        return <p>دوره‌ای با این مشخصات یافت نشد.</p>;
    }
    return (
        <CardDetails data={dataItems}/>
    );
}

export default Page;