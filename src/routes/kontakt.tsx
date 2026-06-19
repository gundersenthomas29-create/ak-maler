import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/components/useReveal";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — AK Malerservice AS" },
      { name: "description", content: "Kontakt AK Malerservice AS. Telefon 402 85 729 — akmalerservice@hotmail.com." },
      { property: "og:title", content: "Kontakt — AK Malerservice AS" },
      { property: "og:description", content: "Ta kontakt for befaring og tilbud." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [sent, setSent] = useState(false);

  return (
    <section style={{ paddingTop: 140, paddingInline: 32, paddingBottom: 160, background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Kontakt</div>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Ta kontakt.</h1>
          <p style={{ color: "#444", marginTop: 24, maxWidth: 600 }}>
            Trenger du befaring, pris eller en uforpliktende prat om jobben din? Vi svarer raskt.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80 }} className="kontakt-grid">
          <form
            className="reveal"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div style={{ marginBottom: 24 }}>
              <label className="field-label" htmlFor="navn">Navn</label>
              <input id="navn" className="field" required />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
              <div>
                <label className="field-label" htmlFor="tlf">Telefon</label>
                <input id="tlf" type="tel" className="field" required />
              </div>
              <div>
                <label className="field-label" htmlFor="epost">E-post</label>
                <input id="epost" type="email" className="field" required />
              </div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <label className="field-label" htmlFor="melding">Melding</label>
              <textarea id="melding" className="field" rows={6} required />
            </div>
            <button type="submit" className="btn btn-dark" style={{ width: "100%" }}>
              {sent ? "Takk — vi tar kontakt!" : "Send melding"}
            </button>
          </form>

          <div className="reveal">
            <div style={{ marginBottom: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Daglig leder</div>
              <p style={{ margin: 0 }}>Admir Kicka</p>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Telefon</div>
              <p style={{ margin: 0 }}>
                <a href="tel:+4740285729" style={{ color: "#111", textDecoration: "none" }}>402 85 729</a>
              </p>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>E-post</div>
              <a href="mailto:akmalerservice@hotmail.com" style={{ color: "#111", textDecoration: "none" }}>akmalerservice@hotmail.com</a>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Bedrift</div>
              <p style={{ margin: 0 }}>AK Malerservice AS</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .kontakt-grid { grid-template-columns: 1fr !important; gap: 64px !important; } }
      `}</style>
    </section>
  );
}
