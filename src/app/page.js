import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import CustomCasePromoSection from "@/components/CustomCasePromoSection";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <ReviewsSection />   
      <CustomCasePromoSection />
    </div>
  );
}
