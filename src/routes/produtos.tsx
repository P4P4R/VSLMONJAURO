import { createFileRoute, Link } from "@tanstack/react-router";

// Link já está importado junto com createFileRoute na linha acima.



import {

  Search,

  ShoppingBag,

  Lock,

  Package,

  Headphones,

  Star,

} from "lucide-react";

import { useMemo, useState } from "react";



export const Route = createFileRoute("/produtos")({

  component: ProdutosPage,

});



type Categoria =

  | "Emagrecimento"

  | "Recuperação"

  | "Performance";



type Produto = {

  id: number;

  slug: string;

  nome: string;

  fabricante: string;

  categoria: Categoria;

  preco: number;



  // CAMINHO DA IMAGEM DENTRO DA PASTA PUBLIC

  imagem: string;



  marca: string;

  estoque: boolean;

};



const produtos: Produto[] = [

  {

  id: 1,

  slug: "alluvi-glow-ghk-cu",

  nome: "Alluvi Glow GHK-Cu",

  fabricante: "Alluvi Healthcare",

  categoria: "Recuperação",

  preco: 1000,

  imagem: "/produtos/alluvi-glow-ghk-cu.png",

  marca: "CANETA",

  estoque: true,

},

  {

  id: 2,

  slug: "bionexis-ghk-cu-100mg",

  nome: "Bionexis GHK-Cu 100 mg",

  fabricante: "Bionexis Peptides",

  categoria: "Recuperação",

  preco: 1000,

  imagem: "/produtos/bionexis-ghk-cu-100mg.png",

  marca: "BIONEXIS",

  estoque: true,

},

  {

  id: 3,

  slug: "bionexis-retatrutide-60mg",

  nome: "Bionexis Retatrutide 60 mg",

  fabricante: "Bionexis Peptides",

  categoria: "Emagrecimento",

  preco: 550,

  imagem: "/produtos/bionexis-retatrutide-60mg.png",

  marca: "BIONEXIS",

  estoque: true,

},

  {

  id: 4,

  slug: "motsc-renew-40mg",

  nome: "MOTS-C 40 mg",

  fabricante: "Renew Peptides",

  categoria: "Performance",

  preco: 600,

  imagem: "/produtos/motsc-renew-40mg.png",

  marca: "RENEW",

  estoque: true,

},



{

  id: 5,

  slug: "mounjaro-15mg",

  nome: "Mounjaro 15 mg",

  fabricante: "Eli Lilly",

  categoria: "Emagrecimento",

  preco: 500,

  imagem: "/produtos/mounjaro-15mg.png",

  marca: "MOUNJARO",

  estoque: true,

},



{

  id: 6,

  slug: "mounjaro-5mg",

  nome: "Mounjaro 5 mg",

  fabricante: "Eli Lilly",

  categoria: "Emagrecimento",

  preco: 200,

  imagem: "/produtos/mounjaro-5mg.png",

  marca: "MOUNJARO",

  estoque: true,

},



{

  id: 7,

  slug: "ghk-cu-renew-100mg",

  nome: "Peptídeo GHK-CU 100 mg",

  fabricante: "Renew Peptides",

  categoria: "Recuperação",

  preco: 900,

  imagem: "/produtos/ghk-cu-renew-100mg.png",

  marca: "RENEW",

  estoque: true,

},



{

  id: 8,

  slug: "glow-renew-70mg",

  nome: "Peptídeo GLOW 70 mg",

  fabricante: "Renew Peptides",

  categoria: "Recuperação",

  preco: 700,

  imagem: "/produtos/glow-renew-70mg.png",

  marca: "RENEW",

  estoque: true,

},



{

  id: 9,

  slug: "klow-renew-80mg",

  nome: "Peptídeo KLOW 80 mg",

  fabricante: "Renew Peptides",

  categoria: "Recuperação",

  preco: 800,

  imagem: "/produtos/klow-renew-80mg.png",

  marca: "RENEW",

  estoque: true,

},



{

  id: 10,

  slug: "retatrutide-renew-60mg",

  nome: "Peptídeo Retatrutide 60 mg",

  fabricante: "Renew Peptides",

  categoria: "Emagrecimento",

  preco: 800,

  imagem: "/produtos/retatrutide-renew-60mg.png",

  marca: "RENEW",

  estoque: true,

},



{

  id: 11,

  slug: "retatrutide-synedica-40mg",

  nome: "Retatrutide Synedica 40 mg",

  fabricante: "Synedica",

  categoria: "Emagrecimento",

  preco: 1000,

  imagem: "/produtos/retatrutide-synedica-40mg.png",

  marca: "CANETA",

  estoque: true,

},



{

  id: 12,

  slug: "retatrutide-synedica-90mg",

  nome: "Retatrutide Synedica 90 mg",

  fabricante: "Synedica Labs",

  categoria: "Emagrecimento",

  preco: 1200,

  imagem: "/produtos/retatrutide-synedica-90mg.png",

  marca: "INJETÁVEL",

  estoque: true,

},



{

  id: 13,

  slug: "tg-15mg",

  nome: "T.G. 15 mg",

  fabricante: "Indufar Cisa",

  categoria: "Emagrecimento",

  preco: 500,

  imagem: "/produtos/tg-15mg.png",

  marca: "T.G.15",

  estoque: true,

},



{

  id: 14,

  slug: "tg-5mg",

  nome: "T.G. 5 mg",

  fabricante: "Indufar Cisa",

  categoria: "Emagrecimento",

  preco: 200,

  imagem: "/produtos/tg-5mg.png",

  marca: "T.G.5",

  estoque: true,

},



{

  id: 15,

  slug: "lipoless-md15-tirzepatida",

  nome: "Tirzepatida 15 mg (Lipoless MD 15)",

  fabricante: "Via Intrabsa",

  categoria: "Emagrecimento",

  preco: 555,

  imagem: "/produtos/lipoless-md15-tirzepatida.png",

  marca: "LIPOLESS",

  estoque: true,

},



{

  id: 16,

  slug: "tirzepatida-60mg-t60",

  nome: "Tirzepatida 60 mg (T60)",

  fabricante: "T.G. / Cisa",

  categoria: "Emagrecimento",

  preco: 850,

  imagem: "/produtos/tg5-product.png",

  marca: "T60",

  estoque: true,

},

];



