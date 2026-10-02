import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Thermometer,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/politica-de-qualidade")({
  component: PoliticaQualidade,
});

function PoliticaQualidade() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#17145c]">
      {/* HERO */}
      <section className="bg-[#21196f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs font-bold text-[#d6b740] transition hover:text-white"
            >
              <ArrowLeft size={15} />
              VOLTAR AO INÍCIO
            </Link>

            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#e0bd4f]">
              <Award size={13} />
              Compromisso com Qualidade & Procedência
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            Política de Qualidade
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
            Nosso compromisso é oferecer uma experiência segura, transparente e
            responsável, com atenção à procedência, armazenamento, transporte e
            atendimento ao cliente.
          </p>

          <p className="mt-5 text-[11px] text-white/55">
            Política de Qualidade • Atualizada em Outubro de 2026
          </p>
        </div>
      </section>

      {/* CARDS SUPERIORES */}
      <div className="mx-auto -mt-5 grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        <InfoCard
          icon={<Award size={19} />}
          title="Procedência Controlada"
          text="Produtos selecionados de fornecedores e distribuidores de acordo com os critérios internos da empresa."
          iconClass="bg-[#fff7df] text-[#c89f28]"
        />

        <InfoCard
          icon={<Thermometer size={19} />}
          title="Armazenamento Adequado"
          text="Cuidados de armazenamento e transporte são observados conforme as características e orientações de cada produto."
          iconClass="bg-[#edf3ff] text-blue-600"
        />

        <InfoCard
          icon={<FileCheck2 size={19} />}
          title="Informações e Rastreabilidade"
          text="Mantemos registros relacionados aos pedidos, fornecedores e informações disponíveis dos produtos comercializados."
          iconClass="bg-[#e9fff5] text-emerald-600"
        />
      </div>

      {/* CONTEÚDO */}
      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {/* 1 */}
          <Section
            icon={<ShieldCheck size={18} />}
            title="1. Nossa Missão de Qualidade"
          >
            <p>
              A Clínica Emagrecedora Dr. Mauro Lúcio Rodrigues Coelho Jácome
              estabelece esta Política de Qualidade com o objetivo de orientar
              seus processos de atendimento, comercialização, conferência,
              armazenamento e expedição.
            </p>

            <p>
              Buscamos manter critérios internos que priorizem transparência,
              organização, procedência e segurança durante todas as etapas do
              relacionamento com o cliente.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Critérios de Seleção e Procedência">
            <p>
              A seleção dos produtos comercializados considera informações
              fornecidas por fabricantes, fornecedores ou distribuidores, além
              dos critérios internos adotados pela empresa.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <QualityCard
                title="Procedência"
                text="Buscamos trabalhar com produtos identificados e provenientes de fornecedores selecionados."
              />

              <QualityCard
                title="Identificação"
                text="Os produtos devem possuir identificação e informações compatíveis com sua natureza e comercialização."
              />

              <QualityCard
                title="Integridade"
                text="As condições visuais e físicas das embalagens podem ser verificadas antes da expedição."
              />

              <QualityCard
                title="Informações do Produto"
                text="Quando disponíveis, informações de lote, validade e conservação são mantidas conforme fornecidas pelo responsável pelo produto."
              />
            </div>
          </Section>

          {/* 3 */}
          <Section title="3. Armazenamento e Transporte">
            <p>
              Produtos que exigem condições específicas de conservação são
              tratados de acordo com as orientações apresentadas pelo fabricante,
              fornecedor ou responsável técnico aplicável.
            </p>

            <div className="mt-4 space-y-3">
              <CheckItem>
                <strong>Acondicionamento:</strong> Sempre que necessário,
                utilizamos embalagens compatíveis com as características do
                produto durante a preparação do pedido.
              </CheckItem>

              <CheckItem>
                <strong>Conferência:</strong> Antes da expedição, os pedidos
                podem passar por conferência para verificar itens, quantidade e
                integridade das embalagens.
              </CheckItem>

              <CheckItem>
                <strong>Orientações de Conservação:</strong> O cliente deve
                respeitar as condições de armazenamento indicadas na embalagem,
                rótulo ou material fornecido com o produto.
              </CheckItem>
            </div>
          </Section>

          {/* 4 */}
          <Section title="4. Rastreabilidade dos Pedidos">
            <p>
              Mantemos registros relacionados às compras realizadas na
              plataforma, incluindo identificação do pedido, produtos adquiridos,
              pagamento, status e informações de entrega.
            </p>

            <p>
              Quando houver dados de lote ou outras informações de
              rastreabilidade fornecidas pelo fabricante ou distribuidor, esses
              dados poderão ser utilizados para auxiliar verificações internas e
              solicitações dos clientes.
            </p>
          </Section>

          {/* 5 */}
          <Section title="5. Conferência e Controle Interno">
            <p>
              Antes do envio, os pedidos podem passar por etapas internas de
              conferência destinadas a reduzir erros e melhorar a experiência do
              cliente.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <QualityCard
                title="Conferência de Itens"
                text="Verificação dos produtos incluídos no pedido antes da expedição."
              />

              <QualityCard
                title="Conferência de Quantidade"
                text="Comparação entre os itens separados e as informações registradas na compra."
              />

              <QualityCard
                title="Verificação da Embalagem"
                text="Inspeção visual das condições externas dos produtos quando aplicável."
              />

              <QualityCard
                title="Dados de Entrega"
                text="Validação das informações fornecidas pelo cliente para preparação do envio."
              />
            </div>
          </Section>

          {/* 6 */}
          <Section title="6. Melhoria Contínua">
            <p>
              As manifestações dos clientes são importantes para o aprimoramento
              dos nossos processos.
            </p>

            <p>
              Reclamações, dúvidas, sugestões ou relatos relacionados aos
              produtos e ao atendimento podem ser analisados pela equipe
              responsável para identificação de oportunidades de melhoria.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Compromisso com Transparência">
            <p>
              Buscamos apresentar informações de forma clara e compatível com os
              dados disponibilizados pelos fabricantes, fornecedores e demais
              responsáveis envolvidos na cadeia de comercialização.
            </p>

            <p>
              Caso o cliente necessite de informações adicionais sobre um
              produto, recomendamos entrar em contato com nossa equipe antes da
              utilização.
            </p>
          </Section>

          {/* SUPORTE */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-[#f8f9fb] p-6">
            <h2 className="text-lg font-bold text-[#17145c]">
              8. Central de Suporte à Qualidade
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Para dúvidas relacionadas à qualidade, procedência, armazenamento,
              pedidos ou informações dos produtos, entre em contato com nossa
              equipe.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5571927501866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-50"
              >
                <MessageCircle size={16} />
                WhatsApp: (71) 92750-1866
              </a>

              <a
                href="mailto:clinicacronosmg@gmail.com"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#17145c] transition hover:bg-gray-50"
              >
                <Mail size={16} className="text-[#d0aa38]" />
                clinicacronosmg@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   COMPONENTES
========================= */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-[#17145c]">
        {icon && <span className="text-[#d3ad3f]">{icon}</span>}
        {title}
      </h2>

      <div className="space-y-3 text-sm leading-6 text-gray-700">
        {children}
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  iconClass: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#17145c]">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function QualityCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-[#fafbfc] p-4">
      <h3 className="text-sm font-bold text-[#17145c]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-600">
        {text}
      </p>
    </div>
  );
}

function CheckItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 text-sm leading-6 text-gray-700">
      <CheckCircle2
        size={16}
        className="mt-1 shrink-0 text-[#d0aa38]"
      />

      <p>{children}</p>
    </div>
  );
}