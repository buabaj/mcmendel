import React, { useState, Children } from "react";
import { motion, useSpring } from "framer-motion";

const Sidebar = ({ width = 320, children }) => {
  const [isOpen, setOpen] = useState(false);
  const x = useSpring(0, { stiffness: 400, damping: 40 });

  return (
    <motion.div
      onPan={(e, pointInfo) => {
        if (pointInfo.point.x < width) x.set(pointInfo.point.x - width);
      }}
      onPanEnd={(e, pointInfo) => {
        if (Math.abs(pointInfo.velocity.x) > 1000 && !isOpen) {
          if (pointInfo.velocity.x > 0) {
            x.set(0);
          } else x.set(-width);
        } else {
          if (Math.abs(x.current) < width / 2) {
            x.set(0);
          } else {
            x.set(-width);
          }
        }
      }}
      className={"fixed h-screen touch-none w-screen"}
    >
      <motion.div
        className={"w-20 bg-red-500 fixed h-full"}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
        initial={{ x: -width }}
        style={{ x }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
