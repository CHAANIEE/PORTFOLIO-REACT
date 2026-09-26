import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with your form backend (Formspree, EmailJS, Resend, etc.)
      // await fetch("YOUR_ENDPOINT", { method: "POST", body: JSON.stringify(form) });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>Have a project in mind or just want to chat? Feel free to reach out!</p>

      <div className="contact-info">
        <p>Email: christianlagula12345678@gmail.com</p>
        <p>Phone: +63 966 047 2225</p>
        <p>Location: Davao, Philippines</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && <p>✅ Message sent! I'll get back to you soon.</p>}
      {status === "error" && <p>❌ Something went wrong. Please try again.</p>}
    </section>
  );
}

export default Contact;