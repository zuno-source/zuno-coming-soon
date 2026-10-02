import type { Metadata } from "next";
import Link from "next/link";
import styles from "../public-site.module.css";

const description = "How ZUNO understands, builds, and verifies downloadable applications from existing websites.";

export const metadata: Metadata = {
  title: "ZUNO Documentation",
  description,
  openGraph: {
    title: "ZUNO Documentation",
    description,
    siteName: "ZUNO",
    type: "article",
  },
};

const contents = [
  ["overview", "Overview"],
  ["why-zuno", "Why ZUNO"],
  ["how-it-works", "How it works"],
  ["build-modes", "Build modes"],
  ["redesign", "Redesign"],
  ["verification", "Verification"],
  ["security", "Security"],
  ["credits", "Credits"],
  ["current-state", "Current state"],
  ["future", "Future"],
] as const;

export default function DocumentationPage() {
  return (
    <div className={styles.docsPage}>
      <header className={styles.docsHeader}>
        <div className={styles.docsIdentity}>
          <Link className={styles.docsBrand} href="/" aria-label="ZUNO home">ZUNO</Link>
          <span>Documentation</span>
        </div>
        <nav className={styles.docsNav} aria-label="Primary">
          <Link href="/">Home</Link>
          <a href="https://x.com/zunodotfamily" target="_blank" rel="noopener noreferrer">X</a>
        </nav>
      </header>

      <div className={styles.docsGrid}>
        <aside className={styles.contents}>
          <nav aria-label="On this page">
            <span className={styles.contentsLabel}>Contents</span>
            <ul>
              {contents.map(([id, label]) => <li key={id}><a href={"#" + id}>{label}</a></li>)}
            </ul>
          </nav>
        </aside>

        <main className={styles.docsMain}>
          <article>
            <section id="overview" className={styles.docsIntro}>
              <p className={styles.kicker}>Your autonomous app engineer.</p>
              <h1>ZUNO</h1>
              <p className={styles.lead}>ZUNO is an autonomous app engineer designed to turn an existing website into a tested, downloadable application.</p>
              <p>Most website-to-app tools stop at packaging. ZUNO is being built around a different idea: an application should not be considered finished simply because it compiled.</p>
              <p>ZUNO analyzes a website, understands its structure, determines how it should behave as an application, builds it, and tests the resulting software before releasing it.</p>
              <p>The long-term goal is simple: <strong>Give ZUNO a software experience. Get back an application.</strong></p>
            </section>

            <section id="why-zuno" className={styles.docSection}>
              <h2>Why ZUNO exists</h2>
              <p>Modern software often begins on the web. Teams build dashboards, communities, financial products, crypto applications, internal tools, marketplaces, and consumer products with web technologies because the web makes distribution fast.</p>
              <p>Turning those products into downloadable applications is still fragmented. Developers may need to manage desktop wrappers, platform configuration, build toolchains, installer packaging, icons, window behavior, security boundaries, testing, and distribution artifacts.</p>
              <p>For a small team, creator, or experimental project, that work can cost more effort than the product itself. ZUNO is being built to bring those steps into one controlled workflow.</p>
            </section>

            <section id="how-it-works" className={styles.docSection}>
              <h2>The idea</h2>
              <p className={styles.flow} aria-label="Website to understanding to plan to build to test to app">
                Website <span>→</span> Understand <span>→</span> Plan <span>→</span> Build <span>→</span> Test <span>→</span> App
              </p>
              <p>A user provides the URL of an existing application. ZUNO creates a structured understanding of it, then distinguishes adaptations that are safe to apply automatically from changes that need the original source code.</p>
              <p>Once the user chooses a build mode, ZUNO creates the application and runs automated validation before making a download available.</p>

              <h3>Understanding before building</h3>
              <p>ZUNO does not treat every URL as identical. Its Website Understanding system can inspect public signals such as navigation, forms, authentication patterns, wallet-related interfaces, tables, dashboard layouts, external navigation, responsive markup, and application metadata.</p>
              <p>Those observations produce an internal App Blueprint. The blueprint helps ZUNO plan how the website is likely to behave when presented as an application. It is a structured analysis, not a claim to know private source code or every runtime interaction.</p>
            </section>

            <section id="build-modes" className={styles.docSection}>
              <h2>Build modes</h2>
              <p>ZUNO is currently developing around three Windows build modes.</p>
              <h3>Original</h3>
              <p>Original mode preserves the existing website experience as closely as possible. It is the simplest path from website to application.</p>
              <h3>Optimized</h3>
              <p>Optimized mode uses ZUNO&apos;s analysis to apply safe application-level changes such as window behavior, dimensions, and identity. It does not rewrite the website.</p>
              <h3>Redesign</h3>
              <p>Redesign mode creates a structured proposal for a more considered application presentation. ZUNO separates the settings it can control from concepts that are preview-only and changes that require access to the website&apos;s source.</p>
            </section>

            <section id="redesign" className={styles.docSection}>
              <h2>Redesign philosophy</h2>
              <p>A redesign should not silently change the behavior of a working product. ZUNO classifies proposed actions before they are used: some are safe to apply, some can be shown only in a preview, and others require the underlying application source.</p>
              <p>In the current Windows implementation, approved Redesign changes affect ZUNO-owned application settings such as identity, window size, theme, and background. Remote website components remain owned by the website. A proposal does not imply those components have been rewritten.</p>
            </section>

            <section id="verification" className={styles.docSection}>
              <h2>Build verification</h2>
              <p>Compilation alone does not mean an application works. ZUNO puts generated Windows builds through automated checks before release. Depending on the QA run, those checks can include artifact and SHA-256 validation, application launch, visible-window detection, installer validation, silent installation, installed-app launch, and uninstall cleanup.</p>
              <p>An artifact remains unavailable while it is being tested. Only a build that passes its required checks becomes downloadable.</p>

              <h3>Human-readable applications</h3>
              <p>Generated applications should feel like applications owned by the user rather than files produced by a build machine. ZUNO separates opaque internal artifact storage from the customer-facing download name and installed executable. A project called Zuno, for example, can download as <code>zuno-setup.exe</code> and install an executable called <code>zuno.exe</code>.</p>
            </section>

            <section id="security" className={styles.docSection}>
              <h2>Security model</h2>
              <p>Remote websites are untrusted content. Displaying a website inside an application does not grant it native operating-system capabilities. ZUNO keeps remote content separate from native privileges and checks website destinations during analysis, including restrictions against private and internal network addresses.</p>
              <p>Security boundaries are not weakened simply to make a build succeed. Source-dependent changes remain source-dependent, and the generated application does not execute code downloaded from the analyzed website during packaging.</p>
            </section>

            <section id="credits" className={styles.docSection}>
              <h2>Credits</h2>
              <p>ZUNO uses a credit-based build model. Work can have different costs depending on the selected mode. Credits are reserved before a build begins and committed when the required build and QA steps succeed.</p>
              <p>If an internal build or QA process fails under refund-eligible conditions, the credit ledger reconciles the reservation safely. Commercial pricing may evolve before public availability.</p>
            </section>

            <section id="current-state" className={styles.docSection}>
              <h2>Current state</h2>
              <p>ZUNO is under active development. Windows is the most developed platform. Internal development builds have demonstrated website analysis, Original and Optimized builds, Redesign specifications, Windows application generation, NSIS packaging, launch QA, installer testing, human-readable download names, and controlled artifact release.</p>
              <p>These capabilities remain under testing before broader public availability. ZUNO does not publish customer applications to an app store; distribution and store submission remain the customer&apos;s responsibility.</p>

              <h3>What ZUNO is not</h3>
              <p>ZUNO is more than a webpage saved inside an executable. It also does not claim that an arbitrary web application instantly becomes fully rewritten native software. Its goal is to automate the engineering work that can be done safely while being explicit about work that needs source access or platform-specific development.</p>
            </section>

            <section id="future" className={styles.docSection}>
              <h2>Where ZUNO is going</h2>
              <p>The long-term direction extends beyond one desktop wrapper. Future work may include more operating systems, mobile builds, deeper application understanding, source-connected redesign, application assets, and additional distribution workflows.</p>
              <p>Those are directions, not announced available platforms. Capabilities will be released when their build and security architecture is reliable enough to support them.</p>

              <h3>The principle</h3>
              <p><strong>Software generation should include verification.</strong> ZUNO should understand what it is building, create it under controlled rules, test the result, and release it only when required checks succeed.</p>
              <p>That is the direction behind ZUNO: your autonomous app engineer.</p>
            </section>
          </article>

          <footer className={styles.docsFooter}>
            <a href="https://x.com/zunodotfamily" target="_blank" rel="noopener noreferrer">Follow development on X <span aria-hidden="true">↗</span></a>
          </footer>
        </main>
      </div>
    </div>
  );
}
