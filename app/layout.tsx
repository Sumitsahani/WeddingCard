import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ankit & Shreya — Our Wedding",
  description: "Join Ankit and Shreya as they begin their forever on 20 February 2027.",
  openGraph: { title: "Ankit & Shreya", description: "20 February 2027 — Save the date", images: ["/images/couple.png"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
