from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user import User
from app.models.prediction import Prediction

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")

@admin_bp.route("/dashboard")
@jwt_required()
def dashboard():
    user = get_jwt_identity()
    if user["role"] != "admin":
        return jsonify(error="Unauthorized"), 403

    users = User.query.count()
    predictions = Prediction.query.count()

    latest = Prediction.query.order_by(
        Prediction.created_at.desc()
    ).limit(5).all()

    return jsonify(
        total_users=users,
        total_predictions=predictions,
        recent_predictions=[
            {
                "model": p.model_name,
                "result": p.result,
                "date": p.created_at
            } for p in latest
        ]
    )
