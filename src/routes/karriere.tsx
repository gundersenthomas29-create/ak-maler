import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/components/useReveal";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere — AK Malerservice AS" },
      { name: "description", content: "Jobb hos AK Malerservice AS. Ledig stilling som maler — eller send oss en åpen søknad." },
      { property: "og:title", content: "Karriere — AK Malerservice AS" },
      { property: "og:description", content: "Bli en del av laget hos AK Malerservice." },
    ],
  }),
  component: Karriere,
});

type Modus = null | "maler" | "apen";

function Karriere() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [valgt, setValgt] = useState<Modus>(null);
  const [sent, setSent] = useState(false);

  return (
    <section style={{ paddingTop: 140, paddingInline: 32, paddingBottom: 160, background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Karriere</div>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Jobb hos AK Malerservice.</h1>
          <p style={{ color: "#444", marginTop: 24, maxWidth: 600 }}>
            Vi er på jakt etter dyktige fagfolk som setter sin ære i å levere kvalitet. Velg en ledig stilling — eller send oss en åpen søknad.
          </p>
        </div>

        <div className="reveal kar-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 64,
        }}>
          <button
            onClick={() => { setValgt("maler"); setSent(false); }}
            style={cardStyle(valgt === "maler")}
          >
            <div className="eyebrow" style={{ marginBottom: 12 }}>Ledig stilling</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Maler</div>
            <p style={{ color: "#6b6b6b", fontSize: 14, margin: 0 }}>
              Fagbrev eller solid erfaring innen malerfaget. Snarlig oppstart.
            </p>
          </button>
          <button
            onClick={() => { setValgt("apen"); setSent(false); }}
            style={cardStyle(valgt === "apen")}
          >
            <div className="eyebrow" style={{ marginBottom: 12 }}>Send inn</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Åpen søknad</div>
            <p style={{ color: "#6b6b6b", fontSize: 14, margin: 0 }}>
              Tror du at du passer inn hos oss? Vi ser gjerne en åpen søknad.
            </p>
          </button>
        </div>

        {valgt === "maler" && (
          <div className="reveal" style={{ background: "#F7F7F5", padding: 48, marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Stillingsbeskrivelse</div>
            <h2 style={{ fontSize: 32, marginBottom: 24 }}>Maler</h2>
            <ul style={{ paddingLeft: 18, color: "#333", lineHeight: 1.9 }}>
              <li>Fagbrev som maler eller solid erfaring innen malerfaget</li>
              <li>Evne til å jobbe selvstendig og strukturert</li>
              <li>Førerkort klasse B</li>
              <li>Gode språkkunnskaper i norsk eller engelsk</li>
              <li>Ansvarsfølelse, lojalitet og pålitelighet</li>
              <li>Høy arbeidsmoral og ærlighet</li>
              <li>Stolthet for faget og et ønske om å levere kvalitet i alle oppdrag</li>
            </ul>
            <p style={{ color: "#333", marginTop: 24 }}>
              Vi ønsker en person som tar eierskap til jobben, er løsningsorientert og setter sin ære i å levere førsteklasses håndverk.
            </p>
            <p style={{ color: "#111", marginTop: 16, fontWeight: 500 }}>
              Snarlig oppstart — ansettelse skjer fortløpende.
            </p>
          </div>
        )}

        {valgt && (
          <form
            className="reveal"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h2 style={{ fontSize: 28, marginBottom: 32 }}>
              {valgt === "maler" ? "Søk på stilling: Maler" : "Send åpen søknad"}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="kar-row">
              <div>
                <label className="field-label" htmlFor="k-navn">Fullt navn</label>
                <input id="k-navn" className="field" required />
              </div>
              <div>
                <label className="field-label" htmlFor="k-tlf">Telefon</label>
                <input id="k-tlf" type="tel" className="field" required />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label className="field-label" htmlFor="k-epost">E-post</label>
              <input id="k-epost" type="email" className="field" required />
            </div>
            {valgt === "maler" && (
              <div style={{ marginBottom: 24 }}>
                <label className="field-label" htmlFor="k-erfaring">År med erfaring / fagbrev</label>
                <input id="k-erfaring" className="field" />
              </div>
            )}
            <div style={{ marginBottom: 32 }}>
              <label className="field-label" htmlFor="k-melding">
                {valgt === "maler" ? "Kort om deg og din erfaring" : "Fortell oss om deg selv"}
              </label>
              <textarea id="k-melding" className="field" rows={8} required />
            </div>
            <button type="submit" className="btn btn-dark">
              {sent ? "Takk — søknaden er mottatt!" : "Send søknad"}
            </button>
            <p style={{ marginTop: 24, color: "#6b6b6b", fontSize: 13 }}>
              Du kan også sende søknad direkte på e-post til{" "}
              <a href="mailto:akmalerservice@hotmail.com" style={{ color: "#111" }}>akmalerservice@hotmail.com</a>{" "}
              eller ringe <a href="tel:+4740285729" style={{ color: "#111" }}>402 85 729</a>.
            </p>
          </form>
        )}
      </div>
      <style>{`
        @media (max-width: 700px) {
          .kar-grid { grid-template-columns: 1fr !important; }
          .kar-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function cardStyle(active: boolean): React.CSSProperties {
  return {
    textAlign: "left",
    padding: 32,
    background: active ? "#111" : "#fff",
    color: active ? "#fff" : "#111",
    border: "1px solid " + (active ? "#111" : "#E0E0E0"),
    cursor: "pointer",
    transition: "all 0.25s ease",
    fontFamily: "var(--font-body)",
  };
}
