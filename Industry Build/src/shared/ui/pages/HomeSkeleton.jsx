import React from "react";

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse bg-white">
      {/* Navbar */}
      <nav className="h-20 border-b border-zinc-200 flex items-center justify-between px-10">
        <div className="h-10 w-36 rounded bg-zinc-200"></div>

        <div className="flex gap-6">
          <div className="h-4 w-16 rounded bg-zinc-200"></div>
          <div className="h-4 w-16 rounded bg-zinc-200"></div>
          <div className="h-4 w-16 rounded bg-zinc-200"></div>
          <div className="h-4 w-16 rounded bg-zinc-200"></div>
        </div>

        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-full bg-zinc-200"></div>
          <div className="h-10 w-10 rounded-full bg-zinc-200"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="h-5 w-40 rounded bg-zinc-200"></div>
            <div className="h-12 w-full rounded bg-zinc-200"></div>
            <div className="h-12 w-4/5 rounded bg-zinc-200"></div>

            <div className="h-4 w-full rounded bg-zinc-200"></div>
            <div className="h-4 w-11/12 rounded bg-zinc-200"></div>
            <div className="h-4 w-9/12 rounded bg-zinc-200"></div>

            <div className="h-12 w-44 rounded-xl bg-zinc-200 mt-8"></div>
          </div>

          <div className="h-105 rounded-3xl bg-zinc-200"></div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-8 mt-10">
        <div className="h-8 w-52 rounded bg-zinc-200 mb-8"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full bg-zinc-200"></div>
              <div className="h-5 w-24 mt-5 rounded bg-zinc-200"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-8 mt-20">
        <div className="flex justify-between items-center mb-8">
          <div className="h-8 w-56 rounded bg-zinc-200"></div>
          <div className="h-5 w-24 rounded bg-zinc-200"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-2xl border p-4">
              <div className="h-56 rounded-xl bg-zinc-200"></div>

              <div className="h-5 w-3/4 mt-5 rounded bg-zinc-200"></div>

              <div className="h-4 w-1/2 mt-3 rounded bg-zinc-200"></div>

              <div className="h-8 w-28 mt-5 rounded bg-zinc-200"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-200 px-8 py-10">
        <div className="h-5 w-64 rounded bg-zinc-200 mb-3"></div>
        <div className="h-4 w-80 rounded bg-zinc-200"></div>
      </footer>
    </div>
  );
};

export default HomeSkeleton;
