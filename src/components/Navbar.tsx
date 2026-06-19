import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { tjenester } from "@/data/tjenester";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [tjenesterOpen, setTjenesterOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
    setTjenesterOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome;
  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: solid ? "#FFFFFF" : "transparent",
    borderBottom: solid ? "1px solid #E8E8E8" : "1px solid transparent",
    transition: "background 0.4s ease, border-color 0.4s ease",
  };
  const linkColor = solid ? "#111111" : "#FFFFFF";

  return (
    <>
      <header style={navStyle}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.01em",
              color: linkColor,
              textDecoration: "none",
            }}
          >
            AK Malerservice
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
            <NavLink to="/" color={linkColor}>Hjem</NavLink>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setTjenesterOpen(true)}
              onMouseLeave={() => setTjenesterOpen(false)}
            >
              <Link
                to="/tjenester"
                style={{
                  color: linkColor,
                  fontSize: 14,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontWeight: 500,
                }}
              >
                Tjenester <ChevronDown size={14} />
              </Link>
              {tjenesterOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: -16,
                    background: "#fff",
                    border: "1px solid #E8E8E8",
                    minWidth: 280,
                    padding: "12px 0",
                    marginTop: 8,
                  }}
                >
                  {tjenester.map((t) => (
                    <Link
                      key={t.slug}
                      to="/tjenester/$slug"
                      params={{ slug: t.slug }}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "#111",
                        textDecoration: "none",
                        fontSize: 14,
                      }}
                    >
                      {t.navn}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/prosjekter" color={linkColor}>Prosjekter</NavLink>
            <NavLink to="/om-oss" color={linkColor}>Om oss</NavLink>
            <NavLink to="/karriere" color={linkColor}>Karriere</NavLink>
            <Link to="/kontakt" className="btn btn-dark" style={{ padding: "10px 20px", fontSize: 13 }}>
              Ta kontakt
            </Link>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(true)}
            aria-label="Åpne meny"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: linkColor,
              cursor: "pointer",
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#111111",
            zIndex: 100,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Lukk meny"
              style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}
            >
              <X size={28} />
            </button>
          </div>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              marginTop: 48,
              fontFamily: "var(--font-display)",
              fontSize: 32,
            }}
          >
            <Link to="/" style={mobileLinkStyle}>Hjem</Link>
            <Link to="/tjenester" style={mobileLinkStyle}>Tjenester</Link>
            <Link to="/prosjekter" style={mobileLinkStyle}>Prosjekter</Link>
            <Link to="/om-oss" style={mobileLinkStyle}>Om oss</Link>
            <Link to="/karriere" style={mobileLinkStyle}>Karriere</Link>
            <Link to="/kontakt" style={mobileLinkStyle}>Kontakt</Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}

const mobileLinkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};

function NavLink({ to, color, children }: { to: string; color: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{
        color,
        fontSize: 14,
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      {children}
    </Link>
  );
}
