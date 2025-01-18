import React from 'react';
import Header from "@/component/Layout/Header";
import Footer from "@/component/Layout/Footer";

function Layouts({children}) {
    return (
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Layouts;