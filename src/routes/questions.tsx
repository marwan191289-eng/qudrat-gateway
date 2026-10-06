import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { QUESTIONS, type Track } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/questions")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => pageMeta({
    title: "بنك أسئلة القدرات والتحصيلي | صدارة",
    description: "اختبر نفسك مجانًا بأسئلة قدرات كمي ولفظي وتحصيلي مع الحل والشرح الفوري لكل سؤال.",
    path: "/questions",
    origin: loaderData?.origin,
  }),
  component: Quiz,
});

const TRACKS: Track[] = ["كمي", "لفظي", "تحصيلي"];

function Quiz() {
  const [track, setTrack] = useState<Track>("كمي");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const list = QUESTIONS.filter((q) => q.track === track);
  const done = list.filter((q) => answers[q.id] !== undefined);
  const correct = done.filter((q) => answers[q.id] === q.answer).length;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">بنك الأسئلة</h1>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {TRACKS.map((t) => (
          <button key={t} aria-pressed={t === track} onClick={() => setTrack(t)} className={t === track ? "btn-primary rounded-lg px-5 py-2 text-sm" : "btn-ghost px-5 py-2 text-sm"}>{t}</button>
        ))}
        <div className="ms-auto font-display text-2xl text-cyan" aria-live="polite">{correct}/{list.length}</div>
      </div>
      <div className="mt-8 space-y-6">
        {list.map((q, i) => {
          const picked = answers[q.id];
          return (
            <div key={q.id} className="k rounded-2xl border border-border bg-panel/60 p-6">
              <div className="text-xs text-muted-foreground">سؤال {i + 1}</div>
              <p className="mt-2 text-lg font-medium">{q.q}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, idx) => {
                  const state = picked === undefined ? "" : idx === q.answer ? "border-success bg-success/15" : idx === picked ? "border-destructive bg-destructive/15" : "opacity-60";
                  return (
                    <button key={o} disabled={picked !== undefined} onClick={() => setAnswers({ ...answers, [q.id]: idx })} className={`rounded-xl border border-input px-4 py-3 text-right text-sm transition hover:border-cyan/60 ${state}`}>{o}</button>
                  );
                })}
              </div>
              {picked !== undefined && <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold text-cyan">الحل: </span>{q.explain}</p>}
            </div>
          );
        })}
      </div>
      {done.length > 0 && <button onClick={() => setAnswers({})} className="btn-ghost mt-8 px-6 py-3 text-sm">إعادة الاختبار</button>}
    </section>
  );
}
