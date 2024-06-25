import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storyblocks",
  description: "Create Impactful Ad Campaigns using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ClerkLoading>
            <div className="flex flex-col items-center text-center mt-32">
              LOADING...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
