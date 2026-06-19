import { Link } from "@tanstack/react-router";
import { tjenester } from "@/data/tjenester";

export function Footer() {
  return (
    <footer style={{ background: "#111111", color: "#fff", padding: "80px 32px 40px" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: 64,
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
            AK Malerservice AS
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", maxWidth: 360, lineHeight: 1.7 }}>
            Malermester med kompetanse innen innvendig og utvendig maling, tapetsering, gulvlegging, flislegging og baderomsoppussing.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 32 }}>
            © {new Date().getFullYear()} AK Malerservice AS
          </p>
        </div>

        <div>
          <div className="eyebrow-light" style={{ marginBottom: 20 }}>Sider</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            <li><Link to="/" style={footerLink}>Hjem</Link></li>
            <li><Link to="/tjenester" style={footerLink}>Tjenester</Link></li>
            <li><Link to="/prosjekter" style={footerLink}>Prosjekter</Link></li>
            <li><Link to="/om-oss" style={footerLink}>Om oss</Link></li>
            <li><Link to="/karriere" style={footerLink}>Karriere</Link></li>
            <li><Link to="/kontakt" style={footerLink}>Kontakt</Link></li>
          </ul>
          <div className="eyebrow-light" style={{ marginTop: 32, marginBottom: 20 }}>Tjenester</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {tjenester.map((t) => (
              <li key={t.slug}>
                <Link to="/tjenester/$slug" params={{ slug: t.slug }} style={footerLink}>
                  {t.navn}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow-light" style={{ marginBottom: 20 }}>Kontakt</div>
          <address style={{ fontStyle: "normal", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.9 }}>
            Admir Kicka<br />
            Daglig leder<br /><br />
            <a href="tel:+4740285729" style={footerLink}>Tlf: 402 85 729</a><br />
            <a href="mailto:akmalerservice@hotmail.com" style={footerLink}>akmalerservice@hotmail.com</a>
          </address>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </footer>
  );
}

const footerLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.8)",
  textDecoration: "none",
  fontSize: 14,
};
