import { ModelCard } from '@/app/components/ModelCard';
import { models } from '@/app/data/models';
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export const Student = () => {
  const studentModels = models.filter(m => m.category === 'Student' || m.category === 'Both');

  return (
    <>
      {/* 🔥 Navbar at top */}
        <Navbar />  
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Student Health Prediction Models
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specialized health and mental wellness tools designed for students facing
              academic and life challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          <div className="mt-12 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Student Wellness Support
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Mental health screening and assessment</li>
              <li>• Academic stress management insights</li>
              <li>• Early intervention for depression and anxiety</li>
              <li>• Personalized wellness recommendations</li>
              <li>• Confidential and supportive environment</li>
            </ul>
          </div>

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              If you're experiencing a mental health crisis, please contact your campus counseling center
              or call the National Suicide Prevention Lifeline at 988.
            </p>
          </div>
        </div>
      </div>
      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};
