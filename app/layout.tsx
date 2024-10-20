import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientThemeProvider from "@/components/themelayout";

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Yuki",
  description: "Created By Yuki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={poppins.className}>
        <ClientThemeProvider>
            <Navbar />
              {children}
            <Footer />
        </ClientThemeProvider>
      </body>
    </html>
  );
}

