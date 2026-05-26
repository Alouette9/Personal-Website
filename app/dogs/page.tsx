import { CSSProperties } from "react";
import Image from "next/image";

export default function DogsPage() {
  return (
    <div style={s.page}>

      {/* ── HERO: First attention ──
           Gestalt: figure/ground — gradient + large text pops immediately
           Size contrast: biggest element on the page = first eye stop      */}
      <section style={s.hero} aria-labelledby="hero-heading">
        <div style={s.heroOverlay} />
        <div style={s.heroContent}>
          <p style={s.heroEyebrow}>A Guide to Dog Breeds</p>
          <h1 id="hero-heading" style={s.heroTitle}>Find Your Perfect Dog</h1>
          <p style={s.heroSub}>
            Every dog breed has a personality. Here are three of my favorites.
          </p>
        </div>
      </section>

      <main id="main-content" style={s.main}>

        {/* ── PULL QUOTE: Second attention ──
             Isolated by whitespace (Gestalt: figure/ground)
             Large italic text + green accent bar draws eye after hero       */}
        <section style={s.introSection} aria-label="Introduction">
          <blockquote style={s.pullQuote}>
            "The world would be a nicer place if everyone had the ability to love as unconditionally as a dog."
            <cite style={s.cite}>— M.K. Clinton</cite>
          </blockquote>
        </section>

        {/* ── BREED CARDS: Third attention ──
             Gestalt: similarity — identical card shape creates visual rhythm
             Gestalt: continuation — horizontal row guides eye left to right
             Within each card: image first (preattentive), then name, then text */}
        <section style={s.breedsSection} aria-labelledby="breeds-heading">
          <h2 id="breeds-heading" style={s.sectionHeading}>My Favorite Breeds</h2>
          <div style={s.cardGrid}>

            <article style={s.card} aria-labelledby="breed-golden">
              <div style={s.cardImgWrap}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg"
                  alt="A happy Golden Retriever sitting outdoors"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <span style={s.cardBadge}>Friendly</span>
              </div>
              <div style={s.cardBody}>
                <h3 id="breed-golden" style={s.cardTitle}>Golden Retriever</h3>
                <p style={s.cardText}>
                  One of the most popular family dogs in the world. Goldens are
                  patient, playful, and incredibly loyal. They love people,
                  other animals, and especially fetch.
                </p>
                <ul style={s.traitList} aria-label="Traits">
                  <li style={s.trait}>🏃 High energy</li>
                  <li style={s.trait}>❤️ Very affectionate</li>
                  <li style={s.trait}>🧠 Easy to train</li>
                </ul>
              </div>
            </article>

            <article style={s.card} aria-labelledby="breed-shiba">
              <div style={s.cardImgWrap}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/640px-Taka_Shiba.jpg"
                  alt="A Shiba Inu looking alert in a forest"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <span style={s.cardBadge}>Independent</span>
              </div>
              <div style={s.cardBody}>
                <h3 id="breed-shiba" style={s.cardTitle}>Shiba Inu</h3>
                <p style={s.cardText}>
                  Japan&apos;s most famous dog breed. Shibas are bold, alert,
                  and a little stubborn — but fiercely loyal to their owners.
                  They have cat-like personalities and love to be clean.
                </p>
                <ul style={s.traitList} aria-label="Traits">
                  <li style={s.trait}>🦊 Fox-like appearance</li>
                  <li style={s.trait}>😤 Stubborn but smart</li>
                  <li style={s.trait}>🧼 Very clean</li>
                </ul>
              </div>
            </article>

            <article style={s.card} aria-labelledby="breed-corgi">
              <div style={s.cardImgWrap}>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pembrokeshire_Welsh_Corgi_Portrait.jpg/640px-Pembrokeshire_Welsh_Corgi_Portrait.jpg"
                  alt="A Pembroke Welsh Corgi portrait"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
                <span style={s.cardBadge}>Playful</span>
              </div>
              <div style={s.cardBody}>
                <h3 id="breed-corgi" style={s.cardTitle}>Pembroke Welsh Corgi</h3>
                <p style={s.cardText}>
                  Small legs, big personality. Corgis were originally herding
                  dogs and still have tons of energy. They are cheerful,
                  outgoing, and surprisingly fast for their size.
                </p>
                <ul style={s.traitList} aria-label="Traits">
                  <li style={s.trait}>🐾 Short but mighty</li>
                  <li style={s.trait}>😄 Always happy</li>
                  <li style={s.trait}>🐄 Natural herder</li>
                </ul>
              </div>
            </article>

          </div>
        </section>

        {/* Attention design notes — for class presentation */}
        <section style={s.designSection} aria-labelledby="design-heading">
          <h2 id="design-heading" style={s.sectionHeading}>Attention Design Notes</h2>
          <div style={s.designCard}>
            <div style={s.designRow}>
              <div style={s.designStep}>
                <span style={s.designNum}>1st</span>
                <p style={s.designDesc}><strong>Hero section</strong> — full-width, high contrast, largest text on the page. Viewers look here first due to size and contrast (preattentive attribute).</p>
              </div>
              <div style={s.designStep}>
                <span style={s.designNum}>2nd</span>
                <p style={s.designDesc}><strong>Pull quote</strong> — large italic text, centered, surrounded by whitespace. Draws attention via Gestalt figure/ground: isolated element stands out from background.</p>
              </div>
              <div style={s.designStep}>
                <span style={s.designNum}>3rd</span>
                <p style={s.designDesc}><strong>Breed cards</strong> — images catch the eye first (preattentive), then breed name, then text. Gestalt similarity: identical card shapes create scannable rhythm across the row.</p>
              </div>
            </div>
          </div>
        </section>

        <footer style={s.footer}>
          <p style={s.footerText}>Built with React · CSS 480 · University of Washington · 2026</p>
        </footer>
      </main>
    </div>
  );
}

