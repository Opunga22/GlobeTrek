export default function Newsletter() {
  return (
    <section className="py-20 px-4 md:px-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-red-600 px-8 py-16 text-white shadow-2xl shadow-red-600/10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-red-100">Stay connected</p>
          <h2 className="mt-4 text-4xl font-bold">Get the latest news and community updates</h2>
          <p className="mt-4 text-slate-100 max-w-2xl mx-auto">
            Subscribe for updates on relief efforts, volunteer opportunities, community events, and ways to support our programs.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-600 transition hover:bg-slate-100">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
