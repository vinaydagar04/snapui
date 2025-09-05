"use client";

import { Sparkles, Command, Heater as Enter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_07() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-4xl w-full mx-auto">
        <div
          className={cn(
            "relative transition-all duration-300 rounded-2xl",
            isFocused
              ? "bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 p-[2px]"
              : "bg-border/20 p-[1px]"
          )}
        >
          <div className="bg-background rounded-2xl">
            <div className="flex items-center gap-3 p-4">
              {/* AI Icon */}
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                  isFocused
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg"
                    : "bg-muted"
                )}
              >
                <Sparkles
                  className={cn(
                    "w-5 h-5",
                    isFocused ? "text-white" : "text-muted-foreground"
                  )}
                />
              </div>

              {/* Input */}
              <Textarea
                placeholder="Ask AI to help you build, create, or solve anything..."
                className={cn(
                  "flex-1 bg-transparent border-none resize-none",
                  "placeholder:text-muted-foreground/50 text-foreground",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "text-base leading-relaxed py-2",
                  "min-h-[28px] max-h-[160px]"
                )}
                ref={textareaRef}
                value={inputValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
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

              {/* Keyboard Shortcut Hint */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted/50">
                  <Command className="w-3 h-3" />
                  <Enter className="w-3 h-3" />
                </div>
                <span>to send</span>
              </div>
            </div>

            {/* Progress Bar */}
            {isFocused && (
              <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-b-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
