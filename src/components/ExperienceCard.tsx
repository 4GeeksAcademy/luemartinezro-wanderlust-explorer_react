"use client";

import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/src/types";
import { useFavorites } from "@/src/context/FavoritesContext";

const categoryColors: Record<string, string> = {
  Adventure: "bg-orange-100 text-orange-800",
  Culture: "bg-blue-100 text-blue-800",
  Food: "bg-red-100 text-red-800",
  Wellness: "bg-green-100 text-green-800",
  Nature: "bg-emerald-100 text-emerald-800",
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(experience.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image */}
      <Link
        href={`/experiences/${experience.id}`}
        className="aspect-[3/2] overflow-hidden"
      >
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={400}
          loading="lazy"
        />
      </Link>

      {/* Category badge */}
      <span
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
          categoryColors[experience.category] || "bg-zinc-100 text-zinc-800"
        }`}
      >
        {experience.category}
      </span>

      {/* Favorite button */}
      <button
        onClick={() => toggleFavorite(experience.id)}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          className={`h-5 w-5 transition-colors ${
            favorited
              ? "fill-rose-500 text-rose-500"
              : "fill-none text-zinc-600"
          }`}
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">{experience.destination}</span>
          <span className="ml-auto flex items-center gap-1 text-sm font-medium text-amber-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {experience.rating}
          </span>
        </div>

        <Link href={`/experiences/${experience.id}`}>
          <h3 className="text-lg font-semibold leading-tight text-zinc-900 transition-colors group-hover:text-rose-600">
            {experience.title}
          </h3>
        </Link>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600">
          {experience.description}
        </p>

        <div className="mt-auto flex items-center pt-2">
          <span className="text-lg font-bold text-zinc-900">
            ${experience.price}
          </span>
          <span className="ml-1 text-sm text-zinc-500">/ person</span>
        </div>
      </div>
    </div>
  );
}