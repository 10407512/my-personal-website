import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Personal Website",
  description: "Generated by Next + Sainty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-white p-4 drop-shadow">
          <nav className="px-5 flex items-center justify-between">
            <Link href={"/"} className="text-lg font-bold">
              Hjem
            </Link>
            <Link href={"/"} className="text-lg font-bold">
              Om mig
            </Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto py-5">{children}</main>
      </body>
    </html>
  );
}
