export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-semibold">
              Z
            </div>
            <span className="font-semibold">Zerosha</span>
          </div>
          <p className="text-sm text-slate-600 max-w-xs">
            A modern investing platform built for clarity, speed and trust.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Product</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Trade</li>
            <li>Invest</li>
            <li>Charts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm text-slate-600">support@zerosha.com</p>
          <p className="text-sm text-slate-600 mt-2">
            © {new Date().getFullYear()} Zerosha
          </p>
        </div>
      </div>
    </footer>
  );
}
