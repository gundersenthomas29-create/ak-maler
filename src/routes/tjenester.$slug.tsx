import { createFileRoute, Link, Navigate, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { tjenester } from "@/data/tjenester";
import { useReveal } from "@/components/useReveal";

export const Route = createFileRoute("/tjenester/$slug")({
  head: ({ params }) => {
    const t = tjenester.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: t ? `${t.navn} — AK Malerservice AS` : "Tjeneste — AK Malerservice AS" },
        { name: "description", content: t?.kortBeskrivelse ?? "Tjenester fra AK Malerservice AS." },
        { property: "og:title", content: t?.navn ?? "Tjeneste" },
        { property: "og:description", content: t?.kortBeskrivelse ?? "" },
        ...(t ? [{ property: "og:image", content: t.bilde }] : []),
      ],
    };
  },
  component: TjenesteSide,
});

function TjenesteSide() {
  useReveal();
  const { slug } = useParams({ from: "/tjenester/$slug" });
  const tjeneste = tjenester.find((t) => t.slug === slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  if (!tjeneste) return <Navigate to="/tjenester" replace />;

  return (
    <section style={{ paddingTop: 72 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start" }} className="split-page">
        <div style={{ position: "sticky", top: 72, height: "calc(100vh - 72px)" }} className="sticky-img">
          <img src={tjeneste.bilde} alt={tjeneste.navn} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ padding: "80px 64px" }} className="tjeneste-body">
          <nav style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 32 }}>
            <Link to="/" style={{ color: "#6b6b6b", textDecoration: "none" }}>Hjem</Link>
            {" / "}
            <Link to="/tjenester" style={{ color: "#6b6b6b", textDecoration: "none" }}>Tjenester</Link>
            {" / "}
            <span style={{ color: "#111" }}>{tjeneste.navn}</span>
          </nav>
          <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", marginBottom: 24 }}>{tjeneste.navn}</h1>
          <p style={{ color: "#444", fontSize: 17 }}>{tjeneste.ingress}</p>

          <h2 style={{ fontSize: 22, marginTop: 56, marginBottom: 24 }}>Hva inkluderes</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tjeneste.hvaInkluderes.map((p) => (
              <li key={p} style={{
                padding: "16px 0",
                borderBottom: "1px solid #e8e8e8",
                color: "#222",
                fontSize: 15,
              }}>
                {p}
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 22, marginTop: 56, marginBottom: 16 }}>Hvorfor velge oss</h2>
          {tjeneste.hvorforVelgeOss.split("\n\n").map((p, i) => (
            <p key={i} style={{ color: "#444", marginTop: 12 }}>{p}</p>
          ))}

          <div style={{
            background: "#111",
            color: "#fff",
            padding: 32,
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Klar til å starte?</div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, margin: 0 }}>
              Ta en uforpliktende prat. Vi gir deg pris og fremdriftsplan tilpasset prosjektet.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
              <a href="tel:+4776082900" className="btn btn-accent">Ring 76 08 29 00</a>
              <Link to="/kontakt" className="btn btn-outline-light">Send melding</Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .split-page { grid-template-columns: 1fr !important; }
          .sticky-img { position: relative !important; top: 0 !important; height: 50vh !important; }
          .tjeneste-body { padding: 48px 24px !important; }
        }
      `}</style>
    </section>
  );
}
