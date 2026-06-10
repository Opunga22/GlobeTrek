export default function Statistics() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 text-center">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-5xl font-black text-red-600">25k+</p>
          <p className="mt-4 text-base font-semibold text-slate-700">People supported</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-5xl font-black text-red-600">480+</p>
          <p className="mt-4 text-base font-semibold text-slate-700">Community projects</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-5xl font-black text-red-600">3.5k+</p>
          <p className="mt-4 text-base font-semibold text-slate-700">Volunteers engaged</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-5xl font-black text-red-600">1.1k+</p>
          <p className="mt-4 text-base font-semibold text-slate-700">Emergency responses</p>
        </div>
      </div>
    </section>
  );
}
