import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HK & CO - Fresh Indian Vegetables & Fruits",
  description: "Discover fresh organic vegetables and fruits from Indian farms. Farm-to-door delivery of the finest seasonal produce with quality assurance.",
  keywords: "organic vegetables, fresh fruits, Indian produce, farm fresh, online vegetables, cold chain delivery, organic farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
