import React from "react";

export default function WhatsAppButton({phone = "+254706872269"}) {
  const url = `https://wa.me/${phone.replace(/\D/g,'')}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M..."/></svg>
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
