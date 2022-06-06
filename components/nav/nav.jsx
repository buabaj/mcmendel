import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav({ cycleOpen, bgColor }) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [scrollNav, setScrollNav] = React.useState(false);

  const router = useRouter();


  const changeNav = () => {
    if (window.scrollY >= window.innerHeight - 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, []);
  return (
    <nav
      className={
        bgColor
          ? bgColor
          : `${!scrollNav ? "bg-custom-transparent-deeper" : " bg-green-gray"} `
      }
    >
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
        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="home" spy smooth>
                HOME
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </>
          )}
        </li>
        <li className="relative cursor-pointer font-semibold">
          <span onClick={() => setDropdownOpen((isOpen) => !isOpen)}>
            PROJECTS
          </span>
          {dropdownOpen && (
            <>
              <div className="bg-green-gray mt-2 w-48 h-20 absolute p-2 font-semibold">
                {router.route === "/" ? (
                  <>
                    <ScrollLink
                      className="cursor-pointer"
                      to="green-project"
                      spy
                      smooth
                      onClick={() => setDropdownOpen(false)}
                    >
                      The KNUST Green Project
                    </ScrollLink>
                  </>
                ) : (
                  <>
                    <Link href="/#green-project">
                      <a>The KNUST Green Project</a>
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </li>
        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="about" spy smooth>
                ABOUT
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/#about">
                <a>ABOUT</a>
              </Link>
            </>
          )}
        </li>

        <li className="font-semibold">
          {router.route === "/" ? (
            <>
              <ScrollLink className="cursor-pointer" to="footer" spy smooth>
                CONTACT
              </ScrollLink>
            </>
          ) : (
            <>
              <Link href="/#contact">
                <a>CONTACT</a>
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
