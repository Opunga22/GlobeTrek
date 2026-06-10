export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-red-600">Community voices</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Stories of resilience and hope</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-600">“When the floods hit our area, the Globe Trek team arrived quickly with supplies and support — they helped our family rebuild.”</p>
            <p className="mt-6 font-semibold text-slate-950">— Amina, Nyeri</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-600">“Volunteering with the outreach program gave me purpose and a way to support my neighbours during hard times.”</p>
            <p className="mt-6 font-semibold text-slate-950">— James, Mombasa</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-600">“The health camp saved lives in our village and brought trusted medical care to people who needed it most.”</p>
            <p className="mt-6 font-semibold text-slate-950">— Faith, Kisumu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
