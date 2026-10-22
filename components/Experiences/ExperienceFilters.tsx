'use client';

import { 
    Clock2, 
    Globe, 
    MapPinIcon, 
    SlidersHorizontal,
    LayoutDashboard,
    LayoutGrid,
    Landmark,
    Trees,
    Utensils,
    Mountain,
    Flower2,
    PawPrint,
    Palette,
    HandHeart,
    LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { Select, SelectContent, SelectValue,SelectTrigger, SelectItem } from "../ui/select";
import { useSearchContext } from "./SearchContext";

type ExperienceFilterProps = {
    className?: string;
}

type ExperienceCategory = {
  id: string;
  label: string;
  count: number;
  Icon: LucideIcon;
};


export const experienceCategories: ExperienceCategory[] = [
  {
    id: "all",
    label: "All Experiences",
    count: 106,
    Icon: LayoutGrid,
  },
  {
    id: "cultural-heritage",
    label: "Cultural & Heritage",
    count: 28,
    Icon: Landmark,
  },
  {
    id: "nature-outdoor",
    label: "Nature & Outdoor",
    count: 18,
    Icon: Trees,
  },
  {
    id: "food-drink",
    label: "Food & Drink",
    count: 16,
    Icon: Utensils,
  },
  {
    id: "adventure",
    label: "Adventure",
    count: 16,
    Icon: Mountain,
  },
  {
    id: "wellness-relaxation",
    label: "Wellness & Relaxation",
    count: 10,
    Icon: Flower2,
  },
  {
    id: "wildlife-safari",
    label: "Wildlife & Safari",
    count: 7,
    Icon: PawPrint,
  },
  {
    id: "arts-crafts",
    label: "Arts & Crafts",
    count: 6,
    Icon: Palette,
  },
  {
    id: "community-volunteering",
    label: "Community & Volunteering",
    count: 5,
    Icon: HandHeart,
  },
];




export default function ExperienceFilter( {className}: ExperienceFilterProps){
    const {selected, setSelected, price, setPrice, language, setLanguage} = useSearchContext()

    return (
        <Accordion multiple defaultValue={["category","location","pricing",,"language"]} className={`${className}`}>
            <AccordionItem value={"category"}>
                <AccordionTrigger className="font-semibold flex gap-2  ">
                    <LayoutDashboard className="w-4 h-auto "/>Experience Categories
                </AccordionTrigger>

                <AccordionContent className={` overflow-auto min-[1000px]:h-60 h-auto md:scrollbar-hide p-2 bg-gray-100 `}>
                    <ToggleGroup 
                        
    
                        orientation="vertical"
                        value={[selected]}
                        onValueChange={(value) => {
                            if (value) setSelected(value[0]);
                        }}
                        className="flex h-auto w-full flex-col items-stretch gap-1 max-[1000px]:grid max-[1000px]:grid-cols-2"
                        aria-label="Experience categories">
                        {
                            experienceCategories.map(
                                ({id,label,count,Icon})=>(
                                    <ToggleGroupItem
                                        key={id}
                                        value={id}
                                        data-state={selected === id ? "on": ""}
                                        aria-label={label}
                                        className="h-10 w-full justify-start gap-2 rounded-md border border-transparent 
                                        px-3 bg-white data-[state=on]:bg-orange-100
                                        "
                                        >
                                        <Icon className="size-4  shrink-0" />

                                        <span className="flex-1 text-left text-sm max-[430px]:text-xs">
                                            {label}
                                        </span>

                                        <span data-state={selected === id ? "on": ""}
                                              className="text-xs text-muted-foreground data-[state=on]:text-text-header">
                                            {count}
                                        </span>

                                    </ToggleGroupItem>
                                ))
                        }
                    </ToggleGroup>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value={"pricing"}>
                <AccordionTrigger className="font-semibold flex gap-2">
                    <SlidersHorizontal className="w-4 h-auto"/> Pricing Range
                </AccordionTrigger>

                <AccordionContent className='py-5 px-2 flex flex-col gap-3'>
                    <Slider 
                        aria-label="price"
                        value={price}
                        defaultValue={price}
                        onValueChange={(value) => setPrice(value as unknown as number[])}
                        min={0}
                        max={50000}
                        step={1000}
                        className={`cursor-pointer **:data-[slot=slider-range]:bg-orange-400 
                                    **:data-[slot=slider-thumb]:size-5
                                    **:data-[slot=slider-thumb]:bg-orange-400
                                    **:data-[slot=slider-track]:bg-orange-200 `}

                    />
                    <div className="text-xs opacity-70">
                        {`From ETB ${price[0].toLocaleString("en-US")} to ETB ${price[1].toLocaleString("en-US")}`}
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value={"location"}>
                <AccordionTrigger className='font-semibold flex gap-2'>
                    <MapPinIcon className="w-4 h-auto" /><span>Location</span>
                </AccordionTrigger>
                <AccordionContent>Ethiopia</AccordionContent>
            </AccordionItem>

            <AccordionItem value={"duration"}>
                <AccordionTrigger className="font-semibold flex gap-2">
                    <Clock2 className="w-4 h-auto" /><span>Duration</span>
                </AccordionTrigger>
                <AccordionContent>10min</AccordionContent>
            </AccordionItem>

            <AccordionItem value={"language"}>
                <AccordionTrigger className="font-semibold flex gap-2">
                    <Globe className="w-4 h-auto" /> <span>Language</span>
                </AccordionTrigger>
                <AccordionContent>
                     <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem className={"text-text-main cursor-pointer"} value="english">English</SelectItem>
                            <SelectItem className={"text-text-main cursor-pointer"} value="amharic">አማርኛ (Amharic)</SelectItem>
                        </SelectContent>
                    </Select>
                </AccordionContent>
            </AccordionItem>



        </Accordion>
    )
}