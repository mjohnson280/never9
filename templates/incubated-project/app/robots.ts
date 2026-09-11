import type { MetadataRoute } from "next";

// Test-in-production site: keep every crawler out until the client launches
// on their own domain. Paired with the robots metadata in app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
