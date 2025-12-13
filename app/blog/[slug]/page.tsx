import { getPostBySlug, STRAPI_URL } from "@/lib/strapi";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Mermaid from "@/app/components/Mermaid";
import CodeBlock from "@/app/components/CodeBlock";
import LoveButton from "@/app/components/LoveButton";
import { notFound } from "next/navigation";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

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

  // Construct cover image URL if it exists
  const coverImageUrl = post.cover?.url
    ? post.cover.url.startsWith("http")
      ? post.cover.url
      : `${STRAPI_URL}${post.cover.url}`
    : null;

  return (
    <section className="section-wrapper blog-single">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">/</span>
          <Link href="/blog">Blog</Link>
          <span className="separator">/</span>
          <span className="current">{post.title}</span>
        </nav>

        <article className="blog-post">
          <header className="post-header">
            <h1 className="post-title glitch-text" style={{ fontSize: "3rem" }}>
              {post.title}
            </h1>
            <div className="post-meta">
              <span
                className="date"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-color)",
                }}
              >
                {new Date(post.publishedAt).toISOString().split("T")[0]}
              </span>

              {post.categories && post.categories.length > 0 && (
                <span
                  className="categories"
                  style={{ fontFamily: "var(--font-mono)", marginLeft: "20px" }}
                >
                  //{" "}
                  {post.categories.map((cat: any, index: number) => (
                    <span key={cat.id}>
                      {index > 0 && ", "}
                      <Link
                        href={`/blog?category=${cat.slug}`}
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {cat.name}
                      </Link>
                    </span>
                  ))}
                </span>
              )}

              {post.tags && post.tags.length > 0 && (
                <span
                  className="tags"
                  style={{ fontFamily: "var(--font-mono)", marginLeft: "20px" }}
                >
                  [{" "}
                  {post.tags.map((tag: any) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${tag.slug}`}
                      style={{
                        color: "var(--accent-color)",
                        marginRight: "5px",
                      }}
                    >
                      #{tag.name}
                    </Link>
                  ))}{" "}
                  ]
                </span>
              )}
            </div>
          </header>

          {coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={coverImageUrl} alt={post.title} className="post-cover" />
          )}

          <div className="post-content" style={{ marginTop: "50px" }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
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
                  const isMermaid = match && match[1] === "mermaid";

                  if (isMermaid) {
                    return (
                      <Mermaid chart={String(children).replace(/\n$/, "")} />
                    );
                  }

                  return match ? (
                    <CodeBlock language={match[1]}>
                      {String(children).replace(/\n$/, "")}
                    </CodeBlock>
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
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      overflow: "visible",
                    }}
                    {...props}
                  />
                ),
                img: ({ node, ...props }) => {
                  // Handle content images (relative or absolute)
                  const src = (props.src as string) || "";
                  const imageUrl = src.startsWith("http")
                    ? src
                    : `${STRAPI_URL}${src}`;
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        border: "1px solid var(--border-color)",
                        margin: "20px 0",
                      }}
                      {...props}
                      src={imageUrl}
                      alt={props.alt || ""}
                    />
                  );
                },
              }}
            >
              {post.markdownContent || post.content || ""}
            </ReactMarkdown>
          </div>

          {/* Love Button */}
          <div className="post-actions">
            <LoveButton slug={slug} initialCount={post.likeCount || 0} />
          </div>
        </article>
      </div>
    </section>
  );
}
