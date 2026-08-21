import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./portal.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: { default: "DutchGreen Digital Demo", template: "%s | DutchGreen Demo" },
  description: "An independent portfolio demonstration for a landscaping customer journey and field operations workspace.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173d2d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
