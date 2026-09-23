"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CircleHelp,
  Heart,
  UserRound,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Experiences",
    href: "/experiences",
  },
  {
    name: "Destinations",
    href: "/destinations",
  },
  {
    name: "Hotels",
    href: "/hotels",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname()

  return (
    <header className="fixed top-0 z-1000 w-full bg-transparent">
      <nav className="mx-auto flex h-19 max-w-350 items-center justify-between px-5 lg:px-8">

        {/* ==================== LOGO ==================== */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
        >
          {/* Replace this with your actual logo */}
          <img 
            src="/logo-light.png"
            width={80}
            height ={80}
            />

          <div className="hidden sm:block">
            <div className="text-[22px] font-bold leading-none text-[#123C3D]">
              Voyage <span className="text-orange-500">Ethiopia</span>
            </div>

            <div className="mt-1 text-[11px] tracking-wide text-gray-500">
              Holidays • Travel • Memories
            </div>
          </div>
        </Link>


        {/* ==================== DESKTOP NAV ==================== */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link, index) => {
            const isActive = pathName === link.href;

            return <Link
              key={link.name}
              href={link.href}
              className={`relative flex h-[76px] items-center text-[14px] ${
                isActive
                  ? "font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-orange-500 after:content-['']"
                  : "font-medium text-gray-700 transition-colors hover:text-gray-950"
              }`}
            >
              {link.name}
            </Link>
          })}
        </div>


        {/* ==================== DESKTOP RIGHT SIDE ==================== */}
        <div className="hidden items-center gap-5 lg:flex">


          {/* Search */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-950"
          >
            <Search
              size={21}
              strokeWidth={2}
            />

            <span>Search</span>
          </button>


          {/* Help */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-950"
          >
            <CircleHelp
              size={21}
              strokeWidth={2}
            />

            <span>Help</span>
          </button>


          {/* Favorites */}
          <button
            type="button"
            aria-label="Favorites"
            className="text-gray-800 transition-colors hover:text-orange-500"
          >
            <Heart
              size={24}
              strokeWidth={1.8}
            />
          </button>


          {/* Profile */}
          <button
            type="button"
            aria-label="Profile"
            className="text-gray-800 transition-colors hover:text-orange-500"
          >
            <UserRound
              size={23}
              strokeWidth={1.8}
            />
          </button>
        </div>


        {/* ==================== MOBILE BUTTON ==================== */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </nav>


      {/* ==================== MOBILE MENU ==================== */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-sm lg:hidden">
          <div className="flex flex-col gap-1">

            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 ${
                  index === 0
                    ? "bg-orange-50 font-semibold text-orange-600"
                    : "font-medium text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}


            {/* Divider */}
            <div className="my-3 h-px bg-gray-100" />


            {/* Search */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <Search size={20} />
              Search
            </button>


            {/* Help */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <CircleHelp size={20} />
              Help
            </button>


            {/* Favorites */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <Heart size={20} />
              Favorites
            </button>


            {/* Profile */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              <UserRound size={20} />
              Profile
            </button>

          </div>
        </div>
      )}
    </header>
  );
}