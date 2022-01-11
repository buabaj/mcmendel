import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

// import ArrowLeft from '../../public/left-arrow.svg'
// import ArrowRight from '../../public/right-arrow.svg'
function Jumbotron() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        speed:2000,
        easing:'cubic-bezier',
        autoplaySpeed: 5000,
        pauseOnHover: false,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const placeholderText = [
        { type: "heading1", text: "McMendel" },
        { type: "heading2", text: "Energy" }
    ];

    return (
        <div>
            <Slider className="jumbotron" {...settings}>
                <section className="h-screen relative bg-[url('/renewable-5.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute w-full h-full flex items-center justify-center bg-mcmendel-transparent z-20">
                        <div className="">
                            <Slide direction="down">
                                <div>
                                    <div className="relative h-10 w-20 m-auto">
                                        <Image layout='fill' src={"/right-arrow.svg"} alt="arrow right" />
                                    </div>
                                    <h1 className="main-header">McMendel</h1>
                                    <h2 className="sub-header">ENERGY</h2>
                                    <div className="relative h-10 w-20 m-auto">
                                        <Image layout='fill' src={"/left-arrow.svg"} alt="arrow left" />
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </section>


                <section className="h-screen relative bg-[url('/renewable.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute w-full h-full flex items-center justify-center bg-mcmendel-transparent z-20">
                        <div className="">
                            <div>
                                <div className="relative h-10 w-20 m-auto">
                                    <Image layout='fill' src={"/right-arrow.svg"} alt="arrow right" />
                                </div>
                                <h1 className="main-header">McMendel</h1>
                                <h2 className="sub-header">ENERGY</h2>
                                <div className="relative h-10 w-20 m-auto">
                                    <Image layout='fill' src={"/left-arrow.svg"} alt="arrow left" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="h-screen relative bg-[url('/renewable-1.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="absolute w-full h-full flex items-center justify-center bg-mcmendel-transparent z-20">
                        <div className="">
                            <div>
                                <div className="relative h-10 w-20 m-auto">
                                    <Image layout='fill' src={"/right-arrow.svg"} alt="arrow right" />
                                </div>
                                <h1 className="main-header">McMendel</h1>
                                <h2 className="sub-header">ENERGY</h2>
                                <div className="relative h-10 w-20 m-auto">
                                    <Image layout='fill' src={"/left-arrow.svg"} alt="arrow left" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Slider>
        </div>
    )
}

export default Jumbotron
