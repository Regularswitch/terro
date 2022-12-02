import React, { useState, useEffect } from 'react';
import { MyMenu, Footer } from "../components/index"
import Link from 'next/link'

export default function OndeComprar({ allCats, allAddress }) {

    useEffect(() => {
        document.title = `Onde Comprar`
    }, []);

    const lojasFilter = allAddress.filter(l => l.acf.link.length > 7).map(l => ({
        text: l.title.rendered,
        href: l.acf.link,
    }))

    const physicalStore = allAddress.filter(l => l.acf.logadouro.length > 7)

    const cityTaxonomic = []

    const estados = physicalStore.reduce((acc, l) => {
        if (!acc.includes(l.acf.estado)) {
            acc.push(l.acf.estado)
            cityTaxonomic.push({
                id: l.acf.estado,
                list: []
            })
        }
        return acc
    }, []).reverse()

    const cidades = physicalStore.reduce((acc, l) => {
        if (!acc.includes(l.acf.cidade)) {
            acc.push(l.acf.cidade)
            cityTaxonomic.forEach((e, i) => {
                if (e.id == l.acf.estado) {
                    cityTaxonomic[i].list.push(l.acf.cidade)
                }
            })
        }
        return acc
    }, [])

    const [uf, setUf] = useState(estados[0])

    const nowCity = cityTaxonomic.find(c => c.id == uf).list[0]

    const [city, setCity] = useState(nowCity)

    const lojas = lojasFilter

    const address = [
        {
            name: "SÃO PAULO",
            slug: "SP",
            data: [
                { name: "Campinas", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "Green World", logadouro: "Av. Nossa Sra. de Fátima, 460 - Taquaral,<br /> Campinas - SP, 13076-000", telefone: "(19) 97108-0775", type: "address", link: "https://www.greenworldgrow.com.br" },
                { name: "Jundiaí", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "Breeze Grow Shop", logadouro: "R. Sen. Fonseca, 557 - Centro, <br /> Jundiaí - SP, 13201-017", telefone: "(11) 99663-0860", type: "", link: "https://www.breezegrowshop.com.br" },
                { name: "São Bernardo do Campo", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "D'Gusta Head Shop e Grow Shop", logadouro: "R. Brasílio Machado, 382 - Loja 05 - Centro, <br /> São Bernardo do Campo - SP, 09715-140", telefone: "(11) 94752-6851", type: "", link: "https://www.dgustaheadgrow.com.br " },
                { name: "São Paulo", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "Garden Center Paisagismo", logadouro: "R. Jaguaribe, 134 - Santa Cecília, <br /> São Paulo - SP, 01224-001", telefone: "(11) 3331-1170", type: "", link: "http://gardenpaisagismo.com.br/" },
                { name: "Belli Roots", logadouro: "Em frente a Galeria do Rock - R. 24 de Maio,  57 - República,<br /> São Paulo - SP, 01041-001", telefone: "(11) 94120-6735", type: "", link: "https://www.belliroots.com.br" },
                { name: "SmartsBrasil SP", logadouro: "R. Teodoro Sampaio, 1020 - Loja 07 - Centro Comercial Pinheiros, <br /> São Paulo - SP, 05406-050 ", telefone: "(11) 96081-0032", type: "", link: "https://www.smartsbrasil.com.br" },
                { name: "Grow Pro", logadouro: "R. da Paz, 1104 - Chácara Santo Antônio (Zona Sul), <br /> São Paulo - SP, 04713-001", telefone: "(11) 2659-2220", type: "", link: "https://www.growpro.com.br" },
                { name: "Garden Sacomã", logadouro: "R. Cipriano Barata, 3500 - Ipiranga, <br /> São Paulo - SP, 04205-002", telefone: "(11) 2063-7017", type: "", link: "https://www.gardensacoma.com.br" },
                { name: "Amabile Flower Shop", logadouro: "R. José Antônio Coelho, 602 - Vila Mariana, <br /> São Paulo - SP, 04011-061", telefone: "", type: "", link: "https://amabileflores.shop" },
            ]
        },
        {
            name: "PARANÁ",
            slug: "PR",
            data: [
                { name: "Curitiba", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "SmartsBrasil PR", logadouro: "Al. Dr. Carlos de Carvalho, 655 - Loja 04 - Centro, <br /> Curitiba - PR, 80430-180", telefone: "(41) 99525-0078", type: "address", link: "" },
            ]
        },
        {
            name: "Rio de Janeiro",
            slug: "RJ",
            data: [
                { name: "Niterói", logadouro: "", telefone: "", type: "subtitle", link: "" },
                { name: "Cultlight", logadouro: "Loja online, Niteroí, RJ", telefone: "(21) 96593-9706", type: "address", link: "www.cultlight.com.br" },
            ]
        },
    ]


    return (
        <>
            <MyMenu categories={allCats} colorFont="#520091" colorTheme="#C0E0CC" />
            <div className="pt-40 bg-Purple px-5 lg:px-20 pb-[50px] lg:pb-[100px]">
                <h1 className="font-Beastly text-Light-Green text-[60px] leading-[50px] lg:text-[150px] font-normal lg:leading-[150px] mb-5">
                    comprar <br />
                    agora
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-7">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-Beastly text-Light-Green">lojas físicas</h2>
                    </div>
                    <div className="grid items-center grid-cols-1 justify-center gap-4 lg:grid-cols-2">
                        <div>
                            <span className="mb-2 block font-TTHoves text-2xl text-Light-Green">Estado:</span>
                            <select
                                className="rounded p-2 font-TTHoves text-2xl"
                                style={{
                                    color: "#520091",
                                    backgroundColor: "#C0E0CC",
                                }}
                                onChange={(e) => {
                                    let estado = e.target.value
                                    let nc = cityTaxonomic.find(c => c.id == estado).list[0]
                                    setUf(estado)
                                    setCity(nc)
                                }}
                            >
                                {estados.map(e => <option key={'s_'+e} value={e} > {e} </option>)}
                            </select>
                        </div>
                        <div>
                            <span className="mb-2 block font-TTHoves text-2xl text-Light-Green">Cidade:</span>
                            <select
                                className="rounded p-2 font-TTHoves text-2xl"
                                style={{
                                    color: "#520091",
                                    backgroundColor: "#C0E0CC",
                                }}
                                onInput={(e) => setCity(e.target.value)}
                            >
                                {city && cidades.map(e => <option key={'c_'+e} hidden={!cityTaxonomic.find(c => c.id == uf).list.includes(e)} value={e} selected={city == e} > {e} </option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='w-full'>
                        <div className='mb-4'>
                            <span className="inline-block font-Beastly text-4xl text-Purple bg-Light-Green px-2 font-normal my-7 lg:my-14">
                                {city}
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="">
                        {physicalStore.map((loja, i) => <>
                            {loja.acf.cidade == city && <div className='w-full lg:w-1/2 inline-block mb-4'>
                                <p className="mb-4">
                                    <strong className="block text-2xl text-Light-Green font-TTHoves font-black uppercase">
                                        {loja.title.rendered}
                                    </strong>
                                    <span className="text-Light-Green font-TTHoves text-xl font-medium">
                                        <div
                                            className='font-TTHoves'
                                            dangerouslySetInnerHTML={{ __html: loja.acf.logadouro }}
                                        />
                                        {loja.acf.telefone} <br />
                                    </span>
                                </p>
                            </div>}
                        </>)}
                    </div>
                </div>

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

    let requestAddress = await fetch(`https://terro.app.br/wp-json/wp/v2/endereco?per_page=100`)
    let allAddress = await requestAddress.json();

    return {
        props: {
            allCats,
            allAddress
        },
        revalidate: 10
    }
}