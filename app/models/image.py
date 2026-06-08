from app import db

class ImagePrediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    image_path = db.Column(db.Text)
    result = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
