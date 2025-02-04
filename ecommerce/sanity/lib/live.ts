import "server-only";

import { defineLive } from "next-sanity";
import { client } from "./client";
import { groq } from "next-sanity";

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_API_TOKEN");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});

export async function getAllProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      name,
      description,
      price,
      "slug": slug.current,
      "image": image.asset->url,
      "category": category[]->{ name, "slug": slug.current }
    }`
  );
}
