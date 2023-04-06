import Menu from "../Icon/Menu.js"
import Terror from "../Icon/Terror.js"
import { motion } from "framer-motion"
import react, { useState } from "react"
import Link from 'next/link'
import SetaMenu from "../Icon/SetaMenu.js"

export default function MenuMobile({ colorTheme, colorFont, categories }) {

    

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    const [isOpenSub, setIsOpenSub] = useState(true)

    function toggleMenuSub() {
        setIsOpenSub(!isOpenSub)
    }

    const variants = {
        hidden: {
            scale: .5,

        },
        visible: {
            scale: 33
        }
    };

    const left = {
        hidden: {
            rotate: 0,


        },
        visible: {
            rotate: 45,
        }

    };
    const right = {
        hidden: {
            rotate: 0,

        },
        visible: {
            rotate: -45
        }

    };

    const boxVar = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delayChildren: 0.5,
                staggerDirection: -1
            }
        },
    }



    const listCategories = categories.map( cat => ({
        text: cat.name,
        href: `/categoria-produto/${cat.slug}`
    }) )

    function LinkSubMenuMobile({ href, text, color }) {
        return <div
            className={'font-TTHovesRegular text-xs py-2'}
            style={{
                color
            }}
        >
            <Link href={href}>
                <a> {text} </a>
            </Link>
        </div>
    }

    function LinkMenuMobile({ href, text, sub, color, btn }) {
        let classBtn = !btn ? '' : '!border-[1px] border-[#FFF] !px-4 !py-2 !rounded '
        return <div
            className={'uppercase font-TTHovesRegular  text-[18px] border-solid border-b-[1px] py-3' }
            key={Math.random()}
            style={{
                color,
                borderColor: color,
            }}
        >
            <Link href={href}>
                <a style={{borderColor: color}} className={"flex justify-between " + classBtn} onClick={_=> { sub && toggleMenuSub()}} >
                    {text} 
                    {sub && <span 
                    className="w-[22px] h-[22px] mt-[9px] transition-all"
                    onClick={toggleMenuSub}
                    style={{
                        transform: !isOpenSub ? "rotate(0deg)" :  "rotate(90deg)",
                    }}
                    >                     
                    <SetaMenu color={color} />
                    </span>}
                </a>
            </Link>
            <div className={`${isOpenSub && 'hidden'}`}>
                {sub && sub.map(c => <div onClick={_=> setIsOpen(false)}  key={Math.random()}><LinkSubMenuMobile   {...c} /></div>)}
            </div>
        </div>
    }

    return <>
        <motion.div
            animate={isOpen ? "visible" : "hidden"}
            variants={boxVar}
            className={`fixed top-0 left-0  p-7 w-full h-full z-20 ${!isOpen && 'hidden'}`}
        >
            <div
                className={'border-solid border-b-[1px] py-4 '}
                style={{
                    borderColor: colorFont
                }}
            >
                <Terror color={colorFont} />
            </div>
            {/* <LinkMenuMobile key="home" color={colorFont} href="/" text="HOME" /> */}
            {/* <LinkMenuMobile key="Categorias" color={colorFont} href="#" text="Categorias" sub={listCategories} /> */}
            {/* {listCategories.map( c => <LinkMenuMobile key={c.text} color={colorFont} href={c.href} text={c.text} /> )} */}



            <LinkMenuMobile color={colorFont} href="/categoria-produto/cultivo-indoor" text="Cultivo Indoor" />
            <LinkMenuMobile color={colorFont} href="/categoria-produto/kits-prontos" text="Kits Prontos" />
            <LinkMenuMobile color={colorFont} href="/categoria-produto/biofertilizantes" text="Adubos" />
            <LinkMenuMobile color={colorFont} href="/categoria-produto/acessorios" text="Acessórios" />
            <LinkMenuMobile btn={true}  color={colorFont} href="https://www.lojaterro.com.br" text="Comprar" />
            <LinkMenuMobile btn={true}  color={colorFont} href="/onde-comprar" text="Lojas" />





            {/* <LinkMenuMobile key="onde-comprar" color={colorFont} href="/onde-comprar" text="Onde Comprar" /> */}
        </motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={variants}
            className="lg:hidden z-10 fixed bottom-20 left-5 bg-Dark-Green rounded-full p-7"
            style={{
                backgroundColor: colorTheme
            }}
        > </motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-[105px]' : 'bottom-[116px]'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={left}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-[105px]' : 'bottom-[105px]'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={right}
            className={`lg:hidden z-20 w-8 bg-Dark-Green h-1 fixed ${isOpen ? 'bottom-[105px]' : 'bottom-[94px]'} -transition-all left-8`}
            style={{
                backgroundColor: colorFont
            }}
        ></motion.div>
        <div
            onClick={toggleMenu}
            className="lg:hidden z-30 fixed bottom-20 left-5  rounded-full p-7"
        > </div>
        <div
            className="lg:hidden z-10 fixed bottom-20 left-5  rounded-full p-7 shadow-lg"
            style={{
                backgroundColor: colorTheme,

            }}
        > </div>
    </>
}