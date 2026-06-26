import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, CTA } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="contato" className="section-y bg-surface text-surface-foreground">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary via-primary to-primary/80 p-10 sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/85">Conversa sem custo</p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Vamos conversar sobre seu negócio e mostrar como transformar o digital em um canal de clientes recorrentes.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-white/90">
              Sem compromisso, sem enrolação. Você sai da conversa com um diagnóstico claro e um plano
              prático — contratando a gente ou não.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base font-semibold">
                <a href={waLink("CTA Final", "conversar sobre meu negócio")} target="_blank" rel="noopener">
                  <MessageCircle className="mr-1 h-5 w-5" />
                  {CTA.hero}
                  <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
