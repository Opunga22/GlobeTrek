export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-green-600">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(69,10,10,0.08)_0%,_rgba(127,29,29,0.18)_42%,_rgba(68,20,20,0.14)_72%,_rgba(28,25,23,0.12)_100%)]" />
      <div className="absolute inset-y-0 right-[-12%] w-[36rem] rounded-full bg-red-200/12 blur-3xl" />
      <div className="absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-rose-100/12 blur-3xl" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-16 xl:gap-24">
            <div className="max-w-3xl">
            {/* Badge pill */}

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Globe Trek
              <br />
              <span className="text-white">Community Support</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Empowering individuals through unity and compassion — connecting people
              with opportunities, resources, and support systems that promote
              self-reliance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
              <span>Community-led assistance</span>
              <span>Practical support systems</span>
              <span>Sustainable empowerment</span>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-red-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 active:translate-y-0"
              >
                Get Support
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-rose-100/25 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 translate-x-px">
                    <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </span>
                Volunteer
              </a>
              <a
                href="/donate"
                className="text-sm font-medium text-white/90 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
              >
                Donate →
              </a>
            </div>
          </div>

            {/* Mission & Vision cards */}
            <div className="grid gap-5 self-stretch">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_24px_60px_rgba(69,10,10,0.2)] backdrop-blur-md transition-colors duration-300 hover:bg-white/14">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white">Mission</p>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  To uplift communities by connecting people with opportunities, support
                  systems, and resources that promote self-reliance and sustainable
                  development.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_24px_60px_rgba(69,10,10,0.2)] backdrop-blur-md transition-colors duration-300 hover:bg-white/14">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">Vision</p>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  A caring and empowered community where individuals support one another,
                  grow together, and achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
