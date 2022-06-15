import React, { useState, useEffect } from 'react'
import { MyMenu, BannerCat, Categories, Footer, ListProd} from "../../components/index"

export default function Categoria({ newcat, allCats }) {
    useEffect(() => {
        document.title = newcat.name
    }, []);
    const text = newcat.custom_fields.cor_fonte || '#225439'
    const bg = newcat.custom_fields.cor_tema||'#EDDFD0'
    return <>
        <MyMenu categories={allCats} colorTheme={bg} colorFont={text}/>
        <BannerCat img={newcat.image} name={newcat.name} colorTheme={bg} colorFont={text}  />
        <ListProd prods={newcat.products} colorTheme={bg} colorFont={text} />
        <Categories categories={allCats} colorTheme={bg} colorFont={text} />
        <Footer corBg={bg} corText={text} />
    </>
}

export async function getStaticPaths() {
    let reqCategories = await fetch(`${process.env.API_URL}/categories`);
    let categories = await reqCategories.json();
   

    const paths = categories.map( category => {
        return { params: { slug: category.slug } }
    } )


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params;

    let newreqCast = await fetch(`${process.env.API_URL}/category?slug=${slug}`);
    let newcat     = await newreqCast.json();

    let reqAllCats = await fetch(`${process.env.API_URL}/categories`);
    let allCats = await reqAllCats.json()

    return {
        props: {
            newcat,
            allCats
        },
        revalidate: 10
    }
}