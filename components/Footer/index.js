import IconComprarAgora from "../Icon/ComprarAgora";
import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";
import Terror from "../Icon/Terror";
import Link from 'next/link'
import Contato from '../Icon/Contato'
import Image from 'next/image'

export default function Footer({ corText, corBg }) {
    const cor = corText || "#EDDFD0"
    const bg = corBg || "#225439"
    const styleLink = {
        color: cor,
        borderBottom: "1px solid " + cor
    }

    function LinkFooter({ text, link }) {
        return <Link href={link} >
            <a>
                <span
                    className="flex h-14 justify-center lg:justify-start items-center text-xl w-8/12 mx-auto lg:mx-0 font-TTHovesBold uppercase cursor-pointer"
                    style={styleLink}
                >
                    {text}
                </span>
            </a>
        </Link>
    }

    return <>
        <div
            className="mt-[-100px] lg:mt-[-150px] mb-[-2px] relative z-[1] xl:mt-[-270px] pointer-events-none"
        >
            <Contato color={cor} />
        </div>
        <div
            className="w-100 relative  grid grid-cols-1 lg:grid-cols-[1fr_150px] content-center py-10 lg:px-[70px] text-center lg:text-left "
            style={{
                backgroundColor: cor,
                color: bg,
                alignItems: "center"
            }}
        >

            <div>

                <span
                    className="text-6xl lg:text-[210px] font-Beastly block "
                    style={{
                        color: bg,
                    }}
                >
                    contato
                </span>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-[40px] lg:w-[900px]">

                    <div>
                        <span className="block text-[20px] font-TTHoves mb-[20px]">TERRO SOLO VIVO LTDA.</span>
                        <span className="block text-[20px] font-TTHoves mb-[20px]">VENDAS@TERRO.AGR.BR</span>
                    </div>
                    <div>
                        <span className="block text-[20px] font-TTHoves mb-[20px]">CNPJ 37.326.747/0001-44</span>
                        <span className="block text-[20px] font-TTHoves mb-[20px]">MAPA N˚ SP 005709-6</span>
                    </div>
                    <div
                        className="flex justify-center lg:justify-start align-middle h-10 "
                    >
                        <div className="block mx-5"><IconWhatsApp color={bg} /></div>
                        <div className="block mx-5"><IconFacebook color={bg} /></div>
                        <div className="block mx-5"><IconInstagram color={bg} /></div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <IconComprarAgora size={150} color={bg} />
            </div>
        </div>
        <a
            className="fixed bottom-16 lg:bottom-8 right-8"
            href="https://wa.me/5511949181006"
            rel="noreferrer"
            target="_blank">
            <Image
                className="w-full"
                src="/ico/whatsapp.png"
                alt="WhatsApp"
                width={70}
                height={70}
            />
        </a>
    </>
}