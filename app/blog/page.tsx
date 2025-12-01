import { getPosts, getCategories } from "@/lib/strapi";
import BlogList from "./BlogList";

export const metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts, tutorials, and updates.",
};

export default async function BlogPage() {
  const postsData = await getPosts();
  const categoriesData = await getCategories();

  const posts = postsData?.data || [];
  const categories = categoriesData?.data || [];

  return (
    <section className="section-wrapper min-h-screen pt-32">
      <div className="container">
        <div className="section-header">
          <span className="section-number">LOGS</span>
          <h2 className="section-title">Blog</h2>
        </div>

        <BlogList posts={posts} categories={categories} />
      </div>
    </section>
  );
}
