import { createServerFn } from "@tanstack/react-start";

// GA measurement IDs are public by design; read from secret so it can change without code edits.
export const getAnalyticsId = createServerFn({ method: "GET" }).handler(async () => {
  return process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"] ?? null;
});
