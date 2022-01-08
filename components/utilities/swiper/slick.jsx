import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SolarPanel from '../../../public/solar-panel.png';
import WindEnergy from '../../../public/windmill.png';
import BioEnergy from '../../../public/biomas-energy.png';


import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function SlickSlider() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <Slider
                className='flex gap-10'
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                infinite={false}
                swipeToSlide={true}
                focusOnSelect={true}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]}>

                <div>
                    <div className="use-case-card cursor-pointer h-mcmendel-px-200 w-mcmendel-px-240 m-auto flex justify-center items-center bg-gray-50 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={SolarPanel} alt='solar energy' />
                        </div>
                    </div>
                    <h4 className='text-center mt-10 text-oval-faint-light text-oval-sm'>Solar Energy</h4>
                </div>


                <div>
                    <div className="use-case-card cursor-pointer h-mcmendel-px-200 w-mcmendel-px-240 m-auto flex justify-center items-center bg-gray-50 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={WindEnergy} alt='wind energy' />
                        </div>
                    </div>
                    <h4 className='text-center mt-10 text-oval-faint-light text-oval-sm'>Wind Energy</h4>
                </div>


                <div>
                    <div className="use-case-card cursor-pointer h-mcmendel-px-200 w-mcmendel-px-240 m-auto flex justify-center items-center bg-gray-50 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={BioEnergy} alt='bio energy' />
                        </div>
                    </div>
                    <h4 className='text-center mt-10 text-oval-faint-light text-oval-sm'>Biomass Energy</h4>
                </div>



            </Slider>



            <div className='px-10 lg:px-0 sm:mt-28'>

                <Slider swipe={false} arrows={false} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                    <div>
                        <h3 className="hidden sm:block">Solar Energy</h3>
                        <p className='mt-5 text-oval-sm text-oval-faint-light text-center sm:text-left sm:text-oval-lg'>
                            Solar resource is abundant, with Ghana&apos;s solar irradiation level ranging from approximately 4.4 to 6.0 kWh/m2/day, with sunshine duration of between 1,800 and 3,000 hours per annum. The highest irradiation levels occur in the northern half of the country.
                            However, at present, while the Government is piloting a number of initiatives on the deployment of solar energy systems, little has been done to exploit this resource, and the solar market remains relatively untapped. Furthermore, with approximately 20 percent of Ghana&apos;s population believed to be off-grid, the market for rural solar power - for electricity, lighting, water heating and drying - in particular, is huge.
                        </p>
                    </div>

                    <div>
                        <h3 className='hidden sm:block'>Wind Energy</h3>
                        <p className='mt-5 text-oval-sm text-oval-faint-light text-center sm:text-left sm:text-oval-lg'>
                            Ghana has moderate wind energy potential emanating from the country&apos;s annual average wind speed above 50m at 8m/s. The optimal wind resources are located along narrow stretches of Ghana&apos;s eastern coastline, in the hills around the Volta Lake and along the border with Togo.
                        </p>
                    </div>

                    <div>
                        <h3 className='hidden sm:block'>Biomass Energy</h3>
                        <p className='mt-5 text-oval-sm text-oval-faint-light text-center sm:text-left sm:text-oval-lg'>
                            Biomass is largely generated from horticulture (farm waste), food processing (corn cobs), animal farming manure, or human waste from sewage plants.
                            In 2010, Ghana introduced a bio energy policy that aims to substitute the country&apos;s petroleum oil by 20 percent by 2030, as well as promoting private sector participation in the bio-fuel industry.                        </p>
                    </div>
                </Slider>
            </div>

        </>
    );
}