import { customers } from "@/constants";
import Image from "next/image";

const TestimonialsPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/testimonial1.png"
          alt="services"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">
            Testimonials
          </h1>
          <p className="text-[#4D5053]">Home / Testimonials</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="flex justify-between mb-16">
          <div>
            <p className="text-[#133240] font-bold text-4xl mb-3">
              Our Customer Feedback
            </p>
            <p className="text-[#133240] text-xl">
              Don’t take our word for it. Trust our customers
            </p>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="flex gap-x-1 items-center justify-center text-[#133240] focus:outline-none border-[1px] border-[#133240] rounded-sm py-1 px-3 w-[110px]">
              <Image
                src="/chevron-left.svg"
                alt="chevron-left"
                width={16}
                height={16}
              />
              Previous
            </button>
            <button className="flex items-center justify-center gap-x-1 text-[#133240] focus:outline-none border-[1px] border-[#133240] rounded-sm py-1 px-3 w-[110px]">
              Next
              <Image
                src="/chevron-right.svg"
                alt="chevron-right"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        <div className="flex gap-8 flex-wrap justify-between mb-28">
          {customers.map((el, index) => (
            <div
              key={index}
              className="p-6 border-[1px] border-[#E7EAEC] rounded-sm w-[350px]"
            >
              <div className="flex items-start justify-between mb-4">
                <Image src={el.img} alt={el.name} width={50} height={50} />
                <Image src="/rating.svg" alt="rating" width={120} height={50} />
              </div>
              <p className="text-[#133240] text-xl font-bold mb-2">{el.name}</p>
              <p className="text-sm">{el.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
