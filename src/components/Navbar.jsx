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
  const linkRefs = {};
  const underlineRef = typeof window !== "undefined" ? React.createRef() : null;
  // For mobile
  const linkRefsMobile = {};
  const underlineRefMobile =
    typeof window !== "undefined" ? React.createRef() : null;

  // Position underline under active link (desktop)
  React.useEffect(() => {
    if (!underlineRef || !underlineRef.current) return;
    const activeLink = linkRefs[pathname];
    if (activeLink && activeLink.current) {
      const rect = activeLink.current.getBoundingClientRect();
      const parentRect = activeLink.current.parentNode.getBoundingClientRect();
      underlineRef.current.style.left = `${rect.left - parentRect.left}px`;
      underlineRef.current.style.width = `${rect.width}px`;
      underlineRef.current.style.opacity = 1;
    } else {
      underlineRef.current.style.width = "0px";
      underlineRef.current.style.opacity = 0;
    }
  }, [pathname, linkRefs, underlineRef]);

  // Position underline under active link (mobile)
  React.useEffect(() => {
    if (!underlineRefMobile || !underlineRefMobile.current) return;
    const activeLink = linkRefsMobile[pathname];
    if (activeLink && activeLink.current) {
      const rect = activeLink.current.getBoundingClientRect();
      const parentRect = activeLink.current.parentNode.getBoundingClientRect();
      underlineRefMobile.current.style.left = `${
        rect.left - parentRect.left
      }px`;
      underlineRefMobile.current.style.width = `${rect.width}px`;
      underlineRefMobile.current.style.opacity = 1;
    } else {
      underlineRefMobile.current.style.width = "0px";
      underlineRefMobile.current.style.opacity = 0;
    }
  }, [pathname, linkRefsMobile, underlineRefMobile, isOpen]);

  return (
    <nav className="navbar-glass fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
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
        {/* Desktop Menu with frosted glass effect */}
        <div className="navbar-glass-menu hidden md:flex space-x-6 w-[60%] py-6 px-8 relative">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            if (!linkRefs[link.href]) linkRefs[link.href] = React.createRef();
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={linkRefs[link.href]}
                className={`navbar-link relative uppercase tracking-wide text-white group ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="font-bold mr-2">{link.number}</span>
                {link.text}
              </Link>
            );
          })}
          {/* Underline outside glass effect */}
          <span className="navbar-underline" ref={underlineRef} />
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
        <div className="navbar-glass-menu-mobile md:hidden absolute top-full left-0 w-full p-6 space-y-4">
          {NavLinks.map((link) => {
            const isActive = pathname === link.href;
            if (!linkRefsMobile[link.href])
              linkRefsMobile[link.href] = React.createRef();
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={linkRefsMobile[link.href]}
                className={`navbar-link-mobile block uppercase tracking-wide text-white relative ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-bold mr-2">{link.number}</span>
                {link.text}
              </Link>
            );
          })}
          <span className="navbar-underline-mobile" ref={underlineRefMobile} />
        </div>
      )}
    </nav>
  );
}
