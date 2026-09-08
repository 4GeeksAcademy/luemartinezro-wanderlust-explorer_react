"use client";

import { useFavorites } from "@/src/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        {/* Avatar & Name */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 text-3xl font-bold text-white shadow-md">
            LM
          </div>
          <div className="mt-4 text-center sm:mt-0 sm:text-left">
            <h1 className="text-2xl font-bold text-zinc-900">Lea Moreau</h1>
            <p className="text-zinc-500">Product Manager at Wanderlust Labs</p>
            <p className="mt-1 text-sm text-zinc-400">
              San Francisco, CA · Travel enthusiast
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 border-t border-zinc-100 pt-8">
          <h2 className="text-lg font-semibold text-zinc-900">About</h2>
          <p className="mt-2 leading-relaxed text-zinc-600">
            Product Manager passionate about travel technology and creating
            memorable experiences. I believe the best products come from
            understanding real user needs and iterating quickly. When I&apos;m not
            building products, you&apos;ll find me exploring new destinations,
            tasting local cuisines, or planning my next adventure.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center">
            <p className="text-3xl font-bold text-rose-600">
              {favorites.length}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              {favorites.length === 1 ? "Favorite" : "Favorites"}
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center">
            <p className="text-3xl font-bold text-rose-600">100</p>
            <p className="mt-1 text-sm text-zinc-500">Experiences</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center">
            <p className="text-3xl font-bold text-rose-600">5</p>
            <p className="mt-1 text-sm text-zinc-500">Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}