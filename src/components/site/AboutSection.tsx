import { Camera, Users, Target, MapPin } from "lucide-react";

const stats = [
  { icon: MapPin, k: "5 cidades", v: "São Mateus, Guriri, Jaguaré, Pedro Canário e Conceição da Barra" },
  { icon: Camera, k: "Equipamento próprio", v: "Vídeo e foto feitos no seu negócio, sem terceirizar" },
  { icon: Users, k: "5,0 no Google", v: "Avaliações reais de clientes" },
  { icon: Target, k: "Foco em vendas", v: "Cada ação pensada para gerar cliente" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem somos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Uma agência local que entende o dia a dia do <span className="text-primary">negócio em São Mateus</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Somos o <strong className="text-foreground font-semibold">Estúdio 2 Marketing</strong>, agência sediada em Guriri, São Mateus — ES.
            Atendemos prestadores de serviço, profissionais liberais e comércio local com produção
            de conteúdo presencial, gestão de redes sociais e tráfego pago que efetivamente trazem
            clientes para o seu negócio.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sem promessa de viralizar. Sem maquiar número. <strong className="text-foreground font-semibold">A gente combina o que vai ser feito, mostra o calendário, executa e mede.</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <s.icon className="h-6 w-6 text-primary" aria-hidden />
              <div className="mt-4 font-display text-xl font-bold">{s.k}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
