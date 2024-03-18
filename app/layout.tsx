import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import type { Metadata } from "next";

import Navbar from "./Components/Navbar";
import PageFooter from "./Components/PageFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legitly - Sign PDF with Ease",
  description: "Sign PDF with ease using any Web3 Wallet!",
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
