from database import db
from datetime import datetime


# ==========================
# USER MODEL
# ==========================

class User(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    username = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    email = db.Column(
        db.String(120),
        unique=True,
        nullable=False
    )

    password = db.Column(
        db.String(255),
        nullable=False
    )

    display_name = db.Column(
        db.String(100),
        default="Listener"
    )

    favorite_genre = db.Column(
        db.String(50),
        default="Indie"
    )

    reduce_motion = db.Column(
        db.Boolean,
        default=False
    )



# ==========================
# FAVORITE PLAYLIST MODEL
# ==========================

class Favorite(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    mood = db.Column(
        db.String(50),
        nullable=False
    )

    playlist = db.Column(
        db.String(500),
        nullable=False
    )

    saved_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )

    def __repr__(self):
        return f"<Favorite {self.mood}>"



# ==========================
# MOOD HISTORY MODEL
# ==========================

class MoodHistory(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    mood_text = db.Column(
        db.Text,
        nullable=False
    )

    predicted_mood = db.Column(
        db.String(50),
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )

    def __repr__(self):
        return f"<MoodHistory {self.predicted_mood}>"
