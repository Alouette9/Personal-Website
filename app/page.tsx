"use client";
import Image from "next/image";
import { useState, CSSProperties, KeyboardEvent } from "react";

const INTERESTS: string[] = [
  "Building full-stack web applications",
  "Video games (league of legends took most of my spare time)",
  "Listening to music",
  "Playing basketball (been a while I didn't play it actually..)",
  "Hanging out with a puppy",
  "Cooking",
];

type SortMode = "original" | "alphabetical" | "reverse" | "shuffle";
const SORT_MODES: SortMode[] = ["original", "alphabetical", "reverse", "shuffle"];
const SORT_LABELS: Record<SortMode, string> = {
  original: "Original Order",
  alphabetical: "A → Z",
  reverse: "Z → A",
  shuffle: "Shuffle",
};

function sortList(items: string[], mode: SortMode): string[] {
  const copy = [...items];
  switch (mode) {
    case "alphabetical": return copy.sort((a, b) => a.localeCompare(b));
    case "reverse":      return copy.sort((a, b) => b.localeCompare(a));
    case "shuffle":
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    default: return [...INTERESTS];
  }
}

export default function Home() {
  const [sortMode, setSortMode] = useState<SortMode>("original");
  const [displayedList, setDisplayedList] = useState<string[]>(INTERESTS);

  function handleSort(mode: SortMode): void {
    setSortMode(mode);
    setDisplayedList(sortList(INTERESTS, mode));
  }

  /* Allow Enter/Space to trigger sort buttons — WCAG 2.1.1 */
  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, mode: SortMode): void {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSort(mode);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.siteTitle}>Larry Qiu</h1>
          <p style={styles.tagline}>
            Software Engineering Student · University of Washington Bothell · CSS480 · What else...
          </p>
        </div>
      </header>

      <main id="main-content" style={styles.main}>
        {/* Welcome */}
        <section style={styles.section} aria-labelledby="welcome-heading">
          <div style={styles.welcomeCard}>
            <div style={styles.welcomeEmoji} aria-hidden="true">
              👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋
            </div>
            <h2 id="welcome-heading" style={styles.welcomeHeading}>Welcome to my site!</h2>
          </div>
        </section>

        {/* About */}
        <section style={styles.section} aria-labelledby="about-heading">
          <h2 id="about-heading" style={styles.sectionHeading}>About Me</h2>
          <div style={styles.aboutGrid}>
            <div style={styles.avatarWrap}>
              <Image
                src="/pc.jpg"
                alt="Larry Qiu's cat"
                width={200}
                height={200}
                style={{ borderRadius: "50%", objectFit: "cover" as const }}
              />
              <p style={styles.avatarCaption}>Not me but my cat</p>
            </div>
            <div style={styles.aboutText}>
              <p style={styles.bodyText}>
                Hi, This is Larry Qiu — a computer science student at the University of Washington Bothell.
                I spend most of my time writing code, exploring new tech, and trying to make powerful projects.
              </p>
              <p style={styles.bodyText}>
                I&apos;m currently taking <strong>CSS 480</strong> and this page is my first step of building this website!
              </p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section style={styles.section} aria-labelledby="interests-heading">
          <h2 id="interests-heading" style={styles.sectionHeading}>Things I&apos;m Into</h2>

          <div style={styles.sortRow} role="group" aria-label="Sort interest list">
            {SORT_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => handleSort(mode)}
                onKeyDown={(e) => handleKeyDown(e, mode)}
                aria-pressed={sortMode === mode}
                style={{
                  ...styles.sortBtn,
                  ...(sortMode === mode ? styles.sortBtnActive : {}),
                }}
              >
                {SORT_LABELS[mode]}
              </button>
            ))}
          </div>

          <ul style={styles.list} aria-label="List of interests">
            {displayedList.map((item, i) => (
              <li key={item} style={styles.listItem}>
                <span style={styles.listIndex} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span style={styles.listText}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Keyboard Access Documentation */}
        <section style={styles.section} aria-labelledby="keyboard-heading">
          <h2 id="keyboard-heading" style={styles.sectionHeading}>Keyboard Access Guide</h2>
          <div style={styles.keyboardCard}>
            <p style={styles.bodyText}>
              This site is fully navigable by keyboard. Here is how to get around:
            </p>
            <table style={styles.keyTable} aria-label="Keyboard shortcuts">
              <thead>
                <tr>
                  <th style={styles.keyTh} scope="col">Key</th>
                  <th style={styles.keyTh} scope="col">What it does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tab", "Move forward through links, buttons, and nav items"],
                  ["Shift + Tab", "Move backward through interactive elements"],
                  ["Enter / Space", "Activate a focused button or link"],
                  ["Enter", "Follow a focused link"],
                  ["Skip link (first Tab)", "Jump directly to main content, bypassing the nav bar"],
                ].map(([key, desc]) => (
                  <tr key={key}>
                    <td style={styles.keyTd}><kbd style={styles.kbd}>{key}</kbd></td>
                    <td style={styles.keyTd}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={styles.bodyText} style={{ marginTop: "1rem" } as CSSProperties}>
              <strong>Focus goal:</strong> Every interactive element on this site shows a visible green outline
              when focused, so keyboard users always know where they are. This follows the usability principle
              of <em>visibility of system status</em> — the interface should always keep users informed about
              what is currently selected or active.
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          <p style={styles.footerText}>Built with React · CSS 480 · University of Washington · 2026</p>
        </footer>
      </main>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page:          { fontFamily: "'Georgia', serif", background: "#f4f9f4", minHeight: "100vh", color: "#1a2e1a" },
  header:        { background: "#1b4332", color: "#d8f3dc", padding: "2.5rem 1.5rem 2rem", textAlign: "center", borderBottom: "4px solid #52b788" },
  headerInner:   { maxWidth: "720px", margin: "0 auto" },
  siteTitle:     { fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: "400", margin: "0 0 0.5rem", fontFamily: "'Georgia', serif", color: "#d8f3dc" },
  tagline:       { fontSize: "15px", color: "#95d5b2", margin: 0, fontFamily: "system-ui, sans-serif", fontStyle: "italic" },
  main:          { maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem 3rem" },
  section:       { marginTop: "3rem" },
  sectionHeading:{ fontSize: "1.4rem", fontWeight: "400", fontFamily: "'Georgia', serif", borderBottom: "2px solid #52b788", paddingBottom: "0.5rem", marginBottom: "1.5rem", color: "#1b4332" },
  welcomeCard:   { background: "#ffffff", border: "1px solid #b7e4c7", borderLeft: "5px solid #52b788", borderRadius: "0 12px 12px 0", padding: "2rem", textAlign: "center" },
  welcomeEmoji:  { fontSize: "2.5rem", marginBottom: "0.75rem" },
  welcomeHeading:{ fontSize: "1.6rem", fontWeight: "400", margin: "0 0 1rem", color: "#1b4332" },
  aboutGrid:     { display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" },
  avatarWrap:    { display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", flexShrink: 0 },
  avatarCaption: { fontSize: "13px", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
  aboutText:     { flex: "1", minWidth: "260px" },
  bodyText:      { fontSize: "1rem", lineHeight: "1.8", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: "0 0 1rem" },
  sortRow:       { display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.5rem" },
  sortBtn:       { background: "#ffffff", border: "1px solid #52b788", borderRadius: "6px", padding: "6px 14px", fontSize: "13px", fontFamily: "system-ui, sans-serif", cursor: "pointer", color: "#1b4332", transition: "all 0.15s" },
  sortBtnActive: { background: "#1b4332", border: "1px solid #1b4332", color: "#d8f3dc" },
  list:          { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" },
  listItem:      { display: "flex", alignItems: "center", gap: "1rem", background: "#ffffff", border: "1px solid #b7e4c7", borderLeft: "4px solid #52b788", borderRadius: "0 8px 8px 0", padding: "14px 18px" },
  listIndex:     { fontSize: "12px", fontFamily: "'Courier New', monospace", color: "#1e6b45", minWidth: "24px" },
  listText:      { fontSize: "1rem", fontFamily: "system-ui, sans-serif", color: "#1a2e1a" },
  keyboardCard:  { background: "#ffffff", border: "1px solid #b7e4c7", borderRadius: "8px", padding: "1.5rem" },
  keyTable:      { width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", marginBottom: "0.5rem" },
  keyTh:         { textAlign: "left", padding: "8px 12px", background: "#e9f5e9", color: "#1b4332", borderBottom: "2px solid #52b788" },
  keyTd:         { padding: "8px 12px", borderBottom: "1px solid #e8e5dc", color: "#2d4a2d", verticalAlign: "top" },
  kbd:           { background: "#f4f9f4", border: "1px solid #b7e4c7", borderRadius: "4px", padding: "2px 7px", fontFamily: "'Courier New', monospace", fontSize: "0.9rem", color: "#1b4332" },
  footer:        { marginTop: "4rem", borderTop: "2px solid #b7e4c7", background: "#e9f5e9", borderRadius: "8px", padding: "1.5rem", textAlign: "center" },
  footerText:    { fontSize: "13px", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
};
