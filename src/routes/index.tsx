import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  Archive,
  Users,
  ChevronRight,
  ShoppingBag,
  FlaskConical,
  Eye,
  HeartHandshake,
} from "lucide-react";
import { WhatsAppIcon, WA_BASE, WA_SPECIALIST } from "@/components/site/Logo";
import { useReveal } from "@/hooks/use-reveal";
import p90 from "@/assets/retatrutide-synedica-90mg.png.asset.json";
import pGlow from "@/assets/alluvi-glow-ghk-cu.png.asset.json";
import p60 from "@/assets/retatrutide-renew-60mg.png.asset.json";
import p40 from "@/assets/retatrutide-synedica-40mg.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Emagrecedora MAURO JÁCOME | Peptídeos Premium" },
      {
        name: "description",
        content:
          "Peptídeos premium com procedência garantida, rastreabilidade e compromisso total com a sua saúde e segurança.",
      },
      { property: "og:title", content: "Clínica Emagrecedora MAURO JÁCOME | Peptídeos Premium" },
      {
        property: "og:description",
        content: "Produtos selecionados com procedência garantida. Fale com um especialista pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: ShieldCheck, t: "PROCEDÊNCIA GARANTIDA", d: "Produtos originais com qualidade assegurada." },
  { icon: Sparkles, t: "QUALIDADE PREMIUM", d: "Peptídeos com pureza e certificação." },
  { icon: Archive, t: "ENVIO SEGURO", d: "Entrega rápida e discreta para todo o Brasil." },
  { icon: Users, t: "SUPORTE ESPECIALIZADO", d: "Equipe treinada para atender você." },
];

const featuredProducts = [
  {
    brand: "Eli Lilly",
    name: "Mounjaro 15 mg",
    image: "/produtos/mounjaro-15mg.png",
    category: "Emagrecimento",
    badge: "MOUNJARO",
    price: "R$ 500,00",
    stock: true,
  },
  {
    brand: "Eli Lilly",
    name: "Mounjaro 5 mg",
    image: "/produtos/mounjaro-5mg.png",
    category: "Emagrecimento",
    badge: "MOUNJARO",
    price: "R$ 250,00",
    stock: true,
  },
  {
    brand: "Indufar Cisa",
    name: "T.G. 15 mg",
    image: "/produtos/tg-15mg.png",
    category: "Emagrecimento",
    badge: "T.G.15",
    price: "R$ 500,00",
    stock: true,
  },
  {
    brand: "Indufar Cisa",
    name: "T.G. 5 mg",
    image: "/produtos/tg-5mg.png",
    category: "Emagrecimento",
    badge: "T.G.5",
    price: "R$ 200,00",
    stock: true,
  },
];

const reasons = [
  { icon: FlaskConical, t: "CIÊNCIA E TECNOLOGIA", d: "Trabalhamos com tecnologia avançada e padrões rigorosos de qualidade." },
  { icon: Eye, t: "TRANSPARÊNCIA TOTAL", d: "Informações claras, documentação disponível e suporte completo." },
  { icon: HeartHandshake, t: "COMPROMISSO COM VOCÊ", d: "Sua saúde e confiança são nossa prioridade número um." },
];

const perks = [
  { e: "🔒", t: "COMPRA SEGURA", d: "Seus dados protegidos com tecnologia de ponta." },
  { e: "📦", t: "ENTREGA DISCRETA", d: "Embalagem discreta e entrega rápida." },
  { e: "👤", t: "ATENDIMENTO ESPECIALIZADO", d: "Equipe treinada e qualificada para te atender." },
  { e: "⭐", t: "SATISFAÇÃO GARANTIDA", d: "Compromisso com sua satisfação e bem-estar." },
];

function buyLink(name: string) {
  return `${WA_BASE}?text=${encodeURIComponent(`Olá! Tenho interesse no produto ${name}.`)}`;
}

