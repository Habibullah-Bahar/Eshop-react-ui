import React from "react";
import Heading from "../Shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiore ",
    published: "Jan 20, 2024 by Dilshad",
    image: img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiore minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiore",
    published: "Jan 20, 2024 by Satya",
    image: img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiore minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiore ",
    published: "Jan 20, 2024 by Sabir",
    image: img3,
    aosDelay: "400",
  },
];
const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
        {/* Body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-4 md:gap-7">
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              <div className="overflow-hidden mb-2 rounded-2xl">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 ">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
