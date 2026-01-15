import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTest() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctIndex: null,
      },
    ]);
  };

  const updateQuestion = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].question = value;
    setQuestions(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const setCorrect = (qIndex, oIndex) => {
    const updated = [...questions];
    updated[qIndex].correctIndex = oIndex;
    setQuestions(updated);
  };

  const handlePostTest = () => {
    if (!title || !duration || questions.length === 0) {
      alert("Please complete all fields");
      return;
    }

    const test = {
      id: Date.now(),
      title,
      duration,
      questions,
    };

    // TEMP STORAGE (Later replace with API)
    const existing = JSON.parse(localStorage.getItem("tests")) || [];
    localStorage.setItem("tests", JSON.stringify([...existing, test]));

    alert("Test Created Successfully!");
    navigate("/admin");
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Create New Test</h2>

      {/* Test Info */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4 mb-6">
        <input
          placeholder="Test Title"
          className="w-full border rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Duration (minutes)"
          className="w-full border rounded-lg p-2"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div
            key={qi}
            className="bg-white rounded-2xl shadow p-6 space-y-4"
          >
            <p className="font-semibold">Question {qi + 1}</p>

            <input
              placeholder="Enter question"
              className="w-full border rounded-lg p-2"
              value={q.question}
              onChange={(e) => updateQuestion(qi, e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              {q.options.map((opt, oi) => (
                <div
                  key={oi}
                  className={`flex items-center gap-2 p-2 rounded-lg border
                    ${
                      q.correctIndex === oi
                        ? "border-green-400 bg-green-50"
                        : ""
                    }`}
                >
                  <input
                    type="radio"
                    name={`correct-${qi}`}
                    checked={q.correctIndex === oi}
                    onChange={() => setCorrect(qi, oi)}
                  />

                  <input
                    placeholder={`Option ${oi + 1}`}
                    className="flex-1 border-none outline-none bg-transparent"
                    value={opt}
                    onChange={(e) =>
                      updateOption(qi, oi, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={addQuestion}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600
                     text-white rounded-lg"
        >
          + Add Question
        </button>

        <button
          onClick={handlePostTest}
          className="px-6 py-2 bg-green-500 hover:bg-green-600
                     text-white font-semibold rounded-lg"
        >
          Post Test
        </button>
      </div>
    </div>
  );
}
