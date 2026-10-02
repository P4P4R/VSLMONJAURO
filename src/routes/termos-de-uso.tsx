import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  FileText,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Mail,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermosDeUso,
});

function TermosDeUso() {
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
              <FileText size={13} />
              Condições Gerais de Compra & Contrato
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            Termos de Uso
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base">
            Estes termos regulam a navegação, aquisição de produtos e o
            relacionamento entre os clientes e a Clínica Emagrecedora Dr. Mauro
            Lúcio Rodrigues Coelho Jácome.
          </p>

          <p className="mt-5 text-[11px] text-white/55">
            Vigência: Outubro de 2026 • Em conformidade com o Código de Defesa
            do Consumidor e a legislação brasileira.
          </p>
        </div>
      </section>

      {/* CARDS SUPERIORES */}
      <div className="mx-auto -mt-5 grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        <InfoCard
          icon={<ShoppingBag size={19} />}
          title="Compra Segura"
          text="Processamento organizado dos pedidos, confirmação de pagamento e conferência das informações."
          iconClass="bg-[#eef0ff] text-[#21196f]"
        />

        <InfoCard
          icon={<Truck size={19} />}
          title="Envio Rastreável"
          text="Pedidos enviados conforme disponibilidade logística e com informações de rastreio quando aplicável."
          iconClass="bg-[#e9fff5] text-emerald-600"
        />

        <InfoCard
          icon={<ShieldCheck size={19} />}
          title="Garantia Legal CDC"
          text="Direitos de troca, devolução e arrependimento respeitados conforme a legislação aplicável."
          iconClass="bg-[#fff6e8] text-orange-500"
        />
      </div>

      {/* CONTEÚDO */}
      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {/* 1 */}
          <Section title="1. Aceite dos Termos">
            <p>
              Ao navegar nesta plataforma, criar uma conta ou concluir uma
              compra, o usuário declara ter lido, compreendido e concordado com
              os presentes Termos de Uso, bem como com as políticas
              complementares disponibilizadas no site.
            </p>

            <p>
              Caso o usuário não concorde com qualquer disposição aqui
              apresentada, recomenda-se que não utilize os serviços ou conclua
              compras na plataforma.
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Destinação dos Produtos e Orientações Técnicas">
            <p>
              Os produtos comercializados são apresentados com informações
              descritivas destinadas a auxiliar o consumidor na escolha e no
              uso adequado.
            </p>

            <div className="mt-4 flex gap-3 rounded-xl border border-[#f0c44c] bg-[#fff9e7] p-4 text-sm text-[#6d5511]">
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-orange-500"
              />

              <p>
                <strong>Aviso de Saúde e Responsabilidade:</strong> As
                informações apresentadas nas páginas de produtos possuem caráter
                informativo e não substituem avaliação, acompanhamento ou
                orientação de profissional habilitado quando necessário.
              </p>
            </div>
          </Section>

          {/* 3 */}
          <Section title="3. Pedidos, Preços e Formas de Pagamento">
            <p>
              A conclusão de uma compra na plataforma está sujeita às condições
              comerciais apresentadas no momento do pedido.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Preços:</strong> Os preços exibidos são apresentados em
                Reais (BRL) e podem ser alterados sem aviso prévio para compras
                futuras.
              </li>

              <li>
                <strong>Confirmação do Pedido:</strong> O pedido somente será
                considerado confirmado após a validação do pagamento.
              </li>

              <li>
                <strong>Pagamento:</strong> As formas disponíveis serão
                apresentadas no checkout da loja.
              </li>

              <li>
                <strong>PIX:</strong> Quando disponível, o pagamento poderá ser
                realizado por código PIX Copia e Cola ou QR Code.
              </li>

              <li>
                <strong>Disponibilidade:</strong> A conclusão do pedido está
                sujeita à disponibilidade dos produtos.
              </li>
            </ul>
          </Section>

          {/* 4 */}
          <Section title="4. Prazos de Envio, Frete e Transporte">
            <p>
              Após a confirmação do pagamento, o pedido será preparado e enviado
              de acordo com os prazos apresentados no momento da compra.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Frete:</strong> O valor e as condições de entrega serão
                apresentados durante o checkout.
              </li>

              <li>
                <strong>Frete Promocional:</strong> A loja poderá oferecer
                condições especiais ou frete grátis para determinados pedidos,
                produtos ou regiões.
              </li>

              <li>
                <strong>Rastreamento:</strong> Quando disponibilizado pela
                transportadora, o cliente poderá acompanhar a entrega por código
                de rastreamento.
              </li>

              <li>
                <strong>Dados de Entrega:</strong> É responsabilidade do cliente
                fornecer corretamente endereço, CEP, número e demais informações
                necessárias.
              </li>

              <li>
                <strong>Atrasos:</strong> Eventos externos relacionados à
                transportadora, condições climáticas, operações logísticas ou
                situações de força maior podem alterar o prazo inicialmente
                estimado.
              </li>
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Política de Trocas, Devoluções e Cancelamentos">
            <p>
              Os direitos do consumidor serão respeitados conforme o Código de
              Defesa do Consumidor e demais normas aplicáveis.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Direito de Arrependimento:</strong> Nas compras realizadas
                fora do estabelecimento comercial, o consumidor poderá exercer
                o direito de arrependimento nos casos e prazos previstos em lei.
              </li>

              <li>
                <strong>Produto com Avaria:</strong> Caso o pedido seja recebido
                com sinais de dano, o cliente deverá entrar em contato com o
                atendimento assim que possível.
              </li>

              <li>
                <strong>Devolução:</strong> Quando aplicável, o produto deverá
                ser devolvido de acordo com as orientações fornecidas pelo
                atendimento.
              </li>

              <li>
                <strong>Reembolso:</strong> Os reembolsos serão processados de
                acordo com a forma de pagamento utilizada e após análise da
                solicitação.
              </li>
            </ul>
          </Section>

          {/* 6 */}
          <Section title="6. Responsabilidades do Cliente">
            <p>Ao utilizar a plataforma, o cliente compromete-se a:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Fornecer informações verdadeiras e atualizadas.</li>
              <li>
                Manter seus dados de acesso em segurança e não compartilhá-los
                com terceiros.
              </li>
              <li>
                Conferir corretamente os dados de entrega antes de concluir a
                compra.
              </li>
              <li>
                Utilizar os produtos de acordo com as orientações e finalidades
                indicadas.
              </li>
              <li>
                Não utilizar a plataforma para práticas fraudulentas ou
                ilegais.
              </li>
            </ul>
          </Section>

          {/* 7 */}
          <Section title="7. Responsabilidades da Loja">
            <p>A loja compromete-se a:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Fornecer informações claras sobre os produtos comercializados.
              </li>

              <li>
                Processar os pedidos e pagamentos de forma organizada e segura.
              </li>

              <li>
                Manter canais de atendimento para suporte aos clientes.
              </li>

              <li>
                Respeitar os direitos do consumidor e a legislação aplicável.
              </li>

              <li>
                Proteger os dados pessoais conforme descrito na Política de
                Privacidade.
              </li>
            </ul>
          </Section>

          {/* 8 */}
          <Section title="8. Propriedade Intelectual">
            <p>
              Os elementos presentes neste site, incluindo identidade visual,
              textos, imagens, logotipos, layouts, ícones, materiais
              promocionais e demais conteúdos, podem estar protegidos por
              direitos de propriedade intelectual.
            </p>

            <p>
              Não é permitida a reprodução, modificação, distribuição ou
              utilização comercial do conteúdo sem autorização, salvo nos casos
              permitidos pela legislação.
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Privacidade e Proteção de Dados">
            <p>
              O tratamento de dados pessoais realizado pela plataforma segue as
              disposições descritas na nossa Política de Privacidade.
            </p>

            <Link
              to="/politica-de-privacidade"
              className="inline-flex font-semibold text-[#21196f] underline underline-offset-4 hover:text-[#d0aa38]"
            >
              Consultar Política de Privacidade
            </Link>
          </Section>

          {/* 10 */}
          <Section title="10. Alterações dos Termos">
            <p>
              Estes Termos de Uso poderão ser atualizados sempre que necessário
              para adequação legal, operacional ou comercial.
            </p>

            <p>
              A versão mais recente estará sempre disponível nesta página,
              acompanhada da respectiva data de atualização.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Legislação Aplicável">
            <p>
              Estes Termos são regidos pela legislação brasileira, especialmente
              pelas normas de proteção ao consumidor, comércio eletrônico e
              proteção de dados pessoais.
            </p>
          </Section>

          {/* CONTATO */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-[#f8f9fb] p-6">
            <h2 className="text-lg font-bold text-[#17145c]">
              12. Suporte e Central de Atendimento
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Para esclarecer dúvidas relacionadas a estes Termos de Uso,
              compras, pedidos, pagamentos ou entregas, entre em contato com
              nossa equipe.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:clinicacronosmg@gmail.com"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#17145c] transition hover:bg-gray-50"
              >
                <Mail size={16} className="text-[#d0aa38]" />
                clinicacronosmg@gmail.com
              </a>

              <a
                href="https://wa.me/5571927501866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-green-600 transition hover:bg-green-50"
              >
                <MessageCircle size={16} />
                WhatsApp: (71) 92750-1866
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="mb-4 text-lg font-extrabold text-[#17145c]">
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