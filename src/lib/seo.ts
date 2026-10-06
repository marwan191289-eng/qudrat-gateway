export function pageMeta(opts: { title: string; description: string; path: string; origin?: string | undefined }) {
  const img = opts.origin ? `${opts.origin}/og-image.jpg` : undefined;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: opts.path },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:card", content: "summary_large_image" },
      ...(img
        ? [
            { property: "og:image", content: img },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: "صدارة — منصة القدرات والتحصيلي" },
            { name: "twitter:image", content: img },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
