import Image from "next/image";
import Link from "next/link";

import { mepServices } from "@/constants";

const ServicesPage = () => {
  return (
    <section className="">
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/services1.png"
          alt="services"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">
            MEP SERVICES:
          </h1>
          <p className="text-[#4D5053]">Home / MEP SERVICES:</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 max-w-[1200px] mx-auto px-3 mb-28">
        {mepServices.map((el, index) => (
          <div
            key={index}
            className="bg-[#F4F0EC] hover:bg-[#efe5db] w-[340px] h-[300px] rounded-xl text-center flex flex-col justify-center p-4 gap-y-4"
          >
            <h4 className="text-[#292F36] text-2xl uppercase">{el.heading}</h4>
            <p className="text-lg text-[#4D5053]">{el.text}</p>
            <Link
              href={el.path}
              className="flex gap-x-2 items-center justify-center text-[#4D5053] font-bold"
            >
              Read More
              <Image
                src="/arrow-right.svg"
                alt="Arrow Right"
                width={16}
                height={16}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
