import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [captcha, setCaptcha] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captcha) return setStatus("Please complete CAPTCHA");

    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, captcha }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setCaptcha(null);
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-xl mb-4">Contact Me</h2>

      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={form.name}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={form.email}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        value={form.message}
        className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-700"
        rows="4"
        required
      />

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={setCaptcha}
      />

      <button
        type="submit"
        className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg transition"
      >
        Send Message
      </button>

      <p className="text-sm mt-2">{status}</p>
    </form>
  );
}
