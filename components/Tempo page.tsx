"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export function HeroPageDesign() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905-57b3d8fb-7b1f-4f5e-8c4e-2b8e5f3d4c8f?w=1600&q=80"
            alt="Beautiful Ethiopian Landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-secondary/90 text-secondary-foreground border-none px-4 py-1.5 backdrop-blur-sm"
          >
            <Icon icon="solar:star-fall-bold" className="size-4 mr-2" />
            Discover the true heart of Africa
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6 tracking-tight">
            Your Ethiopian Journey <br className="hidden md:block" /> Starts Here.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-medium">
            Book hotels, authentic cultural tours, local experiences, and transport in one unified
            platform.
          </p>


          <div className="w-full max-w-5xl bg-card rounded-2xl shadow-2xl p-2 md:p-4 mt-4 border border-border/50">
            <Tabs defaultValue="experiences" className="w-full">
              <TabsList className="w-full justify-start rounded-xl bg-muted/50 p-1 mb-4 h-auto flex-wrap gap-1">
                <TabsTrigger
                  value="experiences"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:hiking-bold" className="size-4 mr-2" /> Experiences
                </TabsTrigger>
                <TabsTrigger
                  value="stays"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:bed-bold" className="size-4 mr-2" /> Hotels
                </TabsTrigger>
                
                <TabsTrigger
                  value="transport"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:bus-bold" className="size-4 mr-2" /> Transport
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-6 font-medium"
                >
                  <Icon icon="solar:ticket-bold" className="size-4 mr-2" /> Events
                </TabsTrigger>

              </TabsList>

              <TabsContent value="stays" className="mt-0">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="flex-1 w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:map-point-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Where are you going?"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                    />
                  </div>
                  <div className="flex-1 w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:calendar-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Check in - Check out"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                      readOnly
                    />
                  </div>
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
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="flex-[2] w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:map-point-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Destination or activity (e.g., Lalibela, Coffee Ceremony)"
                      className="w-full pl-12 h-14 rounded-xl border-border bg-background text-base"
                    />
                  </div>
                  <div className="flex-1 w-full relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Icon icon="solar:calendar-bold" className="size-5" />
                    </div>
                    <Input
                      placeholder="Any dates"
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
            </Tabs>

          </div>
          
        </div>
      </section>

      <section className="py-12 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:city-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">City Tours</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:mountains-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                Nature & Trekking
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:cup-hot-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                Cultural Vibes
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:buildings-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                Heritage Sites
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:bus-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">Car Rentals</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon icon="solar:chef-hat-bold" className="size-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">Food & Dining</span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                Trending Destinations
              </h2>
              <p className="text-muted-foreground">
                Most popular choices for travelers from around the world.
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              See all places
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <img
                src="https://images.unsplash.com/photo-1547471080-7fc2caa7fc41?w=800&q=80"
                alt="Lalibela"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">Lalibela</h3>
                <p className="text-white/80 text-sm font-medium flex items-center">
                  <Icon icon="solar:routing-2-bold" className="size-4 mr-1" />
                  12 Tours & Activities
                </p>
              </div>
            </div>
            <div className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <img
                src="https://images.unsplash.com/photo-1497366-5b2e3f5e-4c8e-8b3e-1c6d8f3e4b8e?w=800&q=80"
                alt="Addis Ababa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">Addis Ababa</h3>
                <p className="text-white/80 text-sm font-medium flex items-center">
                  <Icon icon="solar:routing-2-bold" className="size-4 mr-1" />
                  45 Tours & Activities
                </p>
              </div>
            </div>
            <div className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1526374-b86d47d1-6b5f-4b8d-8b3e-9c3e5f6d4b8e?w=1200&q=80"
                alt="Danakil Depression"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <Badge className="mb-2 bg-accent text-accent-foreground border-none">
                  Adventure
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  Danakil Depression
                </h3>
                <p className="text-white/80 text-sm font-medium flex items-center">
                  <Icon icon="solar:routing-2-bold" className="size-4 mr-1" />8 Epic Expeditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                Unforgettable Experiences
              </h2>
              <p className="text-muted-foreground">
                Handpicked activities to immerse yourself in Ethiopian culture.
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon icon="solar:alt-arrow-left-line-duotone" className="size-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon icon="solar:alt-arrow-right-line-duotone" className="size-5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="pt-0 border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512621-7b2e3f5e-4c8e-8b3e-1c6d8f3e4b8e?w=800&q=80"
                  alt="Coffee Ceremony"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-foreground shadow-sm">
                  <Icon icon="solar:star-bold" className="size-3 text-[#F59E0B]" />
                  4.9
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm border-none"
                  >
                    Culture
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-lg line-clamp-2 mb-2 text-foreground group-hover:text-primary transition-colors">
                  Traditional Ethiopian Coffee Ceremony & Roasting
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center">
                  <Icon icon="solar:map-point-outline" className="size-4 mr-1" /> Addis Ababa
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-bold text-lg text-foreground">ETB 1,200</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                  >
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="pt-0 border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877-5c8e8b3e-1c6d-8f3e-4b8e-5b2e3f5e4c8e?w=800&q=80"
                  alt="Simien Mountains"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-foreground shadow-sm">
                  <Icon icon="solar:star-bold" className="size-3 text-[#F59E0B]" />
                  5.0
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm border-none"
                  >
                    Nature
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground border-none">Bestseller</Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-lg line-clamp-2 mb-2 text-foreground group-hover:text-primary transition-colors">
                  3-Day Simien Mountains Trekking Adventure
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center">
                  <Icon icon="solar:map-point-outline" className="size-4 mr-1" /> Gondar
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-bold text-lg text-foreground">ETB 15,000</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
                  >
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="pt-0 border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504674-d7e1a40e-5c5e-4c8e-8b3e-1c6d8f3e4b8e?w=800&q=80"
                  alt="Food Tour"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-foreground shadow-sm">
                  <Icon icon="solar:star-bold" className="size-3 text-[#F59E0B]" />
                  4.8
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground backdrop-blur-sm border-none"
                  >
                    Food
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading font-semibold text-lg line-clamp-2 mb-2 text-foreground group-hover:text-primary transition-colors">
                  Merkato Street Food & Spice Market Tour
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center">
                  <Icon icon="solar:map-point-outline" className="size-4 mr-1" /> Addis Ababa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
