'use client';

import {
  MapPin,
  CalendarDays,
  UserRound,
  ChevronDown,
  Search,
} from "lucide-react";

export default function SearchDestination(){
    return (<span className="bg-white w-fit p-3 flex gap-8 justify-between rounded-2xl">
        <span className="flex items-center gap-4 p-3 ">
            <MapPin size={30}/>

            <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-gray-900">
                Where are you going?
                </span>

                <input
                type="text"
                placeholder="e.g. Addis Ababa, Lalibela, Bahir Dar..."
                className="border-0 bg-transparent p-0 text-sm text-gray-600 outline-none placeholder:text-gray-400 min-w-xs"
                />
            </div>
        </span>

        <span className="flex items-center gap-4 p-4 border-l border-gray-300 cursor-pointer">
            <CalendarDays />

            <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                Check in – Check out
                </span>

                <span className="text-sm text-gray-400">
                Add dates
                </span>
            </div>
        </span>

        <button className="flex items-center gap-4 p-3 border-l border-gray-300">
            <UserRound /> 
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                2 Guests
                </span>

                <span className="text-sm text-gray-400">
                1 Room
                </span>
            </div>

        
            <ChevronDown className="ml-5"/>
        </button>

        <button className="flex bg-orange-400 text-white py-5 px-12 gap-3 rounded-xl items-center"> 
            <Search size={25}  /> <span className="font-semibold text-lg">Search</span> 
        </button>
    
    </span>)
}