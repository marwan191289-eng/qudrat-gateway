import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  const s = SITE.socials;
  return (
    <footer className="border-t border-border bg-panel/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" width={36} height={36} loading="lazy" className="size-9" />
            <span className="text-2xl font-bold">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            منصة القدرات والتحصيلي وSTEP لطلاب وطالبات السعودية ودول الخليج — شرح مباشر، بنك أسئلة، وحجز جلسات خاصة.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground/80">روابط سريعة</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-cyan">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground/80">تواصل معنا</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={s.whatsapp} target="_blank" rel="noopener" className="hover:text-cyan">واتساب</a></li>
            <li><a href={s.tiktok} target="_blank" rel="noopener" className="hover:text-cyan">تيك توك</a></li>
            <li><a href={s.instagram} target="_blank" rel="noopener" className="hover:text-cyan">إنستغرام</a></li>
            <li><a href={s.x} target="_blank" rel="noopener" className="hover:text-cyan">إكس (تويتر)</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-cyan">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name} · جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
