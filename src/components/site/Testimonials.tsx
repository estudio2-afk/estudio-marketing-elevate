import { Star, BadgeCheck } from "lucide-react";

export const testimonials = [
  {
    name: "Edmara Araújo",
    role: "Aroeira Móveis",
    text: "Excelentes profissionais qualificados e competentes. Parabéns!",
    rating: 5,
    date: "2026-06-26",
  },
  {
    name: "Dra. Joici Escarabelle",
    role: "Cliente — Saúde",
    text: "Minha experiência tem sido excelente. Além de serem extremamente profissionais, são atenciosos, prestativos e sempre dispostos a ajudar. Tenho percebido o cuidado e a dedicação em cada detalhe, desde a criação dos conteúdos até o acompanhamento das estratégias. Desde que assumiram minhas redes, percebi uma mudança muito positiva na qualidade dos conteúdos e na forma como minha marca é apresentada.",
    rating: 5,
    date: "2026-06-24",
  },
  {
    name: "Maritana Benigno",
    role: "H2M Contabilidade",
    text: "Passando aqui pra agradecer pela parceria e pelo excelente trabalho com a nossa empresa. É muito bom trabalhar com pessoas comprometidas, atenciosas e que realmente fazem acontecer. Obrigada por todo suporte, dedicação e cuidado em cada detalhe. Vocês fazem diferença!",
    rating: 5,
    date: "2026-06-25",
  },
  {
    name: "Gabriel Malacarne",
    role: "Agrimac",
    text: "São profissionais de mais alto nível de qualidade, cada post, cada reel são sensacionais.",
    rating: 5,
    date: "2026-06-24",
  },
  {
    name: "Cleidiomar Da Cruz Pereira",
    role: "Cliente",
    text: "Experiência fantástica. Pensa em uma equipe sensacional!!!",
    rating: 5,
    date: "2026-06-24",
  },
  {
    name: "Leticia Benigno",
    role: "Cliente",
    text: "Trabalho excelente!",
    rating: 5,
    date: "2026-06-24",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-y bg-muted/40">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Depoimentos reais</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-primary">5,0 estrelas</span> no Google — quem confia, recomenda.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-[var(--shadow-card)]">
            <BadgeCheck className="h-4 w-4 text-primary" />
            Avaliações verificadas no Google
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-1" aria-label={`Avaliação ${t.rating} de 5`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.text}”
              </blockquote>
              <footer className="mt-5 border-t border-border pt-4">
                <div className="font-display text-sm font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
