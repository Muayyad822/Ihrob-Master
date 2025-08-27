import React from "react";
import { Send } from "lucide-react";

const InputSection = ({ mode, input, setInput, handleSubmit, loading }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <div className="mb-4">
        <label className="block text-lg font-semibold text-gray-700 mb-2 text-right">
          {mode === "analysis"
            ? "أدخل الجملة العربية للتحليل النحوي:"
            : "اطرح سؤالك النحوي:"}
        </label>
        <label className="block text-sm text-gray-500 mb-3">
          {mode === "analysis"
            ? "Enter the Arabic sentence for grammatical analysis:"
            : "Ask your grammar question:"}
        </label>
      </div>

      <div className="flex gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg resize-none"
          rows="3"
          placeholder={
            mode === "analysis"
              ? "مثال: الطالب يدرس الدرس في المكتبة"
              : "مثال: ما هو الفرق بين المبتدأ والخبر؟"
          }
          dir="auto"
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || loading}
          className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[80px]"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputSection;
