"use client";

import { Category } from "@/src/types";

const categories: Category[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

interface FilterBarProps {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Category filter */}
      <div className="relative flex-1">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-zinc-300 bg-white px-4 py-3 pr-10 text-sm text-zinc-700 transition-colors focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Destination filter */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Filter by destination..."
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
        />
      </div>
    </div>
  );
}