from flask import Blueprint, request, jsonify
from app.services.ml_services import predict_ml
from app.services.dl_services import predict_dl
from app.services.gemini_services import generate_tips
from app.services.prediction_messages import get_prediction_message



predict_bp = Blueprint("predict", __name__)

@predict_bp.route("/<model_name>", methods=["POST"])
def predict(model_name):
    try:
        if request.content_type.startswith("multipart/form-data"):
            image = request.files.get("image")
            prediction, confidence, tips, message = predict_dl(model_name, image)
            user_inputs = {}

        else:
            data = request.json
            prediction, confidence = predict_ml(model_name, data)
            message = get_prediction_message(model_name, prediction)
            user_inputs = data

        tips = generate_tips(model_name, prediction, confidence)

        return jsonify({
            "model": model_name,
            "prediction": prediction,
            "confidence": confidence,
            "tips": tips,
            "message": message
        })

    except Exception as e:
        print(" Prediction Error:", e)
        return jsonify({"error": str(e)}), 500
