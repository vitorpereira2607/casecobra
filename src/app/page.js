import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ReviewsSection from "@/components/ReviewsSection";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <ReviewsSection />
    </div>
  );
}
