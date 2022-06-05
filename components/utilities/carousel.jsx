import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselSlider() {
  return (
    <Carousel
      showArrows
      infiniteLoop
      swipeable
      showThumbs={false}
      useKeyboardArrows
      stopOnHover={false}
      autoPlay
      emulateTouch
    >
      <div>
        <div className="bg-[url('/solar.jpg')] bg-no-repeat bg-center bg-cover h-screen relative">
          <div className="absolute bottom-0 right-3 text-white text-right">
            The KNUST Green Project <br />
            Kumasi, Ghana
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[url('/9.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/8.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
      <div>
        <div className="bg-[url('/3.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
      <div>
        <div className="bg-[url('/5.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
      <div>
        <div className="bg-[url('/4.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
