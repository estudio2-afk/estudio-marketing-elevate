import {
  Instagram,
  Video,
  Sparkles,
  Search,
  LayoutTemplate,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { waLink, CTA } from "@/lib/contact";

const services = [
  {
    icon: Instagram,
    title: "Gestão de redes sociais",
    desc: "Estratégia, calendário editorial aprovado por você, postagens, stories e métricas que mostram o que está dando resultado.",
  },
  {
    icon: Video,
    title: "Produção de reels e vídeos",
    desc: "Gravação presencial no seu negócio com equipamento próprio. Edição rápida, formato que prende e gera vendas.",
  },
  {
    icon: Sparkles,
    title: "Criação de conteúdo",
    desc: "Fotos, posts, copy e roteiros pensados para o seu público local. Conteúdo que comunica e converte.",
  },
  {
    icon: Search,
    title: "Tráfego orgânico (SEO)",
    desc: "Posicionamos seu negócio no Google e nas redes sem depender só de anúncio. Crescimento que continua rendendo no longo prazo.",
  },
  {
    icon: LayoutTemplate,
    title: "Sites, landing pages e blogs",
    desc: "Sites rápidos, otimizados para o Google e pensados para gerar contato. Não é cartão de visita — é máquina de cliente.",
  },
  {
    icon: Megaphone,
    title: "Tráfego pago — Meta Ads",
    desc: "Campanhas no Instagram e Facebook focadas em região, público e oferta. Cada real investido com objetivo claro.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-y bg-muted/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">O que oferecemos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Tudo que seu negócio precisa para <span className="text-primary">aparecer e vender</span> no digital.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Você não precisa contratar 5 fornecedores diferentes. Aqui é um time só, integrado, com
            produção feita por nós mesmos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <s.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a
                href={waLink(`Serviço: ${s.title}`, `saber mais sobre ${s.title}`)}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Quero este serviço <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
