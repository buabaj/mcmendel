import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Hero({ cycleOpen }) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return (
    <div
      className="h-screen relative bg-[url('/renewable-5.jpg')] bg-cover bg-center bg-no-repeat"
      id={"home"}
    >
      <div className="absolute w-full h-full bg-custom-transparent z-20">
        <nav>
          <div className="relative my-4 h-10 w-20 md:h-16 md:w-28 ">
            <Image layout="fill" src="/logo.png" alt="" />
          </div>

          <div>
            <IoMenuOutline
              size={40}
              onClick={cycleOpen}
              className="text-white block cursor-pointer md:hidden"
            />
          </div>

          <ul className="gap-10 hidden md:flex">
            <li>
              <ScrollLink className="cursor-pointer" to="home" spy smooth>
                HOME
              </ScrollLink>
            </li>
            <li className="relative cursor-pointer">
              <span onClick={() => setDropdownOpen((isOpen) => !isOpen)}>
                PROJECTS
              </span>
              {dropdownOpen && (
                <>
                  <div className="bg-green-400 mt-2 w-48 h-20 absolute p-2 font-semibold">
                    <ScrollLink
                      className="cursor-pointer"
                      to="green-project"
                      spy
                      smooth
                      onClick={() => setDropdownOpen(false)}
                    >
                      The KNUST Green Project
                    </ScrollLink>
                  </div>
                </>
              )}
            </li>
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
          <div className="mt-36 sm:mt-28 md:mt-10">
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
