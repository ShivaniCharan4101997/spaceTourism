"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation"; // 👈

const NavLinks = [
  { href: "/", number: "00", text: "Home" },
  { href: "/destination", number: "01", text: "Destination" },
  { href: "/crew", number: "02", text: "Crew" },
  { href: "/technology", number: "03", text: "Technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 detect active page

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/shared/logo.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>

        {/* Line separator */}
        <div className="hidden md:block flex-1 mx-6 h-px bg-[hsl(0_0%_100%)] opacity-20" />
        {/* frosted glass effect */}
        {/* Desktop Menu */}
        <div
          className="
            hidden md:flex space-x-6 
            backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] w-[60%] shadow-lg
            py-6 px-8
          "
        >
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative uppercase tracking-wide text-white group"
              >
                <span className="font-bold mr-2">{link.number}</span>
                {link.text}
                {/* Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-2 h-[2px] bg-white transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={
              isOpen
                ? "/assets/shared/icon-close.svg"
                : "/assets/shared/icon-hamburger.svg"
            }
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden absolute top-full left-0 w-full 
            backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg
            p-6 space-y-4
          "
        >
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block uppercase tracking-wide text-white relative ${
                  isActive ? "font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-bold mr-2">{link.number}</span>
                {link.text}
                {/* Underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
