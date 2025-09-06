import { HeroSection } from "@/components/landing/hero";
import AIInput_01 from "@/components/snapui/ai-input/ai-input-01";
import AIInput_02 from "@/components/snapui/ai-input/ai-input-02";
import AIInput_03 from "@/components/snapui/ai-input/ai-input-03,";
import AIInput_04 from "@/components/snapui/ai-input/ai-input-04";
import AIInput_05 from "@/components/snapui/ai-input/ai-input-05";
import AIInput_06 from "@/components/snapui/ai-input/ai-input-06";
import AIInput_07 from "@/components/snapui/ai-input/ai-input-07";
import AIInput_08 from "@/components/snapui/ai-input/ai-input-08";
import Alert01 from "@/components/snapui/alert/alert-01";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection />
      </div>
      {/* <AIInput_01 />
      <AIInput_02 />
      <AIInput_03 />
      <AIInput_04 />
      <AIInput_05 />
      <AIInput_06 />
      <AIInput_07 />
      <AIInput_08 /> */}
      <Alert01 />
    </main>
  );
}
