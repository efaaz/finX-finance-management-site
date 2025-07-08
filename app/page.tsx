"use client";
import FeatureSection from "@/components/Landing/FeatureSection";
import HeroSection from "@/components/Landing/HeroSection";
import QuoteSection from "@/components/Landing/QuoteSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <div className="h-auto overflow-hidden w-full dark:bg-black bg-grid-small-white/[0.1] relative">
        <QuoteSection />
      </div>
    </div>
  );
}
