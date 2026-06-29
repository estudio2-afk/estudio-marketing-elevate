import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { waLink } from "@/lib/contact";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdqqqoq";

const SEGMENTS = [
  "Clínica / Saúde",
  "Restaurante / Alimentação",
  "Loja / Varejo",
  "Serviços",
  "Beleza / Estética",
  "Imobiliário / Construção",
  "Outro",
] as const;

const REVENUE = [
  "Até R$ 10 mil",
  "R$ 10 mil a R$ 30 mil",
  "R$ 30 mil a R$ 100 mil",
  "Acima de R$ 100 mil",
] as const;

const SERVICES = [
  "Gestão de redes sociais",
  "Produção de Reels e fotos",
  "Tráfego pago (Meta Ads)",
  "Criação de site",
  "Acompanhamento comercial",
  "Estratégia completa",
  "Ainda não sei, quero orientação",
] as const;

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e ( ) - +"),
  email: z.string().trim().email("E-mail inválido").max(150),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(80),
  segmento: z.enum(SEGMENTS, { message: "Selecione o segmento" }),
  faturamento: z.enum(REVENUE, { message: "Selecione a faixa" }),
  servico: z.enum(SERVICES, { message: "Selecione um serviço" }),
  desafio: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, { message: "Você precisa aceitar para enviar" }),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [lastValues, setLastValues] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      email: "",
      cidade: "",
      desafio: "",
      website: "",
      consent: false as unknown as true,
    },
  });

  async function onSubmit(values: FormValues) {
    if (values.website) return; // honeypot

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Novo lead do site — ${values.nome} (${values.cidade})`,
          Nome: values.nome,
          WhatsApp: values.whatsapp,
          "E-mail": values.email,
          Cidade: values.cidade,
          Segmento: values.segmento,
          "Faturamento mensal": values.faturamento,
          "Serviço de interesse": values.servico,
          "Desafio atual": values.desafio || "—",
          Origem: "Landing Page — Estúdio 2 Marketing",
        }),
      });

      if (!res.ok) throw new Error("Falha no envio");

      // Tracking
      try {
        (window as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead");
        (window as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "lead_submit",
          form: "landing_lead_form",
        });
      } catch {
        // ignore
      }

      setLastValues(values);
      setSent(true);
      form.reset();
    } catch {
      const fallback = waLink(
        "Formulário (falha no envio)",
        `falar sobre meu negócio. Nome: ${values.nome} | Cidade: ${values.cidade} | Segmento: ${values.segmento} | Serviço: ${values.servico}`,
      );
      toast.error("Não conseguimos enviar agora", {
        description: "Toque em WhatsApp para falar direto com a gente.",
        action: {
          label: "WhatsApp",
          onClick: () => window.open(fallback, "_blank", "noopener"),
        },
      });
    }
  }

  if (sent) {
    const waUrl = waLink(
      "Pós-envio do formulário",
      `dar continuidade. Acabei de enviar o formulário pelo site. Nome: ${lastValues?.nome} | Cidade: ${lastValues?.cidade}`,
    );
    return (
      <section id="contato" className="section-y">
        <div className="container-page max-w-2xl">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-10 text-center shadow-[var(--shadow-glow)]">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight">
              Recebemos seu contato!
            </h2>
            <p className="mt-3 text-muted-foreground">
              Em até 24 horas a gente te chama no WhatsApp. Se quiser adiantar, fale com a gente agora:
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={waUrl} target="_blank" rel="noopener">
                  <MessageCircle className="mr-1 h-5 w-5" />
                  Falar no WhatsApp agora
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={() => setSent(false)}>
                Enviar outra mensagem
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-y bg-muted/30">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Fale com a gente
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Conte sobre seu negócio.{" "}
            <span className="text-primary">A gente responde com um plano.</span>
          </h2>
            <p className="mt-4 text-muted-foreground">
              Preencha os campos abaixo. Retornamos em até 24 horas no WhatsApp com um diagnóstico
              inicial — sem custo e sem compromisso.
            </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Honeypot */}
              <div className="hidden" aria-hidden>
                <label>
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("website")}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome completo *</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(27) 99999-9999"
                          inputMode="tel"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="voce@exemplo.com"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: São Mateus" autoComplete="address-level2" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="segmento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segmento do negócio *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SEGMENTS.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="faturamento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faturamento mensal aproximado *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {REVENUE.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="servico"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serviço de interesse *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desafio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conte rapidamente seu desafio atual no marketing</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: hoje dependo só de indicação, quero atrair clientes pelo Instagram..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={!!field.value}
                        onCheckedChange={(v) => field.onChange(v === true)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-tight">
                      <FormLabel className="text-sm font-normal text-muted-foreground">
                        Aceito receber contato da Estúdio 2 Marketing por WhatsApp, e-mail ou ligação
                        sobre o meu pedido.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="h-14 w-full bg-primary text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero conversar sobre meu negócio
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Seus dados são usados apenas para esse contato. Sem spam.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
