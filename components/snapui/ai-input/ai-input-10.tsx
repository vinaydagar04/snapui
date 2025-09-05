"use client";

import { Cpu, Send, Layers, Workflow } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_10() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 54,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setInputValue("");
      adjustHeight(true);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-4xl w-full mx-auto">
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Neural Network Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute top-8 right-12 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-700" />
            <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-sm text-gray-300">
                Neural Interface v2.1
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 font-mono">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="relative p-6">
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-2">
                <button className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors flex items-center justify-center border border-gray-600/30">
                  <Layers className="w-4 h-4 text-gray-400" />
                </button>
                <button className="w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors flex items-center justify-center border border-gray-600/30">
                  <Workflow className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <Textarea
                placeholder="Initialize neural query protocol..."
                className={cn(
                  "flex-1 bg-gray-800/30 border border-gray-600/30 rounded-xl resize-none text-gray-100",
                  "placeholder:text-gray-500 font-mono",
                  "focus-visible:ring-1 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-0",
                  "focus-visible:border-cyan-400/50",
                  "leading-relaxed px-4 py-3",
                  "min-h-[30px] max-h-[140px]"
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
                disabled={!inputValue.trim() || isProcessing}
                className={cn(
                  "w-12 h-12 rounded-xl transition-all flex items-center justify-center border",
                  inputValue.trim() && !isProcessing
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-cyan-400/50 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-800/50 border-gray-600/30 text-gray-500 cursor-not-allowed",
                  isProcessing && "animate-pulse"
                )}
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
