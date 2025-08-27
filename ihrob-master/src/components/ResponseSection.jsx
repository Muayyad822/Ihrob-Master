import ReactMarkdown from "react-markdown";


const ResponseSection = ({ response, mode, setInput, setResponse }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="prose max-w-none">
        <div
          className="whitespace-pre-wrap text-gray-800 leading-relaxed"
          dir="auto"
        >
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <p>💡 لديك المزيد من الأسئلة؟ لا تتردد في السؤال!</p>
            <p>Have more questions? Feel free to ask!</p>
          </div>
          <button
            onClick={() => {
              setInput("");
              setResponse("");
            }}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
          >
            {mode === "analysis" ? "تحليل جديد" : "سؤال جديد"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseSection;
