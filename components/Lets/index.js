import ProdBottom from '../Icon/ProdBottom'
import Contato from '../Icon/Contato'
import ComprarAgora from '../Icon/ComprarAgora'
export default function Lets() {
    return <>
        <div className="bg-bg-lets bg-no-repeat bg-cover relative pb-[50px] lg:pb-[100px]">
            
            <ProdBottom color="#225439" />
            <div className="block lg:flex lg:pr-[70px]" style={{
                alignItems: "center"
            }}>
                <div className=" flex items-center justify-items-start  lg:h-screen w-full">
                    <div className="pl-5 lg:pl-20">
                        <h1 className="block text-[78px] lg:text-[240px] text-Light-Orange font-Beastly font-normal lg:leading-[270px]">let&apos;s</h1>
                        <div className='text-xs lg:text-lg text-Light-Orange font-TTHoves uppercase font-normal'>
                            <span>
                                PRONTO PARA USO<br />
                                É SÓ REGAR COM ÁGUA!
                            </span>
                        </div>
                        <h1 className="block text-[78px] lg:text-[240px] text-Light-Orange font-Beastly font-normal lg:leading-[240px]">grooow</h1>
                    </div>
                </div>
                <div className="">
                    <ComprarAgora color="#EDDFD0" size="180" className="w-[100px] lg:w-[180px]" />
                </div>
            </div>
            {/* <Contato color="#EDDFD0" /> */}
        </div>
    </>
}