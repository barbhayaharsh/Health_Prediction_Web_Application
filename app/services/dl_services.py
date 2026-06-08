import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from PIL import Image
import io
from app.services.prediction_messages import get_dl_prediction_message

MODEL_PATH = "models/skincancer.h5"

CLASS_NAMES = [
    "actinic keratosis",
    "basal cell carcinoma",
    "dermatofibroma",
    "melanoma",
    "nevus",
    "pigmented benign keratosis",
    "seborrheic keratosis",
    "squamous cell carcinoma",
    "vascular lesion"
]


TIPS_BY_DISEASE = {
    "melanoma": {
        "what_to_do": ["Immediately consult a dermatologist", "Get biopsy and further tests"],
        "what_to_avoid": ["Avoid sun exposure", "Do not ignore growing moles"],
        "lifestyle_tips": ["Use sunscreen daily", "Wear protective clothing"],
        "precautions": ["Regular skin checkups", "Follow doctor strictly"]
    },
    "seborrheic keratosis": {
        "what_to_do": ["Consult dermatologist if irritated", "Keep skin clean"],
        "what_to_avoid": ["Scratching lesions", "Self medication"],
        "lifestyle_tips": ["Moisturize skin", "Avoid harsh soaps"],
        "precautions": ["Monitor size and color", "Doctor review yearly"]
    }
}

model = tf.keras.models.load_model(MODEL_PATH)


def predict_dl(model_name, file):
    try:
        
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
        img = img.resize((64, 64))

        img_array = np.array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = img_array / 255.0

        
        preds = model.predict(img_array)
        class_index = int(np.argmax(preds[0]))
        confidence = float(np.max(preds[0]) * 100)

        prediction = CLASS_NAMES[class_index]

        
        message = get_dl_prediction_message(prediction)

        
        tips = TIPS_BY_DISEASE.get(prediction, {
            "what_to_do": ["Consult a dermatologist immediately"],
            "what_to_avoid": ["Do not self diagnose"],
            "lifestyle_tips": ["Use sunscreen daily"],
            "precautions": ["Regular skin checkups"]
        })

        
        return prediction, round(confidence, 2), tips, message

    except Exception as e:
        print(" DL Prediction Error:", e)
        raise e

