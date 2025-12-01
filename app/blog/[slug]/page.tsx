import { getPostBySlug } from "@/lib/strapi";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-wrapper blog-single">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="mb-8 font-mono text-sm text-[var(--text-secondary)]">
          <Link href="/" className="hover:text-[var(--accent-color)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[var(--accent-color)]">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--accent-color)]">{post.title}</span>
        </nav>

        <article className="blog-post">
          <header className="post-header">
            <h1 className="post-title glitch-text">{post.title}</h1>
            <div className="post-meta">
              <span className="date">
                {new Date(post.publishedAt).toISOString().split("T")[0]}
              </span>
              {post.category && (
                <span className="categories">
                  //{" "}
                  <Link href={`/blog?category=${post.category.slug}`}>
                    {post.category.name}
                  </Link>
                </span>
              )}
            </div>
          </header>

          <div className="post-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    style={{
                      fontSize: "2rem",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      color: "var(--accent-color)",
                      fontFamily: "var(--font-heading)",
                    }}
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      color: "var(--accent-color)",
                      fontFamily: "var(--font-mono)",
                    }}
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                      color: "var(--text-primary)",
                    }}
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    style={{ marginBottom: "1rem", lineHeight: "1.8" }}
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => (
                  <a
                    style={{
                      color: "var(--accent-color)",
                      borderBottom: "1px solid var(--accent-color)",
                    }}
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    style={{
                      listStyle: "disc",
                      marginLeft: "20px",
                      marginBottom: "1rem",
                    }}
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    style={{
                      listStyle: "decimal",
                      marginLeft: "20px",
                      marginBottom: "1rem",
                    }}
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    style={{
                      borderLeft: "4px solid var(--accent-color)",
                      paddingLeft: "20px",
                      fontStyle: "italic",
                      margin: "20px 0",
                      color: "var(--text-primary)",
                    }}
                    {...props}
                  />
                ),
                code: ({ node, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  ) : (
                    <code
                      style={{
                        backgroundColor: "#1a1a1a",
                        padding: "2px 6px",
                        borderRadius: "2px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-color)",
                        fontSize: "0.9em",
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre
                    style={{
                      backgroundColor: "#111",
                      padding: "20px",
                      borderRadius: "5px",
                      overflowX: "auto",
                      marginBottom: "20px",
                      border: "1px solid var(--border-color)",
                    }}
                    {...props}
                  />
                ),
                img: ({ node, ...props }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      border: "1px solid var(--border-color)",
                      margin: "20px 0",
                    }}
                    {...props}
                    alt={props.alt || ""}
                  />
                ),
              }}
            >
              {post.markdownContent || post.content || ""}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  );
}
