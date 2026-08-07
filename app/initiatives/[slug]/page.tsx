import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getInitiativeBySlug, getInitiatives } from '../../../lib/initiatives';

type InitiativePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getInitiatives().map((item) => ({ slug: item.slug }));
}

export default function InitiativePage({ params }: InitiativePageProps) {
  const initiative = getInitiativeBySlug(params.slug);

  if (!initiative) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-4 py-16 md:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          ← Back to home
        </Link>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-64 w-full bg-slate-100 sm:h-80">
            <Image
              src={initiative.image}
              alt={initiative.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Initiative details</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{initiative.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">{initiative.fullDescription}</p>
          </div>
        </article>
      </div>
    </main>
  );
}
