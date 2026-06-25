// Brazil country code 55 + ES area 27 + number
export const WHATSAPP = "5527997143078";
export const WHATSAPP_DISPLAY = "(27) 99714-3078";
export const EMAIL = "contato@estudio2marketing.com.br";
export const INSTAGRAM = "https://instagram.com/estudio2marketing";
export const LINKEDIN =
  "https://www.linkedin.com/company/est%C3%BAdio-2-marketing/about/";

export function waLink(origem: string, intencao: string): string {
  const msg = `Olá! Vim do site (${origem}) e gostaria de ${intencao}.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export function emailLink(assunto: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}`;
}

export const CTA = {
  hero: "Quero conversar sobre meu negócio",
  float: "Tirar uma dúvida rápida",
  final: "Quero começar agora",
  service: "Quero saber mais sobre este serviço",
};
