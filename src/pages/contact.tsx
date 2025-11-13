import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);

    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 2500);
  }

  return (
    <div className="space-y-24 pb-20">
      <section className="bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Contact Us</h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            For support, collaborations, or questions — our team is here to help
            you.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Support</h2>
            <p className="text-slate-600 mt-1">support@zerosha.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Partnerships</h2>
            <p className="text-slate-600 mt-1">partners@zerosha.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Media</h2>
            <p className="text-slate-600 mt-1">media@zerosha.com</p>
          </div>

          <div className="pt-6 border-t">
            <p className="text-slate-600">
              Response time: within{" "}
              <span className="font-medium">24 hours</span>.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-5"
        >
          <div>
            <label className="text-sm text-slate-600">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
