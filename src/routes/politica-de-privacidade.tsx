import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  ShieldCheck,
  LockKeyhole,
  Eye,
  PackageCheck,
  FileText,
  Mail,
  MessageCircle,
} from 'lucide-react'

export const Route = createFileRoute('/politica-de-privacidade')({
  component: PoliticaPrivacidade,
})

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#18144f]">

      {/* HERO */}
      <section className="bg-[#1f176b] text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-[#d8b451] hover:text-white"
            >
              <ArrowLeft size={16} />
              VOLTAR AO INÍCIO
            </Link>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#e4c35c]">
              🛡 Segurança & Conformidade LGPD
            </span>
          </div>

          <h1 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Política de Privacidade
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/85 md:text-lg">
            Seu sigilo, privacidade e a segurança das suas informações pessoais
            e de compra são prioridades fundamentais para nossa loja.
          </p>

          <p className="mt-5 text-xs text-white/60">
            Última atualização: Outubro de 2026 • Em conformidade com a Lei
            Federal nº 13.709/2018 (LGPD).
          </p>
        </div>
      </section>

      {/* CARDS SEGURANÇA */}
      <div className="mx-auto -mt-5 grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        <SecurityCard
          icon={<LockKeyhole size={20} />}
          title="Criptografia SSL"
          text="Todos os dados trafegados são protegidos por criptografia de ponta a ponta."
        />

        <SecurityCard
          icon={<Eye size={20} />}
          title="Privacidade"
          text="Seus dados não são vendidos ou compartilhados para fins não autorizados."
        />

        <SecurityCard
          icon={<PackageCheck size={20} />}
          title="Envio Discreto"
          text="Se aplicável, nossas embalagens e informações de entrega preservam sua privacidade."
        />
      </div>

      {/* CONTEÚDO */}
      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">

          <Section
            number="1"
            title="Informações Gerais e Compromisso"
          >
            <p>
              A presente Política de Privacidade estabelece as regras relativas
              ao tratamento dos dados fornecidos pelos usuários e clientes ao
              utilizarem nossa plataforma digital.
            </p>

            <p>
              Esta política foi desenvolvida em conformidade com a
              <strong> Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)</strong>,
              com o Marco Civil da Internet (Lei nº 12.965/2014) e demais
              legislações aplicáveis.
            </p>
          </Section>

          <Section number="2" title="Quais Dados Coletamos">
            <p>
              Para processar suas compras, prestar suporte e cumprir obrigações
              legais, podemos coletar:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Dados de identificação:</strong> nome completo e CPF,
                quando necessário.
              </li>

              <li>
                <strong>Dados de contato:</strong> telefone, WhatsApp e e-mail.
              </li>

              <li>
                <strong>Dados de entrega:</strong> CEP, endereço, número,
                complemento, bairro, cidade e estado.
              </li>

              <li>
                <strong>Dados de acesso:</strong> informações necessárias para
                funcionamento e segurança da conta.
              </li>

              <li>
                <strong>Informações da compra:</strong> produtos adquiridos,
                valor, status do pedido e informações relacionadas ao pagamento.
              </li>
            </ul>
          </Section>

          <Section number="3" title="Finalidade do Tratamento dos Dados">
            <p>
              As informações coletadas podem ser utilizadas para:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Processamento e confirmação dos pedidos.</li>
              <li>Envio de informações sobre pagamento e entrega.</li>
              <li>Atendimento ao cliente e suporte.</li>
              <li>Prevenção de fraudes e segurança da plataforma.</li>
              <li>Cumprimento de obrigações legais e fiscais.</li>
            </ul>
          </Section>

          <Section number="4" title="Segurança e Armazenamento dos Dados">
            <p>
              Adotamos medidas técnicas e administrativas destinadas a proteger
              suas informações contra acesso não autorizado, perda, alteração ou
              vazamento.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Ambiente protegido por HTTPS/TLS.</li>
              <li>Controle de acesso aos dados.</li>
              <li>Senhas armazenadas utilizando métodos seguros.</li>
              <li>Banco de dados protegido por políticas de segurança.</li>
            </ul>
          </Section>

          <Section number="5" title="Compartilhamento de Dados com Terceiros">
            <p>
              Não comercializamos seus dados pessoais. Algumas informações podem
              ser compartilhadas somente quando necessário para execução dos
              serviços contratados.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Operadores logísticos:</strong> para realização das
                entregas.
              </li>

              <li>
                <strong>Meios de pagamento:</strong> para processamento das
                transações.
              </li>

              <li>
                <strong>Autoridades públicas:</strong> quando exigido por lei ou
                determinação judicial.
              </li>
            </ul>
          </Section>

          <Section
            number="6"
            title="Seus Direitos como Titular de Dados (LGPD)"
          >
            <p>
              Nos termos da LGPD, você pode solicitar informações relacionadas
              aos seus dados pessoais.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">

              <RightCard
                title="Confirmação e Acesso"
                text="Solicitar confirmação sobre o tratamento e consultar os dados armazenados."
              />

              <RightCard
                title="Correção"
                text="Solicitar alteração ou atualização de dados incorretos ou desatualizados."
              />

              <RightCard
                title="Exclusão ou Anonimização"
                text="Solicitar a eliminação de dados quando permitido pela legislação."
              />

              <RightCard
                title="Revogação do Consentimento"
                text="Revogar autorizações concedidas anteriormente, quando aplicável."
              />

            </div>
          </Section>

          {/* CONTATO */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-[#f8f9fb] p-6">
            <h2 className="text-lg font-bold text-[#18145c]">
              7. Canal de Contato com o Responsável pelos Dados
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Para exercer seus direitos ou esclarecer dúvidas relacionadas a
              esta Política de Privacidade, entre em contato conosco.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <a
                href="mailto:clinicacronosmg@gmail.com
"
                className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                <Mail size={16} className="text-[#c9a43d]" />
                clinicacronosmg@gmail.com
              </a>

              <a
                href="https://wa.me/5571927501866"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50"
              >
                <MessageCircle size={16} />
                WhatsApp: (71) 92750-1866
              </a>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function SecurityCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f0ff] text-[#211773]">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#18145c]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-gray-500">{text}</p>
      </div>
    </div>
  )
}

function Section({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-9">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-[#18145c] md:text-xl">
        <FileText size={18} className="text-[#d3ad3f]" />
        {number}. {title}
      </h2>

      <div className="space-y-3 text-sm leading-6 text-gray-700">
        {children}
      </div>
    </section>
  )
}

function RightCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-[#fafafa] p-4">
      <strong className="text-sm text-[#17134f]">{title}</strong>

      <p className="mt-1 text-xs leading-5 text-gray-600">
        {text}
      </p>
    </div>
  )
}