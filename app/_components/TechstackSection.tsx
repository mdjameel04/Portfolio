import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Techtools } from "@/Data";
import React from "react";

const TechstackSection = () => {
  return (
    <div className="py-10" id="Techtools">
      <h1 className="font-bold text-3xl md:text-5xl text-center">
        Technologies I Learned
      </h1>

      <p className="text-lg mt-4 text-center">
        A collection of tools and technologies I use to build modern{" "}
        <span className="text-purple-500">web applications.</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {Techtools.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-[2px] overflow-hidden"
          >

            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r 
              from-purple-500 via-pink-500 to-cyan-400
              bg-[length:200%_200%] animate-border"
            />

            {/* Card Content */}
            <div className="relative px-10 py-4 bg-black rounded-2xl flex flex-col items-center justify-center gap-4 text-white">
              <img src={item.img} alt={item.name} width={40} height={40} />
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-400">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechstackSection;
