'use client';

import { MapPinIcon, Search } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { DateRangeDrawer } from "../MobileDatePicker";
import type { DateRange } from "react-day-picker";
import {useEffect, useState} from "react";
import NumberOfGuestAndRoomPicker from "../GuestAndRoom";
import { SearchBar2 } from "./SearchBar";
import { Destination, useSearchContext } from "./SearchContext";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";


export default function ExperienceSearch(){
    const router = useRouter();
    
    const { search,setSearch,
            dateRange,setDateRange,
            guest,setGuest,
            room,setRoom,
            appliedDateRange,setAppliedDateRange} = useSearchContext()
    
    const [fillSearchError,setFillSearchError] = useState<boolean>(false)
    const [fillDateError,setFillDateError] = useState<boolean>(false)

    useEffect(()=>{
      return ()=>{setFillDateError(false); setFillSearchError(false)}
    },[])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!search || !appliedDateRange){
        setFillSearchError(!search)
        setFillDateError(!appliedDateRange)
        return
      } else{
        setFillSearchError(false); setFillDateError(false)
      }

    const params = new URLSearchParams(window.location.search);
    params.forEach((_,key) => {params.delete(key)})

    search.trim() ? params.set("place",search.trim()) : params.delete("place")
    appliedDateRange ? params.set("from",appliedDateRange.from?.toDateString() as string) : params.delete("from")
    appliedDateRange ? params.set("to",appliedDateRange.to?.toDateString() as string) : params.delete("to")
    room ? params.set("room",String(room as number)) : params.delete("room")
    guest ? params.set("guest",String(guest as number)) : params.delete("guest")

    
    

    router.push(`?${params.toString()}`);
  }


    return (
        <form className={`flex self-center shadow-outline w-full min-w-0 pl-2 p-2
                        sm:justify-normal gap-3 rounded-xl max-[960px]:flex-col max-[960px]:w-[90%]`}
                method="GET"
                onSubmit={handleSubmit}
            >
            
            <SearchBar2 className={`rounded-xl ${fillSearchError && !search ? `border-2 border-red-500 ` : "border-none"} shadow-outline`} />
            
            <DateRangeDrawer selected={dateRange} appliedDate={appliedDateRange} onSelect={setDateRange}  onApply={() => setAppliedDateRange(dateRange)}
                             className={` flex-1 max-sm:shadow-none shadow-outline rounded-xl text-text-main max-[960px]:py-3 shadow-outline
                                
                                ${fillDateError && !appliedDateRange ? `border-2 border-red-500 ` : "border-none"}`}/>
            
            <NumberOfGuestAndRoomPicker room={room} onRoomChange={setRoom} guest={guest} onGuestChange={setGuest} 
                                        className=" flex-1 shadow-outline rounded-xl max-[960px]:py-2"/>

            <button className={`flex gap-1  bg-button-light text-white items-center justify-center self-stretch rounded-full 
                                max-xss:py-3 sm:rounded-xl  max-[730px]:px-5 px-10 max-[960px]:py-2`}
                                type="submit"
                                > 
                <Search className="w-3.5 h-auto sm:w-4.5" /> <span className="hidden sm:block text-sm">Search</span>
                
            </button>
        </form>
    )
}