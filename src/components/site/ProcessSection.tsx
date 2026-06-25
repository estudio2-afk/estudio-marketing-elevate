export const processSteps = [
  {
    title: "Reunião gratuita de 30 min",
    desc: "Conversamos sobre seu negócio, entendemos o que está travando suas vendas no digital e mostramos por onde começar.",
  },
  {
    title: "Diagnóstico e plano",
    desc: "Montamos uma estratégia personalizada — serviços, frequência, formato e investimento que faz sentido pro seu tamanho.",
  },
  {
    title: "Calendário aprovado por você",
    desc: "Você recebe o calendário editorial do mês e aprova antes da gente produzir. Zero surpresa.",
  },
  {
    title: "Produção e publicação",
    desc: "Vamos ao seu negócio gravar, fotografar e produzir. Postamos, gerenciamos comentários e cuidamos do dia a dia.",
  },
  {
    title: "Relatório e ajustes",
    desc: "Todo mês você recebe um relatório claro: o que funcionou, o que vamos ajustar e os próximos passos.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="section-y bg-surface text-surface-foreground">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Como funciona</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Um processo <span className="text-primary">simples e transparente</span>, do primeiro contato ao resultado.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-display text-5xl font-bold text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
