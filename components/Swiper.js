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

const Swipers =  () => {
  return (
    <div className=" w-full h-1/2">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
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
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center">
        <div className="card mt-6 w-[86%] lg:w-72 min-h-80 py-10 lg:h-64 bg-[#9b9a9a5a] backdrop-blur-sm rounded-md flex flex-col justify-center items-center">
              <div className=" w-28 h-28 lg:w-16 lg:h-16 rounded-full bg-blue-400 overflow-hidden">
                <Image className=' object-cover w-[100%] h-[100%]' src={"/images/image_card1.jpg"} alt='' width={100} height={100}/>
              </div>
                <h1 className=' text-[#0F6F6F] font-bold pt-2'>Skill Development Workshops</h1>
                <p className=' text-black pt-5 text-center px-5 lg:px-7 lg:text-start lg:text-sm'>Master the latest technologies through our hands-on workshops and tutorials, ranging from web development and software engineering to SEO and digital marketing.</p>
            </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};

Swipers.displayName = "Swipers";
export default Swipers