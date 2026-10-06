import { useState } from "react";
import { DAYS, SITE, TIMES } from "@/lib/site";
import study from "@/assets/study.jpg";

export function BookingPanel({ full = false }: { full?: boolean }) {
  const [day, setDay] = useState(DAYS[0]);
  const [time, setTime] = useState(TIMES[2]);
  const [name, setName] = useState("");
  const [track, setTrack] = useState("قدرات كمي");

  const msg = `السلام عليكم، أرغب بحجز جلسة\nالاسم: ${name || "-"}\nالمادة: ${track}\nاليوم: ${day}\nالوقت: ${time}`;
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

  const chip = (active: boolean) =>
    active ? "rounded-lg btn-primary px-4 py-3 text-sm" : "rounded-lg border border-input px-4 py-3 text-sm text-foreground/70 transition hover:border-cyan/60";

  return (
    <div className="k grid overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-panel to-deep lg:grid-cols-2">
      <div className="p-8 lg:p-12">
        <span className="text-xs font-medium tracking-[0.2em] text-cyan">حجز مباشر</span>
        <h2 className="mt-3 text-4xl font-bold leading-tight">احجز جلستك مع <span className="text-brand">المدرّس</span></h2>
        <p className="mt-3 max-w-sm text-muted-foreground">اختر اليوم والوقت المناسبين — تأكيد فوري عبر واتساب.</p>

        {full && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <label className="text-sm">الاسم
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-deep/60 px-3 py-3" placeholder="اسمك الكامل" />
            </label>
            <label className="text-sm">المادة
              <select value={track} onChange={(e) => setTrack(e.target.value)} className="mt-1 w-full rounded-lg border border-input bg-deep/60 px-3 py-3">
                <option>قدرات كمي</option><option>قدرات لفظي</option><option>تحصيلي علمي</option><option>STEP</option>
              </select>
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="اليوم">
          {(full ? DAYS : DAYS.slice(0, 4)).map((d) => (
            <button key={d} aria-pressed={d === day} onClick={() => setDay(d)} className={chip(d === day)}>{d}</button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2" role="group" aria-label="الوقت">
          {TIMES.map((t) => (
            <button key={t} aria-pressed={t === time} onClick={() => setTime(t)} className={chip(t === time)}>{t}</button>
          ))}
        </div>
        <a href={href} target="_blank" rel="noopener" className="mt-6 inline-block rounded-xl bg-foreground px-8 py-4 text-base font-semibold text-ink transition hover:bg-cyan">
          تأكيد الحجز · {day} {time}
        </a>
      </div>
      <img src={study} alt="مكتب دراسة مع حاسوب يعرض لوحة اختبارات" width={1008} height={800} loading="lazy" className="h-full min-h-[320px] w-full object-cover" />
    </div>
  );
}
