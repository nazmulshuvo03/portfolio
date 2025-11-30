import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: `${portfolioData.personal_information.name} | Full Stack Engineer`,
  description: portfolioData.professional_summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <div className="noise-overlay"></div>
        <div className="grid-background"></div>

        <header className="site-header">
          <nav className="container" aria-label="Main navigation">
            <div className="logo">
              <a href="/" aria-label="Home">
                {portfolioData.personal_information.name}
              </a>
            </div>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
            </label>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#certifications">Certifications</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>
              &copy; {currentYear} {portfolioData.personal_information.name}.
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
