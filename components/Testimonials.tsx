export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-red-600">Community voices</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Stories of resilience and hope</h2>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed">“When the floods hit our area, the Globe Trek team arrived quickly with supplies and support — they helped our family rebuild.”</p>
            <p className="mt-6 font-bold text-slate-950 text-sm sm:text-base">— Amina, Nyeri</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed">“Volunteering with the outreach program gave me purpose and a way to support my neighbours during hard times.”</p>
            <p className="mt-6 font-bold text-slate-950 text-sm sm:text-base">— James, Mombasa</p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-2 lg:col-span-1 max-w-md mx-auto sm:max-w-none">
            <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed">“The health camp saved lives in our village and brought trusted medical care to people who needed it most.”</p>
            <p className="mt-6 font-bold text-slate-950 text-sm sm:text-base">— Faith, Kisumu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
