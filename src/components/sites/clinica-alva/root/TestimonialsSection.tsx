import { FadeUp } from "../shared/FadeUp";
import { testimonials } from "./data";

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111110]">
      <div className="container">
        <FadeUp>
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="section-label text-[#C9A96E]">Depoimentos</span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-white leading-[1.15]">
              Experiências de quem escolheu a Clínica Alva
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col p-8 bg-white/[0.06] border border-white/10"
              >
                <blockquote className="text-[0.95rem] text-white/75 leading-[1.8] grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/10 text-[0.8rem] font-semibold tracking-[0.06em] text-white uppercase">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center text-[0.72rem] text-white/30 mt-8">
            Depoimentos fictícios, usados apenas para composição deste
            portfólio.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
