"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  count?: number;
}

interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  category?: Category;
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      const catName = post.category?.name;
      if (catName) {
        counts[catName] = (counts[catName] || 0) + 1;
      }
    });
    return counts;
  }, [posts]);

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((post) => {
        const title = post.title?.toLowerCase() || "";
        const description = post.description?.toLowerCase() || "";
        const category = post.category?.name?.toLowerCase() || "";
        return (
          title.includes(query) ||
          description.includes(query) ||
          category.includes(query)
        );
      });
    }

    result.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      switch (sortOption) {
        case "date-asc":
          return dateA - dateB;
        case "title-asc":
          return titleA.localeCompare(titleB);
        case "title-desc":
          return titleB.localeCompare(titleA);
        case "default":
        default:
          return dateB - dateA;
      }
    });

    return result;
  }, [posts, searchQuery, sortOption]);

  return (
    <div className="blog-container">
      {/* Sidebar */}
      <aside className="blog-sidebar">
        {/* Search */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">// Search</h3>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sidebar-input"
          />
        </div>

        {/* Sort */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">// Sort By</h3>
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sidebar-select"
            >
              <option value="default">Default (Newest)</option>
              <option value="date-asc">Date (Oldest)</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="sidebar-title">// Categories</h3>
          <nav>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchQuery(cat.name);
                }}
                className="category-link"
              >
                {cat.name}
                <span className="category-count">
                  [{categoryCounts[cat.name] || 0}]
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="blog-grid">
        {filteredAndSortedPosts.map((post) => (
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
                {post.category && (
                  <span style={{ marginLeft: "10px" }}>
                    // {post.category.name}
                  </span>
                )}
              </div>

              <p
                style={{ color: "var(--text-secondary)", marginBottom: "20px" }}
                className="line-clamp-3"
              >
                {post.description}
              </p>

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

        {filteredAndSortedPosts.length === 0 && (
          <div className="col-span-full text-center py-20 border border-dashed border-zinc-800 rounded bg-zinc-900/20">
            <p className="text-zinc-500 font-mono text-sm">
              // NO_RESULTS_FOUND
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
