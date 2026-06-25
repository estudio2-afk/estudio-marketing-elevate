import { MapPin, Camera, ClipboardCheck, Target } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Agência local de verdade",
    desc: "Atendimento presencial em São Mateus, Guriri, Jaguaré, Pedro Canário e Conceição da Barra. A gente vai no seu negócio.",
  },
  {
    icon: Camera,
    title: "Equipamento próprio, sem terceirizar",
    desc: "Vídeo e foto profissionais feitos no seu negócio pelo nosso time. Sem perder qualidade, sem ficar dependendo de freelancer.",
  },
  {
    icon: ClipboardCheck,
    title: "Cada post aprovado por você",
    desc: "Não só enviamos o calendário editorial: cada post é aprovado individualmente. Você sabe exatamente o que está acontecendo.",
  },
  {
    icon: Target,
    title: "Foco em vendas, não em fama",
    desc: "Não trabalhamos pra inflar número de curtida. Cada ação é pensada pra atrair cliente real e gerar receita.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-y">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Por que nos escolher</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Quatro motivos que fazem a diferença <span className="text-primary">no seu resultado</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <b.icon className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
