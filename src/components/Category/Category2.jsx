import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18">

          {/* first-col */}
          <div className="relative h-[320px] pl-5 py-10 bg-gradient-to-br from-gray-300/90 to-gray-100/60 text-white rounded-3xl flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-80 mb-2">Gaming</p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img src={Image1} alt="" className="w-[150px] lg:w-[200px] lg:bottom-0 absolute top-1 -right-0" />
          </div>

          {/* second-col */}
          <div className="relative h-[320px] pl-5 py-10 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">VR</p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img src={Image2} alt="" className="w-[200px] absolute -right-0 bottom-0"  />
          </div>

          {/* third-col */}
          <div className="relative h-[320px] pl-5 py-10 bg-gradient-to-br from-brandBlue to-brandBlue/60 text-white rounded-3xl flex items-end w-[350px] lg:w-[400px] ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Speaker</p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img src={Image3} alt="" className="w-[200px] sm:w-[250px] lg:w-[300px] absolute  translate-x-24" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
