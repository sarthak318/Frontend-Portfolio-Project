
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Favicon from '@/public/image/Favicon.png'
import { Inria_Serif } from "next/font/google";
import { Toaster } from 'sonner';

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
  variable: "--font-inria-serif",// Add weights as needed
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Blintfly",
  description : 'Blintfly simplifies web creation with unique designs tailored to your brand—no coding required. Build your perfect landing page today!',


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${inriaSerif.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
         <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}
