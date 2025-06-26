"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_ojbd43l",
          "template_pah49jx",
          form.current,
          "THNMHOge9PjVEDsUy"
        );

        toast.success("Message sent successfully!");
        form.current.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full rounded-lg space-y-4"
      >
        <div>
          <h3 className="text-xl font-semibold uppercase tracking-wide">
            Need Support!
          </h3>
          <p className="text-md">
            Contact us for a quote, help to join the team.
          </p>
        </div>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="tel"
          name="user_contact"
          placeholder="Your Contact Number*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          pattern="\d{10}"
          maxLength={10}
          minLength={10}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, "");
          }}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address*"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="user_message"
          placeholder="Your Message*"
          className="w-full min-h-[100px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className={`w-full ${
            sending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-500/90"
          } text-white font-semibold py-2 rounded-md transition duration-300`}
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
