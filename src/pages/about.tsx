export default function AboutPage() {
  return (
    <div className="space-y-24">
      <section className="grid place-content-center bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-28 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Redefining the way India invests
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            We combine thoughtful design, world-class technology, and
            transparent pricing to empower every individual investor — beginners
            to pros.
          </p>
        </div>
      </section>

      <section className="text-center py-20 ">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Built with trust. Backed by technology.
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-slate-600">
          Every line of code, every design decision, and every customer
          interaction reflects our commitment to transparency and excellence.
        </p>
      </section>
    </div>
  );
}
