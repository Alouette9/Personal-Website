import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Larry Qiu",
  description: "CSS 480 Portfolio Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#f4f9f4" }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
