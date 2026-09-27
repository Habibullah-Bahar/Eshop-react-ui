
import React from "react";
import Button from "../Shared/Button";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container mx-auto px-4 md:pl-10">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-16 pb-20 pt-5 mt-10">

          {/* Company Details */}
          <div>
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>

            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>

            <p className="text-gray-500 mt-4">
              Made with 💖 by The Coding Journey
            </p>

            <div className="mt-4">
              <a href="https://github.com/Habibullah-Bahar">
                <Button
                  text={"Visit My Github Account"}
                  textColor={"text-white"}
                  bgColor={"bg-primary"}
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 md:col-span-3">

            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Address
              </h1>

              <div className="flex items-center gap-3 text-black dark:text-white">
                <CiLocationArrow1 className="text-xl shrink-0 text-brandBlue" />
                <p className="text-primary">Santosh, Tangail</p>
              </div>

              <div className="flex items-center gap-3 mt-3 text-black dark:text-white">
                <FaMobileAlt className="text-xl shrink-0 text-brandBlue" />
                <p className="text-primary">+880 1703321082</p>
              </div>

              <div className="flex gap-3 items-center mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-200" />
                </a>

                <a href="#">
                  <FaFacebookSquare className="text-3xl hover:text-primary duration-200" />
                </a>

                <a href="#">
                  <IoLogoLinkedin className="text-3xl hover:text-primary duration-200" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

