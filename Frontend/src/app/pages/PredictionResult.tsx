import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PredictionResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const data: any = location.state;

  console.log("🔥 RESULT DATA:", data);

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-2">No prediction data found ❌</h2>
          <p className="mb-4">Please submit the form again.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const { model, prediction, confidence, message, tips } = data;

  return (
    <>
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-4xl mx-auto px-4">

          {/* CARD */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Prediction Result
            </h1>

            {/* BASIC INFO */}
            <div className="mb-6 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Model: {model || id}
              </h2>

              {confidence !== undefined && (
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Confidence:</strong> {confidence}%
                </p>
              )}

              {/* DL CLASS */}
              {prediction && (
                <p className="text-lg text-blue-600 dark:text-blue-400">
                  <strong>Detected Class:</strong> {prediction}
                </p>
              )}

              {/* MAIN MESSAGE */}
              {message && (
                <div className="mt-4 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700">
                  <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
                    {message}
                  </p>
                </div>
              )}
            </div>

            {/* TIPS */}
            {tips && (
              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-lg">✅ What to do</h3>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                    {tips.what_to_do?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">❌ What to avoid</h3>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                    {tips.what_to_avoid?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">🏃 Lifestyle tips</h3>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                    {tips.lifestyle_tips?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">⚠️ Precautions</h3>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                    {tips.precautions?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg"
              >
                ⬅ Go Back
              </button>

              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                🏠 Home
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PredictionResult;
