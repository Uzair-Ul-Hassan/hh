import Image from "next/image";

const CareersPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/careers1.png"
          alt="careers1"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">Careers</h1>
          <p className="text-[#4D5053]">Home / Careers:</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="mb-28">
          <h2 className="text-center text-5xl font-bold mb-8">
            Our Culture: Why H&H Power?
          </h2>

          <div className="text-center text-xl leading-10">
            <p>
              At H&H Power we believe that our most important resource is our
              employees and we aim to build a challenging and rewarding work
              environment where competent people can develop and utilize their
              full potential to achieve the Company’s as well as their own
              goals.
            </p>
            <p>
              We are always looking for highly skilled, committed and
              enthusiastic people to join our workforce and in return, we offer
              an opportunity to develop your skills by working on some of the
              most prestigious construction and infrastructure projects underway
              in the Telangana.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-center text-[#292F36] text-5xl font-bold mb-16 leading-[65px]">
            We love meeting new people <br /> and helping them.
          </h2>

          <div className="flex gap-8 mb-28">
            <div className="bg-[#F4F0EC] shrink-0 flex-[0_0_30%] rounded-[50px] p-8 flex flex-col gap-8">
              <div className="flex gap-6 items-center">
                <div className="bg-white rounded-full overflow-hidden p-2">
                  <Image
                    src="/envelope.svg"
                    alt="envelope"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-[#4D5053]">hhpower19@gmail.com</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="bg-white rounded-full overflow-hidden p-2">
                  <Image src="/phone.svg" alt="phone" width={24} height={24} />
                </div>
                <p className="text-[#4D5053]">+91-9700225721</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="bg-white rounded-full overflow-hidden p-2">
                  <Image src="/globe.svg" alt="globe" width={24} height={24} />
                </div>
                <p className="text-[#4D5053]">hnhpower.in</p>
              </div>
              <div className="flex justify-start gap-x-8 items-center mb-10">
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
            </div>

            <div className="flex-1">
              <form>
                <div className="flex flex-wrap gap-x-4 justify-center mb-16">
                  <input
                    className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
                    placeholder="Name"
                  />
                  <input
                    className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
                    placeholder="Email"
                  />
                  <input
                    className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4"
                    placeholder="Subject"
                  />
                  <input
                    className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[45%] placeholder:text-[#777] placeholder:font-medium text-xl px-2 py-4 mt-8"
                    placeholder="Phone"
                  />
                  <input
                    className="border-b-2 border-b-slate-300 focus:outline-none focus:border-b-slate-900 w-[93%] placeholder:text-[#777] placeholder:font-medium text-xl mt-16 px-2 py-4"
                    placeholder="Hello, I'm interested in..."
                  />
                </div>
                <div className="flex justify-end">
                  <button className="focus:outline-none bg-[#000] rounded-xl px-12 py-5 text-white flex gap-3 items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;