import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="bg-linear-to-b from-blue-50 to-white">
        <div className="mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Trade smarter. Invest better.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              A modern investment platform built for clarity, precision and
              long-term wealth creation. Power, speed, and transparency — all in
              one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700"
              >
                Open Account
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-100"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-sm text-slate-500">Portfolio value</div>
                  <div className="text-2xl font-semibold">₹ 1,24,567</div>
                </div>
                <div className="text-green-600 font-semibold text-sm">
                  +4.6% today
                </div>
              </div>

              <div className="h-44 rounded-xl bg-blue-50 flex items-center justify-center text-slate-400">
                Chart Preview
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-slate-500">Orders</div>
                  <div className="text-lg font-medium">Completed</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-slate-500">Holdings</div>
                  <div className="text-lg font-medium">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">
          Why choose Zerosha?
        </h2>

        <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
          Built for both beginners and experts. Powerful tools and transparent
          pricing to help you grow.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold">Zero Delivery Charges</h3>
            <p className="mt-2 text-slate-600">
              No brokerage on long-term equity investments.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="mt-2 text-slate-600">
              Built on scalable, low-latency infrastructure.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm rounded-xl">
            <h3 className="text-xl font-semibold">Pro Research</h3>
            <p className="mt-2 text-slate-600">
              Insights, charts, screeners, and expert market tools.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl font-bold text-slate-900">10M+</div>
            <p className="text-slate-600 mt-2">Clients Trust Us</p>
          </div>

          <div>
            <div className="text-4xl font-bold text-slate-900">₹2L+ Cr</div>
            <p className="text-slate-600 mt-2">Daily Market Volume</p>
          </div>

          <div>
            <div className="text-4xl font-bold text-slate-900">4.9★</div>
            <p className="text-slate-600 mt-2">User Rated Platform</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-20 bg-gradient-to-t from-blue-50 to-white">
        <h2 className="text-3xl font-extrabold">
          Start your investment journey today
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mt-3">
          Open your account in minutes. No paperwork. No hidden charges.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
