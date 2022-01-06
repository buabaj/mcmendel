import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';



const Nav = (props) => {
    const router = useRouter();
    return (

        <div className='text-white h-14 bg-mcmendel-green h-oval-px-60 px-5 flex items-center z-10 backdrop-filter backdrop-blur fixed left-0 right-0 top-0
                        md:h-oval-px-70 md:px-16
                        lg:h-oval-px-90 lg:px-24'>

            <nav className='w-full flex justify-between'>
                <div className="h-5 w-20 relative">
                    <Image layout='fill' objectFit='contain' src='/images/oval-logo.svg' alt='' />
                </div>


                <div className="hidden md:flex lg:gap-28 md:gap-16">
                    <div>
                        <Link href="/">
                            <a className={`lg:text-oval-lg md:text-oval-md ${router.pathname !== '/' && 'opacity-50'}`}>Personal</a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/business">
                            <a className={`lg:text-oval-lg md:text-oval-md ${router.pathname !== '/business' && 'opacity-50'}`}>Business</a>
                        </Link>
                    </div>
                </div>


                <div>
                    <div className="md:hidden hover:cursor-pointer">
                        {router.pathname === '/' ? (<>
                            <Link href="/business">
                                <a className={'lg:text-oval-lg md:text-oval-md'}>Business</a>
                            </Link>
                        </>) : <>
                            <Link href="/">
                                <a className={'lg:text-oval-lg md:text-oval-md '}>Personal</a>
                            </Link>
                        </>}
                    </div>

                    <button onClick={() => props.showModal(true)} className="btn-nav text-oval-sm hidden md:block">
                        Contact Us
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Nav


