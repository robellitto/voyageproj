'use client';

import { Backpack, Ellipsis, Home, Hotel, Mountain } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const bottomBarLinks = [
  
  {
    name: "Experiences",
    href: "/experiences",
    icon: <Mountain />
    
  },
  {
    name: "Tours",
    href: "/tours",
    icon: <Backpack />
  },
  {
    name: "Home",
    href: "/",
    icon:<Home />
  },
  {
    name: "Hotels",
    href: "/hotels",
    icon: <Hotel/>
  },
  {
    name: "About",
    href: "/about",
    icon: <Ellipsis />
    
  },
];



export default function BottomBar(){
    const pathName = usePathname()
    return (
        <div className="lg:hidden fixed bottom-0 right-0 left-0 bg-gray-100 p-3 grid grid-cols-5 ">
            {bottomBarLinks.map(bottomBarItem =>{
                const is_active = pathName === bottomBarItem.href

                return (<Link   href={bottomBarItem.href}
                        key={bottomBarItem.name}
                        className={`flex flex-col items-center relative ${is_active ? "text-text-header ": ""}`}>
                    {bottomBarItem.icon}
                    <span className="text-xs ">{bottomBarItem.name}</span>
                    <div className={`absolute bottom-0 p-8 rounded-full bg-gray-100 -z-1 ${is_active ? "block" : "hidden"}`} />
                </Link>)
})}
        </div>
    )
}