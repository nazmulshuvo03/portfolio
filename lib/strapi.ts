import qs from "qs";

export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:5050";

export async function fetchAPI(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${STRAPI_URL}/api${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getPosts(page = 1, pageSize = 100) {
  const params = {
    populate: {
      categories: true,
      tags: true,
      cover: true,
      author: true,
    },
    sort: ["publishedAt:desc"],
    pagination: {
      page,
      pageSize,
    },
  };
  return await fetchAPI("/articles", params);
}

export async function getPostBySlug(slug: string) {
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      categories: true,
      tags: true,
      cover: true,
      author: true,
      blocks: true,
    },
  };
  const data = await fetchAPI("/articles", params);
  return data?.data?.[0];
}

export async function getCategories() {
  const params = {
    populate: "*",
  };
  return await fetchAPI("/categories", params);
}
