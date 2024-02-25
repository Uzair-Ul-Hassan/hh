import { followOur, howWeWork, industries } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

const RootPage = () => {
  return (
    <>
      <section className="mt-[-128px] mb-16 relative h-[100vh] w-full flex items-center justify-center">
        <Image src="/hero-image.png" alt="Hero Image" fill className="z-1" />
        <h1 className="text-white text-9xl font-bold z-20">H&H POWER</h1>
      </section>

      <div className="px-3 max-w-[1200px] mx-auto">
        <section className="mb-32">
          <div className="text-[#101010] font-bold flex flex-col items-center text-center mb-16">
            <h2 className="text-[30px] mb-6">
              H&H POWER IS SIMPLY AWESOME IN MEP WORK
            </h2>
            <p className="text-xl max-w-5xl">
              H&H ENGINEERING PROVIDES QUALITY AND COMPREHENSIVE SERVICES FOR
              COMMERCIAL AND RESIDENTIAL BUILDING MECHANICAL, ELECTRICAL AND
              PLUMBING SYSTEMS AT AFFORDABLE RATES. WHETHER YOU’RE AN ARCHITECT
              DESIGNING A NEW BUILDING, OR YOU’RE A MUNICIPALITY LOOKING TO
              UPDATE YOUR CURRENT FACILITIES, H&H’S TEAM OF EXPERIENCED WILL
              MAXIMIZE YOUR PROJECT COST, PROVIDING YOU WITH EFFICIENT,
              ATTRACTIVE SYSTEMS.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex-[0_0_55%]">
              <h3 className="text-[#101010] text-3xl mb-5 font-bold">
                OVERVIEW
              </h3>

              <div>
                <p className="mb-5">
                  WE ARE A CLIENT-ORIENTED CONTRACTING COMPANY AND FOLLOWING
                  COMPLETION OF THE PROJECT. THROUGH OUR OPERATIONS, WE PROVIDE
                  INTEGRATED SHOP DESIGN & BUILD MEP SERVICES, SMOOTH
                  FUNCTIONALITY AND EFFICIENCY FROM START TO FINISH. FROM
                  MECHANICAL, ELECTRICAL AND PLUMBING (MEP), H&H POWER CONTINUES
                  TO BE AT THE HELM, DRIVING THE MARKET FORWARD THROUGH OUR
                  PEOPLE, PASSION AND INNOVATION.
                </p>
                <p>
                  OUR MANAGEMENT TEAM IS QUICK TO ADJUST TO THE DEVELOPMENT OF
                  NEW TECHNOLOGIES, WHILE OUR SOFTWARE MANAGEMENT AND PERSONNEL
                  TRAINING PROCEDURES ENSURE BOTH OUR OPERATIONS AND ENGINEERING
                  OPERATIVES HAVE THE NECESSARY TOOLS TO COPE WITH THE DEMANDS
                  OF A MODERN DAY BUILDING. WE UNDERTAKE A FULL RANGE OF
                  MECHANICAL, ELECTRICAL AND PLUMBING INSTALLATIONS INCLUSIVE OF
                  SHOP DESIGN. THE COMPANY SPECIALIZES IN PROVIDING SOLUTIONS
                  WHICH COMPLY WITH THE CLIENT&apos;S SPECIFIC NEEDS
                </p>
              </div>
            </div>

            <div className="relative h-[378px] flex-[0_0_45%]">
              <Image src="/home1.png" alt="Home 1" fill />
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="bg-[#D9D9D9] rounded-full w-[95%] mx-auto px-4 py-6 mb-16">
            <h2 className="text-6xl text-[#060606] text-center">
              INDUSTRIES WE SERVE
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 justify-between">
            {industries.map((el, index) => (
              <div key={index} className="w-[300px] text-center">
                <div className="h-32 flex items-end justify-center mb-2">
                  <Image
                    src={el.img}
                    alt={el.heading}
                    width={100}
                    height={100}
                  />
                </div>
                <h4 className="text-[#EB682C] font-bold text-2xl uppercase mb-2">
                  {el.heading}
                </h4>
                <p className="w-3/4 mx-auto">{el.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#363B41] text-4xl font-bold mb-3">
              How We Work
            </h2>
            <p className="text-[#4D5053] text-balance text-lg">
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of <br /> the printing and typesetting industry.
            </p>
          </div>

          <div className="flex flex-wrap justify-between">
            {howWeWork.map((el, index) => (
              <div
                key={index}
                className={clsx(
                  "flex gap-x-12 items-center justify-around w-1/2 p-4",
                  (index === 0 || index === 2 || index === 4) &&
                    "border-r-2 border-r-black",
                  (index === 0 || index === 1 || index === 2 || index === 3) &&
                    "border-b-2 border-b-black"
                )}
              >
                <p className="text-[#292F36] text-4xl w-52 font-bold">{el}</p>
                <p className="text-[#EB682C] text-6xl font-bold">{`0${
                  index + 1
                }`}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#363B41] text-4xl font-bold mb-3">
              Follow Our
            </h2>
            <p className="text-[#4D5053] text-balance text-lg">
              It is a long established fact that a reader will be distracted by
              the of readable <br /> content of page lookings at its layouts
              points.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-between">
            {followOur?.map((el, index) => (
              <div key={index} className="w-[40%]">
                <div className="mb-4">
                  <Image src={el.img} alt={el.text} width={450} height={350} />
                </div>
                <div className="flex justify-between items-center text-[#292F36] font-semibold text-2xl">
                  <p>{el.text}</p>
                  <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden bg-[#F4F0EC] flex items-center justify-center">
                    <Image
                      src="/chevron-right.png"
                      alt="Chevron Right"
                      width={6}
                      height={6}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default RootPage;
