import Image from 'next/image'
import React from 'react'
import ArrowLeft from '../../public/left-arrow.svg'
import ArrowRight from '../../public/right-arrow.svg'
import GreenEnergy from '../../public/green-project.gif';
import SlickSlider from '../utilities/swiper/slick';
import { Slide, Fade } from 'react-awesome-reveal'
import Link from 'next/link';

function Index() {
    return (
        <div>

            <section className="h-screen bg-green-50">
                <nav>
                    <div>About Us</div>
                    <div>Objectives</div>
                    <div>Mission</div>
                    <div>Contact Us</div>
                </nav>

                <div className="flex justify-center pt-32 flex-col items-center">
                    <Slide direction='down'>
                        <div>
                            <div className="relative h-10 w-20 m-auto">
                                <Image layout='fill' src={ArrowRight} alt="arrow right" />
                            </div>
                            <h1 className="main-header">McMendel</h1>
                            <h2 className="sub-header">ENERGY</h2>
                            <div className="relative h-10 w-20 m-auto">
                                <Image layout='fill' src={ArrowLeft} alt="arrow left" />
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>


            <section className="padded">
                <Slide direction='left'>
                    <h1 className="mb-5">
                        About McMendel
                    </h1>

                    <p className="lg">
                        McMendel Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy  using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters. The Company strives to make a difference in the lives of its clients, business partners and the society as a whole, by providing quality and affordable green energy to the society.  McMendel&apos;s success largely relies on two inter-dependent factors which includes nearness to its key clients; and a close understanding of what really matters to clients. Trust and integrity are McMendel&apos;s hallmark in achieving its objectives.
                    </p>
                </Slide>



                <Fade>
                    <div className="flex flex-col md:flex-row justify-between my-16 gap-5 lg:gap-16">
                        <div className="w-full text-lg">
                            <div className="card-about">
                                <h2 className="text-green-400 text-center sm:text-left">
                                    Vision
                                </h2>
                                <p className="opacity-70">
                                    McMendel aspires to be a leading provider of quality and affordable clean energy in every nook and cranny of Ghana and Africa, and also help change the face of energy in Africa using renewable energy.
                                </p>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="card-about">
                                <h2 className="text-green-400 text-center sm:text-left">
                                    Mission
                                </h2>

                                <p className="opacity-70">
                                    McMendel exists to be the trusted green energy provision partner, creating unmatched value by providing quality and affordable green energy to all and sundry.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>

            </section>


            
            <section className="padded bg-green-50">
                <h1 className="mb-5 text-bg-green-400">
                    Our Objectives
                </h1>

                <Fade>
                    <div className="flex flex-col md:flex-row my-16 gap-5 lg:gap-16">

                        <div className="h-56 flex justify-center items-center bg-white w-full px-10">
                            Create an awareness on climate change and sustainable renewable sources of energy
                        </div>

                        <div className="h-56 flex justify-center items-center bg-white w-full px-10">
                            Support innovations that make use of renewable and clean energy sources
                        </div>

                        <div className="h-56 flex justify-center items-center bg-white w-full px-10">
                            Connect participants to an investment network to raise funds to scale-up their proposals
                        </div>
                    </div>
                </Fade>
            </section>



                   

            <section className="padded">
                <Slide direction='right'>
                    <h1 className="mb-5 text-bg-green-400">
                        Renewable energy in Ghana
                    </h1>

                    <p className="lg">
                        The combustion of fossil fuels for energy results in a significant amount of greenhouse gas emissions that contribute to global warming. Most sources of renewable energy result in little to no emissions, even when considering the full life cycle of the technologies.  The three main renewable energy sources in Ghana are:
                    </p>
                </Slide>

                <div className="mt-16">
                    <SlickSlider />
                </div>
            </section>


            <section className="h-screen relative">
                <Image layout='fill' src={GreenEnergy} alt="The KNUST Green Project" />
                <div className="absolute w-full h-full z-20">
                    <div className="flex justify-end">
                        <div className="min-w-2/5 text-white mt-48 pr-5">
                            <h1 className="mb-2 font-bold text-bg-green-400">
                                The KNUST Green Energy Project
                            </h1>
                            <Link href="#">
                                <a className="text-center block md:text-left font-semibold underline">Read more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padded">
                <h1 className="mt-10 mb-5 text-bg-green-400 text-center">
                    The KNUST Green Energy Project
                </h1>

                <p className="lg">
                    The KNUST Green Energy Project is a proposal to implement renewable energy and energy efficiency installations to replace the high cost of power generation in KNUST. With the push towards sustainability and the need to reduce greenhouse gases, renewable energy installation on campus is worth the investment. The project will provide renewable energy and energy efficiency installations to harness energy and use it more efficiently. With declining prices of green energy technology, it is recommended that now is an excellent time to pursue large scale sustainable energy use in KNUST. Solar and other clean sources of energy technology have proven to be cost efficient and more sustainable for the environment as the sources of this power generation is readily available in Kumasi. Adopting clean energy technology on campus is a way to promote green activities.  Implementing more renewable energy initiatives on campus will also provide ample learning opportunities for the student body.  The university through the SRC can set examples for others to follow, not only by making renewable energy seem more accessible but by taking the lead in campus sustainability and also helping with the fight against global warming and climate change also.
                </p>
            </section>

            {/* <footer>

            </footer> */}
        </div>
    )
}

export default Index
