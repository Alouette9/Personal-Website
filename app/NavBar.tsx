"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Skip to main content — keyboard users jump past nav */}
      <a href="#main-content" style={styles.skipLink}>
        Skip to main content
      </a>

      <nav style={styles.nav} aria-label="Main navigation">
        <div style={styles.navInner}>
          <span style={styles.navBrand}>Larry Qiu</span>
          <ul style={styles.navList} role="list">
            <li>
              <Link
                href="/"
                style={{
                  ...styles.navLink,
                  ...(pathname === "/" ? styles.navLinkActive : {}),
                }}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/reads"
                accessKey="r"
                style={{
                  ...styles.navLink,
                  ...(pathname === "/reads" ? styles.navLinkActive : {}),
                }}
                aria-current={pathname === "/reads" ? "page" : undefined}
              >
                UW useful links
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  /* Skip link: hidden until focused — WCAG 2.4.1 Bypass Blocks */
  skipLink: {
    position: "absolute",
    top: "-100px",
    left: "1rem",
    background: "#1b4332",
    color: "#d8f3dc",
    padding: "8px 16px",
    borderRadius: "0 0 6px 6px",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
    zIndex: 9999,
    textDecoration: "none",
    transition: "top 0.15s",
  },
  nav: {
    background: "#1b4332",
    borderBottom: "3px solid #52b788",
  },
  navInner: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    height: "52px",
  },
  navBrand: {
    color: "#d8f3dc",
    fontFamily: "'Georgia', serif",
    fontSize: "1.1rem",
    fontWeight: "400",
    flexShrink: 0,
  },
  navList: {
    display: "flex",
    gap: "4px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  /* Nav links have visible focus outline for keyboard users — WCAG 2.4.7 */
  navLink: {
    color: "#95d5b2",
    textDecoration: "none",
    fontFamily: "system-ui, sans-serif",
    fontSize: "14px",
    padding: "6px 12px",
    borderRadius: "6px",
    display: "block",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    transition: "all 0.15s",
  },
  navLinkActive: {
    color: "#d8f3dc",
    background: "rgba(255,255,255,0.12)",
    fontWeight: "600",
  },
};
