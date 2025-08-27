import React from "react";
import { Book } from "lucide-react";

const Header = ({ mode, resetToWelcome }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">إعراب ماستر</h1>
            <p className="text-gray-600">
              {mode === "analysis"
                ? "تحليل نحوي - Grammatical Analysis"
                : "سؤال نحوي - Grammar Question"}
            </p>
          </div>
        </div>
        <button
          onClick={resetToWelcome}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium"
        >
          العودة للقائمة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default Header;
