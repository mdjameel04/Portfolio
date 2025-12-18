
import { useState } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";


import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import MagicButton from "@/app/_components/MagicButton";
import { Globe2 } from "lucide-react";

// ✅ SSR-safe Lottie
const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["javascript", "NextJS", "node.js"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("jameeltony67@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {/* Background image */}
        <div className="absolute inset-0">
          {img && (
            <img
              src={img}
              alt="grid"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Spare image */}
        {spareImg && (
          <div className="absolute right-0 -bottom-5 w-full opacity-80">
            <img
              src={spareImg}
              alt="spare"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Gradient animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-50 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-7xl font-bold pointer-events-none" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative min-h-40 flex flex-col px-5 py-5 lg:p-10 transition group-hover/bento:translate-x-2"
          )}
        >
          <div className="text-sm lg:text-base text-[#C1C2D3] font-extralight z-10">
            {description}
          </div>

          <div className="text-lg lg:text-3xl font-bold max-w-96 z-10">
            {title}
          </div>

          {/* Icon instead of 3D globe */}

 {id === 2 && <Globe2 className="mt-4 w-10 h-10 text-white" />}

          {/* Tech stack */}
          {id === 3 && (
            <div className="flex gap-3 absolute -right-3 top-10">
              {[leftLists, rightLists].map((list, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Copy email */}
          {id === 6 && (
            <div className="mt-5 relative ">
              <div className="absolute -bottom-5 right-0">
                {/* <Lottie options={defaultOptions} height={120} width={220} /> */}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
