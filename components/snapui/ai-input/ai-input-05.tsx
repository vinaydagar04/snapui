"use client";

import { MessageSquare, Wand2, Upload } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_05() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 44,
    maxHeight: 160,
  });
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900 dark:to-gray-900 rounded-3xl border border-border/30 shadow-xl">
          <div className="flex items-center gap-3 p-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>

            <Textarea
              placeholder="Start typing or describe what you need..."
              className={cn(
                "flex-1 bg-transparent border-none resize-none",
                "placeholder:text-muted-foreground/50 text-foreground",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "leading-relaxed py-2",
                "min-h-[28px] max-h-[120px]"
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

            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-all flex items-center justify-center border border-border/20">
                <Upload className="w-4 h-4 text-muted-foreground" />
              </button>

              {inputValue ? (
                <button
                  onClick={handleSubmit}
                  className="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center justify-center shadow-lg"
                >
                  <Wand2 className="w-4 h-4 text-white" />
                </button>
              ) : (
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={cn(
                    "w-9 h-9 rounded-xl transition-all flex items-center justify-center",
                    isRecording
                      ? "bg-red-500 hover:bg-red-600 animate-pulse"
                      : "bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 border border-border/20"
                  )}
                >
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full",
                      isRecording ? "bg-white" : "bg-red-500"
                    )}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
