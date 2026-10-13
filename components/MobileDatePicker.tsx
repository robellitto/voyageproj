"use client";

import * as React from "react";
import {
  format,
  addMonths,
  startOfMonth,
  startOfDay,
} from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar as CalIcon, X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import useOutsideClick from "@/hooks/useOutsideClick";
import {Card, CardContent} from "@/components/ui/card"


type DateRangeDrawerProps = {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  onApply: () => void;
  className?: string | null;
};

export function DateRangeDrawer({
  selected,
  onSelect,
  onApply,
  className
}: DateRangeDrawerProps) {
  
  const [open, setOpen] = React.useState(false);
  const firstMonth = startOfMonth(new Date());
  const drawerRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick(drawerRef,()=>setOpen(false))


  return (
    <Drawer open={open} onOpenChange={setOpen} showSwipeHandle>
      <DrawerTrigger
        
        render={
          <button className={`${className}   h-12 justify-start border-0 sm:text-sm 
                             bg-white px-4 text-left font-normal hover:bg-white`}
          > 
          <div className="flex gap-2 items-center">
            <CalIcon className="font-bold" />
            
                {selected?.from
                ? selected.to
                  ? `${format(selected.from, "MMM d, yyyy")} – ${format(selected.to, "MMM d, yyyy")}`
                  : format(selected.from, "MMM d, yyyy")
                  : <div className="max-[1010px]:ml-4">Check in — <br className="hidden max-[1010px]:min-[960px]:block"/>Check out</div>}
          </div>
          </button>
        }
      >
        
      </DrawerTrigger>


      <DrawerContent
        className={`${className} flex h-[80dvh] max-h-[90dvh] flex-col gap-0 overflow-hidden rounded-t-[28px] border-0 bg-white p-0 text-neutral-900`}
        ref={drawerRef}
      >
  
        <div className="shrink-0 px-5 pb-4 pt-3">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-xl font-semibold tracking-tight">
              Select dates
            </DrawerTitle>

            <DrawerClose
              render={
                <Button
                  
                  size="icon"
                  aria-label="Close calendar"
                  className="rounded-full" 
                />
              }
            >
              <X className="size-6" />
            </DrawerClose>
          </div>
        </div>

        {/* Scrollable calendar area */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
          <Card className="w-full">
            <CardContent className="p-3 sm:p-4">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="min-w-0 rounded-lg border p-2"
                  >
                    <Calendar
                      mode="range"
                      month={addMonths(firstMonth, index)}
                      selected={selected}
                      onSelect={onSelect}
                      max={20}
                      disabled={{ before: startOfDay(new Date()) }}
                      showOutsideDays={false}
                      hideNavigation
                      className="mx-auto w-full p-1"
                      classNames={{
                        day_button:
                          "data-[selected-single=true]:!bg-orange-500 " +
                          "data-[range-start=true]:!bg-orange-500 " +
                          "data-[range-end=true]:!bg-orange-500 " +
                          "data-[range-middle=true]:!bg-orange-200 " +
                          "data-[selected-single=true]:!text-white " +
                          "data-[range-start=true]:!text-white " +
                          "data-[range-end=true]:!text-white " +
                          "data-[range-middle=true]:!text-orange-950",
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed footer */}
        <div className="flex shrink-0 justify-between border-t bg-white px-5 py-4">
          <Button
            
            onClick={() => onSelect(undefined)}
            disabled={!selected}
            className={"p-3"}
          >
            Clear
          </Button>

          <Button
            className="bg-orange-500 text-white hover:bg-orange-600 p-3"
            onClick={() => {
              onApply();
              setOpen(false);
            }}
            disabled={
              !selected?.from ||
              !selected?.to ||
              selected.from.getTime() === selected.to.getTime()
            }
          >
            Apply
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
    
  );
}