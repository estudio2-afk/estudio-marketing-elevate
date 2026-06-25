import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { waLink, CTA } from "@/lib/contact";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Por que nós" },
  { href: "#processo", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Estúdio 2 Marketing — início">
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-base font-bold tracking-tight">
            Estúdio <span className="text-primary">2</span> Marketing
          </span>
        </a>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm" className="font-semibold">
            <a href={waLink("Header", "conversar sobre meu negócio")} target="_blank" rel="noopener">
              {CTA.hero}
            </a>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetTitle className="font-display">Menu</SheetTitle>
            <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-4 font-semibold" onClick={() => setOpen(false)}>
                <a href={waLink("Menu mobile", "conversar sobre meu negócio")} target="_blank" rel="noopener">
                  {CTA.hero}
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
