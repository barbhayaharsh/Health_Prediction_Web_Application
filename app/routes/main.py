from flask import Blueprint, render_template, session, redirect, url_for, jsonify, request
from app.models.user import User

main_bp = Blueprint("main", __name__)

@main_bp.route("/")
def home():
    return render_template("index.html")


@main_bp.route("/dashboard")
def dashboard():
    user_id = session.get("user_id")

    if not user_id:
        return redirect(url_for("auth.login"))

    user = User.query.get(user_id)

    if user.is_admin:
        return render_template("dashboard/admin_dashboard.html")
    else:
        return render_template("dashboard/user_dashboard.html")


@main_bp.route("/api/about", methods=["GET"])
def about():
    return jsonify({
        "title": "Health Prediction System",
        "description": "An AI-powered Health Prediction Platform using Machine Learning and Deep Learning to assist adults and students in early health risk assessment.",
        "version": "1.0.0",
        "author": "Piyush Kumar Sahu"
    })


@main_bp.route("/api/contact", methods=["POST"])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    
    print("📩 Contact Form:", name, email, message)

    return jsonify({
        "message": "Thanks for contacting us. We will get back to you soon!"
    })
