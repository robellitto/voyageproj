
import { Skeleton } from "@/components/ui/skeleton";

function ExperienceCardSkeleton() {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border bg-white">
      {/* Image */}
      <Skeleton className="aspect-[5/3] w-full rounded-none" />

      {/* Details */}
      <div className="space-y-2 p-3">
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-3 w-3/5" />

        <div className="flex items-center gap-2">
          <Skeleton className="size-3 rounded-full" />
          <Skeleton className="h-3 w-2/5" />
        </div>

        <Skeleton className="h-4 w-3/5" />
      </div>
    </div>
  );
}

function ExperienceSectionSkeleton({
  cards = 5,
}: {
  cards?: number;
}) {
  return (
    <section className="space-y-3">
      {/* Section heading */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Skeleton className="size-5 shrink-0 rounded-md" />
          <Skeleton className="h-5 w-36 max-w-full sm:w-48" />
        </div>

        <Skeleton className="h-4 w-14 shrink-0" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: cards }, (_, index) => (
          <ExperienceCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

function FilterSectionSkeleton() {
  return (
    <div className="space-y-3 border-b py-4 last:border-b-0">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="size-4 rounded-sm" />
      </div>

      <Skeleton className="h-9 w-full rounded-lg" />
    </div>
  );
}

function FilterSidebarSkeleton() {
  return (
    <aside className="hidden w-52 shrink-0 self-start rounded-xl border bg-white p-3 xl:block 2xl:w-56">
      <div className="flex items-center justify-between pb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>

      <div className="space-y-4 border-b pb-4">
        <Skeleton className="h-4 w-36" />

        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="flex items-center gap-3">
            <Skeleton className="size-4 shrink-0 rounded-sm" />
            <Skeleton className="h-3.5 flex-1" />
            <Skeleton className="h-3 w-5" />
          </div>
        ))}
      </div>

      <FilterSectionSkeleton />
      <FilterSectionSkeleton />
      <FilterSectionSkeleton />
      <FilterSectionSkeleton />

      <Skeleton className="mt-4 h-10 w-full rounded-lg" />
    </aside>
  );
}

function CategoryNavigationSkeleton() {
  return (
    <div className="flex gap-3 overflow-hidden pb-1">
      {Array.from({ length: 6 }, (_, index) => (
        <Skeleton
          key={index}
          className="h-10 w-28 shrink-0 rounded-full"
        />
      ))}
    </div>
  );
}

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-[1600px] px-3 py-5 sm:px-5 lg:py-6">
      {/* Page heading */}
      <div className="mb-5 space-y-3">
        <Skeleton className="h-8 w-60 max-w-full sm:h-10 sm:w-80" />

        <Skeleton className="hidden h-4 w-80 max-w-full sm:block" />
      </div>

      {/* Search bar */}
      <div className="mb-5 flex gap-2">
        <Skeleton className="h-12 min-w-0 flex-1 rounded-xl sm:h-14" />
        <Skeleton className="hidden h-12 w-32 rounded-xl sm:block sm:h-14" />
      </div>

      {/* Mobile filter controls */}
      <div className="mb-4 flex gap-2 overflow-hidden xl:hidden">
        <Skeleton className="h-10 w-24 shrink-0 rounded-full" />
        <Skeleton className="h-10 w-24 shrink-0 rounded-full" />
        <Skeleton className="h-10 w-24 shrink-0 rounded-full" />
      </div>

      <div className="flex items-start gap-5">
        {/* Desktop filters */}
        <FilterSidebarSkeleton />

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-7">
          <CategoryNavigationSkeleton />

          <ExperienceSectionSkeleton />
          <ExperienceSectionSkeleton />
          <ExperienceSectionSkeleton />
          <ExperienceSectionSkeleton />
        </div>
      </div>
    </main>
  );
}
