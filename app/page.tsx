import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:py-32">
        <span className="mb-6 inline-block rounded-full bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-700">
          Discover the world with Wanderlust
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Explore Unique{" "}
          <span className="text-rose-600">Travel Experiences</span> Around the
          World
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          From street food tours in Bangkok to sailing the Adriatic coast,
          discover hand-picked experiences that will make your next trip
          unforgettable.
        </p>
        <Link
          href="/experiences"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-rose-700 hover:shadow-md active:bg-rose-800"
        >
          Start Exploring
          <svg
            className="h-5 w-5"
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

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-zinc-200 pt-12">
          <div>
            <p className="text-3xl font-bold text-zinc-900">100+</p>
            <p className="mt-1 text-sm text-zinc-500">Experiences</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-zinc-900">50+</p>
            <p className="mt-1 text-sm text-zinc-500">Destinations</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-zinc-900">5</p>
            <p className="mt-1 text-sm text-zinc-500">Categories</p>
          </div>
        </div>
      </section>
    </div>
  );
}
