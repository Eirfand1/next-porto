import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Navbar, { ThemeProvider } from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeLayout from "@/components/themelayout";

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
        <script src="https://kit.fontawesome.com/ac8548371f.js" crossOrigin="anonymous" async></script>
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          <ThemeLayout>
            <Navbar />
              {children}
            <Footer />
          </ThemeLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

