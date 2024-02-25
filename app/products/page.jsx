import { followOur, partners } from "@/constants";
import Image from "next/image";

const ProductsPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/products1.jpg"
          alt="products1"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">Products</h1>
          <p className="text-[#4D5053]">Home </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <div className="mb-28">
          <h2 className="text-[#292F36] text-5xl font-bold text-center mb-6">
            Follow Our products
          </h2>
          <p className="text-lg text-center text-[#4D5053]">
            It is a long established fact that a reader will be distracted by
            the of readable <br /> content of page lookings at its layouts
            points.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-between mb-28">
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

        <div>
          <div className="mb-28">
            <h2 className="text-[#292F36] text-5xl font-bold text-center mb-6">
              Our Associate partners
            </h2>
            <p className="text-lg text-center text-[#4D5053]">
              It is a long established fact that a reader will be distracted by
              the of readable <br /> content of page lookings at its layouts
              points.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-24 mb-28 justify-center">
          {partners.map((el, index) => (
            <Image
              src={el}
              alt="partner"
              width={150}
              height={80}
              key={index}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
