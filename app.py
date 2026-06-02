<<<<<<< HEAD
from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    session
)

from model.recommend import (
    recommend_playlist,
    predict_mood
)

from datetime import datetime
import json
import os
from flask import session
from database import db
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from auth import login_required
from models import User, Favorite, MoodHistory
from collections import Counter
from flask import jsonify

app = Flask(__name__)
app.secret_key = "vibesync_secret"

app.config["SQLALCHEMY_DATABASE_URI"] = \
"sqlite:///vibesync.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()


# =========================
# HOME PAGE
# =========================
@app.route("/")
def home():
    return render_template("home.html")

# =========================
# REGISTER
# =========================
@app.route(
    "/register",
    methods=["GET","POST"]
)
def register():

    if request.method == "POST":

        username = request.form["username"]

        email = request.form["email"]

        password = generate_password_hash(
            request.form["password"]
        )

        user = User(
            username=username,
            email=email,
            password=password
        )

        db.session.add(user)
        db.session.commit()

        return redirect(
            url_for("login")
        )

    return render_template(
        "register.html"
    )

# =========================
# LoGIN
# =========================
@app.route(
    "/login",
    methods=["GET","POST"]
)
def login():

    if request.method == "POST":

        email = request.form["email"]

        password = request.form["password"]

        user = User.query.filter_by(
            email=email
        ).first()

        if user and check_password_hash(
            user.password,
            password
        ):

            session["user_id"] = user.id
            session["username"] = user.username

            return redirect(
                url_for("home")
            )

    return render_template(
        "login.html"
    )

# =========================
# LOGOUT
# =========================
@app.route("/logout")
def logout():

    session.clear()

    return redirect(
        url_for("login")
    )


# =========================
# MOOD ANALYZER PAGE
# =========================
@app.route("/mood_analyzer")
@login_required
def mood_analyzer():
    return render_template(
        "moodanalyzer.html"
    )


# =========================
# ANALYZE MOOD
# =========================
@app.route("/analyze", methods=["POST"])
@login_required
def analyze():

    mood_text = request.form.get(
        "mood_text"
    )

    predicted_mood = predict_mood(
        mood_text
    )

    history = MoodHistory(
        user_id=session["user_id"],
        mood_text=mood_text,
        predicted_mood=predicted_mood
    )

    db.session.add(history)
    db.session.commit()

    return redirect(
        url_for(
            "recommendation",
            mood=predicted_mood
        )
    )
# =========================
# SAVE PLAYLIST
# =========================
@app.route(
    "/save_playlist",
    methods=["POST"]
)
@login_required
def save_playlist():

    mood = request.form.get("mood")
    playlist = request.form.get("playlist")

    favorite = Favorite(
        user_id=session["user_id"],
        mood=mood,
        playlist=playlist
    )

    db.session.add(favorite)
    db.session.commit()

    return jsonify({
        "success": True
    })

# =========================
# RECOMMENDATION PAGE
# =========================
@app.route("/recommendation")
@login_required
def recommendation():

    mood = request.args.get(
        "mood",
        "calm"
    ).lower()

    playlist = recommend_playlist(
        mood
    )

    return render_template(
        "recommendation.html",
        mood=mood,
        playlist=playlist
    )


# =========================
# STUDY ZONE
# =========================
@app.route("/studyzone")
@login_required
def studyzone():
    return render_template(
        "studyzone.html"
    )


# =========================
# DASHBOARD
# =========================
@app.route("/dashboard")
@login_required
def dashboard():

    recent_entries = MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).order_by(
        MoodHistory.created_at.desc()
    ).limit(3).all()

    all_entries = MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).all()

    mood_count = Counter(
        entry.predicted_mood
        for entry in all_entries
    )

    return render_template(
        "dashboard.html",
        moods=recent_entries,
        mood_count=mood_count,
        total_entries=len(all_entries)
    )

# =========================
# CLEAR HISTORY
# =========================
@app.route("/clear-history", methods=["POST"])
@login_required
def clear_history():

    MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).delete()

    db.session.commit()

    return redirect(
        url_for("dashboard")
    )

# =========================
# FAVORITES
# =========================
@app.route("/favorites")
@login_required
def favorites():

    favorites = Favorite.query.filter_by(
        user_id=session["user_id"]
    ).all()

    return render_template(
        "favorites.html",
        favorites=favorites
    )


# =========================
# PROFILE
# =========================
@app.route("/profile")
@login_required
def profile():

    user = User.query.get(
        session["user_id"]
    )

    return render_template(
        "profile.html",
        user=user
    )

# =========================
# SAVE PREFERENCE
# =========================
@app.route(
    "/save-profile",
    methods=["POST"]
)
@login_required
def save_profile():

    user = User.query.get(
        session["user_id"]
    )

    user.display_name = request.form.get(
        "display_name"
    )

    user.favorite_genre = request.form.get(
    "genre"
    )

    user.reduce_motion = (
        request.form.get(
            "reduce_motion"
        ) == "true"
    )

    db.session.commit()

    return jsonify({
        "success": True
    })

with app.app_context():
    db.create_all()
if __name__ == "__main__":
=======
from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    session
)

