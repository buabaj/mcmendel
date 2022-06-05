import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div className="h-screen relative bg-[url('/renewable-5.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute w-full h-full bg-custom-transparent z-20">
        <nav>
          <div className="relative h-16 w-28 my-4">
            <Image layout="fill" src="/logo.png" alt="" />
          </div>

          <ul className="flex gap-10">
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>PROJECTS</li>
            <li>
              <ScrollLink className="cursor-pointer" to="about" spy smooth>
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <Link href="/executives" passHref>
                <a>OUR TEAM</a>
              </Link>
            </li>

            <li>
              <ScrollLink className="cursor-pointer" to="footer" spy smooth>
                CONTACT
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <section className="padded">
          <div className="mt-20">
            <h1 className="leading-hero-spaced text-custom-xxlg relative font-bold text-white">
              <span className=" text-green-deep">Changing</span> the face
              <br /> of
              <span className="text-green-deep"> Energy</span> in
              <br />
              <span className="text-green-deep">Africa</span>
            </h1>

            <h5 className="text-custom-sm w-1/2 mt-5 text-white">
              Fighting global warming and making the environment safer with the
              use of green energy.
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
