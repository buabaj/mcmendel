import Image from 'next/image'
import React from 'react'
import SlickSlider from '../utilities/swiper/slick';
import { Slide, Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll';
import { Link as NextLink } from 'next/link';
import { motion } from 'framer-motion';
import Nav from '../utilities/nav/nav';
import Jumbotron from '../utilities/swiper/jumbotron';

function Index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const mailto = () => {
        document.location.href = "mailto:info@mcmendelenergy.com?subject=Hi McMendel Energy";
    }

    const goTo = (location) => {
        document.location.href = `https://${location}`;
    }

    return (
        <div>

            <Jumbotron />

            <section id="about-us" className="padded">
                <Slide direction='left'>
                    <h1 className="mb-5">
                        Who we are
                    </h1>

                    <p className="lg">
                        McMendel Energy is an energy provision and a global warming and climate change advocate company aspiring to change the face of energy  using green energy. The Company is driven by its vision of making an impact in the <Link to="gh-renewable-energy" className="cursor-pointer text-blue-600" offset={-25} smooth duration={1000}> <span>energy sector in Ghana</span> </Link> and Africa, which inspires, motivates and keeps the Firm focused on doing what really matters. The Company strives to make a difference in the lives of its clients, business partners and the society as a whole, by providing quality and affordable green energy to the society.  McMendel&apos;s success largely relies on two inter-dependent factors which includes nearness to its key clients; and a close understanding of what really matters to clients. Trust and integrity are McMendel&apos;s hallmark in achieving its objectives.
                    </p>
                </Slide>



                <Fade>
                    <div className="flex flex-col md:flex-row justify-between my-16 gap-5 lg:gap-16">
                        <div className="w-full">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card-about cursor-pointer">
                                    <h2 className="text-green-400 text-center sm:text-left">
                                        Vision
                                    </h2>
                                    <p className="opacity-70 text-justify">
                                        McMendel aspires to be a leading provider of quality and affordable clean energy in every nook and cranny of Ghana and Africa, and also help change the face of energy in Africa using renewable energy.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="w-full">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="card-about cursor-pointer">
                                    <h2 className="text-green-400 text-center sm:text-left">
                                        Mission
                                    </h2>

                                    <p className="opacity-70 text-justify ">
                                        McMendel exists to be the trusted green energy provision partner, creating unmatched value by providing quality and affordable green energy to all and sundry.
                                    </p>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Fade>
            </section>



            <section id="objectives" className="padded bg-green-50 bg-[url('/gr.jpg')] bg-cover bg-center bg-no-repeat">
                <div>

                    <h1 className="mb-5 text-black font-semibold text-bg-green-400">
                        Our Objectives
                    </h1>

                    <Fade>
                        <div className="flex flex-col md:flex-row my-16 gap-5 lg:gap-16">

                            <motion.div whileHover={{ scale: 1.05 }} className="card-objective">
                                <h3 className="text-lg text-semibold text-green-500 mb-5 text-center">
                                    Awareness
                                </h3>
                                Create an awareness on climate change and sustainable renewable sources of energy
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="card-objective">
                                <h3 className="text-lg text-semibold text-green-500 mb-5 text-center">
                                    Support
                                </h3>
                                Support innovations that make use of renewable and clean energy sources
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="card-objective">
                                <h3 className="text-lg text-semibold text-green-500 mb-5 text-center">
                                    Network
                                </h3>
                                Connect participants to an investment network to raise funds to scale-up their proposals
                            </motion.div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section id="gh-renewable-energy" className="padded">
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


            <section id="green-project" className="h-screen bg-[url('/green.jpg')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute w-full h-full bg-black opacity-50 z-20">
                    <div className="flex justify-center">

                        <div className="text-white mt-60">
                            <h1 className="mb-2 text-5xl font-bold text-bg-green-400">
                                The KNUST Green Energy Project
                            </h1>
                            <Link to="green-project-read" className="cursor-pointer underline block text-center" offset={-55} smooth duration={1000}> <span>Read more</span> </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section id="green-project-read" className="padded">
                <Fade>
                    <h1 className="mt-10 mb-5 text-bg-green-400 text-center">
                        The KNUST Green Energy Project
                    </h1>

                    <p className="lg">
                        The KNUST Green Energy Project is a proposal to implement renewable energy and energy efficiency installations to replace the high cost of power generation in KNUST. With the push towards sustainability and the need to reduce greenhouse gases, renewable energy installation on campus is worth the investment. The project will provide renewable energy and energy efficiency installations to harness energy and use it more efficiently. With declining prices of green energy technology, it is recommended that now is an excellent time to pursue large scale sustainable energy use in KNUST. Solar and other clean sources of energy technology have proven to be cost efficient and more sustainable for the environment as the sources of this power generation is readily available in Kumasi. Adopting clean energy technology on campus is a way to promote green activities.  Implementing more renewable energy initiatives on campus will also provide ample learning opportunities for the student body.  The university through the SRC can set examples for others to follow, not only by making renewable energy seem more accessible but by taking the lead in campus sustainability and also helping with the fight against global warming and climate change also.
                    </p>
                </Fade>
            </section>

            <footer id="contact" className="flex flex-col items-center justify-between">
                <div>
                    <button onClick={mailto} className=" bg-green-500 mt-6 hover:bg-green-700 text-white text-sm outline-none py-2 px-10 rounded active:scale-95">
                        Contact Us
                    </button>
                </div>


                <div>
                    <div className="text-center mb-16">
                        <div className="flex gap-14 text-gray-700">
                            <div className="flex flex-col gap-5">

                                <div onClick={() => goTo("www.instagram.com/mcmendel_energy/")}><Image height="20" width="20" layout="fixed" src="/instagram.png" alt="icon" />
                                    <span className="text-blue-700 relative cursor-pointer left-2 -top-1">
                                        Instagram
                                    </span>
                                </div>



                                <div onClick={() => goTo("twitter.com/mcmendel_energy")}><Image height="20" width="20" layout="fixed" src="/twitter.png" alt="icon" />
                                    <span className="text-blue-700 relative cursor-pointer left-2 -top-1">
                                        Twitter
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div onClick={mailto}><Image height="20" width="20" layout="fixed" src="/gmail.png" alt="icon" />
                                    <span className="relative text-blue-700 cursor-pointer tracking-widest left-2 -top-1">
                                        info@mcmendelenergy.com
                                    </span>
                                </div>

                                <div onClick={() => goTo("wa.me/+233209126193")} ><Image height="20" width="20" layout="fixed" src="/whatsapp.png" alt="icon" />
                                    <span className="text-blue-700 relative cursor-pointer left-2 -top-1">
                                        +233209126193
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-gray-500 text-center">
                        &copy; McMendel {new Date().getFullYear().toString()}, <span>All rights reserved</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Index
