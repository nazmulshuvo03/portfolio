import Image from "next/image";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import { getRecentPosts } from "@/lib/strapi";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  const {
    personal_information,
    professional_summary,
    experience,
    education,
    technical_skills,
    certifications,
  } = portfolioData;

  // Fetch recent blog posts
  const recentPostsData = await getRecentPosts(2);
  const recentPosts = recentPostsData?.data || [];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text-area">
            <p className="greeting">HELLO_WORLD</p>
            <h1 className="glitch-text" data-text={personal_information.name}>
              {personal_information.name}
            </h1>
            <h2 className="role-title">
              FULL_STACK_ENGINEER <span className="blink">_</span>
            </h2>
            <p className="hero-summary">{professional_summary}</p>

            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">
                CONTACT_ME
              </a>
              <a href="#blog" className="btn btn-outline">
                VIEW_BLOG
              </a>
            </div>

            <div className="social-matrix">
              <a href={`mailto:${personal_information.email}`} title="Email">
                EMAIL
              </a>
              <a
                href={`https://${personal_information.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                LINKEDIN
              </a>
              <a
                href={`https://${personal_information.github}`}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                GITHUB
              </a>
              <a
                href={`https://${personal_information.x}`}
                target="_blank"
                rel="noopener noreferrer"
                title="X"
              >
                X
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <Image
                src={personal_information.image}
                alt={`${personal_information.name} - Full Stack Engineer Portfolio Photo`}
                width={400}
                height={500}
                priority
              />
              <div className="frame-decor"></div>
            </div>
            <div className="location-badge">
              📍 {personal_information.location}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Placeholder for later */}
      <section id="blog" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">LATEST_LOGS // THOUGHTS</h2>
          </div>
          {recentPosts.length > 0 ? (
            <>
              <div className="grid-2-col">
                {recentPosts.map((post: any) => (
                  <div key={post.id} className="brutalist-card post-item">
                    <div className="card-border"></div>
                    <div className="card-content">
                      <h3>
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{
                            color: "var(--text-primary)",
                            textDecoration: "none",
                          }}
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <div className="meta-tags">
                        <span style={{ color: "var(--accent-color)" }}>
                          {new Date(post.publishedAt).toISOString().split("T")[0]}
                        </span>
                        {post.categories && post.categories.length > 0 && (
                          <span style={{ marginLeft: "10px" }}>
                            // {post.categories.map((c: any) => c.name).join(", ")}
                          </span>
                        )}
                      </div>

                      <p
                        style={{ color: "var(--text-secondary)", marginBottom: "20px" }}
                        className="line-clamp-3"
                      >
                        {post.description}
                      </p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="tags-list" style={{ marginBottom: "20px" }}>
                          {post.tags.map((tag: any) => (
                            <Link
                              key={tag.id}
                              href={`/blog?tag=${tag.slug}`}
                              style={{
                                marginRight: "10px",
                                color: "var(--accent-color)",
                                textDecoration: "none",
                              }}
                            >
                              #{tag.name}
                            </Link>
                          ))}
                        </div>
                      )}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="btn btn-outline"
                        style={{ fontSize: "0.8rem", padding: "8px 15px" }}
                      >
                        READ_ENTRY
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center" style={{ marginTop: "60px" }}>
                <Link href="/blog" className="btn btn-outline">
                  VIEW_ALL_POSTS →
                </Link>
              </div>
            </>
          ) : (
            <div className="grid-2-col">
              <div className="brutalist-card">
                <div className="card-border"></div>
                <div className="card-content">
                  <h3>Blog Coming Soon</h3>
                  <p className="institution">
                    Blog posts will be available here soon.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">SYSTEM_LOGS // EXPERIENCE</h2>
          </div>

          <div className="experience-grid">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <span className="exp-date">
                    {exp.start} — {exp.end}
                  </span>
                  <h3 className="exp-role">{exp.role}</h3>
                </div>
                <div className="exp-body">
                  <h4 className="exp-company">
                    @ {exp.company}{" "}
                    <span className="exp-loc">[{exp.location}]</span>
                  </h4>
                  <ul className="exp-list">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>
                        <span className="bullet">&gt;</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">TECH_STACK // CAPABILITIES</h2>
          </div>

          <div className="skills-terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">user@portfolio:~/skills</span>
            </div>
            <div className="terminal-body">
              <div className="skill-row">
                <span className="prompt">$</span>{" "}
                <span className="cmd">list languages</span>
                <div className="output">
                  {technical_skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-row">
                <span className="prompt">$</span>{" "}
                <span className="cmd">list frontend</span>
                <div className="output">
                  {technical_skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-row">
                <span className="prompt">$</span>{" "}
                <span className="cmd">list backend</span>
                <div className="output">
                  {technical_skills.backend.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-row">
                <span className="prompt">$</span>{" "}
                <span className="cmd">list database</span>
                <div className="output">
                  {technical_skills.database_storage.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-row">
                <span className="prompt">$</span>{" "}
                <span className="cmd">list infrastructure</span>
                <div className="output">
                  {technical_skills.infrastructure_tools.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      [{skill}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">KNOWLEDGE_BASE // EDUCATION</h2>
          </div>
          <div className="grid-2-col">
            {education.map((edu, index) => (
              <div key={index} className="brutalist-card">
                <div className="card-border"></div>
                <div className="card-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="date">
                    {edu.start} - {edu.end}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">CERTIFICATES // VERIFIED</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <span className="cert-icon">🏆</span>
                <div className="cert-info">
                  <h3>{cert.name}</h3>
                  <p>
                    {cert.issuer} | {cert.date}
                  </p>
                </div>
                <span className="cert-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
