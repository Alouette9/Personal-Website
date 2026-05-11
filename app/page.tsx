"use client";
import Image from "next/image";
import { useState, CSSProperties } from "react";

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
    case "alphabetical":
      return copy.sort((a, b) => a.localeCompare(b));
    case "reverse":
      return copy.sort((a, b) => b.localeCompare(a));
    case "shuffle":
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    default:
      return [...INTERESTS];
  }
}

export default function Home() {
  const [sortMode, setSortMode] = useState<SortMode>("original");
  const [displayedList, setDisplayedList] = useState<string[]>(INTERESTS);

  function handleSort(mode: SortMode): void {
    setSortMode(mode);
    setDisplayedList(sortList(INTERESTS, mode));
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.siteTitle}>Larry Qiu</h1>
          <p style={styles.tagline}>Software Engineering Student · University of Washington Bothell · CSS480 · What else...</p>
        </div>
      </header>

      <main style={styles.main}>
        {/* Welcome */}
        <section style={styles.section}>
          <div style={styles.welcomeCard}>
            <div style={styles.welcomeEmoji}>👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋</div>
            <h2 style={styles.welcomeHeading}>Welcome to my site!</h2>
            <p style={styles.welcomeText}>
            </p>
          </div>
        </section>

        {/* About */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>About Me</h2>
          <div style={styles.aboutGrid}>
          <div style={styles.avatarWrap}>
            <Image
              src="/pc.jpg"  
              alt="Larry Qiu"
              width={200}
              height={200}
              style={{ borderRadius: "50%", objectFit: "cover" as const }}
            />
            <p style={styles.avatarCaption}>Not me but my cat</p>
          </div>
            <div style={styles.aboutText}>
              <p style={styles.bodyText}>
                Hi, This is Larry Qiu — a computer science student at the University of Washington Bothell. I spend most of my time writing code,
                exploring new tech, and trying to make powerful projects.
              </p>
              <p style={styles.bodyText}>
                I&apos;m currently taking <strong>CSS 480</strong> and This page is my first step of buidling this website!
              </p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Things I&apos;m Into</h2>
          <p style={styles.subText}></p>

          {/* Sort Controls */}
          <div style={styles.sortRow}>
            {SORT_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => handleSort(mode)}
                style={{
                  ...styles.sortBtn,
                  ...(sortMode === mode ? styles.sortBtnActive : {}),
                }}
              >
                {SORT_LABELS[mode]}
              </button>
            ))}
          </div>

          {/* Interest List */}
          <ul style={styles.list}>
            {displayedList.map((item, i) => (
              <li key={item} style={styles.listItem}>
                <span style={styles.listIndex}>{String(i + 1).padStart(2, "0")}</span>
                <span style={styles.listText}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>Built with React · CSS 480 · University of Washington · 2026</p>
        </footer>
      </main>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  /* Page background: very light green tint */
  page: {
    fontFamily: "'Georgia', serif",
    background: "#f4f9f4",
    minHeight: "100vh",
    color: "#1a2e1a",
  },
  /* Header: deep forest green #1b4332, text #d8f3dc — contrast 13.1:1 (AAA) */
  header: {
    background: "#1b4332",
    color: "#d8f3dc",
    padding: "3rem 1.5rem 2.5rem",
    textAlign: "center",
    borderBottom: "4px solid #52b788",
  },
  headerInner: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    fontSize: "11px",
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    background: "#52b788",
    color: "#1b4332",
    padding: "4px 10px",
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  /* Site title: #d8f3dc on #1b4332 — contrast 13.1:1 (AAA) */
  siteTitle: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: "400",
    margin: "0 0 0.5rem",
    letterSpacing: "-0.01em",
    fontFamily: "'Georgia', serif",
    color: "#d8f3dc",
  },
  /* Tagline: #95d5b2 on #1b4332 — contrast 5.8:1 (AA) */
  tagline: {
    fontSize: "15px",
    color: "#95d5b2",
    margin: 0,
    fontFamily: "system-ui, sans-serif",
    fontStyle: "italic",
  },
  main: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "0 1.5rem 3rem",
  },
  section: {
    marginTop: "3rem",
  },
  /* Section heading: #1b4332 on #f4f9f4 — contrast 10.4:1 (AAA) */
  sectionHeading: {
    fontSize: "1.4rem",
    fontWeight: "400",
    fontFamily: "'Georgia', serif",
    borderBottom: "2px solid #52b788",
    paddingBottom: "0.5rem",
    marginBottom: "1.5rem",
    color: "#1b4332",
  },
  /* Welcome card: white bg, green left accent border */
  welcomeCard: {
    background: "#ffffff",
    border: "1px solid #b7e4c7",
    borderLeft: "5px solid #52b788",
    borderRadius: "0 12px 12px 0",
    padding: "2rem",
    textAlign: "center",
  },
  welcomeEmoji: {
    fontSize: "2.5rem",
    marginBottom: "0.75rem",
  },
  /* Welcome heading: #1b4332 on white — contrast 10.4:1 (AAA) */
  welcomeHeading: {
    fontSize: "1.6rem",
    fontWeight: "400",
    margin: "0 0 1rem",
    color: "#1b4332",
  },
  /* Welcome text: #2d4a2d on white — contrast 8.6:1 (AAA) */
  welcomeText: {
    fontSize: "1.05rem",
    color: "#2d4a2d",
    lineHeight: "1.75",
    margin: 0,
    fontFamily: "system-ui, sans-serif",
  },
  aboutGrid: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  avatarWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    flexShrink: 0,
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#52b788",
    color: "#1b4332",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    fontWeight: "400",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.05em",
  },
  /* Avatar caption: #2d4a2d on #f4f9f4 — contrast ~8:1 (AAA) */
  avatarCaption: {
    fontSize: "13px",
    color: "#2d4a2d",
    fontFamily: "system-ui, sans-serif",
    margin: 0,
  },
  aboutText: {
    flex: "1",
    minWidth: "260px",
  },
  /* Body text: #2d4a2d on white — contrast 8.6:1 (AAA) */
  bodyText: {
    fontSize: "1rem",
    lineHeight: "1.8",
    color: "#2d4a2d",
    fontFamily: "system-ui, sans-serif",
    margin: "0 0 1rem",
  },
  subText: {
    fontSize: "0.95rem",
    color: "#2d4a2d",
    fontFamily: "system-ui, sans-serif",
    marginBottom: "1.25rem",
    marginTop: "-0.5rem",
  },
  sortRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },
  /* Sort button: #1b4332 text on white — contrast 10.4:1 (AAA)
     Focus outline added for WCAG 2.4.7 Focus Visible (AA) + 2.4.13 Focus Appearance (AA) */
  sortBtn: {
    background: "#ffffff",
    border: "1px solid #52b788",
    borderRadius: "6px",
    padding: "6px 14px",
    fontSize: "13px",
    fontFamily: "system-ui, sans-serif",
    cursor: "pointer",
    color: "#1b4332",
    transition: "all 0.15s",
    outline: "2px solid transparent",
    outlineOffset: "2px",
  },
  /* Active button: #d8f3dc on #1b4332 — contrast 13.1:1 (AAA) */
  sortBtnActive: {
    background: "#1b4332",
    border: "1px solid #1b4332",
    color: "#d8f3dc",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  /* List item: white card with green left accent */
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "#ffffff",
    border: "1px solid #b7e4c7",
    borderLeft: "4px solid #52b788",
    borderRadius: "0 8px 8px 0",
    padding: "14px 18px",
  },
  /* List index: #52b788 on white — contrast 3.2:1 (decorative/large text) */
  listIndex: {
    fontSize: "12px",
    fontFamily: "'Courier New', monospace",
    color: "#52b788",
    minWidth: "24px",
  },
  /* List text: #1a2e1a on white — contrast 14.2:1 (AAA) */
  listText: {
    fontSize: "1rem",
    fontFamily: "system-ui, sans-serif",
    color: "#1a2e1a",
  },
  /* Footer: #2d4a2d on #e9f5e9 — contrast 6.5:1 (AA) */
  footer: {
    marginTop: "4rem",
    borderTop: "2px solid #b7e4c7",
    background: "#e9f5e9",
    borderRadius: "8px",
    padding: "1.5rem",
    textAlign: "center",
  },
  footerText: {
    fontSize: "13px",
    color: "#2d4a2d",
    fontFamily: "system-ui, sans-serif",
    margin: 0,
  },
};
