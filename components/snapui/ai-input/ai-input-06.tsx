"use client";

import { Bot, ArrowRight, Lightbulb, Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_06() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 180,
  });
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "Write a creative story about...",
    "Explain quantum physics in simple terms",
    "Create a marketing plan for...",
    "Debug this code snippet",
  ];

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
    setShowSuggestions(false);
  };

  const handleSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    adjustHeight();
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-3xl w-full mx-auto">
        <div className="relative">
          {/* Main Input */}
          <div className="relative border-2 border-dashed border-border/30 rounded-2xl bg-background/50 backdrop-blur-sm hover:border-border/50 transition-all duration-300">
            <div className="flex items-start gap-4 p-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <Textarea
                  placeholder="What would you like to create today?"
                  className={cn(
                    "w-full bg-transparent border-none resize-none pr-16",
                    "placeholder:text-muted-foreground/60 text-foreground",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "text-lg leading-relaxed",
                    "min-h-[28px] max-h-[140px]"
                  )}
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    adjustHeight();
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <button className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted transition-colors flex items-center justify-center">
                  <Settings className="w-4 h-4 text-muted-foreground" />
                </button>

                {inputValue && (
                  <button
                    onClick={handleSubmit}
                    className="w-10 h-10 rounded-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center shadow-md"
                  >
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Suggestions */}
          {showSuggestions && !inputValue && (
            <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-lg z-10">
              <div className="p-3">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-muted-foreground">
                  <Lightbulb className="w-4 h-4" />
                  Suggestions
                </div>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestion(suggestion)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-sm text-foreground"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
