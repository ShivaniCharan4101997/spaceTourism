"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavLinks = [
  { href: "/", number: "00", text: "Home" },
  { href: "/destination", number: "01", text: "Destination" },
  { href: "/crew", number: "02", text: "Crew" },
  { href: "/technology", number: "03", text: "Technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div
          className="
            hidden md:flex space-x-6 
            backdrop-blur-md bg-[hsl(230_35%_7%_/_0.95)]
            border-b border-[hsl(0_0%_100%_/_0.2)]
            py-6 px-8 rounded-lg
          "
        >
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[hsl(0_0%_100%)] uppercase tracking-wide hover:text-[hsl(231_77%_90%)]"
            >
              <span className="font-bold mr-2">{link.number}</span>
              {link.text}
            </Link>
          ))}
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
            backdrop-blur-md bg-[hsl(230_35%_7%_/_0.95)]
            border-b border-[hsl(0_0%_100%_/_0.2)]
            p-6 space-y-4
          "
        >
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[hsl(0_0%_100%)] uppercase tracking-wide hover:text-[hsl(231_77%_90%)]"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold mr-2">{link.number}</span>
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
