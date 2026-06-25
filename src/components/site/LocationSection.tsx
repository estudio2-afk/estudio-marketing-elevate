import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { WHATSAPP_DISPLAY, EMAIL, waLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Segunda a Sexta", time: "09:00–12:00 · 14:00–19:00" },
  { day: "Sábado", time: "09:00–12:00 · 13:00–14:00" },
  { day: "Domingo", time: "Fechado" },
];

export function LocationSection() {
  return (
    <section id="localizacao" className="section-y">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Onde estamos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Atendemos toda a região de <span className="text-primary">São Mateus e norte do ES</span>.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Sede em Guriri, São Mateus — ES. Atendimento presencial para produção de vídeo e foto
            em São Mateus, Jaguaré, Pedro Canário e Conceição da Barra.
          </p>

          <address className="mt-8 space-y-4 not-italic">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <div className="text-sm font-semibold">Endereço</div>
                <div className="text-sm text-muted-foreground">Guriri, São Mateus — Espírito Santo · CEP 29945-390</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <div className="text-sm font-semibold">WhatsApp</div>
                <a href={waLink("Localização", "falar com a equipe")} target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-primary">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <div className="text-sm font-semibold">E-mail</div>
                <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-primary">{EMAIL}</a>
              </div>
            </div>
          </address>

          <Button asChild className="mt-8 font-semibold">
            <a href={waLink("Localização", "agendar uma reunião")} target="_blank" rel="noopener">
              Agendar conversa
            </a>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" aria-hidden />
            <h3 className="font-display text-lg font-bold">Horário de atendimento</h3>
          </div>
          <dl className="mt-5 divide-y divide-border">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between py-3">
                <dt className="text-sm font-medium">{h.day}</dt>
                <dd className="text-sm text-muted-foreground">
                  <time>{h.time}</time>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
