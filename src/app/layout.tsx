import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: {
    default: "Портфолио",
    template: "Портфолио | %s",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/title-logo.svg"
        sizes="32x32"
      />
      <body className={jetbrainsMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
