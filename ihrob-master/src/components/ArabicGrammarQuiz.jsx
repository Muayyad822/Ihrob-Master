import React, { useState } from "react";
import { Play, Volume2, Trophy, Star, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import questionBank from "../data/questionBank";


const ArabicGrammarQuiz = ({ onBack }) => {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [loadingLevel, setLoadingLevel] = useState(false);

  const speak = (text, lang = "ar-SA") => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = 0.9;
      u.pitch = 1;
      window.speechSynthesis.speak(u);
    }
  };

  const speakQuestionAndOptions = (q) => {
  if (!("speechSynthesis" in window)) return;

  const utter = new SpeechSynthesisUtterance();
  utter.lang = "ar-SA";
  utter.rate = 0.9;

  const textParts = [
    `السؤال: ${q.question}`,
    ...q.options.map((opt, i) => `الخيار ${String.fromCharCode(65 + i)}: ${opt}`)
  ];

  utter.text = textParts.join(". ");
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
};


  const selectLevel = async (level) => {
    setLoadingLevel(true);
    setCurrentLevel(level);

    // // 1) Try API
    // let bank = await fetchQuizFromApi();
    // // 2) Fallback to local
    // if (!bank || !bank[level] || !Array.isArray(bank[level]) || bank[level].length === 0) {
    //   bank = questionBank;
    // }
    let bank = questionBank;


    const levelQs = [...bank[level]].sort(() => Math.random() - 0.5);
    setQuestions(levelQs.slice(0, 5)); // Pick 5 per round
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setGameComplete(false);
    setLoadingLevel(false);
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === questions[currentQuestion].correct;
    if (isCorrect) {
      const newStreak = streak + 1;
      setScore((s) => s + 1);
      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentLevel(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameComplete(false);
    setQuestions([]);
    setStreak(0);
    setBestStreak(0);
  };

  const getScoreEmoji = () => {
    const pct = (score / (questions.length || 1)) * 100;
    if (pct >= 90) return "🎉";
    if (pct >= 70) return "👏";
    if (pct >= 50) return "👍";
    return "💪";
    };

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner": return "from-green-500 to-emerald-600";
      case "intermediate": return "from-blue-500 to-indigo-600";
      case "advanced": return "from-purple-500 to-pink-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getLevelName = (level) => {
    switch (level) {
      case "beginner": return { ar: "مبتدئ", en: "Beginner" };
      case "intermediate": return { ar: "متوسط", en: "Intermediate" };
      case "advanced": return { ar: "متقدم", en: "Advanced" };
      default: return { ar: "", en: "" };
    }
  };

  if (!currentLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">مسابقة النحو العربي</h1>
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">Arabic Grammar Quiz</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                اختبر معرفتك في النحو العربي من خلال أسئلة متنوعة وممتعة
              </p>
              <p className="text-gray-500 mt-2">
                Test your Arabic grammar knowledge with varied and fun questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {["beginner","intermediate","advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => selectLevel(level)}
                  className={`bg-gradient-to-r ${getLevelColor(level)} text-white p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg group`}
                  disabled={loadingLevel}
                >
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">{getLevelName(level).ar}</h3>
                    <p className="text-sm opacity-90 mb-3">{getLevelName(level).en}</p>
                    <p className="text-xs opacity-75">
                      {(questionBank[level] || []).length} أسئلة • {(questionBank[level] || []).length} Questions
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-gray-700 font-medium"
              >
                العودة للتطبيق الرئيسي
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">{getScoreEmoji()}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">انتهت المسابقة!</h2>
            <h3 className="text-xl text-gray-600 mb-6">Quiz Complete!</h3>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600">{score}/{questions.length}</div>
                  <div className="text-sm text-gray-600">النتيجة • Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">{Math.round((score/(questions.length||1))*100)}%</div>
                  <div className="text-sm text-gray-600">النسبة • Percentage</div>
                </div>
              </div>

              {bestStreak > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">أفضل سلسلة: {bestStreak}</span>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Best Streak: {bestStreak}</div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => selectLevel(currentLevel)}
                className={`w-full bg-gradient-to-r ${getLevelColor(currentLevel)} text-white py-4 px-6 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300`}
              >
                إعادة المحاولة • Try Again
              </button>

              <button
                onClick={() => {
                  // Go back to level selection (not full reset)
                  setGameComplete(false);
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setShowResult(false);
                  setScore(0);
                  setStreak(0);
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg transition-colors"
              >
                عَرض الأسئلة مرة أخرى • Review Again
              </button>

              <button
                onClick={resetGame}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg transition-colors"
              >
                اختيار مستوى آخر • Choose Different Level
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${getLevelColor(currentLevel)} rounded-full flex items-center justify-center text-white font-bold`}>
                {currentQuestion + 1}
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {getLevelName(currentLevel).ar} • {getLevelName(currentLevel).en}
                </h2>
                <p className="text-sm text-gray-600">
                  السؤال {currentQuestion + 1} من {questions.length}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {streak > 1 && (
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 {streak}
                </div>
              )}
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">{score}/{questions.length}</div>
                <div className="text-xs text-gray-500">النقاط</div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <button
                onClick={() => speak(q.question)}
                className="mr-3 p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                title="اقرأ السؤال بالعربية"
              >
                <Volume2 className="w-6 h-6 text-blue-600" />
              </button>

              <button
                onClick={() => speakQuestionAndOptions(q)}
                className="mr-3 p-3 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-colors"
                title="اقرأ السؤال والخيارات"
              >
                <Play className="w-6 h-6 text-emerald-700" />
              </button>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 text-right mb-2" dir="rtl">
                  {q.question}
                </h3>
                <p className="text-lg text-gray-600 text-left" dir="ltr">
                  {q.questionEn}
                </p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.correct;
              const isChosen = idx === selectedAnswer;
              const show = showResult;
              return (
                <button
                  key={idx}
                  onClick={() => !show && handleAnswer(idx)}
                  disabled={show}
                  className={`p-4 rounded-xl text-right transition-all duration-300 border-2 ${
                    show
                      ? isCorrect
                        ? "bg-green-100 border-green-500 text-green-800"
                        : isChosen
                        ? "bg-red-100 border-red-500 text-red-800"
                        : "bg-gray-50 border-gray-200 text-gray-500"
                      : isChosen
                      ? "bg-blue-100 border-blue-500 text-blue-800"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        show && isCorrect
                          ? "bg-green-500 text-white"
                          : show && isChosen
                          ? "bg-red-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {show && isCorrect ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : show && isChosen ? (
                        <XCircle className="w-4 h-4" />
                      ) : (
                        String.fromCharCode(65 + idx)
                      )}
                    </div>

                    <div className="flex-1 mr-3">
                      <div className="text-lg font-semibold mb-1" dir="rtl">
                        {opt}
                      </div>
                      <div className="text-sm opacity-75" dir="ltr">
                        {q.optionsEn[idx]}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(opt);
                      }}
                      className="p-1 hover:bg-white rounded-full opacity-60 hover:opacity-100 transition-opacity"
                      title="اقرأ هذا الخيار"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                الشرح • Explanation
              </h4>
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold text-right" dir="rtl">
                  {q.explanation}
                </p>
                <p className="text-gray-600 text-left" dir="ltr">
                  {q.explanationEn}
                </p>
              </div>
            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className={`bg-gradient-to-r ${getLevelColor(currentLevel)} text-white py-4 px-8 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto`}
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    السؤال التالي • Next Question
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </>
                ) : (
                  <>
                    إنهاء المسابقة • Finish Quiz
                    <Trophy className="w-5 h-5 mr-2" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors text-gray-700 font-medium"
          >
            العودة للمستويات • Back to Levels
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArabicGrammarQuiz;
