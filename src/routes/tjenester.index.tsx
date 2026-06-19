import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { tjenester } from "@/data/tjenester";
import { TjenesteKort } from "@/components/TjenesteKort";
import { useReveal } from "@/components/useReveal";
import headerBilde from "@/assets/innvendig.jpg";

export const Route = createFileRoute("/tjenester/")({
  head: () => ({
    meta: [
      { title: "Tjenester — AK Malerservice AS" },
      { name: "description", content: "Innvendig og utvendig maling, tapetsering, gulvlegging, flislegging, malingfjerning og flytsparkling." },
      { property: "og:title", content: "Tjenester — AK Malerservice AS" },
      { property: "og:description", content: "Komplett malerservice for private og næring." },
      { property: "og:image", content: headerBilde },
    ],
  }),
  component: TjenesterIndex,
});

function TjenesterIndex() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <section style={{ paddingTop: 120, paddingInline: 32, background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="reveal" style={{ maxWidth: 800, marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Tjenester</div>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>Komplett malerservice fra én leverandør.</h1>
            <p style={{ color: "#444", marginTop: 24, maxWidth: 640 }}>
              Vi tar prosjektet fra første sparkel til siste strøk — innvendig og utvendig maling, tapetsering, gulvlegging, flislegging og baderomsoppussing.
            </p>
          </div>
          <div className="reveal" style={{ height: "50vh", overflow: "hidden", marginBottom: 96 }}>
            <img src={headerBilde} alt="AK Malerservice — innvendig maling" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 32px 160px", background: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="tjenester-grid">
            {tjenester.map((t, i) => (
              <div key={t.slug} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <TjenesteKort t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
