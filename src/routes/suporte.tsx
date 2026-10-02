import { createFileRoute, Link } from "@tanstack/react-router";

import {

  MessageCircle,

  Mail,

  Clock3,

  ChevronDown,

  Send,

} from "lucide-react";

import { useState } from "react";



export const Route = createFileRoute("/suporte")({

  component: SuportePage,

});



const faqs = [

  {

    pergunta: "Quais são os métodos de pagamento aceitos?",

    resposta:

      "Os métodos disponíveis são exibidos no checkout da loja. Quando disponível, o pagamento poderá ser realizado via PIX por QR Code ou código Copia e Cola.",

  },

  {

    pergunta: "Qual o prazo de entrega?",

    resposta:

      "O prazo depende da sua região, disponibilidade do produto e modalidade de envio selecionada. A estimativa é apresentada durante a compra.",

  },

  {

    pergunta: "Como funciona a política de troca ou devolução?",

    resposta:

      "As solicitações são analisadas conforme o Código de Defesa do Consumidor e as condições descritas nos Termos de Uso da loja.",

  },

  {

    pergunta: "Os produtos possuem informações de procedência?",

    resposta:

      "As informações disponíveis de procedência, lote, validade, conservação e fabricante são mantidas de acordo com os dados fornecidos pelos responsáveis pelos produtos.",

  },

  {

    pergunta: "Como devo armazenar os produtos?",

    resposta:

      "Siga sempre as orientações presentes no rótulo, embalagem ou material fornecido com o produto. Em caso de dúvida, entre em contato com nosso suporte.",

  },

  {

    pergunta: "Posso combinar diferentes pedidos?",

    resposta:

      "Isso dependerá do status de processamento e envio. Entre em contato com nossa equipe para verificarmos se ainda é possível realizar a alteração.",

  },

  {

    pergunta: "Como rastrear meu pedido?",

    resposta:

      "Quando o envio possuir rastreamento, as informações serão disponibilizadas após a postagem do pedido.",

  },

];



