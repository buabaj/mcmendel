import React from "react";
import Nav from "../nav/nav";

function Hero({ cycleOpen }) {
  return (
    <div
      className="h-screen relative bg-[url('/renewable-5.jpg')] bg-cover bg-center bg-no-repeat"
      id={"home"}
    >
      <div className="absolute w-full h-full bg-custom-transparent z-20">
        <Nav cycleOpen={cycleOpen} />

        <section className="padded">
          <div className="mt-36 sm:mt-28 md:mt-40">
            <h1 className="leading-hero-spaced relative font-bold text-white text-custom-md md:text-custom-xlg lg:text-custom-xxlg">
              <span className=" text-green-deep">Changing</span> the face
              <br /> of
              <span className="text-green-deep"> Energy</span> in
              <br />
              <span className="text-green-deep">Africa</span>
            </h1>

            <h5 className="text-custom-xsm md:text-custom-sm sm:w-3/4 md:w-2/3 lg:w-1/2 mt-5 text-white">
              Fighting global warming and making the environment safer with the
              use of renewable energy.
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
