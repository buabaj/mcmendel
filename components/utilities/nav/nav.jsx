import React from 'react';
import { Link } from "react-scroll";
import Image from 'next/image';
import { FaBars as Hamburger } from 'react-icons/fa';
import { useRouter } from 'next/router';



const Nav = (props) => {
    const router = useRouter();

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


    return (

        <div className={`px-5 z-50 p-0 ${!scrollNav ? 'bg-transparent' : ' bg-green-500'} fixed top-0 transition-all w-full`}>

            <nav>
                <Link to="objectives" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>Our Objectives</span> </Link>
                <Link to="green-project" className="cursor-pointer" offset={-55} smooth duration={1000}> <span>The Green Project</span> </Link>
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