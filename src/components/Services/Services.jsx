import React from "react";
import {
  FaCarSide,
  FaRegCheckCircle  ,
  FaWallet,
  FaHeadphones  ,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order.",
  },
  {
    id: 2,
    icon: <FaRegCheckCircle   className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure.",
  },
  {
    id: 4,
    icon: <FaHeadphones   className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {servicesData.map((data) => (
            <div 
            key={data.id}
            className="flex flex-col sm:flex-row gap-8">
              {data.icon}
              <div>
                <h1 className="font-bold lg:text-xl">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
