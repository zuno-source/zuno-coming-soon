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
        <nav className={styles.homeLinks} aria-label="Follow ZUNO or read the documentation">
          <a href="https://x.com/zunodotfamily" target="_blank" rel="noopener noreferrer">
            get updates on x
          </a>
          <Link href="/docs">docs</Link>
        </nav>
      </div>
    </main>
  );
}
