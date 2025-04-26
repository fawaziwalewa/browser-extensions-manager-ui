import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Browser Extensions Manager UI",
  description: "A simple UI for managing browser extensions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.className} antialiased bg-(image:--color-light-gradient) min-h-dvh max-w-[1170px] w-full mx-auto px-4 md:px-8 py-6 lg:py-10 dark:bg-(image:--color-dark-gradient)`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
