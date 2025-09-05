"use client";

import { ArrowUp, Paperclip, Mic2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_03() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 180,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-3xl w-full mx-auto">
        <div className="relative">
          <Textarea
            placeholder="What can I help you with?"
            className={cn(
              "w-full bg-muted/30 border-2 border-border/20 rounded-xl",
              "placeholder:text-muted-foreground/50 pl-4 pr-24",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "focus-visible:border-primary/50",
              "text-foreground resize-none transition-all duration-200",
              "min-h-[48px] max-h-[180px] py-3"
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

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button className="w-8 h-8 rounded-md hover:bg-muted/50 transition-colors flex items-center justify-center">
              <Paperclip className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="w-8 h-8 rounded-md hover:bg-muted/50 transition-colors flex items-center justify-center">
              <Mic2 className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
              className={cn(
                "w-8 h-8 rounded-md transition-all flex items-center justify-center",
                inputValue.trim()
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground cursor-not-allowed"
              )}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
