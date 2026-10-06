import { createFileRoute } from "@tanstack/react-router";
import { SESSIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/live")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => pageMeta({
    title: "الجلسات المباشرة | صدارة للقدرات والتحصيلي",
    description: "جدول الجلسات المباشرة للقدرات الكمي واللفظي والتحصيلي مع روابط الحضور عبر Zoom وGoogle Meet.",
    path: "/live",
    origin: loaderData?.origin,
  }),
  component: Live,
});

function Live() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold">الجلسات المباشرة</h1>
      <p className="mt-2 text-muted-foreground">انضم من أي جهاز — يُفتح الرابط قبل الجلسة بـ 10 دقائق.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SESSIONS.map((s) => (
          <article key={s.title} className="k rounded-2xl border border-border bg-panel/60 p-7">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-brand/20 px-2 py-1 text-xs text-sky">{s.track}</span>
              <span className="flex items-center gap-2 text-xs text-cyan"><span className="size-2 animate-pulse rounded-full bg-cyan" />مباشر</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{s.when} · {s.duration}</p>
            <a href={s.link} target="_blank" rel="noopener" className="btn-primary mt-6 px-6 py-3 text-sm">رابط الحضور</a>
          </article>
        ))}
      </div>
    </section>
  );
}
