import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Menu = () => {
  const [navbar, setNavbar] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [.12, 0, .39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: .5,
        duration: 0.5,
        ease: [.22, 1, .36, 1],
      },
    },
  };

  const linkVarsCont = {
    initial: {
        transition: {
            staggerChildren: .09,
            staggerDirection: -1,
        }
    },
    animate: {
      transition: {
        delayChildren:.3,
        staggerChildren: 0.15,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [.37, 0, .63, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, .55,.45, 1],
      },
    },
  };

  const handleLinkClick = () => {
    setNavbar(false);
  };

  return (
    <>
      <HiOutlineMenuAlt4
        onClick={() => {
          setNavbar(!navbar);
        }}
        className="lg:hidden text-3xl"
      />
      <AnimatePresence>
        {navbar && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between px-4 pt-5 pb-5 border-b-gray-500">
                <motion.div variants={linkVarsCont} initial="initial" animate="animate" exit="initial" className="">
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                <h1 className="text-3xl text-white">Menu</h1>
                </motion.div>
                </div>
                </motion.div>
                <motion.div variants={linkVarsCont} initial="initial" animate="animate" exit="initial" className="">
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                <p
                  className="cursor-pointer text-3xl text-white"
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                >
                  <IoMdClose />
                </p>
                </motion.div>
                </div>
                </motion.div>
              </div>
              <motion.div
                variants={linkVarsCont}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col gap-5 items-center justify-start pt-32"
              >
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link href="/">
                    <h1 onClick={handleLinkClick} className="text-4xl">Home</h1>
                  </Link>
                </motion.div>
                </div>
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link href="/fbr/aboutus">
                    <h1 onClick={handleLinkClick} className="text-4xl">About Us</h1>
                  </Link>
                </motion.div>
                </div>
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link href="/fbr/portfolio">
                    <h1 onClick={handleLinkClick} className="text-4xl">Portfolio</h1>
                  </Link>
                </motion.div>
                </div>
                <div className="overflow-hidden">
                <motion.div variants={linkVars} className="overflow-hidden">
                  <Link href="/fbr/blog">
                    <h1 onClick={handleLinkClick} className="text-4xl">Blog</h1>
                  </Link>
                </motion.div>
                </div>
                <div className="overflow-hidden pt-20">
                <motion.div variants={linkVars} className="overflow-hidden">
                  
                    <div onClick={handleLinkClick} className="text-4xl">
                    <div className="auth flex gap-5">
                        <div className="relative">
                            <div className=" absolute w-5 h-5 rounded-full top-2 left-2 bg-red-400"></div>
                            <div className=" absolute w-5 h-5 rounded-full top-6 left-16 bg-yellow-300"></div>
                            <h1 className=' bg-[#6464645a] backdrop-blur-sm rounded px-5 py-3 text-xl flex items-center justify-center'>Login</h1>
                        </div>
                        <div className="relative">
                            <div className=" absolute w-5 h-5 rounded-full top-2 left-2 bg-blue-300"></div>
                            <div className=" absolute w-5 h-5 rounded-full top-6 left-16 bg-blue-500"></div>
                            <h1 className=' bg-[#6464645a] backdrop-blur-sm rounded px-5 py-3 text-xl flex items-center justify-center'>Sign Up</h1>
                        </div>
        </div>
                    </div>
                  
                </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
