import React, { useState } from 'react';
import { Link } from "react-scroll";
import Image from 'next/image';
import { FaBars as Hamburger } from 'react-icons/fa';
import { IoChevronDownOutline as ArrowDown } from 'react-icons/io5'
import { useRouter } from 'next/router';
import Dropdown from './dropdown';



const Nav = (props) => {
    const [dropdown, setDropdown] = useState(false);

    const [scrollNav, setScrollNav] = React.useState(false);

    const changeNav = () => {
        if (window.scrollY >= window.innerHeight - 40) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }


    React.useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);


    const onMouseEnter = () => {
        setDropdown(true);
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }


    return (

        <div className={`px-5 z-50 p-0 ${!scrollNav ? 'bg-transparent' : ' bg-green-500'} fixed top-0 transition-all w-full`}>
            <nav>
                <Link to="objectives" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Our Objectives</span> </Link>

                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative">
                    <div className="cursor-pointer flex gap-1">
                        <span>
                            Projects
                        </span>
                        <ArrowDown className="relative top-1" />
                    </div>
                    <div id="dropdown" className={`min-h-40 min-w-52 rounded-sm absolute top-6 ${!dropdown ? "hidden" : "block"}`}>
                        <Dropdown setDropdown={setDropdown}/>
                    </div>
                </div>

                <Link to="about-us" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>About Us</span> </Link>
                <Link to="contact" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Contact Us</span> </Link>
            </nav>

            <div className='flex justify-end p-3 md:hidden'>
                <span className="hover:cursor-pointer" onClick={() => props.setSidebar((isOpen) => !isOpen)}>
                    <Hamburger color='white' size={20} />
                </span>
            </div>
        </div>
    )
}

export default Nav;