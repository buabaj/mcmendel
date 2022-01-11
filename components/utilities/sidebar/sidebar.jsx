import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from 'react-icons/io5'
import React from 'react'
import {Link} from "react-scroll";
import { useRouter } from "next/router";



const SideBar = (props) => {
    const router = useRouter();

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
                            <ul className='flex flex-col gap-10'>
                                <li>
                                    <Link onClick={() => props.setSidebar(false)} to="objectives" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Our Objectives</span> </Link>
                                </li>

                                <li>
                                    <Link onClick={() => props.setSidebar(false)} to="green-project" className="cursor-pointer" offset={40} smooth duration={1000}> <span>The KNUST Green Energy Project</span> </Link>
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