from app import db
from sqlalchemy.dialects.postgresql import JSONB

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    model_name = db.Column(db.String(50))
    input_data = db.Column(JSONB)
    result = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
