import os
from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
from flask_mail import Mail

from app.extensions import db, migrate

from app.models.user import User

mail = Mail()

load_dotenv()

def create_app():
    app = Flask(__name__)

   
    CORS(app, resources={r"/api/*": {"origins": "*"}})

   
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "fallback-dev-secret")

    
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    
    app.config["MAIL_SERVER"] = "smtp.gmail.com"
    app.config["MAIL_PORT"] = 587
    app.config["MAIL_USE_TLS"] = True
    app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
    app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")

  
    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)

    from app.models.user import User  # keep this

    with app.app_context():
        db.create_all()   # 🔥 THIS WAS MISSING

    
    from app.routes.predict import predict_bp
    from app.routes.auth import auth_bp
    from app.routes.main import main_bp
    from app.routes.models import models_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(predict_bp, url_prefix="/api/predict")   
    app.register_blueprint(models_bp, url_prefix="/api/models")

    app.register_blueprint(main_bp)

    return app