from model.recommend import (
    recommend_playlist,
    predict_mood
)

from datetime import datetime
import json
import os
from flask import session
from database import db
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)
from auth import login_required
from models import User, Favorite, MoodHistory
from collections import Counter
from flask import jsonify

app = Flask(__name__)
app.secret_key = "vibesync_secret"

app.config["SQLALCHEMY_DATABASE_URI"] = \
"sqlite:///vibesync.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()


# =========================
# HOME PAGE
# =========================
@app.route("/")
def home():
    return render_template("home.html")

# =========================
# REGISTER
# =========================
@app.route(
    "/register",
    methods=["GET","POST"]
)
def register():

    if request.method == "POST":

        username = request.form["username"]

        email = request.form["email"]

        password = generate_password_hash(
            request.form["password"]
        )

        user = User(
            username=username,
            email=email,
            password=password
        )

        db.session.add(user)
        db.session.commit()

        return redirect(
            url_for("login")
        )

    return render_template(
        "register.html"
    )

# =========================
# LoGIN
# =========================
@app.route(
    "/login",
    methods=["GET","POST"]
)
def login():

    if request.method == "POST":

        email = request.form["email"]

        password = request.form["password"]

        user = User.query.filter_by(
            email=email
        ).first()

        if user and check_password_hash(
            user.password,
            password
        ):

            session["user_id"] = user.id
            session["username"] = user.username

            return redirect(
                url_for("home")
            )

    return render_template(
        "login.html"
    )

# =========================
# LOGOUT
# =========================
@app.route("/logout")
def logout():

    session.clear()

    return redirect(
        url_for("login")
    )


# =========================
# MOOD ANALYZER PAGE
# =========================
@app.route("/mood_analyzer")
@login_required
def mood_analyzer():
    return render_template(
        "moodanalyzer.html"
    )


# =========================
# ANALYZE MOOD
# =========================
@app.route("/analyze", methods=["POST"])
@login_required
def analyze():

    mood_text = request.form.get(
        "mood_text"
    )

    predicted_mood = predict_mood(
        mood_text
    )

    history = MoodHistory(
        user_id=session["user_id"],
        mood_text=mood_text,
        predicted_mood=predicted_mood
    )

    db.session.add(history)
    db.session.commit()

    return redirect(
        url_for(
            "recommendation",
            mood=predicted_mood
        )
    )
# =========================
# SAVE PLAYLIST
# =========================
@app.route(
    "/save_playlist",
    methods=["POST"]
)
@login_required
def save_playlist():

    mood = request.form.get("mood")
    playlist = request.form.get("playlist")

    favorite = Favorite(
        user_id=session["user_id"],
        mood=mood,
        playlist=playlist
    )

    db.session.add(favorite)
    db.session.commit()

    return jsonify({
        "success": True
    })

# =========================
# RECOMMENDATION PAGE
# =========================
@app.route("/recommendation")
@login_required
def recommendation():

    mood = request.args.get(
        "mood",
        "calm"
    ).lower()

    playlist = recommend_playlist(
        mood
    )

    return render_template(
        "recommendation.html",
        mood=mood,
        playlist=playlist
    )


# =========================
# STUDY ZONE
# =========================
@app.route("/studyzone")
@login_required
def studyzone():
    return render_template(
        "studyzone.html"
    )


# =========================
# DASHBOARD
# =========================
@app.route("/dashboard")
@login_required
def dashboard():

    recent_entries = MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).order_by(
        MoodHistory.created_at.desc()
    ).limit(3).all()

    all_entries = MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).all()

    mood_count = Counter(
        entry.predicted_mood
        for entry in all_entries
    )

    return render_template(
        "dashboard.html",
        moods=recent_entries,
        mood_count=mood_count,
        total_entries=len(all_entries)
    )

# =========================
# CLEAR HISTORY
# =========================
@app.route("/clear-history", methods=["POST"])
@login_required
def clear_history():

    MoodHistory.query.filter_by(
        user_id=session["user_id"]
    ).delete()

    db.session.commit()

    return redirect(
        url_for("dashboard")
    )

# =========================
# FAVORITES
# =========================
@app.route("/favorites")
@login_required
def favorites():

    favorites = Favorite.query.filter_by(
        user_id=session["user_id"]
    ).all()

    return render_template(
        "favorites.html",
        favorites=favorites
    )


# =========================
# PROFILE
# =========================
@app.route("/profile")
@login_required
def profile():

    user = User.query.get(
        session["user_id"]
    )

    return render_template(
        "profile.html",
        user=user
    )

# =========================
# SAVE PREFERENCE
# =========================
@app.route(
    "/save-profile",
    methods=["POST"]
)
@login_required
def save_profile():

    user = User.query.get(
        session["user_id"]
    )

    user.display_name = request.form.get(
        "display_name"
    )

    user.favorite_genre = request.form.get(
    "genre"
    )

    user.reduce_motion = (
        request.form.get(
            "reduce_motion"
        ) == "true"
    )

    db.session.commit()

    return jsonify({
        "success": True
    })

with app.app_context():
    db.create_all()
if __name__ == "__main__":
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
    app.run(debug=True)