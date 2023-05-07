import "./globals.css";
import { Quicksand } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Kristine Illes | Photography",
  description: "Kristine Illes | Cemetary Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
