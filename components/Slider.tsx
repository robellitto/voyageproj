"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export function PopularDestinationsCardSlider() {
  return (
    <section className="min-h-screen bg-background py-20 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden font-sans">
    
      <div className="w-full max-w-[1400px] mx-auto relative group">
        <Carousel opts={{}} className="w-full" eid="e7">
          
          <CarouselContent className="-ml-4 md:-ml-8 items-center h-[500px] md:h-[600px]">
          
            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-[60%] lg:basis-[50%] opacity-60 hover:opacity-100 transition-opacity duration-500 scale-90">
          
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden relative h-[400px] md:h-[500px] w-full group/card cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1522881451475-7b5515918664?w=800&q=80"
                  alt="Simien Mountains"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 self-start text-sm shadow-sm">
                    <Icon icon="solar:map-point-bold" className="size-4" />
                    Simien Mountains
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/80 font-semibold tracking-widest text-xs uppercase">
                      Destination
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl text-white">
                      Simien Mountains
                    </h3>
                  </div>
                </div>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-4 md:pl-8 basis-[90%] md:basis-[70%] lg:basis-[55%] z-10">
              <Card className="border-0 shadow-2xl shadow-primary/20 rounded-[2.5rem] overflow-hidden relative h-[450px] md:h-[550px] w-full group/card">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
                  alt="Lalibela"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/95 via-[#0F2E2A]/40 to-black/10" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  <div className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full px-5 py-2.5 inline-flex items-center gap-2 self-start text-sm font-medium shadow-sm">
                    <Icon icon="solar:map-point-bold" className="size-4" />
                    Lalibela
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-xl">
                      <p className="text-white/80 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
                        Destination
                      </p>
                      <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                        Lalibela
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none max-w-md">
                        Explore the legendary rock-hewn churches, a UNESCO World Heritage Site.
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      className="rounded-full bg-white text-foreground hover:bg-white/90 h-12 md:h-14 px-6 md:px-8 shrink-0 shadow-xl font-semibold text-base"
                    >
                      Explore
                      <Icon icon="solar:arrow-right-linear" className="size-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-[60%] lg:basis-[50%] opacity-60 hover:opacity-100 transition-opacity duration-500 scale-90">
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden relative h-[400px] md:h-[500px] w-full group/card cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80"
                  alt="Danakil Depression"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 self-start text-sm shadow-sm">
                    <Icon icon="solar:map-point-bold" className="size-4" />
                    Danakil Depression
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/80 font-semibold tracking-widest text-xs uppercase">
                      Destination
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl text-white">
                      Danakil Depression
                    </h3>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-[60%] lg:basis-[50%] opacity-60 hover:opacity-100 transition-opacity duration-500 scale-90">
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden relative h-[400px] md:h-[500px] w-full group/card cursor-pointer">
                <img
                  src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/tour-operators/landscape/4.webp"
                  alt="Omo Valley"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 self-start text-sm shadow-sm">
                    <Icon icon="solar:map-point-bold" className="size-4" />
                    Omo Valley
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/80 font-semibold tracking-widest text-xs uppercase">
                      Destination
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl text-white">Omo Valley</h3>
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="pl-4 md:pl-8 basis-[85%] md:basis-[60%] lg:basis-[50%] opacity-60 hover:opacity-100 transition-opacity duration-500 scale-90">
              <Card className="border-0 shadow-lg rounded-3xl overflow-hidden relative h-[400px] md:h-[500px] w-full group/card cursor-pointer">
                <img
                  src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/generation-assets/photos/resorts/landscape/3.webp"
                  alt="Lake Tana"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 self-start text-sm shadow-sm">
                    <Icon icon="solar:map-point-bold" className="size-4" />
                    Lake Tana
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/80 font-semibold tracking-widest text-xs uppercase">
                      Destination
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl text-white">Lake Tana</h3>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8 lg:left-16 size-12 md:size-14 bg-white/90 hover:bg-white border-0 shadow-xl text-foreground backdrop-blur-sm" />
          <CarouselNext className="right-4 md:right-8 lg:right-16 size-12 md:size-14 bg-white/90 hover:bg-white border-0 shadow-xl text-foreground backdrop-blur-sm" />
        
        </Carousel>
      </div>
    </section>
  );
}
