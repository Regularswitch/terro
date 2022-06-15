import React, { useState, useEffect } from 'react';
import { MyMenu, Footer } from "../components/index"
import Link from 'next/link'

export default function OndeComprar({ allCats }) {
    const [uf, setUf] = useState('SP')
    useEffect(() => {
        document.title = `Onde Comprar`
    }, []);

    const lojas = [
        {
            text: "Mercado Shops",
            href: "https://terro.mercadoshops.com.br/",
        },
        {
            text: "Smart Shop Brasil",
            href: "https://www.smartsbrasil.com.br/",
        },
        {
            text: "Diboa Tabacaria",
            href: "https://www.diboatabacaria.com.br/",
        },
        {
            text: "Grama Cultivo Eficiente",
            href: "https://www.gramacultivo.com.br/",
        },
    ]

    return (
        <>
            <MyMenu categories={allCats} colorFont="#520091" colorTheme="#C0E0CC" />
            <div className="pt-40 bg-Purple px-5 lg:px-20">
                <h1 className="font-Beastly text-Light-Green text-[60px] leading-[50px] lg:text-[240px] font-normal lg:leading-[220px] mb-5">
                    onde <br />
                    comprar
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-7">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-Beastly text-Light-Green">lojas físicas</h2>
                    </div>
                    <div className="grid items-center grid-cols-1 justify-center gap-4 lg:grid-cols-2">
                        <span className="font-TTHoves text-2xl text-Light-Green">Estado:</span>
                        <select
                            className="rounded p-2 font-TTHoves text-2xl"
                            style={{
                                color: "#520091",
                                backgroundColor: "#C0E0CC",
                            }}
                            onInput={(e) => setUf(e.target.value)}
                        >
                            <option value="SP" > São Paulo </option>
                            <option value="PR"> Paraná </option>
                        </select>
                    </div>
                </div>
                {uf == "PR" &&
                    <div>
                        <span className="inline-block font-Beastly text-4xl text-Purple bg-Light-Green px-2 font-normal my-7 lg:my-14">
                            curitiba
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 lg:mb-24">
                            <p className="mb-4">
                                <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">
                                    SmartsBrasil PR
                                </strong>
                                <span className="text-Light-Green font-TTHoves text-xl font-medium">
                                    Al. Dr. Carlos de Carvalho, 655 <br />
                                    Loja 04 - Curitiba-PR <br />
                                    (041) 995250078 <br />
                                </span>
                            </p>
                        </div>
                    </div>
                }
                {uf == "SP" &&
                    <div>
                        <span className="inline-block font-Beastly text-4xl text-Purple bg-Light-Green px-2 font-normal my-7 lg:my-14">
                            são paulo
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 lg:mb-24">
                            <p className="mb-4">
                                <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Belli Roots</strong>
                                <span className="text-Light-Green font-TTHoves text-xl font-medium">HeadShop GrowShop ReggaeShop <br />
                                    Rua 24 de Maio, 57 (em frente a Galeria do Rock) <br />
                                    República, São Paulo - SP, 01041-001 <br />
                                    (11) 94120-6835 <br /></span>
                            </p>
                            <p className="mb-4">
                                <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Grama Cultivo Eficiente</strong>
                                <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Cunha Gago, 824 <br />
                                    Pinheiros, São Paulo - SP, 05421-001 <br />
                                    (11) 3816-8257 <br /></span>
                            </p>
                            <p className="mb-4">
                                <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">Diboa Tabacaria</strong>
                                <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Fradique Coutinho, 155 <br />
                                    Pinheiros, São Paulo - SP, 05416-010 <br />
                                    (11) 3360-1930 <br /></span>
                            </p>
                            <p className="mb-4">
                                <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">SmartsBrasil SP</strong>
                                <span className="text-Light-Green font-TTHoves text-xl font-medium">Rua Teodoro Sampaio, 1020 - Loja 07 - Centro Comercial  <br />
                                    Pinheiros, São Paulo - SP 05406050 <br />
                                    (11) 96081-0032 <br /></span>
                            </p>
                        </div>
                    </div>
                }
                <h2 className="font-Beastly text-Light-Green text-5xl lg:text-7xl mb-12">lojas online</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-12 gap-16">
                    {lojas.map(loja => <Link href={loja.href} key={loja.text}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 lg:px-0 py-4 lg:py-0 font-TTHoves text-Light-Green hover:text-Purple hover:bg-Light-Green text-2xl font-black uppercase rounded border-2 border-solid text-center leading-[40px] lg:leading-[60px]">
                            {loja.text}
                        </a>
                    </Link>

                    )}
                </div>
            </div>

            <Footer corText="#520091" corBg="#C0E0CC" />
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