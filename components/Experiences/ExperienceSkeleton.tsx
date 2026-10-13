
import { Skeleton } from "@/components/ui/skeleton";

function ExperienceCardSkeleton() {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border bg-white">
      {/* Experience image */}
      <Skeleton className="aspect-[5/3] w-full rounded-none" />

      {/* Experience details */}
      <div className="space-y-2 p-2.5">
        <Skeleton className="h-3.5 w-4/5" />

        <Skeleton className="h-3 w-2/5" />

        <Skeleton className="h-3 w-3/5" />

        <Skeleton className="mt-2 h-4 w-3/5" />
      </div>
    </div>
  );
}

function ExperienceSectionSkeleton() {
  return (
    <section className="space-y-3">
      {/* Section heading and See all */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="size-5 rounded-md" />
          <Skeleton className="h-5 w-44" />
        </div>

        <Skeleton className="h-4 w-14" />
      </div>

      {/* Experience cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 5 }, (_, i) => (
          <ExperienceCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

function FilterSidebarSkeleton() {
  return (
    <aside className="hidden w-56 shrink-0 self-start rounded-xl border bg-white p-3 lg:block">
      {/* Filter header */}
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-36" />

        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-4 rounded-sm" />
            <Skeleton className="h-3.5 flex-1" />
            <Skeleton className="h-3 w-5" />
          </div>
        ))}
      </div>

      {/* Other filters */}
      {["Location", "Price Range", "Duration", "Language"].map(
        (filter) => (
          <div key={filter} className="mt-6 space-y-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-9 w-full rounded-lg" />
          </div>
        )
      )}

      <Skeleton className="mt-6 h-10 w-full rounded-lg" />
    </aside>
  );
}

export default function ExperiencesListingSkeleton() {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] gap-5 p-3 sm:p-5">
      {/* Desktop sidebar */}
      <FilterSidebarSkeleton />

      {/* Main listing */}
      <div className="min-w-0 flex-1 space-y-7">
        {/* Category navigation */}
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-28 shrink-0 rounded-full"
            />
          ))}
        </div>

        {/* Listing sections */}
        <ExperienceSectionSkeleton />
        <ExperienceSectionSkeleton />
        <ExperienceSectionSkeleton />
        <ExperienceSectionSkeleton />
      </div>
    </main>
  );
}
