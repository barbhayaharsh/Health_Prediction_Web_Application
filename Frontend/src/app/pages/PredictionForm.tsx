import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Upload, ArrowRight } from 'lucide-react';
import { models } from '@/app/data/models';
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";

export const PredictionForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const model = models.find(m => m.id === id);

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ FIXED: frontend → backend API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response: Response;

      if (model.type === "image") {
        const payload = new FormData();
        const fileInput = document.getElementById("image-upload") as HTMLInputElement;

        if (!fileInput.files || fileInput.files.length === 0) {
          alert("Please upload an image");
          return;
        }

        payload.append("image", fileInput.files[0]);

        response = await fetch(`http://127.0.0.1:5000/api/predict/${model.id}`, {
          method: "POST",
          body: payload,
        });

      } else {
        response = await fetch(`http://127.0.0.1:5000/api/predict/${model.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // ✅ FIXED HERE
        });
      }

      const result = await response.json();

      console.log("🔥 BACKEND RESPONSE 👉", result);   // 👈 YE LINE ADD KI

      if (!response.ok) {
        throw new Error(result?.error || "Prediction failed");
      }

      navigate(`/result/${model.id}`, { state: result });


    } catch (err) {
      console.error("Prediction error:", err);
      alert("Server error while predicting");
    }
  };

  return (
    <>
      {/* 🔥 Navbar at top */}
        <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {model.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please fill in all required fields accurately for the best prediction results
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {model.type === 'image' ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Upload Skin Lesion Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                      required
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer inline-flex flex-col items-center"
                    >
                      <Upload className="h-12 w-12 text-gray-400 mb-4" />
                      <span className="text-gray-600 dark:text-gray-400 mb-2">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        JPG, PNG (max 10MB)
                      </span>
                    </label>
                  </div>
                </div>

                {imagePreview && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preview
                    </label>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-md mx-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {model.fields?.map((field) => (
                  <div key={field.name} className={field.type === 'text' ? 'md:col-span-2' : ''}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>

                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={field.type === 'number' ? 'Enter number' : 'Enter value'}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 flex justify-between items-center">
              <Link
                to={`/model/${model.id}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ← Back to Details
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg group"
              >
                Get Prediction
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Before You Submit
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Please ensure all information is accurate. This prediction is for informational
              purposes only and should not replace professional medical advice. Consult with
              a healthcare provider for diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
      {/* 🔥 Footer at bottom */}
      <Footer />
    </>
  );
};
