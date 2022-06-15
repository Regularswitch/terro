import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import NextPrev from '../Icon/NextPrev';

export default function Categories({ categories, colorTheme, colorFont }) {

    const bg = colorFont || '#225439'
    const text = colorTheme || '#EDDFD0'

    const onError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/default.png";
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    function CustomLeftArrow({carouselState, children,...props}) {
        return <button type="button" {...props}
            className="absolute left-0 -mt-12  z-0 text-white hover:bg-black rounded-full"
        >
            <NextPrev color="#EDDFD0" />
        </button>
    }
    function CustomRightArrow({carouselState, children,...props}) {
        return <button type="button" {...props}
            className="absolute right-0 -mt-12  z-0 text-white rotate-180 hover:bg-black rounded-full"
        >
            <NextPrev color="#EDDFD0" />
        </button>
    }

    return <>
        <div
            className='bg-Dark-Green px-0 lg:px-20'
            style={{
                backgroundColor: bg
            }}
        >
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
                <span
                    className="lg:-mt-44 text-6xl lg:text-8xl text-Light-Orange font-Beastly font-normal lg:text-right block lg:pb-4"
                    style={{
                        color: text
                    }}
                >

                    categorias
                </span>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    centerMode={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    itemClass="carousel-item-padding-40-px"
                    className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
                >
                    {categories.map((cat, i) =>
                        <div className="group relative mx-4" key={cat.slug}>
                            <Link href={`/categoria-produto/${cat.slug}`}>
                                <a className="w-full min-h-80 bg-gray-100 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
                                    <div className="w-full min-h-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
                                        <Image
                                            src={cat.image}
                                            className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                                            alt="Categoria"
                                            width={500}
                                            height={500}
                                            onError={onError}
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-start gap-6">
                                        <span className='font-TTHoves text-Light-Orange uppercase text-sm lg:text-xl'>{cat.name}</span>
                                        <Image
                                            src="/ico/arrow.svg"
                                            alt="Arrows"
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )}
                </Carousel>
            </div>
        </div>
    </>
}
