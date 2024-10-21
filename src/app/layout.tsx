import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@shared/scss/main.scss";
import Header from "@widgets/header/Header";
import SideBar from "@widgets/sidebar/SideBar";

import FooterMobile from "@widgets/footer/components/FooterMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:flex relative">
          <SideBar />
          <div className="lg:ml-60 lg:flex-1 pb-16 lg:pb-0">
            <Header />
            <main className="min-h-screen">{children}</main>
          </div>

          <FooterMobile />
        </div>
      </body>
    </html>
  );
}
