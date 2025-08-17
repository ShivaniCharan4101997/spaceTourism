"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavLinks = [
  { href: "/", number: "00", text: "Home" },
  { href: "/destination", number: "01", text: "Destination" },
  { href: "/crew", number: "02", text: "Crew" },
  { href: "/technology", number: "03", text: "Technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent mt-4">
      <div className="container mx-auto flex items-center justify-between py-3 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-8 md:ml-4">
          <Image
            src="/assets/shared/logo.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>

        {/* Line separator */}
        <div className="hidden md:block flex-1 mx-6 h-px bg-white/30" />

        {/* Desktop Menu */}
        <div
          className="
            hidden md:flex items-center space-x-8
            absolute top-0 right-0 h-full
            backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg
            px-12
          "
          style={{ width: "55%" }}
        >
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative uppercase tracking-widest text-white transition-colors
                  hover:text-gray-200
                `}
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
        <button
          className="md:hidden mr-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
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
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          backdrop-blur-lg bg-white/10 border-t border-white/20 shadow-lg
          p-6 space-y-6 transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {NavLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                block uppercase tracking-widest text-white relative
                ${isActive ? "font-bold" : ""}
              `}
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold mr-2">{link.number}</span>
              {link.text}
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
    </nav>
  );
}
