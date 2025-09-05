"use client";

import { Brain, Mic, Camera, FileText, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_08() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 180,
  });
  const [inputValue, setInputValue] = useState("");
  const [activeInput, setActiveInput] = useState("text");

  const inputTypes = [
    { id: "text", icon: FileText, label: "Text" },
    { id: "voice", icon: Mic, label: "Voice" },
    { id: "image", icon: Camera, label: "Image" },
  ];

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-5xl w-full mx-auto">
        <div className="bg-card/50 backdrop-blur-xl border border-border/30 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/20 bg-muted/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">
                AI Assistant
              </span>
            </div>

            <div className="flex items-center gap-1 bg-background/50 rounded-lg p-1">
              {inputTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveInput(type.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all",
                    activeInput === type.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="relative p-6">
            <div className="flex items-start gap-4">
              <Textarea
                placeholder="Describe your project, ask a question, or request help with anything..."
                className={cn(
                  "flex-1 bg-transparent border-none resize-none text-lg",
                  "placeholder:text-muted-foreground/40 text-foreground",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "leading-relaxed",
                  "min-h-[32px] max-h-[140px]"
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
                  "w-12 h-12 rounded-2xl transition-all flex items-center justify-center shadow-lg",
                  inputValue.trim()
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                    : "bg-muted/50 text-muted-foreground cursor-not-allowed"
                )}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
