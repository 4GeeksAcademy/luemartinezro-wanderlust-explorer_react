import { useMemo } from "react";
import { Experience } from "@/src/types";

interface UseFiltersParams {
  experiences: Experience[];
  search: string;
  category: string;
  destination: string;
}

export function useFilters({
  experiences,
  search,
  category,
  destination,
}: UseFiltersParams): Experience[] {
  return useMemo(() => {
    let filtered = experiences;

    // Filter by search term (case-insensitive regex on title)
    if (search.trim()) {
      const regex = new RegExp(search.trim(), "i");
      filtered = filtered.filter((exp) => regex.test(exp.title));
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((exp) => exp.category === category);
    }

    // Filter by destination (case-insensitive regex on destination string)
    if (destination) {
      const regex = new RegExp(destination.trim(), "i");
      filtered = filtered.filter((exp) => regex.test(exp.destination));
    }

    return filtered;
  }, [experiences, search, category, destination]);
}