import React, { useEffect } from 'react';
import Index from '../components/home'
import Meta from '../components/utilities/meta/meta'
import { motion } from 'framer-motion';
import SideBar from '../components/utilities/sidebar/sidebar';
import Nav from '../components/utilities/nav/nav';

export default function Home() {

  const [sideBar, setSidebar] = React.useState(false);

  useEffect(() => {
    sideBar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  }, [sideBar])


  return (
    <>
      <Nav setSidebar={setSidebar} />
      <Meta title='McMendel Energy' />

      <motion.div
        animate={{
          scale: sideBar ? 0.95 : 1,
          opacity: sideBar ? 0.5 : 1
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}>

        <Index />

      </motion.div>

      <SideBar sideBar={sideBar} setSidebar={setSidebar} />


    </>
  )
}
