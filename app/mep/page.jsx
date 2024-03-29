import Image from "next/image";

export const metadata = {
  title: "MEP SERVICES",
  description: ` Our Air-Conditioning Team works for multiple applications viz.
  comfort cooling systems, process cooling, clean rooms, Labs, Data
  Centre&apos;s, General & basement ventilation, exhaust,
  pressurization of staircase, etc.`,
};

const MepPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/mepservices1.png"
          alt="services"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">MEP</h1>
          <p className="text-[#4D5053]">Home / MEP SERVICES:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="font-bold text-5xl text-center text-[#292F36] mb-28">
          M.E.P
        </h2>

        {/* <div className="relative w-full h-[600px] mb-28">
          <Image src="/mep1.png" alt="MEP 1" fill className="object-contain" />
        </div>

        <div className="relative w-full h-[600px] mb-28">
          <Image src="/mep2.png" alt="MEP 2" fill className="object-contain" />
        </div> */}

        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project1.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project2.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project3.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project4.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project5.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-[600px] mb-28">
          <Image
            src="/project6.jpg"
            alt="Project"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default MepPage;
