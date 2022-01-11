import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from 'react-icons/io5'
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { IoChevronDownOutline as ArrowDown } from 'react-icons/io5'
import Dropdown from "../nav/dropdown";



const SideBar = (props) => {
    const [dropdown, setDropdown] = useState(false);


    const onMouseEnter = () => {
        setDropdown(true);
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }

    return (
        <AnimatePresence>
            {props.sideBar && (
                <>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{
                            x: 0
                        }}
                        exit={{
                            x: "100%"
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed bg-green-400 text-white shadow-lg top-0 right-0 w-full h-screen p-5 text-right flex flex-col items-end gap-10 z-50">

                        <div>
                            <Close className='cursor-pointer' size={30} onClick={() => props.setSidebar((sideBar) => !sideBar)} />
                        </div>

                        <div>
                            <ul className='flex flex-col items-center gap-10'>
                                <li>
                                    <Link onClick={() => props.setSidebar(false)} to="objectives" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Our Objectives</span> </Link>
                                </li>

                                <li>
                                    <div onMouseEnter={onMouseEnter} onClick={() => setDropdown((value) => !value)} onMouseLeave={onMouseLeave} className="relative">
                                        <div className="cursor-pointer flex gap-1">
                                            <span>
                                                Projects
                                            </span>
                                            <ArrowDown className="relative top-1" />
                                        </div>
                                        <div id="dropdown" className={`rounded-sm min-w-52 right-0 top-6 absolute ${!dropdown ? "hidden" : "block"}`}>
                                            <Dropdown setSidebar={props.setSidebar} />
                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <Link onClick={() => props.setSidebar(false)} to="about-us" className="cursor-pointer" offset={-125} smooth duration={1000}> <span>About Us</span> </Link>
                                </li>

                                <li>
                                    <Link onClick={() => props.setSidebar(false)} to="contact" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Contact Us</span> </Link>
                                </li>

                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
export default SideBar;