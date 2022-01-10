import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from 'react-icons/io5'
import React from 'react'
import Link from "next/link";
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
                                <li>About Us</li>
                                <li>Objectives</li>
                                <li>Mission</li>
                                <li>Contact Us</li>
                                {/* <li>
                                    <Link href="/">
                                        <a className={`text-oval-px-24 font-bold ${router.pathname !== '/' && 'opacity-50'}`} onClick={() => props.setSidebar((sideBar) => !sideBar)}>
                                            Personal
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/business">
                                        <a className={`text-oval-px-24 font-bold ${router.pathname !== '/business' && 'opacity-50'}`} onClick={() => props.setSidebar((sideBar) => !sideBar)}>
                                            Business
                                        </a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
export default SideBar;