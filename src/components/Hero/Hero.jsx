import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";
import { easeOut, motion } from "motion/react";

const Hero = ({ handlePopup }) => {
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Beats Solo",
      title1: "Wireless",
      title2: "Headphone",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Beats Solo",
      title1: "Wireless",
      title2: "Virtual",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "Beats Solo",
      title1: "Wireless",
      title2: "Laptops",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: easeOut,
          }}
          className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center hero-bg-color   "
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop={true}
          >
            {HeroData.map((item, idx) => (
              <SwiperSlide key={item.id}>
                <div className="px-5 flex flex-col lg:flex-row justify-between items-center">
                  <div className="flex flex-col justify-center">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-2xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.subtitle}
                    </h1>

                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title1}
                    </h1>

                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {" "}
                      {item.title2}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      data-aos-offset="0"
                    >
                      <Button
                        text="Shop By Category"
                        textColor="text-white"
                        bgColor="bg-primary"
                        handlePopup={handlePopup}
                      />
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={item.img}
                      className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] object-contain mx-auto drop-shadow-[-8px_-4px_6px_rgba(0,0,0,0.4)] relative z-40"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;

// 1:18
