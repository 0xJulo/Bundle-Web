import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bundle",
  description: "Create and share your own bundles of transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
          <SideMenu />
          <main style={{ flexGrow: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
