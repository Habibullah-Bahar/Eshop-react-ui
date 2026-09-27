import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Product from "./components/Products/Product";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blog from "./components/Blog/Blog";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  Image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ispum dolor sit amet consector adipisicing elite.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  Image: smartwatch2,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ispum dolor sit amet consector adipisicing elite.",
  bgColor: "#2dcc6f",
};
const App = () => {
  const [orderPopup, setOrderPopUp] = useState(false);
  const handlePopup = () => {
    setOrderPopUp(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200  ">
        <Navbar handlePopup={handlePopup} />
        <Hero handlePopup={handlePopup} />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} handlePopup={handlePopup} />
        <Product />
        <Banner data={BannerData2} handlePopup={handlePopup} />
        <Blog />
        <Partners />
        <Footer />
        <Popup orderPopup={orderPopup} handlePopup={handlePopup} />
      </div>
    </>
  );
};

export default App;
