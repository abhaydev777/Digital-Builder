"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { BiSolidMessageDots } from "react-icons/bi";

export default () => {
  return (
    <div className=" w-full h-1/2">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl">
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl">
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl">
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl">
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl">
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-72 pt-10 pb-10 lg:h-64 bg-white border border-[#9D9797] backdrop-blur-sm flex flex-col justify-center items-start">
                <div className=" flex justify-end w-full pr-5 text-3xl"> 
                    <BiSolidMessageDots className=' text-[#0F6F6F]' />
                </div>
                <p className=' text-black pt-5 text-start text-lg px-5 lg:px-7 lg:text-start lg:text-sm'>we believe in the power of collaboration and innovation. Our dynamic environment encourages experimentation, fosters creativity</p>
              <div className=" flex justify-start items-end gap-2 pt-14 pl-5">
                <div className=" border-2 border-[#0F6F6F] w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden flex">
                <Image className=' object-cover object-top w-[100%] h-[100%]' src={"https://images.unsplash.com/photo-1617331647819-2495792e53e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbnN8ZW58MHx8MHx8fDA%3D"} alt='' width={100} height={100}/>
              </div>
                <div className="">
                    <h1 className='text-lg font-semibold text-black'>Carlos lopez</h1>
                    <h2 className=' text-[#9D9797]'>Full Stack Developer</h2>
                </div>
              </div>
            </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};