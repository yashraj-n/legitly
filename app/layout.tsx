import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { Providers } from "./providers";
import Footer from "./Components/PageFooter";
import PageFooter from "./Components/PageFooter";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legitly - Sign PDF with Ease",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Box h={"8vh"}></Box>
          {children}
          <PageFooter />
        </Providers>
      </body>
    </html>
  );
}
