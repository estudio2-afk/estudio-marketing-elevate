import { TrendingUp, Users, Target, Repeat, BarChart3, ArrowRight } from "lucide-react";
import { waLink, CTA } from "@/lib/contact";

const cycle = [
  {
    icon: Target,
    title: "Tráfego pago direcionado",
    desc: "Meta Ads trazendo potenciais clientes do seu público e região.",
  },
  {
    icon: Users,
    title: "Time comercial vende",
    desc: "Ajudamos a estruturar o atendimento para converter quem veio do marketing.",
  },
  {
    icon: Repeat,
    title: "Retenção de clientes",
    desc: "Estratégias para fazer o cliente voltar e comprar de novo.",
  },
  {
    icon: TrendingUp,
    title: "Aumento do ticket médio",
    desc: "Mais produtos/serviços por cliente, sem gastar mais com tráfego.",
  },
];

export function CommercialGrowthSection() {
  return (
    <section id="crescimento" className="section-y bg-surface text-surface-foreground">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Além do marketing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tráfego pago é só a ponta do iceberg: a gente também entra no seu{" "}
              <span className="text-primary">setor comercial</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Marketing traz gente. Mas vendas, retenção e ticket médio é que multiplicam o faturamento.
              Dependendo do plano, acompanhamos seu negócio de perto: metas de faturamento, sazonalidade,
              atendimento do time de vendas, retenção e estratégias para aumentar o ticket médio —
              tudo isso sem precisar gastar mais com tráfego pago.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-primary" />
                <div className="font-display text-lg font-bold text-white">Exemplo prático</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                João tem 1.000 clientes recorrentes com ticket médio de R$ 100. Ao invés de só investir em
                anúncio para trazer mais gente, listamos a base dele, mapeamos oportunidades e traçamos
                estratégias para aumentar o ticket médio. Com a mesma base, o faturamento sobe — e o tráfego
                pago entra para expandir ainda mais esse funil.
              </p>
            </div>
            <a
              href={waLink("Seção Crescimento", "saber mais sobre acompanhamento comercial e vendas")}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition-colors"
            >
              {CTA.hero}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cycle.map((c, i) => (
              <div
                key={c.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="font-display text-4xl font-bold text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <c.icon className="mt-4 h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 font-display text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
