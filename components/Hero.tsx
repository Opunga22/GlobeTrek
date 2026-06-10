import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center rounded-full border border-red-600/10 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              A Shared Problem is a Problem Solved Together
            </div> */}

            <h1 className="mt-8 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              GlobeTrek Community Support
              <br /> Empowering individuals through unity and compassion
            </h1>

            {/* <p className="mt-6 text-lg leading-8 text-slate-600">
              Globe Trek Community Support is a community-driven organization dedicated to empowering individuals through support, opportunities, and social development. We believe in unity, compassion, and teamwork, helping people overcome challenges while creating pathways for personal and professional growth. Through community outreach, networking, mentorship, and support services, we strive to improve lives and build a stronger, more supportive society where everyone has a chance to succeed.
            </p> */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-semibold text-slate-900">Mission</p>
                <p className="text-sm text-slate-600">To uplift communities by connecting people with opportunities, support systems, and resources that promote self-reliance and sustainable development.</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <p className="text-sm font-semibold text-slate-900">Vision</p>
                <p className="text-sm text-slate-600">A caring and empowered community where individuals support one another, grow together, and achieve their full potential.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white" href="#">
                Get support
              </a>
              <a className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700" href="#">
                Volunteer
              </a>
              <a className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700" href="#">
                Donate
              </a>
              <a className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700" href="#">
                Learn more
              </a>
            </div>

            {/* <div className="mt-6 text-sm text-slate-600">
              <strong className="text-slate-900">Our Motto:</strong> A Shared Problem is a Problem Solved Together.
            </div> */}

            {/* <div className="mt-3 text-sm text-slate-600">
              <strong className="text-slate-900">Core Values:</strong> Unity · Integrity · Compassion · Empowerment · Community Service · Accountability
            </div> */}
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
              <Image
                src="/assets/youth.jpeg"
                alt="Globe Trek Community Support"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 ease-in-out hover:scale-105"
                priority
              />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Need help now?</p>
                <p className="text-sm text-slate-500">Contact our support team for urgent assistance.</p>
              </div>
              <a className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white" href="#">
                Get support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
