import Image from "next/image";

import { mepServices2 } from "@/constants";

export const IncludeServices = () => {
  return (
    <>
      <div className="mb-28">
        <div className="flex justify-center gap-x-6">
          {mepServices2.map((el, index) => (
            <div
              key={index}
              className={
                index === 0 ? "border-r-2 border-r-[#CDA274] pr-16" : "pl-16"
              }
            >
              <h3 className="text-[#292F36] font-bold text-4xl mb-4">
                {el.heading}
              </h3>
              <div className="flex flex-col gap-y-4">
                {el.texts.map((subEl, i) => (
                  <div key={i} className="text-lg flex gap-x-4">
                    <span className="text-[#CDA274]">{i + 1}</span>
                    <span className="text-[#4D5053]">{subEl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-28">
        <h3 className="text-[#292F36] font-bold text-4xl text-center leading-10 mb-8">
          We love Art of work. <br />
          That&apos;s how we got here.
        </h3>
        <p className="text-[#4D5053] text-xl text-center mb-8">
          It is a long established fact that a reader will be <br /> distracted
          by the of readable content .
        </p>
        <div className="flex justify-center">
          <button className="focus:outline-none bg-[#292F36] text-white uppercase flex gap-x-4 items-center px-8 py-4 rounded-xl">
            Get In Touch{" "}
            <Image
              src="/arrow-right.svg"
              alt="Arrow Right"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </>
  );
};
