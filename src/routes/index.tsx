import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CommercialGrowthSection } from "@/components/site/CommercialGrowthSection";
import { BenefitsSection } from "@/components/site/BenefitsSection";
import { ProcessSection, processSteps } from "@/components/site/ProcessSection";
import { LocationSection } from "@/components/site/LocationSection";
import { Testimonials, testimonials } from "@/components/site/Testimonials";
import { FAQ, faqs } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const SITE_URL = "https://www.estudio2marketing.com.br";
const OG = `${SITE_URL}/og-estudio-2-marketing.jpg`;
const TITLE = "Estúdio 2 Marketing — Agência Digital em São Mateus/ES";
const DESC =
  "Gestão de redes, reels com equipamento próprio, sites e Meta Ads para negócios locais em São Mateus, Guriri, Jaguaré e região. Vamos conversar sobre seu negócio e mostrar por onde começar.";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#identity`,
  name: "Estúdio 2 Marketing",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: OG, width: 1200, height: 630 },
  description: DESC,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+5527997143078",
    availableLanguage: ["Portuguese"],
    areaServed: "BR",
  },
  sameAs: [
    "https://instagram.com/estudio2marketing",
    "https://www.linkedin.com/company/est%C3%BAdio-2-marketing/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Estúdio 2 Marketing",
  url: SITE_URL,
  description: DESC,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#identity` },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Estúdio 2 Marketing",
  image: OG,
  url: SITE_URL,
  telephone: "+5527997143078",
  email: "contato@estudio2marketing.com.br",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guriri",
    addressLocality: "São Mateus",
    addressRegion: "ES",
    postalCode: "29945-390",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "São Mateus" },
    { "@type": "City", name: "Jaguaré" },
    { "@type": "City", name: "Pedro Canário" },
    { "@type": "City", name: "Conceição da Barra" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "14:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "13:00", closes: "14:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
    reviewBody: t.text,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Agência de Marketing Digital", item: `${SITE_URL}/` },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como contratar o Estúdio 2 Marketing",
  step: processSteps.map((p, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: p.title,
    text: p.desc,
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: `${SITE_URL}/`,
  description: DESC,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#identity` },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Estúdio 2 Marketing" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#FF6600" },
      { name: "geo.region", content: "BR-ES" },
      { name: "geo.placename", content: "São Mateus" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Estúdio 2 Marketing" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: TITLE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      { type: "application/ld+json", children: JSON.stringify(webPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      { type: "application/ld+json", children: JSON.stringify(howToSchema) },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CommercialGrowthSection />
        <BenefitsSection />
        <ProcessSection />
        <LocationSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
