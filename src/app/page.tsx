import HeroSection from "@/components/home/HeroSection";
import AnimatedStats from "@/components/home/AnimatedStats";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection />
      <AnimatedStats />
    </div>
  );
}