function SuportePage() {

  const [aberto, setAberto] = useState<number | null>(null);



  const whatsappUrl =

    "https://wa.me/5571927501866?text=Olá,%20preciso%20de%20ajuda%20com%20meu%20pedido.";



  const email = "clinicacronosmg@gmail.com";



  return (

    <div className="min-h-screen bg-[#f7f8fa] text-[#17145c]">

      {/* HERO */}

      <section className="bg-[#21196f] text-white">

        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">

          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#d6b740]/40 bg-[#d6b740]/10 px-4 py-2 text-sm font-bold text-[#d6b740] transition hover:bg-[#d6b740] hover:text-white"
          >
           ← Voltar para o início
          </Link>

          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d6b740]">

            Ajuda

          </p>



          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">

            Suporte

          </h1>



          <p className="mt-3 text-sm text-white/85 md:text-base">

            Estamos aqui para ajudar você em tudo que precisar.

          </p>

        </div>

      </section>



      {/* CONTEÚDO */}

      <main className="mx-auto max-w-6xl px-5 py-9 md:py-12">

        {/* CARDS */}

        <div className="grid gap-5 md:grid-cols-3">

          {/* WHATSAPP */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">

              <MessageCircle size={25} />

            </div>



            <h2 className="mt-5 text-lg font-extrabold text-[#17145c]">

              WhatsApp

            </h2>



            <p className="mt-2 text-sm text-gray-500">

              (71) 92750-1866

            </p>



            <a

              href={whatsappUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="mt-5 inline-flex rounded-lg bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-600"

            >

              Iniciar conversa

            </a>

          </div>



          {/* EMAIL */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#21196f] text-white">

              <Mail size={25} />

            </div>



            <h2 className="mt-5 text-lg font-extrabold text-[#17145c]">

              E-mail

            </h2>



            <p className="mt-2 break-all text-sm text-gray-500">

              {email}

            </p>



            <a

              href={`mailto:${email}`}

              className="mt-5 inline-flex rounded-lg bg-[#21196f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#2d2481]"

            >

              Enviar e-mail

            </a>

          </div>



          {/* HORÁRIO */}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#d0aa38] text-white">

              <Clock3 size={25} />

            </div>



            <h2 className="mt-5 text-lg font-extrabold text-[#17145c]">

              Horário de Atendimento

            </h2>



            <p className="mt-2 text-sm text-gray-500">

              24h

            </p>

          </div>

        </div>



        {/* SEGUNDA PARTE */}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* FORMULÁRIO */}

          <section>

            <h2 className="mb-5 text-2xl font-black uppercase text-[#17145c]">

              Envie uma mensagem

            </h2>



            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <form

                onSubmit={(e) => {

                  e.preventDefault();



                  const form = e.currentTarget;

                  const data = new FormData(form);



                  const nome = data.get("nome");

                  const emailForm = data.get("email");

                  const assunto = data.get("assunto");

                  const mensagem = data.get("mensagem");



                  const subject = encodeURIComponent(

                    `Suporte - ${String(assunto)}`

                  );



                  const body = encodeURIComponent(

                    `Nome: ${nome}\nE-mail: ${emailForm}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`

                  );



                  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

                }}

                className="space-y-5"

              >

                <div className="grid gap-4 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold">

                      Nome \*

                    </label>



                    <input

                      type="text"

                      name="nome"

                      required

                      placeholder="Seu nome completo"

                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#21196f] focus:ring-2 focus:ring-[#21196f]/10"

                    />

                  </div>



                  <div>

                    <label className="mb-2 block text-sm font-semibold">

                      E-mail \*

                    </label>



                    <input

                      type="email"

                      name="email"

                      required

                      placeholder="seu@email.com"

                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#21196f] focus:ring-2 focus:ring-[#21196f]/10"

                    />

                  </div>

                </div>



                <div>

                  <label className="mb-2 block text-sm font-semibold">

                    Assunto \*

                  </label>



                  <select

                    name="assunto"

                    required

                    defaultValue=""

                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#21196f] focus:ring-2 focus:ring-[#21196f]/10"

                  >

                    <option value="" disabled>

                      Selecione um assunto

                    </option>



                    <option value="Pedido">Pedido</option>

                    <option value="Pagamento">Pagamento</option>

                    <option value="Entrega">Entrega</option>

                    <option value="Troca ou devolução">

                      Troca ou devolução

                    </option>

                    <option value="Produto">Produto</option>

                    <option value="Conta">Minha conta</option>

                    <option value="Outro">Outro</option>

                  </select>

                </div>



                <div>

                  <label className="mb-2 block text-sm font-semibold">

                    Mensagem \*

                  </label>



                  <textarea

                    name="mensagem"

                    required

                    rows={6}

                    placeholder="Descreva sua dúvida ou mensagem..."

                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#21196f] focus:ring-2 focus:ring-[#21196f]/10"

                  />

                </div>



                <button

                  type="submit"

                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#21196f] px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#2d2481]"

                >

                  <Send size={16} />

                  Enviar mensagem

                </button>

              </form>

            </div>

          </section>



          {/* FAQ */}

          <section>

            <h2 className="mb-5 text-2xl font-black uppercase text-[#17145c]">

              Perguntas Frequentes

            </h2>



            <div className="space-y-3">

              {faqs.map((faq, index) => {

                const estaAberto = aberto === index;



                return (

                  <div

                    key={faq.pergunta}

                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"

                  >

                    <button

                      type="button"

                      onClick={() =>

                        setAberto(estaAberto ? null : index)

                      }

                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"

                    >

                      <span className="text-sm font-bold text-[#17145c]">

                        {faq.pergunta}

                      </span>



                      <ChevronDown

                        size={18}

                        className={`shrink-0 text-[#d0aa38] transition-transform ${

                          estaAberto ? "rotate-180" : ""

                        }`}

                      />

                    </button>



                    {estaAberto && (

                      <div className="border-t border-gray-100 px-5 py-4">

                        <p className="text-sm leading-6 text-gray-600">

                          {faq.resposta}

                        </p>

                      </div>

                    )}

                  </div>

                );

              })}

            </div>

          </section>

        </div>

      </main>

    </div>

  );

}