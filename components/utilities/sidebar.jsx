import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { IoCloseCircle, IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function SidebarComponent({ open, cycleOpen }) {
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="w-36 bg-green-400 fixed bottom-0 top-0 z-50 right-0"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <IoCloseOutline
                className="ml-3 cursor-pointer"
                color="white"
                size={"30"}
                onClick={cycleOpen}
              />
              
              <ul className=" flex flex-col gap-4 px-6 mt-8 font-semibold">
                <li>
                  <Link href="/" onClick={cycleOpen}>
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

              {/* <ul className="flex flex-col gap-4 px-6 mt-8 font-semibold">
                <li>Home</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>ABOUT</li>
              </ul> */}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div> */}
    </main>
  );
}
