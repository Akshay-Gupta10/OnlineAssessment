import { useState, useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";

const fetchQuestions = async () => {
  // This could be replaced with real API fetch
  return [
    { q: "What is 2 + 2?", options: ["1","2","3","4"], answer: 3 },
    { q: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: 0 },
    { q: "React is a ___?", options: ["Library","Framework","Language","IDE"], answer: 0 },
    { q: "HTML stands for?", options: ["Hyper Text Markup Language","High Tech ML","Hello Text","None"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling","Backend","Database","Networking"], answer: 0 },
    { q: "What is 2 + 2?", options: ["1","2","3","4"], answer: 3 },
    { q: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: 0 },
    { q: "React is a ___?", options: ["Library","Framework","Language","IDE"], answer: 0 },
    { q: "HTML stands for?", options: ["Hyper Text Markup Language","High Tech ML","Hello Text","None"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling","Backend","Database","Networking"], answer: 0 },
    { q: "What is 2 + 2?", options: ["1","2","3","4"], answer: 3 },
    { q: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: 0 },
    { q: "React is a ___?", options: ["Library","Framework","Language","IDE"], answer: 0 },
    { q: "HTML stands for?", options: ["Hyper Text Markup Language","High Tech ML","Hello Text","None"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling","Backend","Database","Networking"], answer: 0 },
    { q: "What is 2 + 2?", options: ["1","2","3","4"], answer: 3 },
    { q: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: 0 },
    { q: "React is a ___?", options: ["Library","Framework","Language","IDE"], answer: 0 },
    { q: "HTML stands for?", options: ["Hyper Text Markup Language","High Tech ML","Hello Text","None"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling","Backend","Database","Networking"], answer: 0 },
  ];
}

export default function StartTest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paletteRef=useRef(null);

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [seconds, setSeconds] = useState(2*60); // 2 min timer
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
      setAnswers(Array(data.length).fill(null));
    };
    loadQuestions();
  }, []);


  useEffect(() => {
  if (!paletteRef.current) return;

  const container = paletteRef.current;
  const activeBtn = container.querySelector(
    `[data-q="${currentQ}"]`
  );

  if (activeBtn) {
    activeBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
}, [currentQ]);


  // Timer
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setSeconds(prev => {
        if(prev <= 1){
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const handleSelect = (optionIndex) => {
    const newAns = [...answers];
    newAns[currentQ] = optionIndex;
    setAnswers(newAns);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Calculate score
    let score = 0;
    questions.forEach((q, i) => {
      if(answers[i] === q.answer) score++;
    });
    navigate("/test-result", { state: { score, total: questions.length } });
  }

  const formatTime = (s) => {
    const m = Math.floor(s/60).toString().padStart(2,"0");
    const sec = (s%60).toString().padStart(2,"0");
    return `${m}:${sec}`;
  }

  if(questions.length === 0) return <p className="p-8">Loading...</p>;

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

    {/* Timer (Fixed Box) */}
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white px-5 py-3 rounded-xl shadow-lg border flex flex-col items-center">
        <span className="text-xs text-gray-500 uppercase">Time Left</span>
        <span className={`text-2xl font-bold ${seconds < 60 ? "text-red-600" : "text-green-900"}`}>
          {formatTime(seconds)}
        </span>
      </div>
    </div>

    {/* Question Card */}
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-blue-700">
        Test ID: {id}
      </h2>

      {/* Question */}
      <p className="text-lg font-semibold">
        {currentQ + 1}. {questions[currentQ].q}
      </p>

      {/* Options */}
      <div className="grid gap-4">
        {questions[currentQ].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left px-5 py-3 rounded-xl border transition-all duration-200
              ${
                answers[currentQ] === idx
                  ? "bg-green-200 text-green-900 border-green-300 text-black scale-[1.02]"
                  : "bg-gray-50 hover:bg-blue-50 hover:border-blue-400"
              }`}
          >
            <span className="font-medium">{opt}</span>
          </button>
        ))}
      </div>

      {/* Question Palette */}
    <div className="pt-6">

    {/* Scroll Wrapper */}
    <div className="relative">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6
                        bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6
                        bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scroll Area */}

        <div
            ref={paletteRef}
            className="flex gap-3 overflow-x-auto scroll-smooth px-6 py-3
                        max-w-[320px] mx-auto
                        [scrollbar-width:none] [-ms-overflow-style:none]"
            >
            {questions.map((_, idx) => (
                <button
                key={idx}
                data-q={idx}
                onClick={() => setCurrentQ(idx)}
                className={`min-w-[44px] h-10 rounded-full text-sm font-semibold
                    transition-all duration-200
                    ${
                    currentQ === idx
                        ? "bg-blue-500 text-white scale-110 shadow-md"
                        : answers[idx] !== null
                        ? "bg-green-200 text-green-900 hover:bg-green-300"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                {idx + 1}
                </button>
            ))}
        </div>

    </div>
    </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button
          disabled={currentQ === 0}
          onClick={() => setCurrentQ(currentQ - 1)}
          className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium disabled:bg-gray-300"
        >
          Previous
        </button>

        <button
          disabled={currentQ === questions.length - 1}
          onClick={() => setCurrentQ(currentQ + 1)}
          className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="mx-auto block px-6 py-2 bg-green-400 hover:bg-green-500 
                    text-green-900 font-semibold rounded-lg shadow-sm"
        >
        Submit Test
        </button>

    </div>
  </div>
);
}
