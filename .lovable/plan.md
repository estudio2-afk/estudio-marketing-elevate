## O que vou construir

Nova seção `LeadForm` posicionada entre `Testimonials` e `FAQ` na home, no estilo do site de referência (cards com label em cima, validação inline, botão CTA grande com glow laranja da marca). Envio dos leads por e-mail para `contato@estudio2marketing.com.br` via Resend.

## Campos

1. Nome completo *
2. WhatsApp * (máscara BR)
3. E-mail *
4. Cidade *
5. Segmento do negócio * (select: Clínica/Saúde, Restaurante/Alimentação, Loja/Varejo, Serviços, Beleza/Estética, Imobiliário, Outro)
6. Faturamento mensal aproximado * (select: Até R$ 10 mil, R$ 10-30 mil, R$ 30-100 mil, Acima de R$ 100 mil, Prefiro não informar)
7. Serviço de interesse * (select com os serviços do `ServicesSection`)
8. Desafio atual no marketing (textarea, opcional)
9. Checkbox de consentimento LGPD *

## Stack e arquivos

- `src/components/site/LeadForm.tsx` — componente com `react-hook-form` + `zod`, usando shadcn `Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `Button`. Estado de loading, sucesso (mensagem + botão para abrir WhatsApp com resumo) e erro (toast com fallback de WhatsApp).
- `src/routes/index.tsx` — importar e renderizar `<LeadForm />` antes de `<FAQ />`; ajustar âncoras (`#contato`) nos CTAs do Hero/Header/FinalCTA para rolar até o form em vez de abrir WhatsApp direto (mantemos o WhatsApp flutuante e o link no FinalCTA).
- `src/lib/lead.functions.ts` — `createServerFn` POST com `inputValidator` (zod) que chama a API do Resend via `fetch` direto (`https://api.resend.com/emails`) usando `process.env.RESEND_API_KEY`. Envia HTML formatado com todos os campos + cabeçalho identificando origem.
- Schema JSON-LD: adicionar `ContactPage`/`ContactAction` em `src/routes/index.tsx`.

## Resend

Vou usar o **connector Resend da Lovable** (gateway), que dispensa você de criar conta separada — basta autorizar quando eu pedir. O envio fica em uma server function autenticada pelo gateway (`LOVABLE_API_KEY` + `RESEND_API_KEY` injetados pelo connector). Remetente inicial: `Estúdio 2 Site <onboarding@resend.dev>` (domínio de teste do Resend), com `reply_to` no e-mail do lead. Quando você verificar `estudio2marketing.com.br` no Resend, troco o `from` para `contato@estudio2marketing.com.br`.

## Validação e segurança

- Zod no client e no server (mesmo schema reaproveitado).
- Limites de tamanho em todos os campos, `trim`, regex no telefone.
- Honeypot oculto (`website`) para barrar bots simples.
- Tracking: disparo `fbq('track', 'Lead')` e `dataLayer.push({event:'lead_submit'})` no sucesso.

## Fallback

Se o envio falhar, mostro toast de erro com botão "Enviar pelo WhatsApp" que abre `waLink()` já com os dados preenchidos — você nunca perde o lead.

## Passos de execução (quando aprovar)

1. Conectar Resend (`standard_connectors--connect resend`).
2. Criar `LeadForm.tsx` + server function.
3. Inserir no `index.tsx` antes do FAQ e ajustar âncoras dos CTAs principais para `#contato`.
4. Build + smoke test (renderiza, valida campos obrigatórios).
5. Publicar.
