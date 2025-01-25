import React from 'react';
import LayoutCourses from "@/component/Layout/LayoutCourses";

function Layout({children}) {
    return (
       <LayoutCourses children={children}/>
    );
}

export default Layout;