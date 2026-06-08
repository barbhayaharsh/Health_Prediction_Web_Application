from app import db

class Routine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    routine = db.Column(db.Text)
    reminder_time = db.Column(db.Time)
