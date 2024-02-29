import { Form } from "@/components/Form";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div className="relative w-full h-[360px] mb-28">
        <Image
          src="/contact1.png"
          alt="contact"
          fill
          className="object-contain"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-tl-[30px] rounded-tr-[30px] py-8 px-16 text-center">
          <h1 className="text-[#292F36] font-bold mb-2 text-4xl">Contact Us</h1>
          <p className="text-[#4D5053]">Home / Contact</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <Form />

        <div className="relative w-full h-[600px] mb-28">
          <Image src="/map.png" alt="map" fill className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
