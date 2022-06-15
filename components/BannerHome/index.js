import ProdTop from '../Icon/ProdTop'
export default function BannerHome() {
    return <>
        <div className="bg-hero-banner bg-no-repeat bg-cover pt-20">
            <div className="flex items-center justify-items-start lg:h-screen w-full">
                <div className="pl-5 lg:pl-20">
                    <h1 className="block text-9xl lg:text-[300px] text-Light-Orange font-Beastly font-normal">solo</h1>
                    <div className='flex  text-xs lg:text-lg text-Light-Orange font-TTHoves uppercase font-normal'>
                        <span>
                            Substratos Premium. <br />
                            Plantas saudáveis.
                        </span>
                        <span className="hidden lg:block pl-[230px]">
                            Frutos saborosos. <br />
                            Colheita o ano todo.
                        </span>
                    </div>
                    <h1 className="block text-9xl lg:-mt-[45px] lg:text-[300px] text-Light-Orange font-Beastly font-normal">vivo</h1>
                    <div className='flex lg:hidden  text-xs lg:text-lg text-Light-Orange font-TTHoves uppercase font-normal'>
                        <span className="">
                            Frutos saborosos. <br />
                            Colheita o ano todo.
                        </span>
                    </div>
                </div>
            </div>
            <ProdTop color="#225439" />
        </div>
    </>
}