"use client";

import { Zap, ArrowUp, AreaChart as Attachment, Smile } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_09() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 50,
    maxHeight: 160,
  });
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div
          className={cn(
            "relative transition-all duration-500 rounded-2xl",
            "bg-gradient-to-br from-slate-50 via-white to-slate-50",
            "dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",
            "border-2 shadow-xl",
            isHovered || inputValue
              ? "border-primary/30 shadow-primary/10"
              : "border-border/20 shadow-black/5"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-3 p-4">
            {/* Lightning Icon */}
            <div
              className={cn(
                "flex-shrink-0 w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center",
                isHovered || inputValue
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg scale-110"
                  : "bg-muted/50"
              )}
            >
              <Zap
                className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  isHovered || inputValue
                    ? "text-white"
                    : "text-muted-foreground"
                )}
              />
            </div>

            {/* Input Field */}
            <Textarea
              placeholder="Lightning-fast AI responses await..."
              className={cn(
                "flex-1 bg-transparent border-none resize-none",
                "placeholder:text-muted-foreground/50 text-foreground",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "text-base leading-relaxed py-1",
                "min-h-[26px] max-h-[120px]"
              )}
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-center">
                <Attachment className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-8 h-8 rounded-lg hover:bg-muted/50 transition-colors flex items-center justify-center">
                <Smile className="w-4 h-4 text-muted-foreground" />
              </button>

              {inputValue && (
                <button
                  onClick={handleSubmit}
                  className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center shadow-md ml-1"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
          </div>

          {/* Animated Border */}
          {(isHovered || inputValue) && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 -z-10 blur-xl" />
          )}
        </div>
      </div>
    </div>
  );
}
