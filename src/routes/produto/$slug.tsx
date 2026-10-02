import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

export const Route = createFileRoute("/produto/$slug")({
  component: ProdutoDetalhesPage,
});

type Produto = {
  id: number;
  slug: string;
  nome: string;
  fabricante: string;
  categoria: string;
  preco: number;
  imagem: string;
  marca: string;
  estoque: boolean;
  descricao: string;
  detalhes: string[];
};

/*
  IMPORTANTE:
  Os slugs precisam ser IGUAIS aos usados na página produtos.tsx
*/
const produtos: Produto[] = [
  {
    id: 1,
    slug: "produto-01",
    nome: "Produto Premium 01",
    fabricante: "Marca Premium",
    categoria: "Recuperação",
    preco: 1100,
    imagem: "/produtos/produto-01.png",
    marca: "MARCA",
    estoque: true,
    descricao:
      "Produto selecionado com foco em qualidade, procedência e excelente experiência de compra.",
    detalhes: [
      "Produto original e lacrado",
      "Procedência verificada",
      "Embalagem protegida",
      "Atendimento especializado",
    ],
  },

  {
    id: 2,
    slug: "produto-02",
    nome: "Produto Premium 02",
    fabricante: "Marca Premium",
    categoria: "Recuperação",
    preco: 1000,
    imagem: "/produtos/produto-02.png",
    marca: "MARCA",
    estoque: true,
    descricao:
      "Produto selecionado com atenção à qualidade, conservação e procedência.",
    detalhes: [
      "Produto original e lacrado",
      "Procedência verificada",
      "Envio protegido",
      "Suporte ao cliente",
    ],
  },

  {
    id: 3,
    slug: "produto-03",
    nome: "Produto Premium 03",
    fabricante: "Marca Labs",
    categoria: "Emagrecimento",
    preco: 575,
    imagem: "/produtos/produto-03.png",
    marca: "LABS",
    estoque: true,
    descricao:
      "Produto selecionado de fornecedor especializado e apresentado com informações claras ao consumidor.",
    detalhes: [
      "Produto lacrado",
      "Informações de lote quando disponíveis",
      "Embalagem protegida",
      "Atendimento via WhatsApp",
    ],
  },

  {
    id: 4,
    slug: "produto-04",
    nome: "Produto Premium 04",
    fabricante: "Renew",
    categoria: "Performance",
    preco: 650,
    imagem: "/produtos/produto-04.png",
    marca: "RENEW",
    estoque: true,
    descricao:
      "Produto premium selecionado para compor nosso catálogo com foco em qualidade e procedência.",
    detalhes: [
      "Produto original",
      "Procedência controlada",
      "Envio seguro",
      "Suporte especializado",
    ],
  },

  {
    id: 5,
    slug: "produto-05",
    nome: "Produto Premium 05",
    fabricante: "Marca Health",
    categoria: "Emagrecimento",
    preco: 600,
    imagem: "/produtos/produto-05.png",
    marca: "PREMIUM",
    estoque: true,
    descricao:
      "Produto selecionado com critérios internos de qualidade e conferência.",
    detalhes: [
      "Produto lacrado",
      "Conferência antes do envio",
      "Embalagem adequada",
      "Suporte ao comprador",
    ],
  },

  {
    id: 6,
    slug: "produto-06",
    nome: "Produto Premium 06",
    fabricante: "Marca Health",
    categoria: "Emagrecimento",
    preco: 250,
    imagem: "/produtos/produto-06.png",
    marca: "PREMIUM",
    estoque: true,
    descricao:
      "Produto disponível em nosso catálogo com atendimento e suporte durante a compra.",
    detalhes: [
      "Produto original",
      "Produto lacrado",
      "Envio protegido",
      "Atendimento especializado",
    ],
  },

  {
    id: 7,
    slug: "produto-07",
    nome: "Produto Premium 07",
    fabricante: "Renew",
    categoria: "Recuperação",
    preco: 990,
    imagem: "/produtos/produto-07.png",
    marca: "RENEW",
    estoque: true,
    descricao:
      "Produto selecionado visando procedência, integridade da embalagem e experiência do cliente.",
    detalhes: [
      "Procedência verificada",
      "Conferência do pedido",
      "Embalagem protegida",
      "Suporte disponível",
    ],
  },

  {
    id: 8,
    slug: "produto-08",
    nome: "Produto Premium 08",
    fabricante: "Renew",
    categoria: "Recuperação",
    preco: 700,
    imagem: "/produtos/produto-08.png",
    marca: "RENEW",
    estoque: true,
    descricao:
      "Produto premium apresentado com informações de fabricante e categoria.",
    detalhes: [
      "Produto original",
      "Embalagem lacrada",
      "Envio protegido",
      "Atendimento ao cliente",
    ],
  },

  {
    id: 9,
    slug: "produto-09",
    nome: "Produto Premium 09",
    fabricante: "Renew",
    categoria: "Recuperação",
    preco: 800,
    imagem: "/produtos/produto-09.png",
    marca: "RENEW",
    estoque: true,
    descricao:
      "Produto integrante do catálogo premium da loja.",
    detalhes: [
      "Produto lacrado",
      "Procedência controlada",
      "Envio seguro",
      "Suporte especializado",
    ],
  },

  {
    id: 10,
    slug: "produto-10",
    nome: "Produto Premium 10",
    fabricante: "Renew",
    categoria: "Emagrecimento",
    preco: 800,
    imagem: "/produtos/produto-10.png",
    marca: "RENEW",
    estoque: true,
    descricao:
      "Produto selecionado para nosso catálogo com foco em qualidade e procedência.",
    detalhes: [
      "Produto original",
      "Conferência antes do envio",
      "Embalagem protegida",
      "Suporte disponível",
    ],
  },

  {
    id: 11,
    slug: "produto-11",
    nome: "Produto Premium 11",
    fabricante: "Marca Pharma",
    categoria: "Emagrecimento",
    preco: 1100,
    imagem: "/produtos/produto-11.png",
    marca: "CANETA",
    estoque: true,
    descricao:
      "Produto selecionado de fornecedor especializado para composição do catálogo.",
    detalhes: [
      "Produto lacrado",
      "Procedência verificada",
      "Conferência do pedido",
      "Atendimento especializado",
    ],
  },

  {
    id: 12,
    slug: "produto-12",
    nome: "Produto Premium 12",
    fabricante: "Marca Labs",
    categoria: "Emagrecimento",
    preco: 1250,
    imagem: "/produtos/produto-12.png",
    marca: "PREMIUM",
    estoque: true,
    descricao:
      "Produto premium selecionado e apresentado com informações transparentes.",
    detalhes: [
      "Produto original",
      "Embalagem lacrada",
      "Envio protegido",
      "Atendimento via WhatsApp",
    ],
  },

  {
    id: 13,
    slug: "produto-13",
    nome: "Produto Premium 13",
    fabricante: "Marca Pharma",
    categoria: "Emagrecimento",
    preco: 600,
    imagem: "/produtos/produto-13.png",
    marca: "TG",
    estoque: true,
    descricao:
      "Produto disponível em nosso catálogo premium.",
    detalhes: [
      "Produto lacrado",
      "Procedência controlada",
      "Conferência antes do envio",
      "Suporte ao comprador",
    ],
  },

  {
    id: 14,
    slug: "produto-14",
    nome: "Produto Premium 14",
    fabricante: "Marca Pharma",
    categoria: "Emagrecimento",
    preco: 250,
    imagem: "/produtos/produto-14.png",
    marca: "TG",
    estoque: true,
    descricao:
      "Produto selecionado com critérios internos de qualidade e procedência.",
    detalhes: [
      "Produto original",
      "Embalagem protegida",
      "Envio seguro",
      "Atendimento especializado",
    ],
  },

  {
    id: 15,
    slug: "produto-15",
    nome: "Produto Premium 15",
    fabricante: "Marca Labs",
    categoria: "Emagrecimento",
    preco: 575,
    imagem: "/produtos/produto-15.png",
    marca: "LABS",
    estoque: true,
    descricao:
      "Produto integrante do catálogo com atendimento e suporte durante a compra.",
    detalhes: [
      "Produto lacrado",
      "Procedência verificada",
      "Conferência do pedido",
      "Suporte disponível",
    ],
  },

  {
    id: 16,
    slug: "produto-16",
    nome: "Produto Premium 16",
    fabricante: "Marca Pharma",
    categoria: "Emagrecimento",
    preco: 2450,
    imagem: "/produtos/produto-16.png",
    marca: "PREMIUM",
    estoque: true,
    descricao:
      "Produto premium selecionado para nosso catálogo.",
    detalhes: [
      "Produto original",
      "Produto lacrado",
      "Envio protegido",
      "Atendimento ao cliente",
    ],
  },
];

