import React, { useState, useEffect } from 'react';
import { MyMenu, BannerCat, Footer } from "../components/index"



export default function NotFound({ allCats }) {
    useEffect(() => {
        document.title = `Página não encontrada`
    }, []);
    return (
        <>
            <MyMenu categories={allCats} colorTheme="#520091" colorFont="#C0E0CC" />
            <BannerCat img="/images/bg-hero-banner.png" name="404" colorTheme="#C0E0CC" colorFont="#520091" />
            <div className='min-h-[var(--min-altura)] flex align-middle'
            style={{
                backgroundColor: "#C0E0CC",
                alignItems: "center",
                "--min-altura": "calc( 100vh - 270px )"
            }}
            >
                <div className="text-center w-full text-[33px] text-[#520091] font-TTHovesBold">Página não existe</div>
            </div>
            <Footer corText="#C0E0CC" corBg="#520091" />
        </>
    )
}

export async function getStaticProps(context) {
    let reqAllCats = await fetch(`${process.env.API_URL}/categories`)
    let allCats = await reqAllCats.json();

    return {
        props: {
            allCats
        },
        revalidate: 10
    }
}