const categorias = [

  "Todos",

  "Emagrecimento",

  "Recuperação",

  "Performance",

] as const;



type FiltroCategoria = (typeof categorias)[number];



function ProdutosPage() {

  const [busca, setBusca] = useState("");

  const [categoria, setCategoria] =

    useState<FiltroCategoria>("Todos");



  const produtosFiltrados = useMemo(() => {

    return produtos.filter((produto) => {

      const termo = busca.toLowerCase().trim();



      const correspondeBusca =

        produto.nome.toLowerCase().includes(termo) ||

        produto.fabricante.toLowerCase().includes(termo) ||

        produto.marca.toLowerCase().includes(termo);



      const correspondeCategoria =

        categoria === "Todos" ||

        produto.categoria === categoria;



      return correspondeBusca && correspondeCategoria;

    });

  }, [busca, categoria]);



  return (

    <div className="min-h-screen bg-[#f7f8fa]">



      {/* =========================

          HERO

      ========================== */}

      <section className="bg-[#21196f] text-white">

        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">


          <Link

  to="/"

  className="mb-4 inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold hover:text-white"

>

  ← Voltar para o início

</Link>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d6b740]">

            Catálogo

          </p>

          <h1 className="text-3xl font-black uppercase md:text-5xl">

            Nossos Produtos

          </h1>



          <p className="mt-3 text-sm text-white/80 md:text-base">

            Produtos selecionados com foco em qualidade,

            procedência e atendimento especializado.

          </p>



        </div>

      </section>



      {/* =========================

          CONTEÚDO

      ========================== */}

      <main className="mx-auto max-w-7xl px-6 py-8 md:py-10">



        {/* BUSCA E FILTROS */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">



          <div className="flex flex-col gap-4 lg:flex-row">



            {/* BUSCA */}

            <div className="relative flex-1">



              <Search

                size={18}

                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"

              />



              <input

                type="text"

                value={busca}

                onChange={(e) => setBusca(e.target.value)}

                placeholder="Buscar produtos..."

                className="

                  w-full

                  rounded-xl

                  border

                  border-gray-200

                  bg-white

                  py-3

                  pl-11

                  pr-4

                  text-sm

                  text-gray-700

                  outline-none

                  transition

                  focus:border-[#21196f]

                  focus:ring-2

                  focus:ring-[#21196f]/10

                "

              />



            </div>



            {/* FILTROS */}

            <div className="flex flex-wrap gap-2">



              {categorias.map((item) => {



                const ativo = categoria === item;



                return (

                  <button

                    key={item}

                    type="button"

                    onClick={() => setCategoria(item)}

                    className={`

                      rounded-xl

                      px-5

                      py-3

                      text-xs

                      font-semibold

                      transition



                      ${

                        ativo

                          ? "bg-[#21196f] text-white shadow-sm"

                          : "bg-[#f3f4f6] text-gray-600 hover:bg-gray-200"

                      }

                    `}

                  >

                    {item}

                  </button>

                );

              })}



            </div>

          </div>

        </div>



        {/* CONTADOR */}

        <div className="mb-5 mt-7">



          <p className="text-sm text-gray-500">

            <span className="font-semibold text-[#21196f]">

              {produtosFiltrados.length}

            </span>{" "}

            {produtosFiltrados.length === 1

              ? "produto encontrado"

              : "produtos encontrados"}

          </p>



        </div>



        {/* =========================

            GRID DE PRODUTOS

        ========================== */}

        {produtosFiltrados.length > 0 ? (



          <div

            className="

              grid

              grid-cols-1

              gap-5

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-4

            "

          >



            {produtosFiltrados.map((produto) => (



              <ProdutoCard

                key={produto.id}

                produto={produto}

              />



            ))}



          </div>



        ) : (



          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">



            <Search

              size={40}

              className="mx-auto mb-4 text-gray-300"

            />



            <h3 className="font-bold text-[#17145c]">

              Nenhum produto encontrado

            </h3>



            <p className="mt-2 text-sm text-gray-500">

              Tente alterar sua busca ou selecionar outra categoria.

            </p>



          </div>



        )}



        {/* =========================

            CARDS DE CONFIANÇA

        ========================== */}

        <section className="mt-12">



          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">



            <TrustCard

              icon={<Lock size={30} />}

              title="COMPRA SEGURA"

              text="Seus dados protegidos durante todo o processo."

            />



            <TrustCard

              icon={<Package size={30} />}

              title="ENTREGA DISCRETA"

              text="Embalagem preparada com atenção e descrição."

            />



            <TrustCard

              icon={<Headphones size={30} />}

              title="ATENDIMENTO ESPECIALIZADO"

              text="Equipe disponível para auxiliar você."

            />



            <TrustCard

              icon={<Star size={30} />}

              title="SATISFAÇÃO"

              text="Compromisso com atendimento e experiência do cliente."

            />



          </div>



        </section>



      </main>



    </div>

  );

}





/* ==========================================

   CARD DO PRODUTO

\========================================== */



function ProdutoCard({

  produto,

}: {

  produto: Produto;

}) {



  return (

    <article

      className="

        group

        flex

        min-h-[520px]

        flex-col

        overflow-hidden

        rounded-2xl

        border

        border-gray-200

        bg-white

        shadow-sm

        transition-all

        duration-300

        hover:-translate-y-1

        hover:shadow-lg

      "

    >



      {/* FOTO */}

      <div className="relative flex h-[285px] items-center justify-center bg-[#fafafa] p-6">



        {/* ESTOQUE */}

        {produto.estoque && (

          <span

            className="

              absolute

              left-4

              top-4

              rounded-full

              bg-[#dffbea]

              px-3

              py-1

              text-[10px]

              font-bold

              text-emerald-700

            "

          >

            Em estoque

          </span>

        )}



        {/* MARCA */}

        <span

          className="

            absolute

            right-4

            top-4

            rounded-full

            bg-[#d0aa38]

            px-3

            py-1

            text-[9px]

            font-bold

            uppercase

            text-white

          "

        >

          {produto.marca}

        </span>



        {/* IMAGEM */}

        <img

          src={produto.imagem}

          alt={produto.nome}

          className="

            h-[190px]

            w-full

            max-w-[240px]

            object-contain

            transition-transform

            duration-300

            group-hover:scale-105

          "

        />



      </div>



      {/* CONTEÚDO */}

      <div className="flex flex-1 flex-col p-5">



        {/* FABRICANTE */}

        <p className="text-xs text-gray-400">

          {produto.fabricante}

        </p>



        {/* NOME */}

        <h2 className="mt-1 min-h-[48px] text-base font-extrabold leading-snug text-[#17145c]">

          {produto.nome}

        </h2>



        {/* CATEGORIA */}

        <div className="mt-2">



          <span

            className="

              rounded-full

              bg-[#f1edff]

              px-3

              py-1

              text-[10px]

              font-semibold

              text-[#21196f]

            "

          >

            {produto.categoria}

          </span>



        </div>



        {/* PREÇO */}

        <p className="mt-4 text-xl font-black text-[#17145c]">



          {produto.preco.toLocaleString("pt-BR", {

            style: "currency",

            currency: "BRL",

          })}



        </p>



        {/* BOTÕES */}

        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">



          <a
  href={`https://wa.me/5571927501866?text=${encodeURIComponent(
    `Olá! Gostaria de mais detalhes sobre o produto ${produto.nome}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    items-center
    justify-center
    rounded-lg
    bg-[#21196f]
    px-3
    py-3
    text-center
    text-[11px]
    font-bold
    uppercase
    text-white
    transition
    hover:bg-[#2d2481]
  "
>
  Ver detalhes
</a>



          <a

            href={`https://wa.me/5571927501866?text=${encodeURIComponent(

              `Olá! Gostaria de informações sobre o produto ${produto.nome}.`

            )}`}

            target="_blank"

            rel="noopener noreferrer"

            className="

              flex

              items-center

              justify-center

              gap-1.5

              rounded-lg

              bg-[#d0aa38]

              px-3

              py-3

              text-center

              text-[11px]

              font-bold

              uppercase

              text-white

              transition

              hover:bg-[#b8912c]

            "

          >



            <ShoppingBag size={13} />



            Consultar



          </a>



        </div>



      </div>

    </article>

  );

}





/* ==========================================

   CARD DE CONFIANÇA

\========================================== */



function TrustCard({

  icon,

  title,

  text,

}: {

  icon: React.ReactNode;

  title: string;

  text: string;

}) {



  return (

    <div

      className="

        rounded-xl

        bg-[#21196f]

        px-5

        py-7

        text-center

        text-white

      "

    >



      <div className="mb-4 flex justify-center text-[#d6b740]">

        {icon}

      </div>



      <h3 className="text-xs font-black uppercase tracking-wide text-[#d6b740]">

        {title}

      </h3>



      <p className="mx-auto mt-2 max-w-[220px] text-xs leading-5 text-white/70">

        {text}

      </p>



    </div>

  );

}