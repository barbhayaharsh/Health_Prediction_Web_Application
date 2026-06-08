import { Brain, Target, Users, Award } from 'lucide-react';
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export const About = () => {
  return (
    <>
      {/* 🔥 Navbar at top */}
        <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Our Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Leveraging AI and Machine Learning to democratize early health risk detection
              for everyone
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                about our platform
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              We are committed to making advanced health prediction technology accessible to everyone.
              Our platform combines cutting-edge machine learning and deep learning algorithms to
              provide early risk assessments for various health conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              By empowering individuals with actionable health insights, we aim to facilitate early
              intervention, improve health outcomes, and promote preventive healthcare practices.
            </p>
          </div>

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  7 ML Models
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Form-based machine learning models covering diabetes, heart disease, liver disease,
                lung cancer, eye disease, mental health assessment, and student depression prediction.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1 DL Model
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Advanced deep learning model for skin cancer classification using computer vision
                to analyze lesion images with high accuracy.
              </p>
            </div>
          </div>

          {/* Technology */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-lg p-8 mb-12 border border-blue-200 dark:border-blue-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Machine Learning
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Advanced classification algorithms</li>
                  <li>• Feature engineering and selection</li>
                  <li>• Model validation and testing</li>
                  <li>• Continuous improvement through feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Deep Learning
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Convolutional Neural Networks (CNNs)</li>
                  <li>• Transfer learning techniques</li>
                  <li>• Image preprocessing and augmentation</li>
                  <li>• High-accuracy pattern recognition</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};
