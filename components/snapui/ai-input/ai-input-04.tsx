"use client";

import { Zap, ImageIcon, Code, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_04() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");
  const [selectedMode, setSelectedMode] = useState("chat");

  const modes = [
    { id: "chat", icon: Zap, label: "Chat" },
    { id: "image", icon: ImageIcon, label: "Image" },
    { id: "code", icon: Code, label: "Code" },
  ];

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-4xl w-full mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          {/* Mode Selector */}
          <div className="flex items-center gap-1 p-2 border-b border-border/50 bg-muted/20">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                  selectedMode === mode.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <mode.icon className="w-4 h-4" />
                {mode.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="relative p-4">
            <Textarea
              placeholder={`Ask AI to ${
                selectedMode === "image"
                  ? "generate an image"
                  : selectedMode === "code"
                  ? "write code"
                  : "help you"
              }...`}
              className={cn(
                "w-full bg-transparent border-none resize-none pr-12",
                "placeholder:text-muted-foreground/60",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "text-foreground leading-relaxed",
                "min-h-[32px] max-h-[160px]"
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

            <button
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
              className={cn(
                "absolute right-4 top-4 w-10 h-10 rounded-xl transition-all flex items-center justify-center",
                inputValue.trim()
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
