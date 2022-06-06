import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { IoCloseCircle, IoCloseOutline } from "react-icons/io5";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
            className="w-36 bg-green-gray fixed bottom-0 top-0 z-50 right-0"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { duration: 0.3 },
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
                className="ml-3 mt-3 cursor-pointer z-40"
                color="white"
                size={"30"}
                onClick={() => cycleOpen(false)}
              />

              <ul className=" flex flex-col gap-4 px-6 mt-8 font-semibold">
                <li>
                  <ScrollLink
                    className="cursor-pointer"
                    to="home"
                    spy
                    smooth
                    onClick={() => cycleOpen(false)}
                  >
                    HOME
                  </ScrollLink>
                </li>

                <li>
                  <details className="cursor-pointer">
                    <summary>PROJECTS</summary>

                    <p className="mt-2">
                      <ScrollLink
                        className="cursor-pointer"
                        to="green-project"
                        spy
                        smooth
                        onClick={() => cycleOpen(false)}
                      >
                        The KNUST Green Project
                      </ScrollLink>
                    </p>
                  </details>
                </li>

                <li>
                  <ScrollLink
                    className="cursor-pointer"
                    to="about"
                    spy
                    smooth
                    onClick={() => cycleOpen(false)}
                  >
                    ABOUT
                  </ScrollLink>
                </li>
                {/* <li>
                    <Link href="/executives" passHref>
                      <a>OUR TEAM</a>
                    </Link>
                  </li> */}

                <li>
                  <ScrollLink
                    className="cursor-pointer"
                    to="footer"
                    spy
                    smooth
                    onClick={() => cycleOpen(false)}
                  >
                    CONTACT
                  </ScrollLink>
                </li>
              </ul>
            </motion.div>
          </motion.aside>
          // </section>
        )}
      </AnimatePresence>
    </main>
  );
}
