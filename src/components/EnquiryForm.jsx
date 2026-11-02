"use client";

import { useState } from "react";
import { services, whatsappLink } from "@/lib/siteData";

export default function EnquiryForm({ initialService = "", initialItem = "" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: initialService,
    item: initialItem,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "service" ? { item: "" } : {}),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const service = services.find((item) => item.slug === form.service);
    const lines = [
      "Hello Libra Creations, I would like to enquire.",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Service: ${service?.title || { multiple: "Multiple services", other: "Other" }[form.service] || form.service}`,
      form.item ? `Product or event: ${form.item}` : null,
      `Requirement: ${form.message}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="field-label">Your name</label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className="field"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="enquiry-company" className="field-label">Company <span className="font-normal text-muted">(optional)</span></label>
          <input
            id="enquiry-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            className="field"
            placeholder="Organization name"
          />
        </div>
        <div>
          <label htmlFor="enquiry-phone" className="field-label">Phone number</label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="field"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" className="field-label">Email <span className="font-normal text-muted">(optional)</span></label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="field"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="enquiry-service" className="field-label">Service</label>
          <select
            id="enquiry-service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="field"
          >
            <option value="" disabled>Choose a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.slug}>{service.title}</option>
            ))}
            <option value="multiple">Multiple services</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="enquiry-item" className="field-label">Product or event <span className="font-normal text-muted">(optional)</span></label>
          <input
            id="enquiry-item"
            name="item"
            type="text"
            value={form.item}
            onChange={handleChange}
            className="field"
            placeholder="e.g. Employee joining kits"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="enquiry-message" className="field-label">Tell us what you need</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows="4"
          required
          value={form.message}
          onChange={handleChange}
          className="field resize-y"
          placeholder="Quantity, timeline, branding, budget or any other useful details"
        />
      </div>

      <button type="submit" className="button button-primary mt-6 w-full">
        Continue in WhatsApp
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
        Your details are added to a WhatsApp message. You can review it before sending.
      </p>
    </form>
  );
}
