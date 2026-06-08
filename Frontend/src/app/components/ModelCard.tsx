import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Image as ImageIcon } from 'lucide-react';
import { Model } from '@/app/data/models';

interface ModelCardProps {
  model: Model;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Adult':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Student':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Both':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            {model.type === 'image' ? (
              <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            ) : (
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(model.category)}`}>
            {model.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {model.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {model.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            {model.type === 'image' ? 'Image-based' : 'Form-based'}
          </span>
          <Link
            to={`/model/${model.id}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
