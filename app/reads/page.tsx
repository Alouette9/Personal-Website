import { CSSProperties } from "react";

const LINKS = [
  { title: "UW Homepage",                    url: "https://www.washington.edu",                                          desc: "University of Washington main website" },
  { title: "UW Bothell",                     url: "https://www.uwb.edu",                                                 desc: "UW Bothell campus — where I study" },
  { title: "UW CSE Department",              url: "https://www.cs.washington.edu",                                       desc: "Paul G. Allen School of Computer Science & Engineering" },
  { title: "UW Libraries",                   url: "https://lib.washington.edu",                                          desc: "Research databases, journals, and study resources" },
  { title: "UW IT Connect",                  url: "https://itconnect.uw.edu",                                            desc: "Technology guides and tools for UW students" },
  { title: "UW Canvas",                      url: "https://canvas.uw.edu",                                               desc: "Course management system for all UW classes" },
  { title: "UW Career & Internship Center",  url: "https://careers.uw.edu",                                              desc: "Job postings, resume help, and career events" },
  { title: "UW Course Catalog",              url: "https://www.washington.edu/students/crscat/",                         desc: "Browse all available courses across UW campuses" },
  { title: "UW Student Tech Loan Program",   url: "https://stlp.uw.edu",                                                 desc: "Borrow laptops, cameras, and other tech equipment" },
  { title: "UW Research Computing",          url: "https://uwrc.uw.edu",                                                 desc: "High-performance computing resources for UW students and faculty" },
];

export default function ReadsPage() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.pageTitle}>Things to Read</h1>
          <p style={styles.tagline}>University of Washington resources I find useful</p>
        </div>
      </header>

      <main id="main-content" style={styles.main}>
        {/* Keyboard guide */}
        <section style={styles.section} aria-labelledby="keyboard-heading">
          <h2 id="keyboard-heading" style={styles.sectionHeading}>Keyboard Access Guide</h2>
          <div style={styles.keyboardCard}>
            <p style={styles.bodyText}>All links on this page are keyboard accessible:</p>
            <table style={styles.keyTable} aria-label="Keyboard shortcuts">
              <thead>
                <tr>
                  <th style={styles.keyTh} scope="col">Key</th>
                  <th style={styles.keyTh} scope="col">What it does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tab", "Move to the next link"],
                  ["Shift + Tab", "Move to the previous link"],
                  ["Enter", "Open the focused link"],
                  ["Skip link (first Tab on page)", "Jump past the nav bar to main content"],
                ].map(([key, desc]) => (
                  <tr key={key}>
                    <td style={styles.keyTd}><kbd style={styles.kbd}>{key}</kbd></td>
                    <td style={styles.keyTd}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Links */}
        <section style={styles.section} aria-labelledby="links-heading">
          <h2 id="links-heading" style={styles.sectionHeading}>Links ({LINKS.length})</h2>
          <ul style={styles.linkList} aria-label="Reading list">
            {LINKS.map((link, i) => (
              <li key={link.url} style={styles.linkItem}>
                <span style={styles.linkIndex} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div style={styles.linkContent}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.linkAnchor}
                    aria-label={`${link.title} — ${link.desc} (opens in new tab)`}
                  >
                    {link.title}
                  </a>
                  <p style={styles.linkDesc}>{link.desc}</p>
                </div>
              </li>
            ))}
          </ul>
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
  pageTitle:     { fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "400", margin: "0 0 0.5rem", fontFamily: "'Georgia', serif", color: "#d8f3dc" },
  tagline:       { fontSize: "15px", color: "#95d5b2", margin: 0, fontFamily: "system-ui, sans-serif", fontStyle: "italic" },
  main:          { maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem 3rem" },
  section:       { marginTop: "3rem" },
  sectionHeading:{ fontSize: "1.4rem", fontWeight: "400", fontFamily: "'Georgia', serif", borderBottom: "2px solid #52b788", paddingBottom: "0.5rem", marginBottom: "1.5rem", color: "#1b4332" },
  bodyText:      { fontSize: "1rem", lineHeight: "1.8", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: "0 0 1rem" },
  keyboardCard:  { background: "#ffffff", border: "1px solid #b7e4c7", borderRadius: "8px", padding: "1.5rem" },
  keyTable:      { width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "0.95rem" },
  keyTh:         { textAlign: "left", padding: "8px 12px", background: "#e9f5e9", color: "#1b4332", borderBottom: "2px solid #52b788" },
  keyTd:         { padding: "8px 12px", borderBottom: "1px solid #e8e5dc", color: "#2d4a2d", verticalAlign: "top" },
  kbd:           { background: "#f4f9f4", border: "1px solid #b7e4c7", borderRadius: "4px", padding: "2px 7px", fontFamily: "'Courier New', monospace", fontSize: "0.9rem", color: "#1b4332" },
  linkList:      { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" },
  linkItem:      { display: "flex", alignItems: "flex-start", gap: "1rem", background: "#ffffff", border: "1px solid #b7e4c7", borderLeft: "4px solid #52b788", borderRadius: "0 8px 8px 0", padding: "14px 18px" },
  linkIndex:     { fontSize: "12px", fontFamily: "'Courier New', monospace", color: "#1e6b45", minWidth: "24px", paddingTop: "3px" },
  linkContent:   { flex: 1 },
  linkAnchor:    { fontSize: "1rem", fontFamily: "system-ui, sans-serif", color: "#1b4332", fontWeight: "600", textDecoration: "underline", textUnderlineOffset: "3px" },
  linkDesc:      { fontSize: "0.9rem", color: "#3a6b3a", fontFamily: "system-ui, sans-serif", margin: "3px 0 0" },
  footer:        { marginTop: "4rem", borderTop: "2px solid #b7e4c7", background: "#e9f5e9", borderRadius: "8px", padding: "1.5rem", textAlign: "center" },
  footerText:    { fontSize: "13px", color: "#2d4a2d", fontFamily: "system-ui, sans-serif", margin: 0 },
};
