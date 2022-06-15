import style from './style.module.css'

import IconFacebook from "../Icon/Facebook";
import IconInstagram from "../Icon/Instagram";
import IconWhatsApp from "../Icon/WhatsApp";

export default function Contato({ corText, corBg, pTop }) {
    const bg = corBg || "#EDDFD0"
    const text = corText || "#225439"
    const padTop = pTop || "0px"

    return <>
        <div
            className="px-2 px-5 lg:px-[70px] lg:min-h-[58vh] "
            style={{
                backgroundColor: bg,
                color: text,
                paddingTop: padTop
            }}
        >
            <span
                className="text-6xl lg:text-[240px] font-Beastly block pt-16"
                style={{
                    color: text,
                }}
            >
                contato
            </span>
            <div className="grid grid-col-1 lg:grid-cols-3 pb-6">
                <a
                    className="mt-5 font-TTHovesBold"
                    href="mailto:VENDAS@TERRO.AGR.BR"
                    style={{
                        color: text,
                    }}
                >
                    VENDAS@TERRO.AGR.BR
                </a>
                <div className="flex gap-5 mt-5">
                    <IconFacebook color={text} style={{ width: "50px" }} />
                    <IconInstagram color={text} style={{ width: "50px" }} />
                    <IconWhatsApp color={text} style={{ width: "50px" }} />
                </div>
            </div>
        </div>
    </>
}