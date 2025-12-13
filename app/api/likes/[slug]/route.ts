import { NextRequest, NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/strapi";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Call Strapi API to increment like
    const response = await fetch(`${STRAPI_URL}/api/articles/${slug}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to like article");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Like error:", error);
    return NextResponse.json(
      { error: "Failed to like article" },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Get current like count from Strapi
    const response = await fetch(`${STRAPI_URL}/api/articles/${slug}/likes`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch likes");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch likes error:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}
