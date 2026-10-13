'use client';

import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "../ui/drawer";
import { ChevronDown, Menu, SlidersHorizontal, X } from "lucide-react";
import ExperienceFilter from "./ExperienceFilters";
import { useSearchContext } from "./SearchContext";
import React, { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";


export default function FiltersDrawer({className}:{className?:string}){
    const {selected,setSelected,price,setPrice,setLikedCards,likedCards} = useSearchContext()
    const [open,setOpen] = useState<boolean>(false)
    const filterDrawerRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);


    useOutsideClick(filterDrawerRef, ()=>setOpen(false),triggerRef)
    
    return (
        <Drawer showSwipeHandle open={open} onOpenChange={setOpen}>
            <DrawerTrigger render={
                <button className={`flex gap-1 ${className}`} ref={triggerRef}>
                    <Menu />
                </button>
            }/>
            <DrawerContent ref={filterDrawerRef} className={"h-[70dvh] p-2"}>
                <DrawerHeader className="flex flex-row justify-between items-center mb-3">
                    <DrawerTitle className={"flex gap-3 items-center font-bold"}>
                        <SlidersHorizontal />
                        Filter
                    </DrawerTitle>
                    <DrawerClose><X /></DrawerClose>
                </DrawerHeader>
                <ExperienceFilter selected={selected} price={price} setSelected={setSelected} setPrice={setPrice} className="overflow-auto"/>
                
            </DrawerContent>
        </Drawer>
    )
}