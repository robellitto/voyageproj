"use client"

import * as React from "react"
import { format, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type dateProps = {
    className?: string
    dateChanger?: (range: DateRange | undefined) => void
}

export function DatePickerWithRange({className,dateChanger} : dateProps) {
  const [date, setDate] = React.useState<DateRange | undefined>()

  const today = startOfDay(new Date())
   const handleDateChange = (range: DateRange | undefined) => {
    setDate(range)

    // Send the selected dates to the parent
    dateChanger?.(range)
  }

  return (
    <div className={`flex-1 ${className}`}>
    <Popover>
      <PopoverTrigger
        
        render={
          <Button
            variant="outline"
            className={`
              w-full
              h-15
              flex-1
              justify-start
              px-3
             
              font-normal
              whitespace-nowrap
              ${className}
            `}
          >
            <CalendarIcon className="mr-2 shrink-0" />

            <span className="truncate">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                "Pick a date"
              )}
            </span>
          </Button>
        }
      />

      <PopoverContent
        className="w-auto p-0 relative z-1000"
        align="start"
      >
        <Calendar
          mode="range"
          selected={date}
          onSelect={handleDateChange}
          numberOfMonths={2}
          showOutsideDays={false}
          className="sm:w-full"

          // Disable all dates before today
          disabled={{
            before: today,
          }}

          

          classNames={{
            day: `
              relative
              h-7
              sm:h-9
              w-7
              sm:w-9
              p-0
              text-center
              text-sm
              rounded-md
              transition-colors
              select-none
            `,
            months:"flex flex-row gap-2"

            
            
          }}
        />
      </PopoverContent>
    </Popover>
    </div>
  )
}