import Image from 'next/image'
import React from 'react'
import ArrowLeft from '../../public/left-arrow.svg'
import ArrowRight from '../../public/right-arrow.svg'
import SolarEnergy from '../../public/solar-energy.png';
import SlickSlider from '../utilities/swiper/slick';
import { Slide, Fade } from 'react-awesome-reveal'

function Index() {
    return (
        <div>

            <section className="h-screen bg-green-50">
                <nav className="w-full h-14 flex justify-center gap-10 items-center font-semibold sticky">
                    <div>
                        About Us
                    </div>

                    <div>
                        Objectives
                    </div>

                    <div>
                        Mission
                    </div>

                    <div>
                        Contact Us
                    </div>
                </nav>
                <div className=" h-3/4 flex justify-center flex-col items-center">

                    <Slide direction='down'>
                        <div>

                            <div className="relative h-10 w-20 m-auto">
                                <Image layout='fill' src={ArrowRight} alt="arrow right" />
                            </div>
                            <h1 className="text-7xl font-bold text-mcmendel-green-primary">McMendel</h1>
                            <h1 className="text-2xl text-mcmendel-orange-primary font-semibold text-center mt-2 tracking-mcmendel-2em">ENERGY</h1>
                            <div className="relative h-10 w-20 m-auto">
                                <Image layout='fill' src={ArrowLeft} alt="arrow left" />
                            </div>

                        </div>
                    </Slide>

                </div>

            </section>

            <section className="px-52 py-10">
                <Slide direction='left'>
                    <h1 className="text-4xl mb-5 text-bg-green-400">
                        About McMendel
                    </h1>

                    <p className=" text-mcmendel-rem-1.2 opacity-70 tracking-wide">
                        McMendel Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy  using green energy. The Company is driven by its vision of making an impact in the energy sector of Ghana and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters. The Company strives to make a difference in the lives of its clients, business partners and the society as a whole, by providing quality and affordable green energy to the society.  McMendel&apos;s success largely relies on two inter-dependent factors which includes nearness to its key clients; and a close understanding of what really matters to clients. Trust and integrity are McMendel&apos;s hallmark in achieving its objectives.
                    </p>
                </Slide>



                <Fade>
                    <div className="flex justify-between my-16 gap-16">
                        <div className="w-1/2 text-lg">
                            <div className="bg-green-50 py-5 min-h-60 px-10">
                                <h1 className="text-2xl mb-5  text-green-400">
                                    Vision
                                </h1>
                                <p className="opacity-70">
                                    McMendel aspires to be a leading provider of quality and affordable clean energy in every nook and cranny of Ghana and Africa, and also help change the face of energy in Africa using renewable energy.
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="bg-green-50 py-5 min-h-60 px-10">
                                <h1 className="text-2xl mb-5  text-green-400">
                                    Mission
                                </h1>

                                <p className="opacity-70">
                                    McMendel exists to be the trusted green energy provision partner, creating unmatched value by providing quality and affordable green energy to all and sundry.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>

            </section>


            <section className="px-52 py-10 bg-green-50">
                <h1 className="text-4xl mb-5 text-bg-green-400">
                    Our Objectives
                </h1>

                <Fade>
                    <div className="flex  my-16 gap-16">
                        <div className="h-56 flex justify-center opacity-70 items-center bg-white w-1/3 px-10">
                            Create an awareness on climate change and sustainable renewable sources of energy
                        </div>

                        <div className="h-56 flex justify-center opacity-70 items-center bg-white w-1/3 px-10">
                            Support innovations that make use of renewable and clean energy sources
                        </div>

                        <div className="h-56 flex justify-center opacity-70 items-center bg-white w-1/3 px-10">
                            Connect participants to an investment network to raise funds to scale-up their proposals
                        </div>
                    </div>
                </Fade>

            </section>

            <section className="px-52 py-10">
                <Slide direction='right'>
                    <h1 className="text-4xl mb-5 text-bg-green-400">
                        Renewable energy in Ghana
                    </h1>

                    <p className=" text-mcmendel-rem-1.2 opacity-70 tracking-wide">
                        The combustion of fossil fuels for energy results in a significant amount of greenhouse gas emissions that contribute to global warming. Most sources of renewable energy result in little to no emissions, even when considering the full life cycle of the technologies.  The three main renewable energy sources in Ghana are:
                    </p>
                </Slide>

                <div className="mt-16">
                    <SlickSlider />
                </div>
            </section>

            <section className="h-screen px-52 py-10 bg-green-50">

            </section>


            <section className="h-screen px-52 py-10">
                <h1 className="text-4xl mt-10 mb-5 text-bg-green-400">
                    The KNUST Green Project
                </h1>

                <p className=" text-mcmendel-rem-1.2 opacity-70 tracking-wide">
                    The KNUST Green Energy Project is a proposal to implement renewable energy and energy efficiency installations to replace the high cost of power generation in KNUST. With the push towards sustainability and the need to reduce greenhouse gases, renewable energy installation on campus is worth the investment. The project will provide renewable energy and energy efficiency installations to harness energy and use it more efficiently. With declining prices of green energy technology, it is recommended that now is an excellent time to pursue large scale sustainable energy use in KNUST. Solar and other clean sources of energy technology have proven to be cost efficient and more sustainable for the environment as the sources of this power generation is readily available in Kumasi. Adopting clean energy technology on campus is a way to promote green activities.  Implementing more renewable energy initiatives on campus will also provide ample learning opportunities for the student body.  The university through the SRC can set examples for others to follow, not only by making renewable energy seem more accessible but by taking the lead in campus sustainability and also helping with the fight against global warming and climate change also.
                </p>

            </section>

            <footer>

            </footer>
        </div>
    )
}

export default Index
