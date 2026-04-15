import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o3ha6mi",
        "template_ipffiga",
        form,
        "9hctIVlFdKCgc9pRS"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        setForm({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact" className="py-10 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20 space-y-4"
        >

          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              className="w-1/2 p-2 rounded bg-transparent border border-gray-500"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              className="w-1/2 p-2 rounded bg-transparent border border-gray-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border border-gray-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border border-gray-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded shadow-lg hover:shadow-blue-500/40"
          >
            Let's Work Together 🚀
          </button>

        </form>

      </div>
    </section>
  );
}