import React from "react";
import { Book, ArrowRight, MessageCircle, Gamepad2 } from "lucide-react";

const WelcomeScreen = ({ setMode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              إعراب ماستر
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Ihrob Master
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              أهلاً وسهلاً! أنا خبير في النحو العربي، هنا لمساعدتك في تحليل
              الجمل وفهم القواعد النحوية
            </p>
            <p className="text-gray-500 mt-2">
              Welcome! I'm an expert in Arabic grammar, here to help you analyze
              sentences and understand grammatical rules.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setMode("analysis")}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="text-right flex-1">
                <div>تحليل نحوي للجملة</div>
                <div className="text-sm opacity-90">Grammatical Analysis</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setMode("question")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="text-right flex-1">
                <div>سؤال نحوي</div>
                <div className="text-sm opacity-90">Grammar Question</div>
              </div>
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => setMode("quiz")}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="text-right flex-1">
                <div>مسابقة النحو</div>
                <div className="text-sm opacity-90">Grammar Quiz/Game</div>
              </div>
              <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>المراجع: النحو الواضح • جامع الدروس العربية • ألفية ابن مالك</p>
            <p>
              References: Nahwu al-Wādih • Jāmi' ad-Duroos al-'Arabiyyah •
              Alfiyyah Ibn Mālik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
