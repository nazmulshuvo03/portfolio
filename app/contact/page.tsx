"use client";

import { useState, FormEvent } from "react";
import portfolioData from "@/data/portfolio.json";

export default function ContactPage() {
  const { personal_information } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormMessage({
          type: "success",
          text:
            result.message ||
            "Message sent successfully! I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      setFormMessage({
        type: "error",
        text: "Oops! Something went wrong. Please try again or email me directly.",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="glitch-text">Let&apos;s Connect</h2>
            <p>
              Have a project in mind? Want to collaborate? Or just want to say
              hi? Drop me a message and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>

            {formMessage && (
              <div className={`form-message ${formMessage.type}`}>
                {formMessage.text}
              </div>
            )}
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Me</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <span>{personal_information.email}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <a
                  href={`https://${personal_information.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="info-item">
                <span className="info-icon">🐙</span>
                <a
                  href={`https://${personal_information.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="info-item">
                <span className="info-icon">🐦</span>
                <a
                  href={`https://${personal_information.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
