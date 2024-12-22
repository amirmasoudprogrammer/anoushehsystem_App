"use client"
import React, {useEffect} from 'react';
import 'taos/style.css';

function HomePage() {
    useEffect(() => {
        import('taos').then((module) => module.init());
    }, []);
    return (
        <>

            <div>
                <span className="text-black">amir</span>
            </div>
        </>
    );
}

export default HomePage;