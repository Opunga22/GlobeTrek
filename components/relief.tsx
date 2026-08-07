import Image from 'next/image';
import Link from 'next/link';
import { getInitiatives } from '../lib/initiatives';

export default function FeaturedDestinations() {
  const initiatives = getInitiatives();

  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Thematic Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            GlobeTrek Community Support is dedicated to making a positive impact in various areas of community development. Our initiatives focus on addressing critical issues and empowering individuals and communities to thrive. Explore our thematic areas below to learn more about our work and how we are creating meaningful change.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {initiatives.map((item, index) => (
            <article key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-48 sm:h-64 bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 leading-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed">{item.description}</p>
                <Link
                  href={`/initiatives/${item.slug}`}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
