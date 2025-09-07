import { HeroSection } from "@/components/landing/hero";
import CheckoutInteraction from "@/components/snapui/checkout-interaction";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection />

        <CheckoutInteraction />
      </div>
    </main>
  );
}
