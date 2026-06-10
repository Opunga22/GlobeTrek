export default function TravelStories() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.28em] text-red-600">Community stories</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950">Impact from real people</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Read how our initiatives have provided relief, training, and long-term support to families and neighbourhoods.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Rebuilding after disaster</h3>
            <p className="mt-4 text-slate-600">After the storm, Grace led a community clean-up and received support to repair her home and livelihood.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Health access for all</h3>
            <p className="mt-4 text-slate-600">Michael organised local health screenings that connected families to care and preventive services.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Local leadership</h3>
            <p className="mt-4 text-slate-600">Anita formed a neighbourhood support group that now runs food distributions and skills sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
