import React from "react";
import { IoBackspace } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handlePopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-lg ">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <IoBackspace
                  className="text-2xl cursor-pointer"
                  onClick={handlePopup}
                />
              </div>
              <input type="text" 
              placeholder="Name"
              className="w-full rounded-full border border-gray-400 focus:border-blue-600 py-1 px-2 text-gray-600"
              />

              <input type="text" 
              placeholder="Email"
              className="w-full rounded-full border border-gray-400 focus:border-blue-600 py-1 px-2 text-gray-600"
              />

              <input type="text" 
              placeholder="Address"
              className="w-full rounded-full border border-gray-400 focus:border-blue-600 py-1 px-2 text-gray-600"
              />

            <div className="flex items-center justify-center">
              <Button
              text={"Order Now"}
              textColor={"text-white"}
              bgColor={"bg-primary"}
              />
            </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
