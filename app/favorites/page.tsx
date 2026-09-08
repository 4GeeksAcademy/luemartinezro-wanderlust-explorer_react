"use client";

import { useFavorites } from "@/src/context/FavoritesContext";
import { experiences } from "@/src/data/experiences";
import ExperienceCard from "@/src/components/ExperienceCard";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteExperiences = experiences.filter((e) =>
    favorites.includes(e.id)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          My Favorites
        </h1>
        <p className="mt-2 text-zinc-600">
          {favoriteExperiences.length > 0
            ? `You have ${favoriteExperiences.length} saved ${
                favoriteExperiences.length === 1 ? "experience" : "experiences"
              }`
            : "Your saved experiences will appear here"}
        </p>
      </div>

      {favoriteExperiences.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteExperiences.map((exp) => (
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="text-lg font-medium text-zinc-900">
            No tienes favoritos aún
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Start exploring and save experiences you love
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
          >
            Explore Experiences
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}