import { Link } from "@tanstack/react-router";
import type { Tjeneste } from "@/data/tjenester";

export function TjenesteKort({ t }: { t: Tjeneste }) {
  return (
    <article className="tjeneste-kort">
      <div className="tjeneste-kort__bilde-wrapper">
        <img src={t.bilde} alt={t.navn} className="tjeneste-kort__bilde" loading="lazy" />
      </div>
      <div className="tjeneste-kort__innhold">
        <h3 className="tjeneste-kort__navn">{t.navn}</h3>
        <p className="tjeneste-kort__beskrivelse">{t.kortBeskrivelse}</p>
        <Link
          to="/tjenester/$slug"
          params={{ slug: t.slug }}
          className="tjeneste-kort__les-mer"
        >
          Les mer →
        </Link>
      </div>
    </article>
  );
}
