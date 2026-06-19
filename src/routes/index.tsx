import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { tjenester } from "@/data/tjenester";
import { TjenesteKort } from "@/components/TjenesteKort";
import { Typewriter } from "@/components/Typewriter";
import { useReveal } from "@/components/useReveal";
import heroVideo from "@/assets/hero.mp4";
const interior1 = { url: "https://images.pexels.com/photos/1740756/pexels-photo-1740756.jpeg?auto=compress&cs=tinysrgb&w=1200" };
const interior2 = { url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" };
const interior3 = { url: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200" };
import admirBilde from "@/assets/admir.jpg";
import innvendig from "@/assets/innvendig.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Malerservice AS — Malermester for innvendig og utvendig maling" },
      { name: "description", content: "Malermester med innvendig og utvendig maling, tapetsering, gulvlegging, flislegging og baderomsoppussing." },
      { property: "og:title", content: "AK Malerservice AS" },
      { property: "og:description", content: "Malermester for innvendig og utvendig maling, tapet, gulv og bad." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "AK Malerservice AS",
          telephone: "+47 402 85 729",
          email: "akmalerservice@hotmail.com",
          founder: "Admir Kicka",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const phrases = tjenester.map((t) => `${t.navn}?`);
  const featured = tjenester.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div className="hero-content" style={{
          position: "absolute",
          bottom: 80,
          left: 80,
          maxWidth: 560,
          color: "#fff",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 2, height: 16, background: "var(--color-accent)" }} />
            <span className="eyebrow-light">AK Malerservice · Malermester</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.1, margin: 0 }}>
            Trenger du<br />
            <Typewriter phrases={phrases} />
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.85)",
            fontWeight: 300,
            maxWidth: 460,
            marginTop: 16,
            fontSize: 16,
          }}>
            Malermester med fokus på førsteklasses håndverk. Innvendig og utvendig maling, tapetsering, gulvlegging, flislegging og baderomsoppussing.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link to="/tjenester" className="btn btn-accent">Våre tjenester →</Link>
            <Link to="/kontakt" className="btn btn-outline-light">Kontakt oss</Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .hero-content { bottom: 40px !important; left: 24px !important; right: 24px !important; max-width: 100% !important; }
          }
        `}</style>
      </section>

      {/* TJENESTER */}
      <section style={{ padding: "140px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Tjenester</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
              Komplett malerservice — fra første sparkel til siste strøk.
            </h2>
          </div>
          <div className="tjenester-grid">
            {featured.map((t, i) => (
              <div key={t.slug} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <TjenesteKort t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVA VI GJØR */}
      <section style={{ padding: "140px 32px", background: "#F7F7F5" }}>
        <div style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }} className="split-2">
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Hva vi gjør</div>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>
              Malermester med stolthet for faget.
            </h2>
            <p style={{ marginTop: 24, color: "#444", maxWidth: 540 }}>
              AK Malerservice AS leverer komplett malerarbeid for private og næring. Vi tar oss tid til underarbeidet — sparkling, grunning og kvistlakk — og det er der forskjellen mellom et middelmådig og et førsteklasses resultat ligger.
            </p>
            <p style={{ marginTop: 16, color: "#444", maxWidth: 540 }}>
              Vi rydder etter oss, holder fremdrift og leverer en jobb du kan være stolt av — enten det er ett rom, en hel bolig eller et større prosjekt.
            </p>
          </div>
          <div className="reveal" style={{ aspectRatio: "16/9", overflow: "hidden" }}>
            <img src={innvendig} alt="Innvendig maling — AK Malerservice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .split-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* STATEMENT */}
      <section style={{ background: "#111111", padding: "160px 32px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2 className="reveal" style={{
            color: "#fff",
            fontSize: "clamp(36px, 5vw, 72px)",
            maxWidth: 900,
            lineHeight: 1.15,
          }}>
            Vi tar jobben fra første sparkel — og forlater den når den er <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>perfekt</em>.
          </h2>
          <div className="reveal" style={{ width: 60, height: 1, background: "#fff", marginTop: 40 }} />
        </div>
      </section>

      {/* PROSJEKTER PREVIEW */}
      <section style={{ padding: "140px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Referanseprosjekter</div>
              <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>Et utvalg av jobbene vi har gjort.</h2>
            </div>
            <Link to="/prosjekter" style={{ color: "#111", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #111", paddingBottom: 4 }}>
              Se alle prosjekter →
            </Link>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 24,
          }} className="proj-grid">
            <div className="reveal" style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
              <ProsjektCelle src={interior1.url} navn="Tapetsering og fargesetting" kategori="Tapet · Maling" />
              <ProsjektCelle src={admirBilde} navn="Vegg i strukturtapet" kategori="Tapetsering" />
            </div>
            <div className="reveal" style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
              <ProsjektCelle src={interior2.url} navn="Aksentvegg i tapet" kategori="Tapet · Listverk" />
              <ProsjektCelle src={interior3.url} navn="Komplett interiøroppussing" kategori="Maling · Tapet" />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .proj-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

function ProsjektCelle({ src, navn, kategori }: { src: string; navn: string; kategori: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={src} alt={navn} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
      </div>
      <figcaption style={{ marginTop: 16 }}>
        <div style={{ fontSize: 15, color: "#111", fontWeight: 500 }}>{navn}</div>
        <div style={{ fontSize: 13, color: "#6b6b6b", marginTop: 2 }}>{kategori}</div>
      </figcaption>
    </figure>
  );
}
