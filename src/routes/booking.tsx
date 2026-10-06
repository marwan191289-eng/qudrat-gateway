import { createFileRoute } from "@tanstack/react-router";
import { BookingPanel } from "@/components/BookingPanel";
import { pageMeta } from "@/lib/seo";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/booking")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => pageMeta({
    title: "احجز جلسة خاصة | صدارة للقدرات والتحصيلي",
    description: "احجز جلسة فردية أونلاين مع مدرّس القدرات والتحصيلي، اختر اليوم والوقت ويصلك التأكيد عبر واتساب.",
    path: "/booking",
    origin: loaderData?.origin,
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">حجز موعد</h1>
      <BookingPanel full />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[["جلسة فردية", "150 ر.س", "60 دقيقة"], ["باقة 5 جلسات", "650 ر.س", "وفّر 13%"], ["باقة 10 جلسات", "1,200 ر.س", "وفّر 20%"]].map(([t, p, n]) => (
          <div key={t} className="k rounded-2xl border border-border bg-panel/60 p-6">
            <div className="text-sm text-muted-foreground">{t}</div>
            <div className="mt-2 font-display text-3xl font-semibold text-cyan">{p}</div>
            <div className="text-xs text-muted-foreground">{n}</div>
          </div>
        ))}
      </div>
    </section>
  ),
});
