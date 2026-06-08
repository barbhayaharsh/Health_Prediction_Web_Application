from flask import Blueprint, request, jsonify, session
from app import db
from app.models.routine import Routine

reminder_bp = Blueprint("reminder", __name__, url_prefix="/routine")

@reminder_bp.route("/add", methods=["POST"])
def add_routine():
    data = request.json
    routine = Routine(
        user_id=session.get("user_id"),
        routine=data["routine"],
        reminder_time=data["time"]
    )
    db.session.add(routine)
    db.session.commit()
    return jsonify({"message": "Routine saved"})
