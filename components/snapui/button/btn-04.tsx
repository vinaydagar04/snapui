"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Btn04Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPowerUp?: () => void;
  chargeDuration?: number;
}

export default function Btn04({
  className,
  onPowerUp,
  chargeDuration = 2000,
  ...props
}: Btn04Props) {
  const [isCharging, setIsCharging] = useState(false);
  const particleControls = useAnimation();
  const chargeControls = useAnimation();

  async function handleStart() {
    setIsCharging(true);
    chargeControls.set({ height: "100%", y: "100%" });
    await chargeControls.start({
      y: "0%",
      transition: {
        duration: chargeDuration / 1000,
        ease: "easeOut",
      },
    });

    await particleControls.start({
      scale: [1, 1.5],
      opacity: [1, 0],
      transition: { duration: 0.3 },
    });

    onPowerUp?.();
  }

  function handleEnd() {
    setIsCharging(false);
    chargeControls.stop();
    chargeControls.start({
      y: "100%",
      transition: { duration: 0.2 },
    });
  }

  return (
    <Button
      className={cn(
        "min-w-[120px] sm:min-w-40 relative overflow-hidden",
        "bg-indigo-100 dark:bg-indigo-900",
        "hover:bg-indigo-200 dark:hover:bg-indigo-800",
        "text-indigo-900 dark:text-indigo-300",
        "border border-indigo-300 dark:border-indigo-700",
        "transition-colors duration-300",
        "touch-none",
        className
      )}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      {...props}
    >
      <motion.div
        initial={{ height: "100%", y: "100%" }}
        animate={chargeControls}
        className={cn(
          "absolute left-0 bottom-0 w-full",
          "bg-linear-to-t from-indigo-400 to-indigo-300",
          "dark:from-indigo-500 dark:to-indigo-400",
          "opacity-50"
        )}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={particleControls}
        className={cn(
          "absolute inset-0",
          "bg-indigo-200 dark:bg-indigo-400",
          "rounded-full"
        )}
      />
      <span className="relative z-10 w-full flex items-center justify-center gap-2">
        <Zap
          className={cn(
            "w-4 h-4 transition-transform",
            isCharging && "animate-bounce"
          )}
        />
        {!isCharging ? "Power Up!" : "Charging..."}
      </span>
    </Button>
  );
}
