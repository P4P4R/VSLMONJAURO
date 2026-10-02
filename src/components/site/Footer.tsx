import { useEffect, useRef } from "react";

import {
  BadgeCheck,
  Headphones,
  CreditCard,
  Lock,
  Phone,
  Mail,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { LogoMark, WhatsAppIcon, WA_BASE } from "./Logo";

const trust = [
  {
    icon: BadgeCheck,
    t: "EMPRESA REGISTRADA",
    d: "CNPJ: 05.683.084/0001-29 • CRO/MG 28114",
  },
  {
    icon: Headphones,
    t: "ATENDIMENTO ESPECIALIZADO",
    d: "24h",
  },
  {
    icon: CreditCard,
    t: "PAGAMENTO SEGURO",
    d: "Seus dados protegidos",
  },
  {
    icon: Lock,
    t: "SITE SEGURO",
    d: "Certificado SSL ativo",
  },
];

/* ==========================================
   RASTREAMENTO META PIXEL + GA4
========================================== */

function trackEvent(
  eventName: string,
  gaEventName: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  /* META PIXEL */
  if ((window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, params);
  }

  /* GOOGLE ANALYTICS 4 */
  if ((window as any).gtag) {
    (window as any).gtag("event", gaEventName, params);
  }
}

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  /* ==========================================
     DETECTAR QUANDO CLIENTE CHEGA NO FOOTER
  ========================================== */

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    let disparado = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

       if (!entry || !entry.isIntersecting || disparado) return;

        disparado = true;

        trackEvent("ReachedFooter", "reached_footer", {
          section: "footer",
          page_path: window.location.pathname,
          page_url: window.location.href,
          scroll_depth: "bottom",
        });

        observer.unobserve(footer);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ==========================================
     CLIQUE NO WHATSAPP PELO FOOTER
  ========================================== */

  function trackWhatsAppFooter() {
    trackEvent("WhatsAppFooterClick", "whatsapp_footer_click", {
      location: "footer",
      page_path: window.location.pathname,
    });
  }

  return (
    <footer
      ref={footerRef}
      id="contato"
      className="bg-navy text-on-dark"
    >
      {/* BARRA DE CONFIANÇA */}
      <div className="border-b border-on-dark/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4">
          {trust.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

              <div>
                <p className="text-xs font-bold tracking-wider">
                  {t}
                </p>

                <p className="mt-0.5 text-xs text-on-dark/60">
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* CLÍNICA */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <LogoMark />

            <div>
              <div className="text-lg font-black leading-tight tracking-wide">
                CLÍNICA EMAGRECEDORA MAURO JÁCOME
              </div>

              <div className="text-sm font-bold tracking-wide text-gold">
                CLÍNICA EMAGRECEDORA MAURO JÁCOME
              </div>

              <div className="mt-0.5 text-xs font-semibold tracking-wider text-on-dark/60">
                CRO/MG 28114
              </div>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-on-dark/60">
            Comprometidos com a sua saúde e bem-estar através de produtos de
            alta qualidade e procedência garantida.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              onClick={trackWhatsAppFooter}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-on-dark/10 transition-colors hover:bg-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h4 className="mb-4 text-sm font-bold tracking-wider text-gold">
            NAVEGAÇÃO
          </h4>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Início
            </Link>

            <Link
              to="/produtos"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Produtos
            </Link>

            <Link
              to="/suporte"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Suporte & Ajuda
            </Link>

            <Link
              to="/conta"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Minha Conta
            </Link>

            <Link
              to="/politica-de-privacidade"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Política de Privacidade
            </Link>

            <Link
              to="/termos-de-uso"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Termos de Uso
            </Link>

            <Link
              to="/politica-de-qualidade"
              className="text-sm text-on-dark/60 transition-colors hover:text-gold"
            >
              Política de Qualidade
            </Link>
          </div>
        </div>

        {/* CONTATO */}
        <div className="min-w-0">
          <h4 className="mb-4 text-sm font-bold tracking-wider text-gold">
            CONTATO
          </h4>

          <ul className="space-y-3 text-sm text-on-dark/60">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />

              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppFooter}
                className="transition-colors hover:text-on-dark"
              >
                (71) 92750-1866
              </a>
            </li>

            <li className="flex min-w-0 items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />

              <a
                href="mailto:clinicacronosmg@gmail.com"
                className="truncate transition-colors hover:text-on-dark"
              >
                clinicacronosmg@gmail.com
              </a>
            </li>

            <li>24h</li>

            <li className="font-semibold text-gold">
              CNPJ: 05.683.084/0001-29
            </li>

            <li className="font-medium text-on-dark/80">
              CRO/MG 28114
            </li>
          </ul>
        </div>
      </div>

      {/* RODAPÉ FINAL */}
      <div className="border-t border-on-dark/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-on-dark/40 md:flex-row">
          <p className="text-center md:text-left">
            © 2026 Clínica Emagrecedora Dr. Mauro Lucio R. C. Jácome.
            CRO/MG 28114 • CNPJ: 05.683.084/0001-29. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              to="/politica-de-privacidade"
              className="text-on-dark/50 transition-colors hover:text-on-dark/90"
            >
              Política de Privacidade
            </Link>

            <Link
              to="/termos-de-uso"
              className="text-on-dark/50 transition-colors hover:text-on-dark/90"
            >
              Termos de Uso
            </Link>

            <Link
              to="/politica-de-qualidade"
              className="text-on-dark/50 transition-colors hover:text-on-dark/90"
            >
              Política de Qualidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}