import style from "./style.module.css"

import IconProdBottom from "../Icon/ProdBottom"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function ListProd({ prods, colorTheme, colorFont }) {
    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }
    const router = useRouter()

    console.log(prods)

    return <>
        <div
            style={{
                backgroundColor: colorTheme
            }}
        >
            <Link href="#">
                <a
                    onClick={() => router.back()}
                    className="text-right block px-[70px] font-Beastly font-normal text-5xl"
                    style={{
                        color: colorFont,
                    }}
                >
                    voltar
                </a>
            </Link>

            <div
                className={`grid grid-cols-1 lg:grid-cols-3 gap-4 px-[70px]`}
                style={{
                    backgroundColor: colorTheme
                }}
            >
                {prods.map(p =>
                    <div key={p.slug} className={style.item}>
                        <div
                            className="relative w-full h-[250px]"
                        >
                            <Link href={'/produto/' + p.slug}>
                                <a>
                                    <Image
                                        src={p.image}
                                        onError={onError}
                                        alt={p.name}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </a>
                            </Link>
                        </div>
                        
                        {/* <strong
                            className="font-Beastly font-normal text-xl lg:text-6xl"
                            style={{
                                color: colorFont
                            }}
                        >
                            {p.name} {false && p.custom_fields.produtos_relacionados}
                        </strong> */}
                        
                        <span
                            className="mt-5 font-TTHoves uppercase font-medium text-sm lg:text-xl"
                            style={{
                                color: colorFont
                            }}
                        >
                            {p.custom_fields.subtitulo}
                        </span>
                        <Link href={p.custom_fields?.link_comprar || '/produto/' + p.slug }>
                            <a target={ p.custom_fields?.link_comprar ? '_blank' : '' }
                                className=" h-[45px] w-[270px] mx-auto mt-5 border-2 text-[color:var(--color)] hover:text-[color:var(--bg)] hover:bg-[color:var(--color)] rounded font-TTHovesBold text-xl py-2 mb-2 uppercase "
                                style={{
                                    borderColor: colorFont,
                                    "--color": colorFont,
                                    "--bg": colorTheme,
                                }}
                            >
                                Comprar Agora
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
        <div style={{ backgroundColor: colorFont }} className="pb-20">
            <IconProdBottom color={colorTheme} />
        </div>
    </>
}