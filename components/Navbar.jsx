"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  
        // Detect scroll direction
        if (currentScrollTop > lastScrollTop) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
  
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);
  return (
    <>
      <nav className= {`${styles.navbar} ${scrollDirection === 'up' ? styles.show : styles.hide} w-full h-20 flex justify-between items-center px-5 z-10 lg:px-24 fixed bg-[#0000003a] backdrop-blur-lg`}>
        <div className="logo flex gap-2 items-center">
            <Image src="/images/logo.png" alt="Logo" width={60} height={50} />
            <h1 className='DBtext'>DIGITAL BUILDERS</h1>
        </div>
        <div className="hidden routes lg:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/fbr/aboutus">About Us</Link>
            <Link href="/fbr/portfolio">Portfolio</Link>
            <Link href="/fbr/blog">Blog</Link>
        </div>
        <div className="hidden auth lg:flex gap-4">
            <h1 className=' '>Login</h1>
            <h1 className=' bg-gray-500 rounded px-2 text-sm flex items-center'>Sign Up</h1>
        </div>
        <Menu/>
      </nav>
    </>
  )
}

export default Navbar
