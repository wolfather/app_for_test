import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">

        <aside className="w-[25%] bg-orange-400">
          <nav>
            <ul>
              <li>
                <Link href="/home">home</Link>
              </li>
              <li>
                <Link href="/profile">profile</Link>
              </li>
              <li>
                <Link href="/config">config</Link>
              </li>
              <li>
                <Link href="/signout">signout</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
