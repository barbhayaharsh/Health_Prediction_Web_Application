from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import re
from app import db
from app.models.user import User
from flask_mail import Message
from app import mail
import random

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")


def send_otp_email(email, otp):
    msg = Message("Email Verification - Health Prediction System",
                  recipients=[email])
    msg.body = f"Your OTP for verification is: {otp}"
    mail.send(msg)


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role")

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 400

    # GENERATE OTP
    otp = str(random.randint(100000, 999999))

    user = User(
        name=name,
        email=email,
        password=generate_password_hash(password),
        role=role,
        otp=otp,
        is_verified=False
    )

    db.session.add(user)
    db.session.commit()

    # SEND OTP 
    send_otp_email(email, otp)

    return jsonify({"message": "OTP sent to your email"}), 200

@auth_bp.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json

    email = data.get("email")
    otp = data.get("otp")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    if user.otp != otp:
        return jsonify({"error": "Invalid OTP"}), 400

    # Otp varifying
    user.is_verified = True
    user.otp = None
    db.session.commit()

    return jsonify({"message": "Email verified successfully"}), 200


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    if not user.is_verified:
        return jsonify({"error": "Email not verified"}), 401

    if not check_password_hash(user.password, password):
        return jsonify({"error": "Wrong password"}), 401

    return jsonify({
        "message": "Login successful",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }
    }), 200



@auth_bp.route("/logout")
def logout():
    session.clear()
    flash("You have been logged out.", "info")
    return redirect(url_for("main.home"))
