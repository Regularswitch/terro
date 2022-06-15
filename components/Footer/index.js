import IconComprarAgora from "../Icon/ComprarAgora";
import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";
import Terror from "../Icon/Terror";
import Link from 'next/link'

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
            className="w-100 grid grid-cols-1 lg:grid-cols-4 py-10 lg:py-20"
            style={{
                backgroundColor: bg,
                color: cor
            }}
        >
            <div className="flex justify-center">
                <Terror color={cor} />
            </div>
            <span style={styleLink} className="w-8/12 mx-auto lg:mx-0 mt-7 lg:hidden"></span>
            <div>
                <LinkFooter text="Home" link="/" />
                <LinkFooter text="Produto" link="/categoria-produto/cultivo-indoor" />
            </div>
            <div>
                <LinkFooter text="Contato" link="/contato" />
                <div
                    className="flex justify-center lg:justify-start align-middle h-10 mt-4"
                >
                    <div className="block mx-5"><IconWhatsApp color={cor} /></div>
                    <div className="block mx-5"><IconFacebook color={cor} /></div>
                    <div className="block mx-5"><IconInstagram color={cor} /></div>
                </div>
                <span style={styleLink} className="flex w-8/12 mx-auto lg:mx-0 "></span>
            </div>
            <div className="hidden lg:block">
                <IconComprarAgora color={cor} />
            </div>
        </div>
    </>
}