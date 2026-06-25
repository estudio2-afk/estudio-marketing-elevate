import { MessageCircle } from "lucide-react";
import { waLink, CTA } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Botão flutuante", "tirar uma dúvida rápida")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/40 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{CTA.float}</span>
    </a>
  );
}
