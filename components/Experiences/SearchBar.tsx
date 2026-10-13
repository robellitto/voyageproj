'use client';

import { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger,  } from "../ui/popover";
import { MapPinIcon } from "lucide-react";
import Fuse from "fuse.js";
import { useSearchContext } from "./SearchContext";

const places: string[] = [
  "Addis Ababa",
  "Bahir Dar",
  "Gondar",
  "Lalibela",
  "Axum",
  "Mekelle",
  "Dire Dawa",
  "Harar",
  "Hawassa",
  "Arba Minch",
  "Jimma",
  "Adama",
  "Bishoftu",
  "Debre Markos",
  "Debre Birhan",
  "Shashamane",
  "Jijiga",
  "Gambella",
  "Dessie",
  "Wolaita Sodo",
];

const fuse = new Fuse(places, {
  threshold: 0.3,
});



export function SearchBar2({}){
    const [open,setOpen] = useState<boolean>(false)
    const {search,setSearch} = useSearchContext()
    const [selectedPlace, setSelectedPlace] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const results = search.trim()
    ? fuse.search(search.trim()).map((result) => result.item)
    : [];


    useEffect(() => {
        function handleOutsideClick(event: PointerEvent) {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            setOpen(false);
        }
        }

        document.addEventListener("pointerdown", handleOutsideClick);

        return () => {
        document.removeEventListener("pointerdown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={containerRef} className="flex-2 relative">
            <div className="text-text-main flex items-center gap-2  max-sm:shadow-none shadow-outline p-3 sm:rounded-xl ">
                <MapPinIcon className="w-3.5 h-auto shrink-0"/>
                <input className={`outline-0 border-0 placeholder-text-main placeholder:font-light text-sm flex-1 
                                        w-full`} 
                        onFocus={()=>setOpen(true)}
                        onChange={(e)=>{setSearch(e.target.value); 
                                        setOpen(true)
                                        setSelectedPlace("")
                                    }}
                        value={search}
                        
                        type="text" 
                        placeholder="Where to?" 
                    />
            </div>

            <div className={`absolute z-100 top-full w-full flex flex-col rounded-xl border bg-white shadow-lg 
                             transition-all duration-300 ease-in-out mt-2 p-3
                             ${open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
                                }`
                            }
                    >
                
                {search ? 
                    results.length 
                        ? results.map((item,index: number)=>
                            <div key={index} className="font-bold p-2 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
                                onClick={()=>{setSearch(item); setSelectedPlace(item); setOpen(false)}}>
                                {item}
                            </div>) 
                        : <div>No Result</div> 
                    : <div>Search something</div>
                }
                

            </div>
        </div>
            
        
    )
}