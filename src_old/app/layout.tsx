import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { calculateAge } from "@/lib/utils";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stepan Grigorovich | Software Developer & Founding Engineer",
  description: `Stepan Grigorovich is a Full-Stack Developer & Founding Engineer with ${calculateAge()} years of experience.`,
  icons: {
    icon: [
      {
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.svg'
      },
      {
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.svg'
      },
      {
        "url": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "url": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  // "theme_color": "#ffffff",
  // "background_color": "#ffffff",
  // "display": "standalone"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth!">
    <body
        className={`${inter.className} bg-orage-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
    <script defer src="/script.js"
            data-website-id="1cf753d2-43d1-4da4-a3d1-82fb1033120d"></script>
    {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Header/>
        {children}
        <Footer/>

        <Toaster position="top-right"/>
        <ThemeSwitch/>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
    </body>
    </html>
  );
}
