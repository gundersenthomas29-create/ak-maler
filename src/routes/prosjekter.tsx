import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/components/useReveal";
const p1 = { url: "https://images.pexels.com/photos/1740756/pexels-photo-1740756.jpeg?auto=compress&cs=tinysrgb&w=1200" };
const p2 = { url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" };
const p3 = { url: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200" };
import innvendig from "@/assets/innvendig.jpg";
import utvendig from "@/assets/utvendig.jpg";
import flis from "@/assets/flislegging.jpg";
import gulv from "@/assets/gulvlegging.jpg";
import tapet from "@/assets/tapetsering.jpg";

export const Route = createFileRoute("/prosjekter")({
  head: () => ({
    meta: [
      { title: "Prosjekter — AK Malerservice AS" },
      { name: "description", content: "Referanseprosjekter fra AK Malerservice AS — innvendig og utvendig maling, tapet, gulv og bad." },
      { property: "og:title", content: "Prosjekter — AK Malerservice AS" },
      { property: "og:description", content: "Et utvalg av referanseprosjekter." },
    ],
  }),
  component: Prosjekter,
});

type Prosjekt = { id: string; navn: string; kategori: string; bilde: string; h: number };
const prosjekter: Prosjekt[] = [
  { id: "1", navn: "Tapetsering med strukturpanel", kategori: "Tapet", bilde: p1.url, h: 480 },
  { id: "2", navn: "Aksentvegg i lin-tapet", kategori: "Tapet", bilde: p2.url, h: 360 },
  { id: "3", navn: "Komplett interiøroppussing", kategori: "Maling", bilde: p3.url, h: 500 },
  { id: "4", navn: "Innvendig maling — leilighet", kategori: "Maling", bilde: innvendig, h: 360 },
  { id: "5", navn: "Utvendig maling — trefasade", kategori: "Utvendig", bilde: utvendig, h: 440 },
  { id: "6", navn: "Baderom — flislegging", kategori: "Bad", bilde: flis, h: 380 },
  { id: "7", navn: "Vinylgulv i stue", kategori: "Gulv", bilde: gulv, h: 420 },
  { id: "8", navn: "Mønstertapet i stuen", kategori: "Tapet", bilde: tapet, h: 380 },
];

const kategorier = ["Alle", "Maling", "Tapet", "Bad", "Gulv", "Utvendig"];

function Prosjekter() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [filter, setFilter] = useState("Alle");
  const filtered = filter === "Alle" ? prosjekter : prosjekter.filter((p) => p.kategori === filter);

  return (
    <>
      <section style={{ paddingTop: 140, paddingInline: 32, background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="reveal" style={{ maxWidth: 720, marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Referanseprosjekter</div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Jobbene som taler for seg selv.</h1>
            <p style={{ color: "#444", marginTop: 24, maxWidth: 600 }}>
              Et utvalg av prosjekter vi har levert — fra tapetsering og innvendig maling til bad og fasader.
            </p>
          </div>

          <div className="reveal" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
            {kategorier.map((k) => {
              const active = filter === k;
              return (
                <button
                  key={k}
                  onClick={() => setFilter(k)}
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #E0E0E0",
                    background: active ? "#111" : "#fff",
                    color: active ? "#fff" : "#111",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    borderRadius: 0,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {k}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 32px 160px", background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="masonry" style={{ columnCount: 3, columnGap: 16 }}>
            {filtered.map((p, i) => (
              <div key={p.id} className="reveal prosjekt-kort" style={{
                breakInside: "avoid",
                marginBottom: 16,
                transitionDelay: `${(i % 9) * 60}ms`,
              }}>
                <div style={{ height: p.h, overflow: "hidden" }}>
                  <img src={p.bilde} alt={p.navn} className="prosjekt-kort__bilde" loading="lazy" />
                </div>
                <div className="prosjekt-kort__overlay">
                  <div>
                    <div style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>{p.navn}</div>
                    <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>{p.kategori}</div>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 14, color: "#111" }}>{p.navn}</div>
                  <div style={{ fontSize: 12, color: "#6b6b6b" }}>{p.kategori}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .masonry { column-count: 2 !important; } }
          @media (max-width: 600px) { .masonry { column-count: 1 !important; } }
        `}</style>
      </section>
    </>
  );
}
