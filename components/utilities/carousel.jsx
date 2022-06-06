import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselSlider() {
  return (
    <Carousel
      showArrows
      // infiniteLoop
      swipeable={false}
      showThumbs={false}
      useKeyboardArrows
      stopOnHover={false}
      // autoPlay
      emulateTouch
    >
      <div>
        <div className="bg-[url('/26.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/16.jpg')] bg-no-repeat bg-cover h-screen bg-custom-y-lg" />
      </div>

      <div>
        <div className="bg-[url('/11.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/18.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/21.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/23.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/8.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
      <div>
        <div className="bg-[url('/3.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
      <div>
        <div className="bg-[url('/2.jpg')] bg-no-repeat bg-cover h-screen bg-custom-y-lg" />
      </div>

      <div>
        <div className="bg-[url('/4.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>

      <div>
        <div className="bg-[url('/5.jpg')] bg-no-repeat bg-cover h-screen bg-custom-y-md" />
      </div>

      <div>
        <div className="bg-[url('/11.jpg')] bg-no-repeat bg-cover h-screen bg-center" />
      </div>
      <div>
        <div className="bg-[url('/7.jpg')] bg-no-repeat bg-center bg-cover h-screen" />
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
