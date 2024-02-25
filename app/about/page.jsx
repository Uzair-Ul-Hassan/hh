"use client";

import Image from "next/image";
import { useState } from "react";

const AboutPage = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.name || !details.email || !details.description) {
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });

    const data = await response.json();

    console.log(data);
    setDetails({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image src="/about1.png" alt="about1" fill className="object-contain" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">About Us</h1>
          <p className="text-[#4D5053]">Home / About Us:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <p className="leading-10 text-xl text-center font-medium mb-28">
          H&H POWER IS AN ORGANIZATION WHICH DEAL WITH MEP WORK I.E HVAC,
          ELECTRICAL, CCTV, FIRE FIGHTING SYSTEM, BIOMETRIC, ACCESS CONTROL AND
          PUBLIC ADDRESS STSTEM AND PHE. AT H&H POWER, WE ARE MORE THAN JUST
          CONTRACTOR. WHILE WE HAVE THE EXPERIENCE AND KNOWLEDGE TO DELIVER THE
          PROJECTS TO VARIETY OF CLIENTS, MERELY MEETING YOUR FUNTIONAL NEEDS IS
          NOT ENOUGH TO FULFILL OUR MISSION INSTEAD WE PRIDE OURSELVES ON
          DEVELOPINGLONG-LASTING MEANINGFUL RELATIONSHIPS THAT HELP COMPANIES
          MANAGE THE REAL ESTATE PORTFOLIOS. ULTIMATELY, WHEN YOU SUCCEED WE
          SUCCEED. APART FROM A TEAM OF DEXTEROUS PROFESSIONALS AND EMPLOYEES,
          WE ALSO HAVE OTHER ROBUST FACILITIES IN OUR ORGANIZATION.
        </p>

        <div className="flex gap-12 justify-center mb-28">
          <div className="flex-[0_0_50%]">
            <h2 className="uppercase text-5xl text-[#EB682C] font-bold mb-4">
              Vision
            </h2>
            <p className="text-lg leading-10">
              tO BE THE WORLD&apos;S DEFINITIVE PROVIDER OF INNOVATIVE AND
              RELIABLE MOTION SYSTEMS. CORE VALUES H&H POWER PRIDES ITSELF ON A
              SET OF SHARED CORE VALUES AND COMMITMENTS THAT TOGETHER FORM THE
              FOUNDATION TO EVERYTHING WE DO. THE FIRST INITIAL OF EACH OF THESE
              VALUES TOGETHER SPELL THE WORD &ldquo;MARBLE&rdquo; WHICH IS THE
              ACRONYM JOHNSON ELECTRIC EMPLOYEES USE INTERNALLY WHEN REFERRING
              TO OUR VALUES STATEMENT. MAKE CUSTOMERS SUCCESSFUL DELIVERING WHAT
              OUR CUSTOMERS NEED, WHEN THEY NEED IT, IS THE PRIMARY GOAL OF
              JOHNSON ELECTRIC. WE ARE COMMITTED TO MAKE OUR CUSTOMERS
              SUCCESSFUL IN THEIR BUSINESS, AS THE BASIS FOR LONG-TERM SUCCESS
              IN OUR BUSINESS. EXPECTATIONS BUT ALSO TO EXCEED THEM THROUGH
              CONTINUOUS CYCLES OF LEARNING
            </p>
          </div>
          <div className="relative flex-[0_0_50%]">
            <Image
              src="/about2.jpg"
              alt="about 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex gap-12 justify-center mb-28">
          <div className="relative flex-[0_0_50%]">
            <Image
              src="/about3.jpg"
              alt="about 3"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-[0_0_50%]">
            <h2 className="uppercase text-5xl text-[#EB682C] font-bold mb-4 text-right">
              Mission
            </h2>
            <p className="text-lg leading-10">
              IN A PERFECT WORLD THINGS WOULDN&apos;T BREAK DOWN. UNTIL THEN, IT
              IS OUR MISSION TO RESPOND WITH URGENCY, EXPERTISE AND
              PROFESSIONALISM TO MINIMIZE THE LENGTH AND FREQUENCY OF DOWNTIME.
              WE&apos;RE COMMITTED TO A HIGH QUALITY OF WORKMANSHIP AND PROVIDE
              A SAFE WORK ENVIRONMENT ON ALL PROJECTS. WE KNOW THAT PEOPLE DO
              BUSINESS WITH COMPANIES THAT MEET THEIR NEEDS AND PROVIDE RELIABLE
              SERVICE. WE ATTRIBUTE OUR SUCCESS TO BUILDING STRATEGIC
              PARTNERSHIPS AND TREATING CUSTOMERS THE WAY WE WANT TO BE TREATED.
              WE BELIEVE THE QUALITY IN OUR WORK WILL REPRESENT US FOR YEARS TO
              COME. RIGHT. NOW. THAT&apos;S NEW.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F0EC] p-16 mb-28">
        <h2 className="text-5xl font-bold text-balance text-center capitalize">
          What people think <br />
          about us
        </h2>

        <div className="flex gap-6 flex-wrap justify-center">
          <div className="relative h-[500px] w-[250px] rounded-lg">
            <Image
              src="/about4.png"
              alt="about 4"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-[500px] w-[250px] rounded-lg">
            <Image
              src="/about5.png"
              alt="about 4"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-[500px] w-[250px] p-6 mt-12">
            <div>
              <div className="mb-10">
                <p className="text-2xl font-bold leading-10 text-center">
                  Nattasha Julie
                </p>
                <p className="text-center">Design, INDIA</p>
              </div>
              <div className="flex justify-evenly items-center mb-10">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={16}
                  height={16}
                />
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </div>

              <p className="text-center text-xl">
                +1 (000) 400-1234 <br />
                hhpower19@gmail.com
              </p>
            </div>
          </div>
          <div className="relative h-[500px] w-[250px] rounded-lg">
            <Image
              src="/about6.png"
              alt="about 4"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 mb-28">
        <h2 className="text-5xl font-bold text-balance text-center capitalize mb-20">
          Creative project? Let&apos;s have <br />a productive talk.
        </h2>

        <form className="w-2/3 mx-auto">
          <div className="flex flex-wrap gap-8 justify-center mb-16">
            <input
              className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
              placeholder="Name"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
            <input
              className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
              placeholder="Email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
            <input
              className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[93%] placeholder:text-[#777] placeholder:font-medium text-xl mt-10 px-2 py-4"
              placeholder="Hello, I'm interested in..."
              value={details.description}
              onChange={(e) =>
                setDetails({ ...details, description: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center">
            <button
              className="focus:outline-none bg-[#000] rounded-xl px-12 py-5 text-white flex gap-3 items-center"
              onClick={handleSubmit}
            >
              Send Now{" "}
              <Image
                src="/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutPage;
