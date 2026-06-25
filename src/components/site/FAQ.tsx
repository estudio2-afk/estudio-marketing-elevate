import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Vocês atendem só São Mateus ou outras cidades também?",
    a: "Atendemos presencialmente São Mateus, Guriri, Jaguaré, Pedro Canário e Conceição da Barra. Para gestão de redes e tráfego pago, conseguimos atender qualquer cidade do Brasil de forma remota.",
  },
  {
    q: "Quanto custa para contratar o Estúdio 2 Marketing?",
    a: "Não trabalhamos com pacote engessado. O investimento é definido conforme o tamanho do seu negócio, os serviços contratados e a frequência de produção. Na conversa inicial a gente já te passa um valor real.",
  },
  {
    q: "Em quanto tempo começo a ver resultado?",
    a: "Os primeiros sinais (mais alcance, comentários, mensagens) costumam aparecer em 30 a 45 dias. Resultado consistente em vendas vem a partir de 90 dias, dependendo do segmento, do investimento em tráfego e da maturidade do seu negócio.",
  },
  {
    q: "Vocês produzem o vídeo e a foto ou eu preciso enviar?",
    a: "Nós produzimos. Vamos presencialmente ao seu negócio com equipamento profissional próprio — câmera, microfone, iluminação. Para stories, não gravamos no lugar do cliente: o próprio cliente interage com o público dele. Mas fornecemos o direcionamento completo para que cada story converta.",
  },
  {
    q: "Posso aprovar o conteúdo antes de ser publicado?",
    a: "Sim, cada post é aprovado individualmente por você através da nossa estrutura. Além do calendário editorial, você sabe exatamente o que está acontecendo.",
  },
  {
    q: "Preciso já ter Instagram ou posso começar do zero?",
    a: "Pode começar do zero. A gente cuida da criação do perfil, identidade visual, bio, destaques e da estratégia inicial pra acelerar o crescimento.",
  },
  {
    q: "Vocês fazem anúncio no Google também?",
    a: "Nosso foco em tráfego pago é Meta Ads (Instagram e Facebook), por ser o canal de melhor custo-benefício para negócio local. Para Google trabalhamos com tráfego orgânico (SEO) e Google Meu Negócio. Google Ads em breve entra no nosso portfólio.",
  },
  {
    q: "E se eu não gostar do resultado depois de 1 mês?",
    a: "Nosso contrato mínimo é de 6 meses, com resultados sólidos prometidos a partir do terceiro mês (90 dias). Cancelamento antes do fim do período tem multa de 50% do valor do contrato. Mensalmente a gente se alinha sobre ajustes e evolução da estratégia.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-y">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Perguntas frequentes</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que você precisa saber <span className="text-primary">antes de contratar</span>.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
