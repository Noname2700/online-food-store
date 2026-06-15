import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../component/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divinita Dominican Food",
  description:
    "Experience the vibrant flavors of the Caribbean with Divinita Dominican Food. We offer authentic Dominican dishes made with fresh ingredients, bringing a taste of the islands to your table. From savory stews to sweet treats, our menu celebrates the rich culinary heritage of the Dominican Republic. Join us for a delicious journey through the heart of Caribbean cuisine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header
          title="Divinita Dominican Food"
          links={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          onSearchClick={() => console.log("Search clicked")}
        />
        {children}
      </body>
    </html>
  );
}
