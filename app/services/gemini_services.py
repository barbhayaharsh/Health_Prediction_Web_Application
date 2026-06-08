import google.generativeai as genai
import os


genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


def _fallback_tips():
    return {
        "what_to_do": ["Please consult a qualified doctor immediately"],
        "what_to_avoid": ["Do not ignore the symptoms"],
        "lifestyle_tips": ["Maintain healthy lifestyle", "Avoid stress"],
        "precautions": ["Follow doctor's instructions strictly"]
    }

def generate_tips(model_name, prediction, confidence):
    try:
        
        model = genai.GenerativeModel("gemini-3-flash-preview")

        prompt = f"""
You are a professional medical assistant.

Prediction model: {model_name}
Prediction result: {prediction}
Confidence: {confidence}%

Give proper medical advice with:
1. What to do
2. What to avoid
3. Lifestyle tips
4. Precautions

IMPORTANT:
- Always suggest to meet a doctor.
- Respond strictly in JSON format:

{{
  "what_to_do": [],
  "what_to_avoid": [],
  "lifestyle_tips": [],
  "precautions": []
}}
"""

        response = model.generate_content(prompt)
        text = response.text

        
        import json, re
        match = re.search(r"\{.*\}", text, re.S)
        if match:
            return json.loads(match.group())

        return _fallback_tips()

    except Exception as e:
        print("Gemini failed, using fallback tips:", e)
        return _fallback_tips()
