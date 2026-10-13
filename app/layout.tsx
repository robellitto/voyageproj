import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SpecificFilterContextProvider } from "@/contexts/SpecificFilter";
import { SearchContextProvider } from "@/components/Experiences/SearchContext";
import BottomBar from "@/components/BottomBar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Voyage Project",
  description: "My first voyage project for ethiopian travel agencies and hotels",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      
      <body className="relative min-h-full flex flex-col">
        <SearchContextProvider>
          <SpecificFilterContextProvider>
            <Navbar/>
            
              {children}
            

            
            <BottomBar />
            <Footer />
            
          </SpecificFilterContextProvider>
        </SearchContextProvider>

        
      </body>
    </html>
  );
}

