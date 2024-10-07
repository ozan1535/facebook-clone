import Image from "next/image";
import React from "react";
import { postTools } from "./Center.helpers";

function Post() {
  return (
    <div className="w-full shadow-lg">
      <div className="w-full h-[720px] bg-white mt-4 rounded-lg">
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="/profile-pic.jpg"
                  height={40}
                  width={40}
                  alt="picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3">
                <span className="font-medium hover:underline cursor-pointer">
                  Ozan Bilgic
                </span>
                <br />
                <span className="text-gray-500 font-medium text-sm">
                  5 mins
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 hover:bg-gray-100 flex justify-center items-center rounded-full pl-1.5 cursor-pointer">
                <Image src="/dots.png" height={40} width={40} alt="picture" />
              </div>
              <div className="w-10 h-10 hover:bg-gray-100 flex justify-center items-center rounded-full cursor-pointer">
                <Image src="/close.png" height={40} width={40} alt="picture" />
              </div>
            </div>
          </div>
          <div className="mt-2">Hello World!</div>
        </div>
        <div className="w-full h-[500px] overflow-hidden cursor-pointer">
          <Image
            src="/view.jpg"
            alt="picture"
            layout="responsive"
            width={700}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="w-full rounded-lg">
          <div className="flex justify-between px-4 pt-3">
            <div className="flex hover:underline cursor-pointer">
              <Image
                width={20}
                height={20}
                src="/like-button.svg"
                alt="Picture"
              />
              <span className="ml-2 font-ligth text-gray-500">1K</span>
            </div>
            <div className="flex gap-2 font-ligth text-gray-500">
              <div className="cursor-pointer hover:underline">10 comments</div>
              <div className="cursor-pointer hover:underline">10 shares</div>
            </div>
          </div>
          <div className="relative flex p-3 items-center">
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>
          <div className="flex justify-around">
            {postTools.map((tool) => (
              <div className="w-full flex justify-center items-center gap-2 font-medium text-gray-500 hover:bg-gray-300 cursor-pointer mx-3 py-2 rounded-lg">
                <i
                  data-visualcompletion="css-img"
                  style={{
                    backgroundImage:
                      'url("https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9l18rHILUYL.png")',
                    backgroundPosition: tool.backgroundPosition,
                    backgroundSize: "21px 1172px",
                    width: "20px",
                    height: "20px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                  }}
                ></i>
                <span>{tool.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
