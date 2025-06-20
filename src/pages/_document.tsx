import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark"> {/* Tambahkan class="dark" jika ingin default gelap */}
      <Head />
      <body className="antialiased bg-[var(--color-background)] text-[var(--color-foreground)] font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
