import type { Metadata } from "next";
import Link from "next/link";
import styles from "./public-site.module.css";

const description = "ZUNO is an autonomous app engineer that turns websites into tested downloadable applications.";

export const metadata: Metadata = {
  title: "ZUNO — Soon",
  description,
  openGraph: {
    title: "ZUNO — Soon",
    description,
    siteName: "ZUNO",
    type: "website",
  },
};

export default function ComingSoonPage() {
  return (
    <main className={styles.publicHome}>
      <div className={styles.homeContent}>
        <h1 className={styles.wordmark}>zuno <span>|</span> soon</h1>
      </div>
      <nav className={styles.bottomNav} aria-label="Follow ZUNO or read the documentation">
        <a href="https://x.com/zunodotfamily" target="_blank" rel="noopener noreferrer"
          aria-label="Follow ZUNO on X (opens in a new tab)">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M18.901 1.153h3.68l-8.04 9.194L24 22.846h-7.406l-5.8-7.585-6.64 7.585H.47l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.492h2.039L6.486 3.24H4.298l13.313 17.405Z" />
          </svg>
        </a>
        <Link href="/docs">docs</Link>
      </nav>
    </main>
  );
}