function ProdutoDetalhesPage() {
  const { slug } = Route.useParams();

  const produto = produtos.find((item) => item.slug === slug);

  /*
    CASO O PRODUTO NÃO EXISTA
  */
  if (!produto) {
    return (
      <div className="min-h-[70vh] bg-[#f7f8fa] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-black text-[#17145c]">
            Produto não encontrado
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            O produto que você está procurando não está disponível.
          </p>

          <Link
            to="/produtos"
            className="mt-6 inline-flex rounded-lg bg-[#21196f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2d2481]"
          >
            Voltar aos produtos
          </Link>
        </div>
      </div>
    );
  }

  const whatsapp = `https://wa.me/5571927501866?text=${encodeURIComponent(
    `Olá! Gostaria de informações sobre o produto ${produto.nome}.`
  )}`;

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* CABEÇALHO DA PÁGINA */}
      <section className="bg-[#21196f]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#d6b740] transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Voltar aos produtos
          </Link>

          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#d6b740]">
            {produto.categoria}
          </p>

          <h1 className="mt-1 text-2xl font-black text-white md:text-4xl">
            {produto.nome}
          </h1>
        </div>
      </section>

      {/* PRODUTO */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">
          {/* IMAGEM */}
          <div className="relative flex min-h-[450px] items-center justify-center bg-[#fafafa] p-8">
            {produto.estoque && (
              <span className="absolute left-6 top-6 rounded-full bg-[#dffbea] px-4 py-1.5 text-xs font-bold text-emerald-700">
                Em estoque
              </span>
            )}

            <span className="absolute right-6 top-6 rounded-full bg-[#d0aa38] px-4 py-1.5 text-[10px] font-bold uppercase text-white">
              {produto.marca}
            </span>

            <img
              src={produto.imagem}
              alt={produto.nome}
              className="max-h-[420px] w-full max-w-[480px] object-contain"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div className="flex flex-col p-7 md:p-10">
            <p className="text-sm text-gray-400">
              {produto.fabricante}
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-[#17145c] md:text-4xl">
              {produto.nome}
            </h2>

            <div className="mt-4">
              <span className="rounded-full bg-[#f1edff] px-4 py-1.5 text-xs font-semibold text-[#21196f]">
                {produto.categoria}
              </span>
            </div>

            <p className="mt-7 text-3xl font-black text-[#17145c]">
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              {produto.descricao}
            </p>

            {/* DETALHES */}
            <div className="mt-7 space-y-3">
              {produto.detalhes.map((detalhe) => (
                <div
                  key={detalhe}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#d0aa38]"
                  />

                  <p className="text-sm text-gray-600">
                    {detalhe}
                  </p>
                </div>
              ))}
            </div>

            {/* BOTÃO */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d0aa38] px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b8912c]"
            >
              <MessageCircle size={18} />
              Consultar pelo WhatsApp
            </a>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              Fale com nossa equipe para consultar disponibilidade e informações
              sobre o produto.
            </p>
          </div>
        </div>

        {/* DIFERENCIAIS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Beneficio
            icon={<ShieldCheck size={25} />}
            titulo="Compra Segura"
            descricao="Ambiente protegido durante sua navegação."
          />

          <Beneficio
            icon={<Truck size={25} />}
            titulo="Envio Protegido"
            descricao="Preparação cuidadosa do pedido para envio."
          />

          <Beneficio
            icon={<PackageCheck size={25} />}
            titulo="Conferência"
            descricao="Pedidos conferidos antes da expedição."
          />
        </div>
      </main>
    </div>
  );
}

function Beneficio({
  icon,
  titulo,
  descricao,
}: {
  icon: React.ReactNode;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1edff] text-[#21196f]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#17145c]">
          {titulo}
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {descricao}
        </p>
      </div>
    </div>
  );
}