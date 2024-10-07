import Image from "next/image";
import React from "react";
import { leftSideItems, shortCutsItems } from "./LeftSide.helpers";

function LeftSide() {
  return (
    <div className="w-96 h-[100vh] overflow-y-auto pt-16 fixed hidden xl:block">
      {leftSideItems.map((item) => (
        <div className="flex items-center m-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <div className="w-10 h-10 rounded-full flex justify-center items-center">
            <div
              className={`w-10 h-10 overflow-hidden ${
                item.src === "/profile-pic.jpg" ? "rounded-full" : ""
              }`}
            >
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt="picture"
                className={`${
                  item.src === "/profile-pic.jpg"
                    ? "w-full h-full object-cover"
                    : ""
                }`}
              />
            </div>
          </div>
          <h3 className="pl-5 font-semibold">{item.title}</h3>
        </div>
      ))}
      <div className="relative flex p-3 items-center">
        <div className="flex-grow border-t-2 border-gray-300"></div>
      </div>
      <div className="flex items-center m-2 p-2 rounded-md font-semibold">
        <div>Your shortcuts</div>
      </div>

      {shortCutsItems.map((item) => (
        <div className="flex items-center m-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <div className="w-10 h-10 rounded flex justify-center items-center">
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt="picture"
            />
          </div>
          <h3 className="pl-5 font-semibold">{item.title}</h3>
        </div>
      ))}
      <div className="flex items-center m-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
        <h3 className="text-sm">
          Privacy • Terms • Advertising • Ad Choices • Cookies • More • Meta ©
          2024
        </h3>
      </div>
    </div>
  );
}

export default LeftSide;
