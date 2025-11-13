import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-4 text-slate-600">
          Page not found or moved. Return to the homepage to continue exploring.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[var(--brand)] text-white rounded-lg"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
