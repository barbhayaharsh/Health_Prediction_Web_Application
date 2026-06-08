export interface ModelField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'file';
  options?: string[];
  required?: boolean;
}

export interface Model {
  id: string;
  name: string;
  category: 'Adult' | 'Student' | 'Both';
  description: string;
  detailedDescription: string;
  importance: string;
  whoShouldUse: string;
  type: 'form' | 'image';
  fields?: ModelField[];
}

export const models: Model[] = [
  {
    id: 'diabetes',
    name: 'Diabetes Prediction',
    category: 'Adult',
    type: 'form',
    description: 'Predict diabetes risk based on health metrics and medical history.',
    detailedDescription: 'This model uses machine learning algorithms to analyze various health parameters and predict the likelihood of diabetes. It considers factors like age, BMI, glucose levels, and family history to provide accurate risk assessment.',
    importance: 'Early detection of diabetes is crucial for preventing serious complications such as heart disease, kidney failure, and vision problems. This tool helps identify at-risk individuals who may benefit from lifestyle changes or medical intervention.',
    whoShouldUse: 'Adults over 18 years with risk factors such as obesity, family history of diabetes, or experiencing symptoms like excessive thirst, frequent urination, or unexplained weight loss.',
    fields: [
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'hypertension', label: 'Hypertension', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'heart_disease', label: 'Heart Disease', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'bmi', label: 'BMI', type: 'number', required: true },
      { name: 'HbA1c_level', label: 'HbA1c Level', type: 'number', required: true },
      { name: 'blood_glucose_level', label: 'Blood Glucose Level', type: 'number', required: true },
    ]
  },
  {
    id: 'heart-disease',
    name: 'Heart Disease Prediction',
    category: 'Adult',
    type: 'form',
    description: 'Assess cardiovascular disease risk through comprehensive health analysis.',
    detailedDescription: 'This advanced model evaluates multiple cardiovascular risk factors including age, cholesterol levels, blood pressure, and exercise patterns to predict heart disease probability. It uses state-of-the-art machine learning techniques trained on extensive medical datasets.',
    importance: 'Heart disease is the leading cause of death globally. Early prediction and intervention can significantly reduce mortality and improve quality of life through timely treatment and lifestyle modifications.',
    whoShouldUse: 'Adults experiencing chest pain, shortness of breath, irregular heartbeat, or those with risk factors like high blood pressure, high cholesterol, smoking, or family history of heart disease.',
    fields: [
      { name: 'Age', label: 'Age', type: 'number', required: true },
      { name: 'Sex', label: 'Sex', type: 'select', options: ['Male', 'Female'], required: true },
      { name: 'ChestPainType', label: 'Chest Pain Type', type: 'select', options: ['Typical Angina', 'Atypical Angina', 'Non-Anginal Pain', 'Asymptomatic'], required: true },
      { name: 'RestingBP', label: 'Resting Blood Pressure', type: 'number', required: true },
      { name: 'Cholesterol', label: 'Cholesterol', type: 'number', required: true },
      { name: 'FastingBS', label: 'Fasting Blood Sugar', type: 'select', options: ['<120 mg/dl', '>120 mg/dl'], required: true },
      { name: 'RestingECG', label: 'Resting ECG', type: 'select', options: ['Normal', 'ST-T Wave Abnormality', 'Left Ventricular Hypertrophy'], required: true },
      { name: 'MaxHR', label: 'Maximum Heart Rate', type: 'number', required: true },
      { name: 'ExerciseAngina', label: 'Exercise-Induced Angina', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'Oldpeak', label: 'Oldpeak', type: 'number', required: true },
      { name: 'ST_Slope', label: 'ST Slope', type: 'select', options: ['Upsloping', 'Flat', 'Downsloping'], required: true },
    ]
  },
  {
    id: 'liver-disease',
    name: 'Liver Disease Prediction',
    category: 'Adult',
    type: 'form',
    description: 'Detect liver disease risk using blood test results and patient data.',
    detailedDescription: 'This model analyzes liver function test results including bilirubin levels, enzyme counts, and protein ratios to identify potential liver diseases such as hepatitis, cirrhosis, or fatty liver disease.',
    importance: 'Liver disease often develops silently without symptoms until advanced stages. Early detection through blood test analysis can lead to timely treatment and prevent irreversible liver damage.',
    whoShouldUse: 'Adults with risk factors including alcohol consumption, obesity, hepatitis infection, or those experiencing symptoms like jaundice, abdominal pain, or fatigue.',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
      { name: 'tot_bilirubin', label: 'Total Bilirubin', type: 'number', required: true },
      { name: 'direct_bilirubin', label: 'Direct Bilirubin', type: 'number', required: true },
      { name: 'tot_proteins', label: 'Total Proteins', type: 'number', required: true },
      { name: 'albumin', label: 'Albumin', type: 'number', required: true },
      { name: 'ag_ratio', label: 'A/G Ratio', type: 'number', required: true },
      { name: 'sgpt', label: 'SGPT (ALT)', type: 'number', required: true },
      { name: 'sgot', label: 'SGOT (AST)', type: 'number', required: true },
      { name: 'alkphos', label: 'Alkaline Phosphatase', type: 'number', required: true },
    ]
  },
  {
    id: 'lung-cancer',
    name: 'Lung Cancer Risk Prediction',
    category: 'Adult',
    type: 'form',
    description: 'Evaluate lung cancer risk based on lifestyle factors and medical history.',
    detailedDescription: 'This model assesses lung cancer risk by analyzing smoking history, environmental exposure, existing health conditions, and demographic factors. It provides personalized risk assessment for early intervention.',
    importance: 'Lung cancer is one of the most lethal cancers, but early detection significantly improves survival rates. This tool helps identify high-risk individuals who should undergo screening.',
    whoShouldUse: 'Adults with smoking history, exposure to secondhand smoke or carcinogens, family history of lung cancer, or experiencing persistent cough, chest pain, or breathing difficulties.',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], required: true },
      { name: 'country', label: 'Country', type: 'text', required: true },
      { name: 'cancer_stage', label: 'Cancer Stage (if known)', type: 'select', options: ['Stage I', 'Stage II', 'Stage III', 'Stage IV', 'Not Applicable'], required: true },
      { name: 'smoking_status', label: 'Smoking Status', type: 'select', options: ['Never Smoked', 'Former Smoker', 'Current Smoker'], required: true },
      { name: 'bmi', label: 'BMI', type: 'number', required: true },
      { name: 'cholesterol_level', label: 'Cholesterol Level', type: 'number', required: true },
      { name: 'hypertension', label: 'Hypertension', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'asthma', label: 'Asthma', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'cirrhosis', label: 'Cirrhosis', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'other_cancer', label: 'Other Cancer History', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'treatment_type', label: 'Treatment Type (if any)', type: 'select', options:['Chemotherapy', 'Surgery', 'Combined', 'Radiation'],required: true },
      { name: 'treatment_days', label: 'Treatment Days', type: 'number', required: true },
    ]
  },
  {
    id: 'eye-disease',
    name: 'Eye Disease Prediction',
    category: 'Adult',
    type: 'form',
    description: 'Predict eye disease risk including diabetic retinopathy and other conditions.',
    detailedDescription: 'This model evaluates the risk of various eye diseases by analyzing health metrics such as diabetes status, blood sugar levels, blood pressure, and cholesterol. It focuses on conditions like diabetic retinopathy, glaucoma, and cataracts.',
    importance: 'Eye diseases can lead to vision impairment or blindness if not detected early. Regular screening and early intervention can preserve vision and maintain quality of life.',
    whoShouldUse: 'Adults with diabetes, high blood pressure, high cholesterol, or experiencing vision changes, eye pain, or seeing floaters.',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'has_diabetic_retinopathy', label: 'Has Diabetic Retinopathy', type: 'select', options: ['Yes', 'No', 'Unknown'], required: true },
      { name: 'sugar_percentage', label: 'Sugar Percentage', type: 'number', required: true },
      { name: 'glucose_percentage', label: 'Glucose Percentage', type: 'number', required: true },
      { name: 'cholesterol_percentage', label: 'Cholesterol Percentage', type: 'number', required: true },
      { name: 'obesity_percentage', label: 'Obesity Percentage', type: 'number', required: true },
      { name: 'blood_pressure', label: 'Blood Pressure', type: 'number', required: true },
      { name: 'heart_rate', label: 'Heart Rate', type: 'number', required: true },
    ]
  },
  {
    id: 'mental-health-adult',
    name: 'Mental Health Assessment',
    category: 'Both',
    type: 'form',
    description: 'Comprehensive mental health evaluation for stress, anxiety, and depression.',
    detailedDescription: 'This assessment tool analyzes various psychological and lifestyle factors to evaluate mental health status. It considers work environment, stress levels, sleep patterns, physical activity, and social support to provide insights into mental well-being.',
    importance: 'Mental health is as important as physical health. Early identification of mental health concerns allows for timely intervention, therapy, and support, improving overall well-being and quality of life.',
    whoShouldUse: 'Anyone experiencing persistent sadness, anxiety, stress, sleep disturbances, or changes in mood and behavior. Suitable for both adults and students.',
    fields: [
      { name: 'age', label: 'Age', type: 'number', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { name: 'employment_status', label: 'Employment Status', type: 'select', options: ['Employed', 'Unemployed', 'Student', 'Retired'], required: true },
      { name: 'work_environment', label: 'Work Environment', type: 'select', options: ['On-site','Remote','Hybrid'], required: true },
      { name: 'stress_level', label: 'Stress Level (1-10)', type: 'number', required: true },
      { name: 'sleep_hours', label: 'Average Sleep Hours', type: 'number', required: true },
      { name: 'physical_activity_days', label: 'Physical Activity Days per Week', type: 'number', required: true },
      { name: 'depression_score', label: 'Depression Score (1-10)', type: 'number', required: true },
      { name: 'anxiety_score', label: 'Anxiety Score (1-10)', type: 'number', required: true },
      { name: 'social_support_score', label: 'Social Support Score (1-10)', type: 'number', required: true },
      { name: 'productivity_score', label: 'Productivity Score (1-10)', type: 'number', required: true },
    ]
  },
  {
    id: 'student-depression',
    name: 'Student Depression Prediction',
    category: 'Student',
    type: 'form',
    description: 'Specialized depression screening tool designed for students.',
    detailedDescription: 'This model is specifically designed for students to assess depression risk based on academic pressure, lifestyle factors, and mental health indicators. It considers unique student challenges like academic stress, financial concerns, and social adjustment.',
    importance: 'Student mental health is a growing concern. Early identification of depression in students can lead to academic support, counseling, and interventions that prevent serious outcomes and improve academic performance.',
    whoShouldUse: 'Students of all levels experiencing academic stress, social difficulties, sleep problems, loss of interest in activities, or persistent sadness.',
    fields: [
      { name: 'Gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
      { name: 'Age', label: 'Age', type: 'number', required: true },
      { name: 'City', label: 'City', type: 'text', required: true },
      { name: 'Academic Pressure', label: 'Academic Pressure (1-10)', type: 'number', required: true },
      { name: 'CGPA', label: 'CGPA / GPA', type: 'number', required: true },
      { name: 'Study Satisfaction', label: 'Study Satisfaction (1-10)', type: 'number', required: true },
      { name: 'Sleep Duration', label: 'Sleep Duration (hours)', type: 'number', required: true },
      { name: 'Dietary Habits', label: 'Dietary Habits', type: 'select', options: ['Healthy', 'Moderate', 'Unhealthy'], required: true },
      { name: 'Have you ever had suicidal thoughts ?', label: 'Have you ever had suicidal thoughts?', type: 'select', options: ['Yes', 'No'], required: true },
      { name: 'Work/Study Hours', label: 'Work/Study Hours per Day', type: 'number', required: true },
      { name: 'Financial Stress', label: 'Financial Stress (1-10)', type: 'number', required: true },
      { name: 'Family History of Mental Illness', label: 'Family History of Mental Illness', type: 'select', options: ['Yes', 'No', 'Unknown'], required: true },
    ]
  },
  {
    id: 'skin-cancer',
    name: 'Skin Cancer Classification',
    category: 'Both',
    type: 'image',
    description: 'Deep learning-based skin cancer detection from lesion images.',
    detailedDescription: 'This deep learning model uses advanced computer vision techniques to analyze skin lesion images and classify potential skin cancer. It can identify various types of skin abnormalities including melanoma, basal cell carcinoma, and benign lesions.',
    importance: 'Skin cancer is the most common cancer, but highly treatable when detected early. This tool provides quick initial screening that can prompt timely medical consultation.',
    whoShouldUse: 'Anyone noticing new or changing moles, lesions, or skin abnormalities. Particularly important for those with fair skin, sun exposure history, or family history of skin cancer.',
    fields: [
      { name: 'image', label: 'Upload Skin Lesion Image (JPG/PNG)', type: 'file', required: true },
    ]
  },
];
