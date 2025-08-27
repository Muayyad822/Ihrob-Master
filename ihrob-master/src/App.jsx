import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ResponseSection from "./components/ResponseSection";
import ArabicGrammarQuiz from "./components/ArabicGrammarQuiz";


const App = () => {
  const [mode, setMode] = useState("welcome"); // 'welcome', 'analysis', 'question'
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const analyzeText = async (text, isQuestion = false) => {
    setLoading(true);

    try {
      const prompt = isQuestion
        ? `You are Ihrob Master (إعراب ماستر), an expert in Arabic grammar. A user has asked you the following question about Arabic grammar: "${text}"

Please provide a comprehensive answer that includes:
1. A clear explanation in Arabic
2. Simple, easy-to-understand language
3. Examples where relevant
4. References to classical grammar sources (Nahwu al-Wādih, Jāmi' ad-Duroos al-'Arabiyyah, Alfiyyah Ibn Mālik) when applicable

Structure your response clearly with headings and make it educational yet accessible.`
        : `You are Ihrob Master (إعراب ماستر), an expert in Arabic grammar. A user has provided the following Arabic sentence for grammatical analysis (إعراب): "${text}"

Please provide a detailed grammatical analysis that includes:
1. First do the concise  إعراب (I'rāb) of the sentence for grammatical analysis in Arabic
2. Complete إعراب (I'rāb) of each word in the sentence
3. Explanation of grammatical cases, functions, and states
4. Underlying grammar rules that apply
5. Arabic terminology with English explanations
6. References to classical sources where relevant
7. Clear, step-by-step breakdown


If the input is not in Arabic or is not suitable for grammatical analysis, politely redirect the user to provide an Arabic sentence or ask a grammar question.`;

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      const apiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await apiResponse.json();
      const analysisResult =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response received.";

      const newHistory = [
        ...conversationHistory,
        { role: "user", content: text },
        { role: "assistant", content: analysisResult },
      ];

      setConversationHistory(newHistory);
      setResponse(analysisResult);
    } catch (error) {
      console.error("Error in analysis:", error);
      setResponse(
        "عذراً، حدث خطأ في التحليل. يرجى المحاولة مرة أخرى.\nSorry, an error occurred during analysis. Please try again."
      );
    }

    setLoading(false);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const isQuestion = mode === "question";
    analyzeText(input, isQuestion);
    setInput("");
  };

  const resetToWelcome = () => {
    setMode("welcome");
    setInput("");
    setResponse("");
    setConversationHistory([]);
  };

   if (mode === "welcome") return <WelcomeScreen setMode={setMode} />;

  if (mode === "quiz") return <ArabicGrammarQuiz onBack={() => setMode("welcome")} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Header mode={mode} resetToWelcome={resetToWelcome} />
        <InputSection
          mode={mode}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        {response && (
          <ResponseSection
            response={response}
            mode={mode}
            setInput={setInput}
            setResponse={setResponse}
          />
        )}
      </div>
    </div>
  );
};

export default App;
