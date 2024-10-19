import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Yuki",
  description: "Created By Yuki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/ac8548371f.js" crossOrigin="anonymous" async></script>
      </head>
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
