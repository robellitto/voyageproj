"use client";

import { useState,useEffect } from "react";
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
import { useSpecificFilter } from "@/contexts/SpecificFilter";

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
  const pathName = usePathname()
  const {SpecificFilter} = useSpecificFilter()
  



  return (
    <header className={`sticky top-0 z-1000 w-full bg-white shadow-sm backdrop-blur-5xs`}>

      <nav className="mx-auto flex h-(--nav-h) max-w-350 items-center justify-between px-5 lg:px-8">

        <div className="flex gap-11">
          <div className="flex gap-2 items-center">

            {SpecificFilter ? SpecificFilter : null}

            
            <Link
              href="/"
              className="flex items-center shrink-0  gap-3"
            >
              <img 
                src="/logo-light.png"
                width={70}
                height ={70}
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
          </div>


          {/* ==================== DESKTOP NAV ==================== */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link, index) => {
              const isActive = pathName === link.href;

              return <Link
                key={link.name}
                href={link.href}
                className={`relative flex h-[76px] items-center text-[14px]  ${
                  isActive
                    ? "font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:bg-orange-500 after:content-['']"
                    : "font-medium text-gray-700 transition-colors hover:text-gray-950"
                }`}
              >
                {link.name}
              </Link>
            })}
          </div>

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


        
      </nav>


    
         </header>
  );
}