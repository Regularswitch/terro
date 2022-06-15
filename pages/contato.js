import React, { useState, useEffect } from 'react';
import { MyMenu, Contato, Footer } from "../components/index"

export default function ContatoPage({ allCats }) {
    useEffect(() => {
        document.title = `Contato`
    }, []);
    return (
        <>
            <MyMenu categories={allCats} colorTheme="#520091" colorFont="#C0E0CC" />
            <div className='min-h-[var(--min-altura)] flex align-middle'
            style={{
                backgroundColor: "#C0E0CC",
                alignItems: "center",
                "--min-altura": "calc( 100vh - 270px )"
            }}
            >
                <Contato corText="#520091" corBg="#C0E0CC" pTop="0px" />                
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