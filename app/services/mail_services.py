from flask_mail import Message
from app import mail

def send_mail(to, routine):
    msg = Message(
        subject="Health Reminder",
        recipients=[to],
        body=routine
    )
    mail.send(msg)
