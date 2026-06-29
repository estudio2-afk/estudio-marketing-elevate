import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/lib/contact";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-surface text-surface-foreground">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Agência local em Guriri, São Mateus — ES
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Marketing digital que <span className="text-gradient-brand">vende de verdade</span> para o seu negócio local.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/75">
            Gestão de redes sociais, produção de <strong className="text-white font-semibold">reels com equipamento próprio</strong>, tráfego pago no Meta Ads e sites que convertem.
            Nosso trabalho é fazer <strong className="text-white font-semibold">mais potenciais clientes</strong> descobrirem, seguirem e comprarem do seu negócio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base font-semibold shadow-glow">
              <a href="#contato">
                {CTA.hero}
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="Avaliação 5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span><strong className="text-white font-semibold">5,0</strong> no Google • Avaliações reais de clientes</span>
            </div>
          </div>
        </div>

        {/* Visual block */}
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-transparent p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-primary/90">Resultado esperado</div>
                <div className="font-display text-3xl font-bold leading-tight text-white">
                  Negócios que seguem o plano costumam ver mais clientes do digital em 30 a 60 dias. Resultados sólidos a partir do terceiro mês.
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "+200%", v: "Alcance médio" },
                  { k: "100%", v: "Conteúdo aprovado por você" },
                  { k: "0", v: "Terceirização" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="font-display text-xl font-bold text-primary">{s.k}</div>
                    <div className="mt-1 text-[11px] leading-tight text-white/70">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
