import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import {ClerkProvider} from "@clerk/nextjs"
 
const inter = Inter({ subsets: ["latin"]});
 
export const metadata: Metadata = {
  title: "Splitr",
  description: "The smart way to split expenses with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} `}
      >

         <ClerkProvider>

        <ConvexClientProvider>
          <Header/>  
        <main className="min-h-screen">{children}</main>
        </ConvexClientProvider> 

        </ClerkProvider>
      </body>
    </html>
  );
}
