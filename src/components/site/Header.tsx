import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { LogoMark, WhatsAppIcon, WA_BASE } from "./Logo";

const links = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Suporte", href: "#contato" },
  { label: "Novidades", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-navy px-4 py-2 text-center text-xs font-medium tracking-widest text-on-dark sm:text-sm">
        QUALIDADE • CIÊNCIA • CONFIANÇA
      </div>
      <nav className="border-b border-muted bg-card shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <a href="/" className="flex min-w-0 items-center gap-2 text-left">
            <LogoMark />
            <div className="min-w-0">
              <div className="text-sm font-black leading-tight tracking-tight text-navy sm:text-base">
                CLÍNICA EMAGRECEDORA MAURO JÁCOME
              </div>
              <div className="text-xs font-bold tracking-wide text-gold sm:text-sm">CLÍNICA EMAGRECEDORA MAURO JÁCOME</div>
              <div className="mt-0.5 text-[11px] font-semibold leading-none text-muted-foreground">CRO/MG 28114</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-gold ${
                  i === 0 ? "border-b-2 border-gold pb-0.5 text-gold" : "text-navy"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              className="rounded-xl border border-border bg-surface p-2.5 text-navy transition-colors hover:bg-muted"
              title="Ver Carrinho de Compras"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <a
              href="/produtos"
              className="hidden rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:bg-navy-light lg:block"
          >
              Nossos Produtos
            </a>
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-on-dark shadow-xs transition-colors hover:bg-gold-dark sm:flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <button className="p-1 text-navy md:hidden" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="animate-in slide-in-from-top-2 fade-in border-t border-muted bg-card px-6 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-surface ${
                    i === 0 ? "text-gold" : "text-navy"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-on-dark"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
