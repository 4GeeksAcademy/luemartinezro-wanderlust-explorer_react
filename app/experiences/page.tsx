"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { experiences } from "@/src/data/experiences";
import { useFilters } from "@/src/hooks/useFilters";
import SearchBar from "@/src/components/SearchBar";
import FilterBar from "@/src/components/FilterBar";
import ExperienceCard from "@/src/components/ExperienceCard";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const filtered = useFilters({ experiences, search, category, destination });

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  return (
    <>
      {/* Search & Filters */}
      <div className="mb-8 space-y-3">
        <SearchBar
          value={search}
          onChange={(v) => updateParam("search", v)}
        />
        <FilterBar
          category={category}
          destination={destination}
          onCategoryChange={(v) => updateParam("category", v)}
          onDestinationChange={(v) => updateParam("destination", v)}
        />
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-zinc-500">
        {filtered.length === experiences.length
          ? `Showing all ${experiences.length} experiences`
          : `Showing ${filtered.length} of ${experiences.length} experiences`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 py-24">
          <svg
            className="mb-4 h-12 w-12 text-zinc-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg font-medium text-zinc-900">
            No se encontraron resultados
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </>
  );
}

export default function ExperiencesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Explorer
        </h1>
        <p className="mt-2 text-zinc-600">
          Discover 100 unique experiences around the world
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-zinc-500">Loading...</div>}>
        <ExperiencesContent />
      </Suspense>
    </div>
  );
}