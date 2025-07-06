"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // ---- DEMO only ------------------------------------------------
    // Replace with Formspree, EmailJS, API route, etc.
    await new Promise((r) => setTimeout(r, 1400));
    // ---------------------------------------------------------------
    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="max-w-3xl w-full mx-auto py-20 flex flex-col items-center text-white"
    >
      <h2 className="section-heading mb-8">Get in Touch</h2>

      {/* wrapper provides the gradient outline */}
      <div className="gradient-border rounded-lg w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent rounded-lg px-8 py-10 flex flex-col gap-6"
        >
          {/* name */}
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wide text-gray-400">
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              className="bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-[white]"
            />
          </label>

          {/* email */}
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wide text-gray-400">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              className="bg-transparent border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-[white]"
            />
          </label>

          {/* message */}
          <label className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-wide text-gray-400">
              Message
            </span>
            <textarea
              name="message"
              rows={5}
              required
              className="bg-transparent border border-gray-600 rounded-md px-4 py-2 resize-none focus:outline-none focus:border-[white]"
            />
          </label>

          {/* submit */}
          <button
            type="submit"
            disabled={status !== "idle"}
            className="self-start px-6 py-2 rounded-md font-medium bg-gradient-to-r from-[#ed85ca] to-[#78c6f2] text-black hover:opacity-90 disabled:opacity-60 transition"
          >
            {status === "idle" && "Send"}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Sent!"}
          </button>
        </form>
      </div>
    </section>
    );
}