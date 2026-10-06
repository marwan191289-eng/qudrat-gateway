import { createFileRoute, Link } from "@tanstack/react-router";
import { BookingPanel } from "@/components/BookingPanel";
import { FAQ, SESSIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const m = pageMeta({
      title: "صدارة | منصة القدرات والتحصيلي في السعودية والخليج",
      description: "تصدّر دفعتك في القدرات والتحصيلي وSTEP: شرح مباشر مع مدرّس معتمد، بنك أسئلة تفاعلي، جلسات أونلاين وحجز مواعيد فوري.",
      path: "/",
      origin: loaderData?.origin,
    });
    return {
      ...m,
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }],
    };
  },
  component: Index,
});

const FEATURES = [
  { icon: "🧠", title: "اختبارات تفاعلية", body: "بنك أسئلة محدّث لقدرات وتحصيلي وSTEP مع تحليل فوري لأخطائك ونقاط ضعفك.", to: "/questions" as const },
  { icon: "🎥", title: "جلسات مباشرة", body: "مراجعات مكثفة وحلول نموذجية بجودة عالية، بروابط حضور مباشرة من أي جهاز.", to: "/live" as const },
  { icon: "📅", title: "حجز مباشر", body: "احجز جلسة خاصة مع المدرّس في الوقت الذي يناسبك من جدول مواعيد محدّث.", to: "/booking" as const },
];

function Index() {
  return (
    <>
      <section className="k relative border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-medium text-cyan">قدرات · تحصيلي · STEP</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.15] lg:text-7xl">
              تصدّر <span className="text-gradient">الدفعة</span><br className="hidden sm:block" /> في الاختبارات
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              مدرّس معتمد في السعودية ودول الخليج. اختبارات تفاعلية، جلسات مباشرة، وحجز فوري لمواعيدك — كل ما تحتاجه لرفع درجتك في مكان واحد.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary px-8 py-4 text-base">احجز موعدك الآن</Link>
              <Link to="/questions" className="btn-ghost px-8 py-4 text-base">جرّب اختبارًا مجانيًا</Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="font-display text-3xl font-semibold text-cyan">+12,400</div><div className="text-muted-foreground">طالب وطالبة</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-display text-3xl font-semibold text-brand">94%</div><div className="text-muted-foreground">تحسّن في النتيجة</div></div>
              <div className="w-px bg-border" />
              <div><div className="font-display text-3xl font-semibold text-sky">4.9★</div><div className="text-muted-foreground">تقييم الطلاب</div></div>
            </div>
          </div>
          <div className="k rounded-3xl border border-border bg-gradient-to-br from-panel to-deep p-6 shadow-2xl">
            <div className="flex items-center justify-between"><div className="text-sm font-medium">تقدّمك هذا الأسبوع</div><span className="rounded-md bg-brand/20 px-2 py-1 text-xs text-sky">قدرات · كمي</span></div>
            <div className="mt-4 rounded-xl bg-deep/60 p-4">
              <div className="font-display text-6xl font-bold">98<span className="text-2xl text-cyan">/100</span></div>
              <div className="mt-1 text-sm text-muted-foreground">متوسط آخر 5 اختبارات — أعلى من 92% من الطلاب</div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full w-[92%] rounded-full bg-gradient-to-l from-brand to-cyan" /></div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-secondary/40 p-3"><div className="font-display text-2xl font-semibold text-sky">640</div><div className="text-xs text-muted-foreground">سؤال تم حله</div></div>
              <div className="rounded-lg border border-border bg-secondary/40 p-3"><div className="font-display text-2xl font-semibold text-cyan">38h</div><div className="text-xs text-muted-foreground">وقت مذاكرة</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold">لماذا صدارة؟</h2>
        <p className="mt-2 text-muted-foreground">تجربة مصمّمة لرفع درجتك بأقل مجهود</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to} className="k rounded-2xl border border-border bg-panel/60 p-7 transition hover:border-brand/50">
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-sky text-xl" aria-hidden>{f.icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <BookingPanel />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">الجلسات القادمة</h2>
          <Link to="/live" className="text-sm text-cyan">كل الجلسات ←</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SESSIONS.slice(0, 2).map((s) => (
            <div key={s.title} className="flex items-center justify-between rounded-2xl border border-border bg-panel/60 p-5">
              <div><div className="text-xs text-cyan">{s.when}</div><div className="mt-1 font-semibold">{s.title}</div></div>
              <a href={s.link} target="_blank" rel="noopener" className="btn-primary px-4 py-2 text-sm">انضم</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-3xl font-bold">الأسئلة الشائعة</h2>
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-panel/60 p-5">
              <summary className="cursor-pointer font-semibold marker:text-cyan">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
