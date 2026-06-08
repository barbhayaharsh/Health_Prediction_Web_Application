from flask import Blueprint, send_file
from app.services.pdf_service import generate_report
from app.models.user import User
from app.models.prediction import Prediction

report_bp = Blueprint("report", __name__, url_prefix="/report")

@report_bp.route("/<int:prediction_id>")
def download_report(prediction_id):
    prediction = Prediction.query.get(prediction_id)
    user = User.query.get(prediction.user_id)

    path = generate_report(user, prediction, "Health Tips Generated")
    return send_file(path, as_attachment=True)
