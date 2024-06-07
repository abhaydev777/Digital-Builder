import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' w-full lg:h-20'>
        <hr className='lg:hidden pb-20' />
        <div className="top lg:flex lg:justify-between items-center px-2">
        <div className="logo flex flex-col gap-1 items-start justify-center">
            <Image src="/images/logo.webp" alt="Logo" width={50} height={50} />
            <h1 className='lg:hidden'>Let&apos;s connect with our socials</h1>
        </div>
        <div className="auth lg:hidden flex items-center justify-start gap-8 pt-3 text-xl">
        <a href="https://www.youtube.com/@lionelthebuilder/featured" target="_blank"><FaYoutube /></a>
            <a href="https://discord.com/invite/7mNgjgJJ44" target="_blank"><FaDiscord /></a>
            <a href="https://www.youtube.com/@lionelthebuilder/featured" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/lionel-sapp-4783b093/" target="_blank"><FaLinkedin /></a>
        </div>
        <h1 className=' lg:hidden font-bold pt-10 pb-5'>Company</h1>
        <div className="routes flex flex-col lg:flex-row justify-center lg:gap-4">
            <Link href="/">Home</Link>
            <Link className=' text-nowrap' href="/fbr/aboutus">About Us</Link>
            <Link href="/fbr/portfolio">Portfolio</Link>
            <Link href="/fbr/blog">Blog</Link>
        </div>
        <div className="community lg:hidden pt-5">
            <h1 className='lg:hidden font-bold pb-4'>Community</h1>
            <div className="flex flex-col">
                <a href="https://discord.com/channels/1187762623169703946/1195435251418267808" target="_blank">Discord</a>
                <a href="https://www.skool.com/the-digital-builders-7347" target="_blank">Skool</a>
            </div>
        </div>
        <div className="getInTouch lg:hidden pt-5 pb-20">
            <h1 className='font-bold pb-2'>Get In Touch</h1>
            <h2>Lionel.thebldrs@gmail.com</h2>
        </div>
        <div className=" hidden auth lg:flex items-center justify-center gap-4">
            <a href="https://www.youtube.com/@lionelthebuilder/featured" target="_blank"><FaYoutube /></a>
            <a href="https://discord.com/invite/7mNgjgJJ44" target="_blank"><FaDiscord /></a>
            <a href="https://www.youtube.com/@lionelthebuilder/featured" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/lionel-sapp-4783b093/" target="_blank"><FaLinkedin /></a>
        </div>
        </div>
        <hr className='lg:hidden' />
        <div className="hidden bottom lg:flex justify-center">
            <h1>Copyright &copy; 2024 | Digital Builder | All Rights Reserved</h1>
        </div>
        <div className="lg:hidden bottom flex justify-center text-center pt-5 pb-16">
            <h1>Copyright &copy; 2024 Digital Builders <br /> All Rights Reserved</h1>
        </div>
        <hr className='pb-3 lg:hidden' />
      </footer>
  )
}

export default Footer
