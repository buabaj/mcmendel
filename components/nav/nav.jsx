import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

function Nav({cycleOpen}) {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [scrollNav, setScrollNav] = React.useState(false);

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
    <nav className={`${!scrollNav ? 'bg-custom-transparent-deeper' : ' bg-green-gray'} `}>
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
          <ScrollLink className="cursor-pointer" to="home" spy smooth>
            HOME
          </ScrollLink>
        </li>
        <li className="relative cursor-pointer font-semibold">
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
        <li className="font-semibold">
          <ScrollLink className="cursor-pointer" to="about" spy smooth>
            ABOUT
          </ScrollLink>
        </li>
        {/* <li className="font-semibold">
          <Link href="/executives" passHref>
            <a>OUR TEAM</a>
          </Link>
        </li> */}

        <li className="font-semibold">
          <ScrollLink className="cursor-pointer" to="footer" spy smooth>
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
