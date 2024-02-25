import { mepServices2 } from "@/constants";
import Image from "next/image";

const ExtraLowVoltagePage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/electrical1.png"
          alt="electrical"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">
            Extra Low Voltage <br /> Engineering Services
          </h1>
          <p className="text-[#4D5053]">Home / ELV:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="mb-12">
          <p className="text-[#EB682C] text-2xl text-center">
            Extra low voltage (ELV) engineering is the design, installation,{" "}
            <br /> and maintenance of systems that operate at voltages of 50
            volts or less. <br />
            ELV systems are used in a wide variety of applications, including:
          </p>
        </div>

        <div className="text-[#4D5053] text-2xl">
          <ul className="list-disc ml-16 mb-16">
            <li>
              Security and access control: CCTV, burglar alarms, access control
              systems, and fire alarm systems
            </li>
            <li>
              Data and communications: Structured cabling, networking, and
              telephony systems
            </li>
            <li>
              Audiovisual: Public address systems, conference systems, and
              multimedia systems
            </li>
            <li>
              Building automation: Lighting control, HVAC control, and energy
              management systems
            </li>
          </ul>

          <p className="text-center mb-16">
            ELV systems can be complex and require a high level of technical
            expertise to design, <br /> install, and maintain properly. ELV
            engineers have the knowledge and experience to <br /> ensure that
            ELV systems are safe, reliable, and meet the specific needs of their
            clients.
          </p>

          <ul className="list-disc ml-16 mb-16">
            <li>
              System design: ELV engineers can design custom ELV systems to meet
              the specific needs of their clients. They will consider the size
              and layout of the building, the types of systems required, and the
              budget of the client when designing the system.
            </li>
            <li>
              System installation: ELV engineers can install ELV systems in a
              variety of buildings and settings, including commercial buildings,
              residential buildings, and industrial facilities. They will follow
              all applicable codes and standards when installing the system.
            </li>
            <li>
              System maintenance: ELV engineers can provide regular maintenance
              and support for ELV systems. This includes testing the system,
              troubleshooting problems, and making repairs as needed.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#eee] flex gap-x-8 justify-center items-center p-10 h-[600px] mb-28">
        <div className="flex-[0_0_50%]">
          <ul className="list-disc text-2xl ml-28 leading-10">
            <li>CCTV Systems</li>
            <li>Access Control Systems</li>
            <li>Intruder Alarm & Security Systems</li>
            <li>TV Distribution Systems</li>
            <li>Intercom Systems</li>
            <li>PA/Speakers/Music Installation Systems</li>
            <li>Car Park Management Systems</li>
            <li>IT Network & Telephony Systems</li>
            <li>Building Management Systems (BMS)</li>
          </ul>
        </div>
        <div className="flex-[0_0_50%] relative w-full h-full">
          <Image src="/elv2.png" alt="elv" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 mb-28">
        <div className="relative w-full h-[800px]">
          <Image src="/elv3.png" alt="elv3" fill className="object-contain" />
        </div>
      </div>

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

export default ExtraLowVoltagePage;
