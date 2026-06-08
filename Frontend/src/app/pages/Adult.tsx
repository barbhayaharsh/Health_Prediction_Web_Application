import { ModelCard } from '@/app/components/ModelCard';
import { models } from '@/app/data/models';
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export const Adult = () => {
  const adultModels = models.filter(m => m.category === 'Adult' || m.category === 'Both');

  return (
    <>
      {/* 🔥 Navbar at top */}
        <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Adult Health Prediction Models
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive health assessment tools designed for adults to detect early signs
              of various health conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adultModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Why Use Adult Health Prediction Models?
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Early detection of chronic diseases</li>
              <li>• Risk assessment based on your unique health profile</li>
              <li>• Personalized health recommendations</li>
              <li>• Monitor health trends over time</li>
              <li>• Make informed decisions about your health</li>
            </ul>
          </div>
        </div>
      </div>
      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};
