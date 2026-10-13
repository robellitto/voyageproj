'use client';

import { Calendar, ChevronDown, UserRound } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";


type NumberOfGuestAndRoomPickerProps = {
  guest?: string | number | null;
  onGuestChange?: (guestNumber: number) => void;
  room?: string | number |null;
  onRoomChange?: (roomNumber: number) => void;
  className?: string;
};

type GuestAndRoomChoice = {
    label: string;
    value: string | null;
}

const GuestNumberChoice: GuestAndRoomChoice[] = [
  { label: "1 Guest", value: "1" },
  { label: "2 Guests", value: "2" },
  { label: "3 Guests", value: "3" },
  { label: "4 Guests", value: "4" },
  { label: "5 Guests", value: "5" },
]
const RoomNumberChoice: GuestAndRoomChoice[] = [
  { label: "1 Room", value: "1" },
  { label: "2 Rooms", value: "2" },
  { label: "3 Rooms", value: "3" },
  { label: "4 Rooms", value: "4" },
  { label: "5 Rooms", value: "5" },
]
export default function NumberOfGuestAndRoomPicker ({guest,onGuestChange,room, onRoomChange, className}: NumberOfGuestAndRoomPickerProps){
    const [inputGiven,setInputGiven] = useState<boolean>(false)
    const [open,setOpen] = useState<boolean>(false)
    return (
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger render={
                <button className={`${className} flex gap-1 items-center justify-between px-3 text-text-main`} >
                    <div className="flex gap-3">
                        <UserRound className="w-5 h-auto"/> 
                        <span className="flex max-[1045px]:min-[960px]:flex-col gap-1 ">
                            <span className="text-sm">{`${guest} ${Number(guest) > 1 ? "Guests" : "Guest"} -`}</span>  
                            <span className="text-sm self-start">{`${room} ${Number(room) > 1 ? "Rooms" : "Room"}`}</span>
                        </span>
                    </div> 
                    <ChevronDown className="w-5 h-auto justify-self-end"/> 
                </button>
            } />

            <PopoverContent align="start" className="w-(--anchor-width)">
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-2">
                        <label>Guests:</label>
                        <Select items={GuestNumberChoice}
                                value={guest != null ? String(guest) : ''}
                                onValueChange={(value) => {
                                    if (value && value !== 'placeholder') {
                                        onGuestChange?.(Number(value));
                                        guest && room && setInputGiven(true)
                                    }
                                    }}>
                                        
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select number of guest(s)" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                {GuestNumberChoice.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className={'cursor-pointer'}>
                                    {item.label}
                                    </SelectItem>
                                ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <label>Rooms:</label>
                        <Select items={RoomNumberChoice}
                                value={room != null ? String(room) : ''}
                                onValueChange={(value) => {
                                    if (value && value !== 'placeholder') {
                                        onRoomChange?.(Number(value));
                                        guest && room && setInputGiven(true)
                                    }
                                    }}>
                            <SelectTrigger className="w-full ">
                                <SelectValue placeholder="Select number of room(s)" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                {RoomNumberChoice.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className={'cursor-pointer'}>
                                    {item.label}
                                    </SelectItem>
                                ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-between mt-2 ">
                        <button className="py-3 px-5 bg-text-header text-white rounded-[6px]" 
                                onClick={()=>{onGuestChange?.(1);
                                              onRoomChange?.(1)}}>
                            Clear
                        </button>
                        <button className="py-3 px-5 bg-text-main text-white rounded-[6px]" 
                        onClick={()=>setOpen(false)}>Apply</button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )

}