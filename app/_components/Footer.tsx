import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";


const Footer = () => {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-0"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:jameeltony67@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </div>
<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm font-bold ml-4">
         © 2026 Md Jameel. Crafted with passion. 
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-2">
          {socialMedia.map((info) => (
            <a 
            key={info.id}
          href={info.link}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
            <img src={info.img} alt="icons"  width={20} height={20}/>
            </a>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Footer;
