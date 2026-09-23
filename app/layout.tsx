import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";




export const metadata: Metadata = {
  title: "Voyage Project",
  description: "My first voyage project for ethiopian travel agencies and hotels",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      
      <body className="min-h-full flex flex-col">
        
        <Navbar/>
        
          {children}

        
      </body>
    </html>
  );
}

