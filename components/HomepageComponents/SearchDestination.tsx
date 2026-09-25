'use client';

import {
  MapPin,
  CalendarDays,
  UserRound,
  ChevronDown,
  Search,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type DateRange } from "react-day-picker";
import { DatePickerWithRange } from "../CalendarPicker";
import { useState } from "react";

export default function SearchDestination(){
  const [hotelDate,setHotelDate] = useState<DateRange | null>()
  const [experienceDate,setExperienceDate] = useState<DateRange | null>()

  
    return (
        <Tabs defaultValue="experiences" className="lg:w-220 md:w-180 sm:w-150 w-100 p-4 shadow-black shadow-2xl rounded-xl bg-white">
              <TabsList className="w-full sm:rounded-xl bg-gray-200 sm:p-4 mb-4  rounded-none sm:gap-1 gap-0">
                
                <TabsTrigger
                  value="experiences"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 sm:px-6 font-medium"
                >
                  <Icon icon="solar:hiking-bold" className="size-4 mr-2" /> Experiences
                </TabsTrigger>

                <TabsTrigger
                  value="hotels"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:bed-bold" className="size-4 mr-2" /> Hotels
                </TabsTrigger>
{/*                 
                <TabsTrigger
                  value="transport"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:bus-bold" className="size-4 mr-2" /> Transport
                </TabsTrigger> */}

                <TabsTrigger
                  value="events"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:ticket-bold" className="size-4 mr-2" /> Events
                </TabsTrigger>

              </TabsList>


              <TabsContent value="hotels" className="mt-0">
                
                <div className="flex flex-col lg:flex-row items-stretch gap-3">
                  
                  <div className="flex-2 w-full relative">
                    
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:map-point-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Where are you going?"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                    />
                  </div>

                  <DatePickerWithRange className="flex-2" dateChanger={setHotelDate}/>

                  <div className="flex-1 w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:users-group-rounded-bold" className="size-5" />
                    </div>

                    <Input
                      placeholder="2 Guests, 1 Room"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                      readOnly
                    />

                  </div>
                  <Button className="w-full md:w-auto h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 text-base font-semibold">
                    <Icon icon="solar:magnifier-bold" className="size-5 mr-2" />
                    Search
                  </Button>
                </div>

              </TabsContent>

              <TabsContent value="experiences" className="mt-0">

                <div className="flex flex-col lg:flex-row items-stretch gap-3">
                  <div className="flex-2 w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:map-point-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Destination or activity (e.g., Lalibela, Coffee Ceremony)"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                    />
                  </div>
                  
                    
                   
                  <DatePickerWithRange dateChanger={setExperienceDate} />

                  
                  <Button className="w-full md:w-auto h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 text-base font-semibold">
                    <Icon icon="solar:magnifier-bold" className="size-5 mr-2" />
                    Search
                  </Button>
                </div>

              </TabsContent>
            </Tabs>

    )
}