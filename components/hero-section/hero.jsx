import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="h-screen w-full bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      <nav>
        <div className="bg-[url('/logo.png')] w-20 h-20 bg-no-repeat relative top-3" />
        <ul className="flex gap-10">
          <li>HOME</li>
          <li>PROJECT</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <section className="padded">
        <div className="mt-20">
          <h1 className="font-roboto leading-hero-spaced text-custom-xxlg relative">
            Changing the face
            <br /> of Energy in <br /> Africa
          </h1>

          <h5 className="text-custom-sm w-1/2 mt-5">
            Fighting global warming and making the environment safer with the
            use of green energy.
          </h5>
        </div>
      </section>
    </div>
  );
}

export default Hero;
