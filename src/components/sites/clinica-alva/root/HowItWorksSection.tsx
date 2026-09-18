import { FadeUp } from "../shared/FadeUp";
import { steps } from "./data";

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EDE4]">
      <div className="container">
        <FadeUp>
          <div className="text-center max-w-[640px] mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-rule" />
              <span className="section-label">Como funciona</span>
              <div className="gold-rule" />
            </div>
            <h2 className="font-heading font-semibold text-[clamp(2rem,2.6vw+1rem,3.25rem)] text-[#1C1C1A] leading-[1.15]">
              Seu atendimento, passo a passo
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s) => (
              <div key={s.number} className="relative pt-2">
                <div className="font-heading font-bold text-[3.5rem] leading-none text-[#C9A96E]/25 mb-3">
                  {s.number}
                </div>
                <h3 className="text-[1.05rem] font-bold text-[#1C1C1A] mb-2">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] text-[#5A5652] leading-[1.75]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
