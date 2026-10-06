import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-deep/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} — الرئيسية`}>
          <img src="/logo.png" alt="" width={40} height={40} className="size-10" />
          <div className="leading-tight">
            <div className="text-lg font-bold">{SITE.name}</div>
            <div className="text-[11px] text-muted-foreground">{SITE.tagline}</div>
          </div>
        </Link>
        <nav aria-label="القائمة الرئيسية" className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="transition hover:text-foreground" activeProps={{ className: "text-cyan" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/booking" className="btn-primary px-5 py-2 text-sm">احجز الآن</Link>
          <button className="md:hidden" aria-label="فتح القائمة" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 text-foreground/80">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
