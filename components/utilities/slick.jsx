import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SlickSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <Slider
        className="flex gap-10 card-slide"
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
              arrows: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ]}
      >
        <div>
          <div className="cursor-pointer h-custom-200 w-custom-240 m-auto flex justify-center items-center transition-all hover:scale-105 rounded-lg">
            <div className="h-36 w-36 relative">
              <Image
                layout="fill"
                loading="lazy"
                objectFit="contain"
                src={"/solar-panel.png"}
                alt="solar energy"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="cursor-pointer h-custom-200 w-custom-240 m-auto flex justify-center items-center transition-all hover:scale-105 rounded-lg">
            <div className="h-36 w-36 relative">
              <Image
                layout="fill"
                loading="lazy"
                objectFit="contain"
                src={"/wind-mill.png"}
                alt="wind energy"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="cursor-pointer h-custom-200 w-custom-240 m-auto flex justify-center items-center transition-all hover:scale-105 rounded-lg">
            <div className="h-36 w-36 relative">
              <Image
                layout="fill"
                loading="lazy"
                objectFit="contain"
                src={"/biomass-energy.png"}
                alt="bio energy"
              />
            </div>
          </div>
        </div>
      </Slider>

      <div className="px-3 sm:px-10 lg:px-0 sm:mt-16">
        <Slider
          swipe={false}
          arrows={false}
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div>
            <h3 className="text-custom-md mt-20">Solar Energy</h3>
            <p className="mt-5 text-oval-sm mulish text-justify sm:text-left sm:text-oval-lg">
              Solar resource is abundant, with Ghana&apos;s solar irradiation
              level ranging from approximately 4.4 to 6.0 kWh/m2/day, with
              sunshine duration of between 1,800 and 3,000 hours per annum. The
              highest irradiation levels occur in the northern half of the
              country. However, at present, while the Government is piloting a
              number of initiatives on the deployment of solar energy systems,
              little has been done to exploit this resource, and the solar
              market remains relatively untapped. Furthermore, with
              approximately 20 percent of Ghana&apos;s population believed to be
              off-grid, the market for rural solar power - for electricity,
              lighting, water heating and drying - in particular, is huge.
            </p>
          </div>

          <div>
            <h3 className="text-custom-md mt-20">Wind Energy</h3>
            <p className="mt-5 text-oval-sm mulish text-justify sm:text-left sm:text-oval-lg">
              Ghana has moderate wind energy potential emanating from the
              country&apos;s annual average wind speed above 50m at 8m/s. The
              optimal wind resources are located along narrow stretches of
              Ghana&apos;s eastern coastline, in the hills around the Volta Lake
              and along the border with Togo.
            </p>
          </div>

          <div>
            <h3 className="text-custom-md mt-20">Biomass Energy</h3>
            <p className="mt-5 text-oval-sm mulish text-justify sm:text-left sm:text-oval-lg">
              Biomass is largely generated from horticulture (farm waste), food
              processing (corn cobs), animal farming manure, or human waste from
              sewage plants. In 2010, Ghana introduced a bio energy policy that
              aims to substitute the country&apos;s petroleum oil by 20 percent
              by 2030, as well as promoting private sector participation in the
              bio-fuel industry.{" "}
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
}
