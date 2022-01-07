import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SolarEnergy from '../../../public/solar-energy.png';


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
                    <div className="use-case-card cursor-pointer h-mcmendel-px-240 w-mcmendel-px-280 m-auto flex justify-center items-center bg-oval-use-case-1 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 bg-yellow-200 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={SolarEnergy} alt='oval use case' />
                        </div>
                    </div>
                    <h4 className='text-center mt-10 text-oval-faint-light text-oval-sm'>Solar Energy</h4>
                </div>


                <div>
                    <div className="use-case-card cursor-pointer h-mcmendel-px-240 w-mcmendel-px-280 m-auto flex justify-center items-center bg-oval-use-case-2 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 bg-yellow-200 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={SolarEnergy} alt='oval use case' />
                        </div>
                    </div>
                    <h4 className='text-center mt-10 text-oval-faint-light text-oval-sm'>Wind Energy</h4>
                </div>


                <div>
                    <div className="use-case-card cursor-pointer h-mcmendel-px-240 w-mcmendel-px-280 m-auto flex justify-center items-center bg-oval-use-case-3 transition-all hover:scale-105 rounded-lg">
                        <div className='h-36 bg-yellow-200 w-36 relative'>
                            <Image layout='fill' loading='lazy' objectFit='contain' src={SolarEnergy} alt='oval use case' />
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
                            Conduct and validate due diligence checks, without creating complicated sign ups and logins, that confirm your customer is who they say they are. With Oval, you can request country-specific information for your onboarding process.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className='hidden sm:block'>Wind Energy</h3>
                        <p className='mt-5 text-oval-sm text-oval-faint-light text-center sm:text-left sm:text-oval-lg'>
                            Job sites can offer one-click applications to provide a quick and easy way to apply for jobs. It saves job seekers the hassle of having to enter the same personal information and upload the same documents into every job they apply to.
                        </p>
                    </div>

                    <div>
                        <h3 className='hidden sm:block'>Biomass Energy</h3>
                        <p className='mt-5 text-oval-sm text-oval-faint-light text-center sm:text-left sm:text-oval-lg'>
                            Oval allows you to verify the identity of attendees who register for any kind of event with single-sign-on authentication.
                        </p>
                    </div>

                </Slider>
            </div>

        </>
    );
}