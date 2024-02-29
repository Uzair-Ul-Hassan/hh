"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { navItems } from "@/constants";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between px-8 py-6 z-20">
      <Link href="/">
        <div className="flex gap-x-2 items-center font-bold">
          <Image src="/logo.png" alt="H&H Logo" width={80} height={80} />
          <p
            className={clsx("text-[25px] leading-8")}
            style={{
              color:
                pathname.toString() === "/" ||
                pathname.toString() === "/smarthome"
                  ? "white"
                  : "black",
            }}
          >
            <span>H&H</span> <br />
            <span>Power</span>
          </p>
        </div>
      </Link>

      <ul className="flex gap-x-10 items-center">
        {navItems.map((el, index) => (
          <li
            key={index}
            className={clsx(
              "flex items-center gap-x-1 text-xl border-b-2 border-transparent group relative",
              pathname.toString() === "/" || pathname === "/smarthome"
                ? "hover:border-white"
                : "hover:border-black"
            )}
            style={{
              color:
                pathname.toString() === "/" || pathname === "/smarthome"
                  ? "white"
                  : "black",
            }}
          >
            <Link href={el.link}>{el.text}</Link>
            <ChevronDown className="w-4 h-4" />
            {el.subItems && (
              <div className="absolute top-full left-0 bg-white rounded-md z-[100] hidden group-hover:flex flex-col items-start gap-4 w-60 p-4 shadow-[0_0_5px_rgba(0,0,0,0.3)]">
                {el.subItems.map((subEl, i) => (
                  <Link
                    href={subEl.link}
                    key={i}
                    className="text-black border-b border-b-transparent hover:border-b-black"
                  >
                    {subEl.text}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
