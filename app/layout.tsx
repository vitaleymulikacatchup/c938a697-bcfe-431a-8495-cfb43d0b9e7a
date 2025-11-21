import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import Tag from "@/tag/Tag";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Little IT-shnik | Programming & IT Education for Kids",
  description: "Join Little IT-shnik for comprehensive IT education. Learn programming, web development, and robotics in a fun, interactive environment for ages 8-18.",
  keywords: "kids programming, IT education, coding classes, web development for children, robotics education, STEM learning, programming school",
  metadataBase: new URL("https://little-it-shnik.com"),
  alternates: {
    canonical: "https://little-it-shnik.com"
  },
  openGraph: {
    title: "Little IT-shnik | Programming & IT Education for Kids",
    description: "Discover the world of programming with Little IT-shnik. Comprehensive IT education for young learners aged 8-18.",
    siteName: "Little IT-shnik",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Little IT-shnik | Programming & IT Education for Kids",
    description: "Join Little IT-shnik for comprehensive IT education and programming classes for kids"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogWrapper>
        <body className={cormorantGaramond.variable}>
          <Tag />
          <ThemeProvider
            defaultButtonVariant="hover-bubble"
            defaultTextAnimation="background-highlight"
            borderRadius="soft"
            contentWidth="large"
            sizing="small"
            background="animatedAurora"
            cardStyle="glass-depth"
            primaryButtonStyle="diagonal-gradient"
            secondaryButtonStyle="layered"
            showBlurBottom={false}
          >
            {children}
          </ThemeProvider>
        </body>
      </PostHogWrapper>
    </html>
  );
}