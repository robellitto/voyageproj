'use client';

import { MapPinIcon, Search } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { DateRangeDrawer } from "../MobileDatePicker";
import type { DateRange } from "react-day-picker"
import {useState} from "react";
import NumberOfGuestAndRoomPicker from "../GuestAndRoom";
import { SearchBar2 } from "./SearchBar";


export default function ExperienceSearch(){
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const [guest,setGuest] = useState<string|number|undefined>(1)
    const [room, setRoom] = useState<string|number|undefined>(1)
    const [appliedDateRange, setAppliedDateRange] = useState<DateRange | undefined>();


    return (
        <div className={`flex self-center shadow-outline w-full min-w-0 rounded-full pl-2  max-xss:min-w-0
                        sm:justify-normal gap-3 sm:p-2 sm:rounded-xl max-[960px]:sm:flex-col max-[960px]:sm:w-[90%]`}>
            
            <SearchBar2 />
            
            <DateRangeDrawer selected={dateRange} onSelect={setDateRange}  onApply={() => setAppliedDateRange(dateRange)}
                             className={`max-sm:hidden flex-1 max-sm:shadow-none shadow-outline rounded-xl text-text-main
                                         max-[960px]:py-3`}/>
            
            <NumberOfGuestAndRoomPicker room={room} onRoomChange={setRoom} guest={guest} onGuestChange={setGuest} 
                                        className="max-sm:hidden flex-1 shadow-outline rounded-xl max-[960px]:py-2"/>

            <button className={`flex gap-1  bg-button-light text-white items-center justify-center self-stretch rounded-full 
                                max-xss:py-3 sm:rounded-xl  max-[730px]:px-5 px-10 max-[960px]:py-2`}> 
                <Search className="w-3.5 h-auto sm:w-4.5" /> <span className="hidden sm:block text-sm">Search</span>
            </button>
        </div>
    )
}