import { TrendingUp, Eye, Users, Heart } from "lucide-react";

const metrics = [
  { icon: Eye, value: "+1.130%", label: "Alcance vs. mês anterior", sub: "10.301 pessoas únicas" },
  { icon: TrendingUp, value: "+932%", label: "Visualizações de vídeo", sub: "67.197 no mês" },
  { icon: Users, value: "+300", label: "Seguidores em 40 dias", sub: "Estratégia orgânico + pago" },
  { icon: Heart, value: "6,95%", label: "Taxa de engajamento", sub: "Média do setor: 2% a 5%" },
];

export function CaseStudy() {
  return (
    <section id="case" className="section-y bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Resultado real de cliente
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Um mês de trabalho integrado — <span className="text-primary">orgânico + tráfego pago</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Dados reais de um cliente do varejo após 30 a 40 dias de estratégia. Servem como referência —
            os números variam conforme segmento, investimento e maturidade do negócio.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <m.icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="mt-4 font-display text-3xl font-bold text-foreground">{m.value}</div>
              <div className="mt-1 text-sm font-semibold text-foreground/90">{m.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          O Instagram não vende diretamente — ele aquece. A pessoa descobre o perfil, consome o conteúdo,
          passa a seguir, cria confiança e chega na loja ou no WhatsApp. Quanto mais saudável esse funil,
          mais previsível é a chegada de clientes novos.
        </p>
      </div>
    </section>
  );
}
