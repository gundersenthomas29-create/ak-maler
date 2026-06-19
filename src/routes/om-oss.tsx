import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/components/useReveal";
import admirBilde from "@/assets/admir.jpg";
import innvendig from "@/assets/innvendig.jpg";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — AK Malerservice AS" },
      { name: "description", content: "AK Malerservice AS — malermester med fokus på førsteklasses håndverk. Daglig leder Admir Kicka." },
      { property: "og:title", content: "Om oss — AK Malerservice AS" },
      { property: "og:description", content: "Malermester med stolthet for faget." },
      { property: "og:image", content: admirBilde },
    ],
  }),
  component: OmOss,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 700, lineHeight: 1 }}>
      {n}{suffix}
    </div>
  );
}

function OmOss() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section style={{ paddingTop: 140, paddingInline: 32, paddingBottom: 120, background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="reveal" style={{ maxWidth: 720, marginBottom: 80 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Om oss</div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Malermester med stolthet for faget.</h1>
            <p style={{ color: "#444", marginTop: 24, maxWidth: 600 }}>
              AK Malerservice AS leverer komplett malerarbeid for private og næring. Vi tar oss tid til underarbeidet, holder fremdriften og leverer en jobb du kan være stolt av.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="split-2">
            <div className="reveal" style={{ aspectRatio: "4/5", overflow: "hidden" }}>
              <img src={admirBilde} alt="Admir Kicka — Daglig leder" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 16 }}>Daglig leder</div>
              <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>Admir Kicka</h2>
              <p style={{ color: "#444", marginTop: 24 }}>
                Som malermester har Admir bygd opp AK Malerservice rundt et enkelt prinsipp: kvalitet i alle ledd. Fra første befaring til siste opprydning skal kunden møtes av en fagperson som tar eierskap til jobben.
              </p>
              <p style={{ color: "#444", marginTop: 16 }}>
                Vi setter vår ære i å levere førsteklasses håndverk — uansett om det er en aksentvegg, hele boligen eller et større næringsprosjekt.
              </p>
              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="tel:+4740285729" style={{ color: "#111", textDecoration: "none", fontWeight: 500 }}>402 85 729</a>
                <a href="mailto:akmalerservice@hotmail.com" style={{ color: "#111", textDecoration: "none", fontWeight: 500 }}>akmalerservice@hotmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 32px", background: "#F7F7F5" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }} className="counter-grid">
          <div className="reveal">
            <Counter to={100} suffix="%" />
            <div className="eyebrow" style={{ marginTop: 12 }}>Fornøyde kunder i fokus</div>
          </div>
          <div className="reveal">
            <Counter to={7} />
            <div className="eyebrow" style={{ marginTop: 12 }}>Tjenester innen malerfaget</div>
          </div>
          <div className="reveal">
            <Counter to={500} suffix="+" />
            <div className="eyebrow" style={{ marginTop: 12 }}>Prosjekter levert</div>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .counter-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
          @media (max-width: 900px) { .split-2 { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>

      <section style={{ padding: "120px 32px 160px", background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="split-2">
          <div className="reveal" style={{ aspectRatio: "16/10", overflow: "hidden", order: 2 }}>
            <img src={innvendig} alt="Innvendig maling" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="reveal" style={{ order: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Våre verdier</div>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>Ansvar, lojalitet og pålitelighet.</h2>
            <ul style={{ marginTop: 24, paddingLeft: 18, color: "#444", lineHeight: 1.9 }}>
              <li>Stolthet for faget — og ønske om å levere kvalitet i alle oppdrag</li>
              <li>Ærlighet og høy arbeidsmoral i alt vi gjør</li>
              <li>Selvstendig og strukturert arbeid på byggeplassen</li>
              <li>Eierskap til jobben — fra første befaring til siste opprydning</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
