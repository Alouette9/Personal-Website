import { CSSProperties } from "react";
import Image from "next/image";

const BREEDS = [
  {
    id: "golden",
    name: "Golden Retriever",
    accentColor: "#b5451b",
    img: "/dogs/golden.jpg",
    alt: "Golden Retriever sitting outdoors",
    desc: "One of the most popular family dogs in the world. Goldens are patient, playful, and incredibly loyal. They love people, other animals, and especially fetch.",
    traits: ["High energy", "Very affectionate", "Easy to train"],
  },
  {
    id: "shiba",
    name: "Shiba Inu",
    accentColor: "#7b3f00",
    img: "/dogs/shiba.jpg",
    alt: "Shiba Inu looking alert in a forest",
    desc: "Japan's most famous dog breed. Shibas are bold, alert, and a little stubborn — but fiercely loyal to their owners. They have cat-like personalities and love to be clean.",
    traits: ["Fox-like appearance", "Stubborn but smart", "Very clean"],
  },
  {
    id: "corgi",
    name: "Pembroke Welsh Corgi",
    accentColor: "#5c4a1e",
    img: "/dogs/corgi.jpg",
    alt: "Pembroke Welsh Corgi portrait",
    desc: "Small legs, big personality. Corgis were originally herding dogs and still have tons of energy. They are cheerful, outgoing, and surprisingly fast for their size.",
    traits: ["Short but mighty", "Always happy", "Natural herder"],
  },
  {
    id: "husky",
    name: "Siberian Husky",
    accentColor: "#1a3a5c",
    img: "/dogs/husky.jpg",
    alt: "Siberian Husky with blue eyes",
    desc: "Built for cold climates and long runs. Huskies are energetic, vocal, and love outdoor adventures. Their striking blue eyes and wolf-like appearance make them unforgettable.",
    traits: ["Cold weather lover", "Very vocal", "Wolf-like look"],
  },
  {
    id: "labrador",
    name: "Labrador Retriever",
    accentColor: "#2d5a1b",
    img: "/dogs/labrador.jpg",
    alt: "Labrador Retriever smiling",
    desc: "America's most popular dog breed for decades. Labs are friendly, outgoing, and great with kids. They make excellent guide dogs and search-and-rescue dogs.",
    traits: ["Great with kids", "Often a service dog", "Loves water"],
  },
  {
    id: "poodle",
    name: "Poodle",
    accentColor: "#4a1a6b",
    img: "/dogs/poodle.jpg",
    alt: "Standard Poodle standing elegantly",
    desc: "Don't let the fancy haircut fool you — Poodles are one of the smartest dog breeds. They are athletic, trainable, and come in three sizes: standard, miniature, and toy.",
    traits: ["Highly intelligent", "Hypoallergenic coat", "Very trainable"],
  },
  {
    id: "bulldog",
    name: "French Bulldog",
    accentColor: "#5c2a2a",
    img: "/dogs/bulldog.jpg",
    alt: "French Bulldog with bat ears",
    desc: "Compact, muscular, and full of charm. French Bulldogs are low-energy indoors but love short play sessions. Their big bat ears and wrinkled face are hard to resist.",
    traits: ["Great for apartments", "Low exercise needs", "Very affectionate"],
  },
  {
    id: "beagle",
    name: "Beagle",
    accentColor: "#1a4a3a",
    img: "/dogs/beagle.jpg",
    alt: "Beagle sniffing the ground",
    desc: "Beagles follow their nose everywhere. They are cheerful, determined, and love to explore. Originally bred for hunting, they have an incredible sense of smell.",
    traits: ["Amazing sense of smell", "Hunting instinct", "Loves to howl"],
  },
  {
    id: "border",
    name: "Border Collie",
    accentColor: "#1a3a1a",
    img: "/dogs/border.jpg",
    alt: "Border Collie in a field",
    desc: "Widely considered the most intelligent dog breed. Border Collies need a job to do — they thrive on agility, herding, and learning complex tricks. Not a couch dog.",
    traits: ["#1 smartest breed", "Extremely energetic", "Born herder"],
  },
  {
    id: "dalmatian",
    name: "Dalmatian",
    accentColor: "#2a2a2a",
    img: "/dogs/dalmatian.jpg",
    alt: "Dalmatian showing its spots",
    desc: "Famous for their spots, Dalmatians are athletic, dignified, and sometimes stubborn. They were historically used as carriage dogs and firehouse mascots.",
    traits: ["Unique spotted coat", "High stamina", "Firehouse icon"],
  },
  {
    id: "samoyed",
    name: "Samoyed",
    accentColor: "#3a5a7a",
    img: "/dogs/samoyed.jpg",
    alt: "Samoyed smiling with white fluffy coat",
    desc: "The Samoyed smile is real — the upturned corners of their mouth keep them from drooling in cold weather. They are gentle, friendly, and absolutely covered in fluff.",
    traits: ["Permanent smile", "Cloud-like coat", "Loves cold weather"],
  },
  {
    id: "akita",
    name: "Akita",
    accentColor: "#6b3a1a",
    img: "/dogs/akita.jpg",
    alt: "Akita standing proudly",
    desc: "In Japan, Akitas are symbols of good health, happiness, and long life. They are deeply loyal, protective of their family, and reserved around strangers.",
    traits: ["Japanese national breed", "Protective", "Reserved but devoted"],
  },
];

