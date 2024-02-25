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
            className={clsx(
              "text-white text-[30px] leading-8",
              (pathname !== "/" || pathname === "/smarthome") && "text-black"
            )}
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
              "flex items-center gap-x-1 text-xl border-b-2 border-transparent",
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
          </li>
        ))}
      </ul>
    </nav>
  );
};
