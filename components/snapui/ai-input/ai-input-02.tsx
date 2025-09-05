"use client";

import { Send, Sparkles, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_02() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative border border-border/50 rounded-2xl bg-background/80 backdrop-blur-sm shadow-lg">
          <div className="flex items-start gap-3 p-4">
            <button className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center mt-1">
              <Plus className="w-4 h-4 text-primary" />
            </button>

            <Textarea
              placeholder="Ask AI anything..."
              className={cn(
                "flex-1 bg-transparent border-none resize-none",
                "placeholder:text-muted-foreground/60",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "text-foreground leading-relaxed py-0",
                "min-h-[24px] max-h-[160px]"
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

            <div className="flex items-center gap-2 mt-1">
              <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </button>

              {inputValue && (
                <button
                  onClick={handleSubmit}
                  className="w-8 h-8 rounded-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
