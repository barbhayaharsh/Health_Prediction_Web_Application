from flask import Blueprint, request, jsonify
from app.services.dl_services import predict_dl
from app.services.prediction_messages import get_prediction_message

dl_bp = Blueprint("dl", __name__)

@dl_bp.route("/api/predict/skin-cancer", methods=["POST"])
def skin_cancer_api():
    try:
        file = request.files.get("image")

        if not file:
            return jsonify({"error": "No image uploaded"}), 400

        
        prediction, confidence, tips, message = predict_dl("skin-cancer", file)

        return jsonify({
            "model": "skin-cancer",
            "prediction": prediction,
            "confidence": confidence,
            "message": message,
            "tips": tips
        })

    except Exception as e:
        print("❌ DL API Error:", e)
        return jsonify({"error": str(e)}), 500

