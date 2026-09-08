"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { experiences } from "@/src/data/experiences";
import { useFavorites } from "@/src/context/FavoritesContext";
import Image from "next/image";
import Link from "next/link";

const categoryGradients: Record<string, string> = {
  Adventure: "from-orange-500 to-red-500",
  Culture: "from-blue-500 to-indigo-500",
  Food: "from-red-500 to-rose-500",
  Wellness: "from-green-500 to-emerald-500",
  Nature: "from-emerald-500 to-teal-500",
};

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = useMemo(
    () => experiences.find((e) => e.id === Number(params.id)),
    [params.id]
  );

  // Update document title
  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} — Wanderlust Explorer`;
    } else {
      document.title = "Experience Not Found — Wanderlust Explorer";
    }
    return () => {
      document.title = "Wanderlust Explorer";
    };
  }, [experience]);

  if (!experience) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-6xl">🔍</p>
        <h1 className="mt-6 text-3xl font-bold text-zinc-900">
          Experience not found
        </h1>
        <p className="mt-4 text-zinc-600">
          The experience you&apos;re looking for doesn&apos;t exist or may have been
          removed.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
        >
          ← Back to Explorer
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(experience.id);

  return (
    <article>
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden sm:h-[50vh]">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover"
          width={1200}
          height={600}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white sm:left-6 sm:top-6"
          aria-label="Go back"
        >
          <svg
            className="h-5 w-5 text-zinc-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        {/* Favorite button */}
        <button
          onClick={() => toggleFavorite(experience.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white sm:right-6 sm:top-6"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className={`h-6 w-6 ${
              favorited ? "fill-rose-500 text-rose-500" : "fill-none text-zinc-700"
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

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <span
            className={`inline-block rounded-full bg-gradient-to-r ${categoryGradients[experience.category] || "from-zinc-500 to-zinc-700"} px-4 py-1.5 text-xs font-semibold text-white shadow-sm`}
          >
            {experience.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {experience.title}
          </h1>
          <p className="mt-2 text-lg text-white/80">{experience.destination}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-zinc-900">
              About this experience
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {experience.description}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-500">Category</p>
                <p className="mt-1 font-semibold text-zinc-900">
                  {experience.category}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-500">Destination</p>
                <p className="mt-1 font-semibold text-zinc-900">
                  {experience.destination}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-500">Rating</p>
                <p className="mt-1 flex items-center gap-1 font-semibold text-zinc-900">
                  <svg
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {experience.rating} / 5.0
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm text-zinc-500">Price</p>
                <p className="mt-1 font-semibold text-zinc-900">
                  ${experience.price} / person
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-zinc-900">
                ${experience.price}
              </p>
              <p className="text-sm text-zinc-500">per person</p>

              <button className="mt-6 w-full rounded-full bg-rose-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700">
                Book Now
              </button>

              <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="flex items-center gap-1 text-sm text-zinc-600">
                  <svg
                    className={`h-5 w-5 ${
                      favorited ? "fill-rose-500 text-rose-500" : "text-zinc-400"
                    }`}
                    fill="none"
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
                  {favorited ? "Saved to favorites" : "Add to favorites"}
                </span>
                <button
                  onClick={() => toggleFavorite(experience.id)}
                  className="text-sm font-medium text-rose-600 hover:text-rose-700"
                >
                  {favorited ? "Remove" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}