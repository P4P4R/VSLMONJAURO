import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export const Route = createFileRoute("/conta")({
  component: MinhaContaPage,
});

function MinhaContaPage() {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");

  function consultarRastreio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const codigoLimpo = codigo.trim().toUpperCase().replace(/\s+/g, "");

    if (!codigoLimpo) {
      setErro("Digite o código de rastreio.");
      return;
    }

    setErro("");

    const url = `https://rastreamento.correios.com.br/app/index.php?objetos=${encodeURIComponent(
      codigoLimpo,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* HERO */}
      <section className="bg-[#21196f] text-white">
        <div className="mx-auto max-w-4xl px-5 py-12 text-center md:py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d6b740]">
            Portal do Cliente
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Minha Conta
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/90 md:text-base">
            Acompanhe o status de envio do seu pedido e consulte seu rastreio.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto flex max-w-md justify-center px-5 py-10">
        <div className="w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-5 text-center">
            <span className="inline-flex rounded-xl bg-[#21196f] px-6 py-3 text-xs font-bold uppercase text-white">
              Rastrear Pedido
            </span>
          </div>

          <h2 className="text-center text-base font-extrabold text-[#17145c]">
            Consultar Status do Pedido
          </h2>

          <p className="mt-2 text-center text-sm leading-5 text-gray-500">
            Digite o código de rastreio dos Correios para consultar o status
            real da entrega.
          </p>

          <form onSubmit={consultarRastreio} className="mt-6 space-y-3">

            <div className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                required
                type="text"
                value={codigo}
                onChange={(e) => {
                  setCodigo(e.target.value);

                  if (erro) {
                    setErro("");
                  }
                }}
                placeholder="Ex: AA123456789BR"
                autoComplete="off"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm uppercase text-gray-700 outline-none transition placeholder:normal-case placeholder:text-gray-400 focus:border-[#21196f] focus:ring-2 focus:ring-[#21196f]/10"
              />
            </div>

            {erro && (
              <p className="text-center text-xs font-semibold text-red-600">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#21196f] px-5 py-3.5 text-sm font-extrabold uppercase text-white shadow-md transition hover:bg-[#2d2481]"
            >
              <Search size={17} />
              Consultar Pedido
            </button>

          </form>

          <p className="mt-5 text-center text-[11px] leading-4 text-gray-400">
            A consulta é aberta diretamente no rastreamento oficial dos Correios.
          </p>

        </div>
      </section>
    </main>
  );
}