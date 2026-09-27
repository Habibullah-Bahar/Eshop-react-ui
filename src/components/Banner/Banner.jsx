import React from "react";

const Banner = ({ data ,handlePopup}) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
        style={{backgroundColor:data.bgColor}}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* col-1  */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm" >{data.discount} </p>
            <h1 data-aos="zoom-out" className="text-4xl lg:text-7xl font-bold uppercase" >{data.title} </h1>
            <p className="text-sm">{data.date} </p>
          </div>
          {/* col-2  */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img src={data.Image} alt=""
            className="scale-125 w-[250px] max-w-[340px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* col-3  */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8" >
            <p data-aos="zoom-out" className="font-bold text-xl" >{data.title2} </p>
            <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">{data.title3} </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5"> {data.title4} </p>
            <div data-aos="fade-up" data-aos-offsetr="0">
              <button 
              onClick={handlePopup}
              style={{color:data.bgColor}}
              className="bg-white text-primary py-2 px-4 rounded-full hover:scale-105 cursor-pointer">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
