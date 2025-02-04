import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Backend client that bypasses the CDN for real-time data
export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN caching for backend operations
  token: process.env.SANITY_API_TOKEN, // Include token for authenticated requests
});