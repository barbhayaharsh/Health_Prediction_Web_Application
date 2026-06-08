import { useParams, Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Info, Users } from 'lucide-react';
import { models } from "../data/models";
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export const ModelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const model = models.find(m => m.id === id);

  if (!model) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Model Not Found
          </h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 🔥 Navbar at top */}
        <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                model.category === 'Adult'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : model.category === 'Student'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
              }`}>
                {model.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {model.type === 'image' ? 'Image-based Deep Learning' : 'Form-based Machine Learning'}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {model.name}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              {model.description}
            </p>
          </div>

          {/* What This Model Predicts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                What This Model Predicts
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {model.detailedDescription}
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-6">
              Fill out the assessment form to receive your personalized health risk analysis
            </p>
            <Link
              to={`/predict/${model.id}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg group"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Back to All Models
            </Link>
          </div>
        </div>
      </div>
      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};
