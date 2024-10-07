import Image from "next/image";
import React from "react";
import { users } from "./rightSide.helpers";

function RightSide() {
  return (
    <div className="w-96 h-[100vh] overflow-y-auto pt-16 fixed right-0 hidden xl:block">
      <div>
        <span className="text-gray-500 font-bold text-sm">Suggested</span>
        <div className="w-full h-[200px] mt-3 rounded-lg flex justify-start items-center overflow-hidden relative">
          <Image
            className="object-cover mr-2"
            width={400}
            height={100}
            alt="logo"
            src={"/friends.png"}
          />
          <div className="absolute text-white ml-5">
            <p className="font-bold text-lg">Groups</p>
            <p className="w-40">New ways to find and join communities.</p>
            <button className="bg-white text-gray-500 font-semibold p-2 mt-5 rounded-lg outline-none hover:bg-gray-200 active:bg-gray-300">
              Find Your Groups
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <span className="text-gray-500 font-bold text-sm">Contacts</span>
        {users.map((user) => (
          <div className="flex items-center mt-2 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex justify-center items-center">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src={user.picture}
                  width={40}
                  height={40}
                  alt="picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="pl-5 font-semibold text-gray-600">{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;
