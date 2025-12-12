import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from query params for security
    const token = request.nextUrl.searchParams.get("token");
    const secret = process.env.REVALIDATION_TOKEN;

    // Verify the secret token
    if (!secret || token !== secret) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Parse the webhook payload from Strapi
    const body = await request.json();
    const { model, entry } = body;

    // Handle article publication/update
    if (model === "article") {
      // Revalidate the blog list page
      revalidatePath("/blog");

      // Revalidate the specific article page if slug is available
      if (entry?.slug) {
        revalidatePath(`/blog/${entry.slug}`);
      }

      return NextResponse.json({
        revalidated: true,
        message: "Article pages revalidated successfully",
        paths: ["/blog", entry?.slug ? `/blog/${entry.slug}` : null].filter(
          Boolean
        ),
        now: Date.now(),
      });
    }

    // Handle category updates
    if (model === "category") {
      revalidatePath("/blog");
      return NextResponse.json({
        revalidated: true,
        message: "Blog list revalidated",
        now: Date.now(),
      });
    }

    return NextResponse.json(
      { message: "No revalidation needed for this model" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