const s: Record<string, CSSProperties> = {
  page:          { fontFamily: "'Georgia', serif", background: "#f4f9f4", minHeight: "100vh", color: "#1a2e1a" },
  hero:          { position: "relative", height: "420px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
  heroOverlay:   { position: "absolute", inset: 0, background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #52b788 100%)" },
  heroContent:   { position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem", maxWidth: "600px" },
  heroEyebrow:   { fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#95d5b2", fontFamily: "system-ui, sans-serif", margin: "0 0 1rem" },
  heroTitle:     { fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: "700", color: "#d8f3dc", margin: "0 0 1rem", lineHeight: 1.1 },
  heroSub:       { fontSize: "1.1rem", color: "#b7e4c7", fontFamily: "system-ui, sans-serif", margin: 0, lineHeight: 1.6 },
  main:          { },
  introSection:  { maxWidth: "720px", margin: "0 auto", padding: "3.5rem 1.5rem 0" },
  pullQuote:     { margin: 0, padding: "1.5rem 2rem", borderLeft: "5px solid #52b788", background: "#ffffff", borderRadius: "0 8px 8px 0", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.7, color: "#1b4332" },
  cite:          { display: "block", marginTop: "0.75rem", fontSize: "0.9rem", color: "#3a6b3a", fontStyle: "normal", fontFamily: "system-ui, sans-serif" },
  breedsSection: { maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem 0" },
  sectionHeading:{ fontSize: "1.4rem", fontWeight: "400", borderBottom: "2px solid #52b788", paddingBottom: "0.5rem", marginBottom: "2rem", color: "#1b4332" },
  cardGrid:      { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" },
  card:          { background: "#ffffff", border: "1px solid #b7e4c7", borderRadius: "10px", overflow: "hidden", display: "flex", flexDirection: "column" },
  cardImgWrap:   { position: "relative", height: "180px", flexShrink: 0 },
  cardBadge:     { position: "absolute", top: "10px", right: "10px", background: "#1b4332", color: "#d8f3dc", fontSize: "11px", fontFamily: "system-ui, sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: "20px" },
  cardBody:      { padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" },
  cardTitle:     { fontSize: "1.15rem", fontWeight: "600", color: "#1b4332", margin: 0 },
  cardText:      { fontSize: "0.93rem", lineHeight: 1.7, color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
  traitList:     { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px", marginTop: "auto" },
  trait:         { fontSize: "0.88rem", fontFamily: "system-ui, sans-serif", color: "#3a6b3a" },
  designSection: { maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem 0" },
  designCard:    { background: "#ffffff", border: "1px solid #b7e4c7", borderRadius: "8px", padding: "1.5rem" },
  designRow:     { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.25rem" },
  designStep:    { display: "flex", flexDirection: "column", gap: "0.5rem" },
  designNum:     { fontSize: "1.6rem", fontWeight: "700", color: "#52b788", fontFamily: "system-ui, sans-serif" },
  designDesc:    { fontSize: "0.92rem", lineHeight: 1.65, color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
  footer:        { maxWidth: "720px", margin: "3rem auto 0", borderTop: "2px solid #b7e4c7", background: "#e9f5e9", borderRadius: "8px", padding: "1.5rem", textAlign: "center" },
  footerText:    { fontSize: "13px", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
};