export default function DogsPage() {
  return (
    <div style={s.page}>
      <section style={s.hero} aria-labelledby="hero-heading">
        <div style={s.heroOverlay} />
        <div style={s.heroContent}>
          <p style={s.heroEyebrow}>A Guide to Dog Breeds</p>
          <h1 id="hero-heading" style={s.heroTitle}>Find Your Perfect Dog</h1>
          <p style={s.heroSub}>Every dog breed has a personality. Here are some of my favorites.</p>
        </div>
      </section>

      <main id="main-content" style={s.main}>
        <section style={s.introSection} aria-label="Introduction">
          <blockquote style={s.pullQuote}>
            &ldquo;The world would be a nicer place if everyone had the ability to love as unconditionally as a dog.&rdquo;
            <cite style={s.cite}>— M.K. Clinton</cite>
          </blockquote>
        </section>

        <section style={s.breedsSection} aria-labelledby="breeds-heading">
          <h2 id="breeds-heading" style={s.sectionHeading}> Some Breeds (adding more in the future) ({BREEDS.length})</h2>
          <div style={s.cardGrid}>
            {BREEDS.map((breed) => (
              <article key={breed.id} style={s.card} aria-labelledby={`breed-${breed.id}`}>
                <div style={s.cardImgWrap}>
                  <Image
                    src={breed.img}
                    alt={breed.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                </div>
                <div style={s.cardBody}>
                  <h3
                    id={`breed-${breed.id}`}
                    style={{ ...s.cardTitle, color: breed.accentColor }}
                  >
                    {breed.name}
                  </h3>
                  <p style={s.cardText}>{breed.desc}</p>
                  <ul style={s.traitList} aria-label="Traits">
                    {breed.traits.map((t) => (
                      <li key={t} style={{ ...s.trait, color: breed.accentColor }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer style={s.footer}>
          <p style={s.footerText}>CSS480 - University of Washington Bothell</p>
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
  cardBody:      { padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" },
  cardTitle:     { fontSize: "1.15rem", fontWeight: "600", margin: 0 },
  cardText:      { fontSize: "0.93rem", lineHeight: 1.7, color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
  traitList:     { listStyle: "disc", paddingLeft: "1.1rem", margin: 0, display: "flex", flexDirection: "column", gap: "3px", marginTop: "auto" },
  trait:         { fontSize: "0.88rem", fontFamily: "system-ui, sans-serif" },
  footer:        { maxWidth: "720px", margin: "3rem auto 0", borderTop: "2px solid #b7e4c7", background: "#e9f5e9", borderRadius: "8px", padding: "1.5rem", textAlign: "center" },
  footerText:    { fontSize: "13px", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
};
