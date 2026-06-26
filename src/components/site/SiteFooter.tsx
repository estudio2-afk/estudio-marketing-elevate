import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_DISPLAY, EMAIL, INSTAGRAM, LINKEDIN, waLink } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-base font-bold tracking-tight">
                Estúdio <span className="text-primary">2</span> Marketing
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Agência de marketing digital local em Guriri, São Mateus — ES. Foco em gerar cliente
              real para o seu negócio.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram" className="rounded-full border border-border p-2 hover:bg-muted">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn" className="rounded-full border border-border p-2 hover:bg-muted">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Navegação</h3>
            <nav aria-label="Rodapé" className="mt-4 space-y-2 text-sm">
              <a href="#servicos" className="block text-muted-foreground hover:text-primary">Serviços</a>
              <a href="#beneficios" className="block text-muted-foreground hover:text-primary">Por que nós</a>
              <a href="#processo" className="block text-muted-foreground hover:text-primary">Como funciona</a>
              <a href="#depoimentos" className="block text-muted-foreground hover:text-primary">Depoimentos</a>
              <a href="#faq" className="block text-muted-foreground hover:text-primary">FAQ</a>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Contato</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
              <a href={waLink("Footer", "falar agora")} target="_blank" rel="noopener" className="flex items-start gap-2 hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {WHATSAPP_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 hover:text-primary break-all">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {EMAIL}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                Guriri, São Mateus — ES · CEP 29945-390
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {year} Estúdio 2 Marketing. Todos os direitos reservados.</p>
          <p>CNPJ <span className="font-medium">62.583.360/0001-10</span></p>
        </div>
      </div>
    </footer>
  );
}
