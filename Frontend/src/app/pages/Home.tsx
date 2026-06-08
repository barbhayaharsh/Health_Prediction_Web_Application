import { Brain, Shield, Zap, Users, CheckCircle, AlertTriangle } from "lucide-react";
import { ModelCard } from "../components/ModelCard";
import { models } from "../data/models";
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* 🔥 Navbar at top */}
      <Navbar />

      {/* 🔥 Main Page Content */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Health Prediction Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Using Machine Learning and Deep Learning to assist adults and students
                in early health risk assessment.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#models"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Models
                </a>
                <a
                  href="#how-it-works"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-950"></div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced machine learning models trained on extensive medical datasets
                for accurate predictions
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Fast Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant health risk assessments in seconds, not days
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Privacy First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your health data is processed securely and never shared
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How Our AI Helps in Early Detection
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our platform uses state-of-the-art machine learning algorithms to
                analyze your health data and provide early risk assessments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Enter Your Data
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill in the required health parameters or upload medical images
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our ML models process your data using advanced algorithms
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Get Results & Suggestions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Receive risk assessment and personalized health recommendations
                </p>
              </div>
            </div>

            {/* Important Info */}
            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Benefits of Early Detection
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Better treatment outcomes with early intervention</li>
                    <li>• Prevention of disease progression</li>
                    <li>• Improved quality of life</li>
                    <li>• Cost-effective healthcare management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Important Disclaimer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    This platform provides risk assessments based on AI analysis and is{" "}
                    <span className="font-semibold">
                      not a substitute for professional medical diagnosis
                    </span>
                    . Always consult qualified healthcare professionals for medical
                    advice, diagnosis, and treatment.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Models Section */}
        <section id="models" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Health Prediction Models
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered health assessment tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </section>

        {/* Target Audience
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Who Can Use This Platform?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Adults
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Access comprehensive health prediction models for various
                  conditions including diabetes, heart disease, liver disease, lung
                  cancer, eye disease, mental health, and skin cancer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Students
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Specialized tools for student mental health assessment, depression
                  screening, and general health monitoring tailored to academic life
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};

export default Home;
