"use client";

import { usePathname } from "next/navigation";

import { stats } from "@/constants";

export const Stats = () => {
  const pathname = usePathname();

  if (
    pathname === "/partition-system" ||
    pathname === "/electrical" ||
    pathname === "/extra-low-voltage" ||
    pathname === "/hvac" ||
    pathname === "/plumbing" ||
    pathname === "/fire-fighting"
  )
    return null;

  return (
    <section className="p-20 bg-[#F4F0EC] flex justify-between">
      {stats.map((el, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 text-center flex-1 border-r-[#CDA274] border-r-[2px] last-of-type:border-none"
        >
          <span className="text-[#CDA274] font-bold text-6xl">{el.number}</span>
          <span className="text-[#4D5053] font-medium text-lg">{el.text}</span>
        </div>
      ))}
    </section>
  );
};
