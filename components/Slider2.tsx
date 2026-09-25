import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export function PopularDestinationsCardSlider() {
  return (
    <section className="min-h-screen bg-background py-20 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      <div className="w-full max-w-350 mx-auto relative flex items-center justify-center gap-0 h-[600px] md:h-[680px]">
        <div className="hidden md:block absolute left-0 w-[28%] h-[420px] md:h-[480px] opacity-50 scale-90 origin-right z-0 rounded-3xl overflow-hidden pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1522881451475-7b5515918664?w=800&q=80"
            alt="Simien Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
          <div className="absolute top-6 left-6">
            <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm shadow-sm">
              <Icon icon="solar:map-point-bold" className="size-4" />
              Simien Mountains
            </div>
          </div>
        </div>
        <button className="absolute left-[26%] md:left-[27%] z-30 size-12 md:size-14 rounded-full bg-white/90 hover:bg-white border-0 shadow-xl text-foreground backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
          <Icon icon="solar:arrow-left-linear" className="size-5" />
        </button>
        <div className="relative z-20 w-[90%] md:w-[46%] h-[460px] md:h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
            alt="Lalibela"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
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
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
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
        </div>
        <button className="absolute right-[26%] md:right-[27%] z-30 size-12 md:size-14 rounded-full bg-white/90 hover:bg-white border-0 shadow-xl text-foreground backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
          <Icon icon="solar:arrow-right-linear" className="size-5" />
        </button>
        <div className="hidden md:block absolute right-0 w-[28%] h-[420px] md:h-[480px] opacity-50 scale-90 origin-left z-0 rounded-3xl overflow-hidden pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80"
            alt="Danakil Depression"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E2A]/90 via-[#0F2E2A]/20 to-transparent" />
          <div className="absolute top-6 left-6">
            <div className="bg-black/30 backdrop-blur-md text-white border border-white/20 rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm shadow-sm">
              <Icon icon="solar:map-point-bold" className="size-4" />
              Danakil Depression
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-8">
        <div className="size-2.5 rounded-full bg-primary" />
        <div className="size-2 rounded-full bg-muted-foreground/30" />
        <div className="size-2 rounded-full bg-muted-foreground/30" />
        <div className="size-2 rounded-full bg-muted-foreground/30" />
        <div className="size-2 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="flex items-center gap-4 mt-16 w-full max-w-4xl px-8">
        <div className="flex-1 h-px bg-border" />
        <p className="text-primary/80 font-semibold tracking-[0.2em] text-xs uppercase whitespace-nowrap">
          Special Experiences
        </p>
        <div className="flex-1 h-px bg-border" />
      </div>
    </section>
  );
}
