import Image from "next/image";
import React from "react";
import { createPostItems } from "./Center.helpers";
import Post from "./Post";

function Center() {
  return (
    <div className="flex flex-grow w-full h-full pt-16 justify-center m-5 md:m-0">
      <div className="container w-[37rem] h-full mt-2 flex flex-col">
        <div className="bg-white w-full rounded-lg shadow-lg">
          <div className="w-full p-3 flex">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="/profile-pic.jpg"
                height={40}
                width={40}
                alt="picture"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              placeholder="What's on your mind, Ozan?"
              className="w-full mx-2 bg-gray-200 outline-none rounded-full indent-3 cursor-pointer hover:bg-gray-300"
            />
          </div>
          <div className="relative flex px-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="w-full h-full flex justify-around">
            {createPostItems.map((item) => (
              <div
                key={item.title}
                className="w-full h-12 flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer mx-3 my-2"
              >
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.title}
                />
                <span className="pl-2 text-md text-gray-500 font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-full h-16 rounded-lg mt-4 shadow-lg flex justify-center items-center">
          <div className="flex justify-center items-center w-full m-2 h-12 rounded-lg p-3 cursor-pointer hover:bg-gray-200">
            <div className="w-10 h-10 flex justify-center items-center bg-blue-100 rounded-full">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                aria-hidden="true"
                style={{ color: "#0866FF" }}
              >
                <path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z"></path>
              </svg>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start pl-3">
              <div className="font-medium">Create story</div>
              <div className="text-gray-500 text-sm">
                Share a photo or write something.
              </div>
            </div>
          </div>
        </div>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Center;
