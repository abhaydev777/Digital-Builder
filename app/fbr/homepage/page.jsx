import Swipers from '@/components/Swiper';
import SwiperSecond from '@/components/SwiperSecond';
import SwiperSecondMobile from '@/components/SwiperSecondMobile';
import Image from 'next/image'
import React from 'react'
import { BsStars } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";


const homepage = () => {
  return (
      <main className=' w-full min-h-screen lg:min-h-[100vh]'>
        <div className="page1 w-full min-h-screen lg:min-h-[100vh] lg:flex bg-black">
        <div className="left lg:w-1/2 lg:h-screen min-h-1/2 flex flex-col lg:pl-24 px-6 pt-32 lg:pt-32 gap-10 ">
            <h1 className='herotext text-5xl lg:w-3/4'>Unlock Your Potential: Build Your Future with <p className='text-[#0F6F6F]'>Digital Builders</p></h1>
            <h5 className='lg:w-3/4'>Forge your path in tech with code and community. No degree? No problem. Code, grow, and impact daily. Start your transformation with us!</h5>
            <div className="circles flex pt-5">
              <div className="w-14 h-14 bg-red-500 overflow-hidden rounded-full">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"} alt='member image' width={70} height={"70"}/>
              </div>
              <div className="w-14 h-14 bg-red-400 overflow-hidden rounded-full -ml-8">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"} alt='member image' width={70} height={"70"}/>
              </div>
              <div className="w-14 h-14 bg-red-300 overflow-hidden rounded-full -ml-8">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"} alt='member image' width={70} height={"70"}/>
              </div>
              <div className="w-14 h-14 bg-red-200 overflow-hidden rounded-full -ml-8">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1616926885432-a024eb4de3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"} alt='member image' width={70} height={"70"}/>
              </div>
              <div className="w-14 h-14 bg-red-100 overflow-hidden rounded-full -ml-8">
                <Image className=' object-cover w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1555320818-21ebf0faf145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"} alt='member image' width={70} height={"70"}/>
              </div>
              <BsStars className='text-2xl self-center ml-3' />
              <h1 className=' self-center pl-1 text-lg'>+127 members</h1>
            </div>
            <div className="button flex items-center">
              <div className=" w-40 rounded px-3 py-3 bg-[#0F6F6F] text-center font-semibold"><a href="https://www.skool.com/the-digital-builders-7347" target="_blank">Join Our School</a></div>
              <div className="links flex gap-5 pl-5 lg:pl-10 text-2xl">
              <a href="https://www.linkedin.com/in/lionel-sapp-4783b093/" target="_blank"><FaLinkedin /></a>
              <a href="https://discord.com/invite/7mNgjgJJ44" target="_blank"><FaDiscord /></a>
              <a href="https://www.youtube.com/@lionelthebuilder/featured" target="_blank"><FaYoutube /></a>
              </div>
            </div>
        </div>
        <div className="right lg:w-1/2 lg:h-[90vh] h-1/2 lg:flex justify-center items-center pt-10 pb-10">
            <Image src={"/images/hero.webp"} alt='Hero' width={500} height={100}/>
        </div>
        </div>
        <div className="page2 w-full min-h-32 lg:min-h-[100vh] bg-white relative lg:pb-16">
          <Image className='w-full absolute h-full object-cover lg:object-top object-center' src={"/images/bg_page2.png"} alt='bg_page2' width={1400} height={911}/>
          <div className="main-content w-full min-h-32 lg:min-h-[100vh] pt-20 flex  flex-col items-center">
            <h1 className=' text-[#050505] text-3xl font-bold text-center'>Unlock Your Potential: Build Your Future with <p className=' text-[#0F6F6F]'>Digital Builders</p></h1>
            <div className="hidden card-container lg:flex flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:w-[80%] lg:gap-5 justify-center items-center">
            <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
            <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
              <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
                <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                  <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
                </div>
                  <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                  <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
              </div>
              <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
                <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                  <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
                </div>
                  <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                  <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
              </div>
              <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
                <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                  <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
                </div>
                  <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                  <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
              </div>
              <div className="card mt-10 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
                <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                  <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
                </div>
                  <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                  <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
              </div>
            </div>
            <div className="lg:hidden w-full">
            <Swipers/>
          </div>
          </div>
        </div>
        <div className="page3 w-full min-h-96 lg:min-h-[100vh] lg:flex bg-slate-100 pt-10">
          <div className="left1 lg:w-1/2 lg:h-screen flex items-center justify-center lg:justify-end">
            <Image className='w-2/3 rounded-xl' src={"/images/about_image.jpg"} alt='about_image' width={1440} height={800} />
          </div>
          <div className="right1 lg:w-1/2 lg:h-screen flex flex-col justify-center text-start px-10 lg:pr-32 pb-10 text-black">
            <h1 className=' font-extrabold text-xl lg:text-2xl text-start pt-5 flex gap-2 text-nowrap'>Welcome to <div className=""><h1 className=' text-[#0F6F6F]'>Digital Builders</h1></div></h1>
            <h2 className='pt-5'>At Digital Builders, we're not just a community; we're a launchpad for aspiring developers, freelancers, and digital creators. </h2>
            <h3 className='pt-5'>Dive into a world where code meets creativity, transforming ideas into digital realities. Whether you're here to sharpen your coding skills, embark on your freelancing journey, or collaborate on groundbreaking projects, we've got you covered.</h3>
            <h4 className='pt-5'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity, and cultivates a mindset of continuous learning and improvement. Join us today and unlock your full potential in the ever-evolving digital landscape. Let's build a brighter future together!</h4>
            <button className='mt-5 lg:mt-6 w-40 px-5 py-3 bg-[#0F6F6F] shadow-black shadow-md text-white font-semibold rounded-md flex justify-center items-center gap-3'>learn More <MdArrowOutward className=' text-xl' />
            </button>
          </div>
        </div>
        <div className="page4 w-full min-h-32 lg:min-h-32 bg-white pb-16">
        <div className="main-content w-full min-h-32 lg:min-h-32 pt-20 flex  flex-col items-center">
            <h1 className=' text-[#050505] text-3xl font-bold text-center lg:flex lg:gap-2'>What people say about <p className=' text-[#0F6F6F]'>Digital Builders</p></h1>
            <div className="hidden lg:block w-full">
            <SwiperSecond/>
          </div>
            <div className="lg:hidden w-full">
            <SwiperSecondMobile/>
          </div>
          </div>
        </div>
        <div className="page5 w-full min-h-32 pb-10 lg:min-h-32 bg-black lg:flex">
         <div className="top w-full lg:w-1/2 h-1/2 lg:min-h-32">
          <Image className=' w-full' src={"/images/bottom.jpg"} alt='bottom image' width={782} height={309}/>
         </div>
         <div className="bottom lg:mt-2 bg-black w-full lg:w-1/2 h-1/2 lg:min-h-64 flex items-center justify-center">
          <div className=" text-black w-5/6 lg:w-3/4 flex flex-col items-center">
            <h1 className=' text-2xl pt-8 lg:pt-0 lg:text-4xl font-semibold text-white'>Your journey as a developer does not have to be hard</h1>
            <button className="mt-10 px-6 py-3 font-semibold text-white bg-gray-500 rounded-md">Let's work together</button>
          </div>
         </div>
        </div>
        <div className="page6 w-full min-h-32 lg:min-h-32 bg-white lg:flex">
         <div className=" bg-[#0F6F6F] w-full min-h-32 lg:mx-52 my-10 lg:my-28 text-white flex flex-col lg:flex-row">
         <div className="top lg:hidden ">
            <Image className=' w-full' src={"/images/last_bottom.jpg"} alt='bottom_image' width={592} height={495}/>
          </div>
          <div className="left w-full lg:w-3/6 pt-10 pb-10 lg:pt-20 flex flex-col gap-8">
            <h1 className=' text-3xl font-semibold text-start pl-10 pr-10 lg:pl-10 lg:pr-10'>If you need help or have questions?</h1>
            <p className=' text-start pl-10 pr-10 lg:pr-20'>Please feel free to contact us, and we will be more than happy to help you.</p>
            <div className=" pl-10 pr-10 flex flex-col gap-4 items-start">
              <h1 className='flex gap-2 items-center'><MdAttachEmail /> Lionel.thebldrs@gmail.com</h1>
              <h2 className='flex gap-2 items-center'><FaDiscord /> TheBuildres/discord</h2>
              <h3 className='flex gap-2 items-center'><MdAttachEmail /> Lionel.thebldrs@gmail.com</h3>
            </div>
          </div>
          <div className="hidden lg:block right min-w-3/2">
            <Image className=' w-full' src={"/images/last_bottom.jpg"} alt='bottom_image' width={592} height={495}/>
          </div>
         </div>
        </div>
      </main>
  )
}

export default homepage