function Index() {
  useReveal();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <main className="flex-1">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden bg-hero text-on-dark">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-gold blur-3xl" />
            <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-gold blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-12 md:py-20">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/20 px-4 py-2 text-xs font-bold tracking-widest text-gold">
                PEPTÍDEOS PREMIUM
              </div>
              <h1 className="mb-6 text-5xl font-black leading-tight lg:text-6xl">
                PARA SUA <br />
                <span className="text-gold">MELHOR</span> <br />
                VERSÃO.
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-on-dark/70">
                A Clínica Emagrecedora Mauro Jácome oferece produtos selecionados com procedência garantida,
                rastreabilidade e compromisso total com a sua saúde e segurança.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_SPECIALIST}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-on-dark shadow-gold transition-all hover:bg-gold-dark"
                >
                  <WhatsAppIcon />
                  FALAR COM ESPECIALISTA
                </a>
                <a
                  href="#produtos"
                  className="rounded-xl border-2 border-on-dark/30 px-7 py-3.5 text-sm font-bold text-on-dark transition-all hover:border-on-dark"
                >
                  CONHECER PRODUTOS
                </a>
              </div>
            </div>
            <div className="flex w-full justify-center animate-in fade-in zoom-in-95 duration-1000">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gold/20 blur-2xl" />
                <img
                  src="/produtos/Embalagens TG5 em composição farmacêutica.png"
                  alt="Clínica Emagrecedora MAURO JÁCOME"
                  className="relative w-full max-w-[620px] rounded-3xl object-contain shadow-2xl md:max-w-[680px] lg:max-w-[760px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-on-dark/10 bg-navy text-on-dark">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {features.map(({ icon: I, t, d }) => (
              <div key={t} className="reveal group text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold transition-colors group-hover:bg-gold/30">
                  <I className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-gold">{t}</h3>
                <p className="text-xs leading-relaxed text-on-dark/60">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="produtos" className="scroll-mt-32 bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold tracking-widest text-gold">NOSSA LINHA</p>
                <h2 className="text-3xl font-black text-navy md:text-4xl">NOSSOS PRODUTOS</h2>
                <p className="mt-2 text-muted-foreground">Peptídeos premium para diferentes objetivos</p>
              </div>
              <a
                href="/produtos"
                className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
              >
                Ver todos <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((p) => (
                <div
                  key={p.name}
                  className="reveal group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-muted bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <div className="relative flex aspect-square items-center justify-center bg-surface p-6">
                      <span className="absolute right-3 top-3 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold text-on-dark">
                        {p.badge}
                      </span>
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="mb-1 text-xs text-subtle">{p.brand}</p>
                      <h3 className="mb-2 text-sm font-bold text-navy">{p.name}</h3>
                      <div className="mb-3 flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        <span className="text-xs font-medium text-success-text">Em estoque</span>
                      </div>
                      <p className="mb-4 text-lg font-black text-navy">{p.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 px-5 pb-5">
                    <a
                      href={buyLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-navy py-2.5 text-center text-xs font-semibold text-on-dark transition-colors hover:bg-navy-light"
                    >
                      VER DETALHES
                    </a>
                    <a
                      href={buyLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 rounded-xl bg-gold py-2.5 text-xs font-bold text-on-dark shadow-xs transition-colors hover:bg-gold-dark"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>COMPRAR</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="bg-card py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="reveal">
                <p className="mb-2 text-sm font-semibold tracking-widest text-gold">DIFERENCIAIS</p>
                <h2 className="mb-8 text-3xl font-black text-navy md:text-4xl">
                  POR QUE ESCOLHER A<br />
                  <span className="text-gold">CLÍNICA MAURO JÁCOME?</span>
                </h2>
                <div className="space-y-6">
                  {reasons.map(({ icon: I, t, d }) => (
                    <div key={t} className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                        <I className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-bold text-navy">{t}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((p) => (
                  <div
                    key={p.t}
                    className="reveal rounded-2xl bg-navy p-6 text-on-dark transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3 text-3xl">{p.e}</div>
                    <h3 className="mb-2 text-xs font-bold tracking-wide text-gold">{p.t}</h3>
                    <p className="text-xs leading-relaxed text-on-dark/70">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="bg-band py-16 text-on-dark">
          <div className="reveal mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-3 text-3xl font-black">RECEBA CONTEÚDOS EXCLUSIVOS</h2>
            <p className="mb-8 text-on-dark/70">Dicas, novidades e informações importantes sobre peptídeos e saúde.</p>
            <form
              className="mx-auto flex max-w-lg gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-1 rounded-xl border border-on-dark/20 bg-on-dark/10 px-5 py-3.5 text-sm text-on-dark transition-colors placeholder:text-on-dark/40 focus:border-gold focus:outline-none"
              />
              <button className="whitespace-nowrap rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-on-dark transition-colors hover:bg-gold-dark">
                RECEBER
              </button>
            </form>
            {sent && <p className="mt-4 text-sm text-gold">Obrigado! Você receberá nossos conteúdos em breve.</p>}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-12">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <a
              href={WA_SPECIALIST}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-navy px-10 py-4 text-lg font-bold text-on-dark shadow-lg transition-colors hover:bg-navy-light"
            >
              <WhatsAppIcon className="h-6 w-6" />
              FALAR COM ESPECIALISTA
            </a>
          </div>
        </section>
      </main>

      <a
        href={WA_BASE}
        target="_blank"
        rel="noopener noreferrer"
        title="Falar no WhatsApp (51) 99526-2420"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-on-dark shadow-lg transition-all hover:scale-110 hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
