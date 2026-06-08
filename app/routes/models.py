from flask import Blueprint, jsonify

models_bp = Blueprint("models", __name__)


ALL_MODELS = [
    {
        "id": "diabetes",
        "name": "Diabetes Prediction",
        "type": "adult",
        "description": "Predict diabetes risk based on health metrics."
    },
    {
        "id": "heart",
        "name": "Heart Disease Prediction",
        "type": "adult",
        "description": "Assess cardiovascular disease risk."
    },
    {
        "id": "liver",
        "name": "Liver Disease Prediction",
        "type": "adult",
        "description": "Detect liver disease risk."
    },
    {
        "id": "lung",
        "name": "Lung Cancer Risk Prediction",
        "type": "adult",
        "description": "Evaluate lung cancer risk."
    },
    {
        "id": "eye",
        "name": "Eye Disease Prediction",
        "type": "adult",
        "description": "Predict eye disease risk."
    },
    {
        "id": "mental",
        "name": "Mental Health Assessment",
        "type": "both",
        "description": "Mental health evaluation."
    },
    {
        "id": "student_mental",
        "name": "Student Mental Health",
        "type": "student",
        "description": "Student mental health assessment."
    }
]


@models_bp.route("/api/models/adult", methods=["GET"])
def get_adult_models():
    adult_models = [m for m in ALL_MODELS if m["type"] in ["adult", "both"]]
    return jsonify(adult_models)


@models_bp.route("/api/models/student", methods=["GET"])
def get_student_models():
    student_models = [m for m in ALL_MODELS if m["type"] in ["student", "both"]]
    return jsonify(student_models)
