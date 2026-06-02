<<<<<<< HEAD
import joblib

# Load model
model = joblib.load("model/mood_model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")


def predict_mood(text):

    text_lower = text.lower()

    # Keyword boosting (high accuracy)
    if any(word in text_lower for word in
           ["energetic", "motivated", "excited",
            "pumped", "active", "powerful",
            "confident", "enthusiastic",
            "driven", "inspired", "unstoppable",
            "productive", "strong", "vibrant",
            "adrenaline", "ambitious",
            "determined", "charged",
            "ready", "passionate",
            "workout", "gym",
            "exercise", "training",
            "beast mode", "conquer"]):
        return "energetic"

    elif any(word in text_lower for word in
             ["sad", "lonely", "depressed", "down",
             "heartbroken", "upset", "crying",
             "hurt", "miserable", "gloomy",
             "hopeless", "discouraged", "empty",
             "rejected", "isolated", "lost",
             "grief", "pain", "failure",
             "disappointed", "blue", "tearful",
             "broken", "unhappy", "regret"]):
        return "sad"
    
    elif any(word in text_lower for word in
             ["happy", "joy", "joyful", "excited",
             "delighted", "great", "amazing",
             "awesome", "wonderful", "thrilled",
             "grateful", "blessed", "positive",
             "smile", "smiling", "laughing",
             "fantastic", "proud", "accomplished",
             "success", "celebration", "love"]):
        return "happy"

    elif any(word in text_lower for word in
             ["angry", "mad", "furious",
             "annoyed", "irritated",
             "frustrated", "upset",
             "outraged", "enraged",
             "resentful", "agitated",
             "hostile", "stressed",
             "tense", "bitter",
             "offended", "triggered",
             "fed up", "impatient",
             "fuming", "livid",
             "argument", "unfair",
             "betrayed", "disrespected"]):
        return "angry"

    elif any(word in text_lower for word in
             ["love", "romantic", "loving",
             "adore", "affection", "sweet",
             "passionate", "caring",
             "devoted", "crush",
             "beloved", "heartfelt",
             "intimate", "attracted",
             "cherished", "dreamy",
             "flirty", "date",
             "boyfriend", "girlfriend",
             "partner", "relationship",
             "butterflies", "kiss",
             "hug", "soulmate"]):
        return "romantic"

    elif any(word in text_lower for word in
             ["focused", "focus", "study",
             "studying", "concentrated",
             "concentration", "productive",
             "productivity", "assignment",
             "exam", "revision", "learning",
             "coding", "project",
             "work", "goal",
             "discipline", "organized",
             "efficient", "deep work",
             "task", "deadline",
             "homework", "lecture",
             "practice", "skill"]):
        return "focused"

    elif any(word in text_lower for word in
             ["calm", "peaceful", "relaxed",
             "serene", "tranquil", "comfortable",
             "content", "quiet", "still",
             "balanced", "composed", "soothing",
             "restful", "mindful", "centered",
             "stable", "harmonious", "easygoing",
             "meditation", "yoga",
             "nature", "sunset",
             "rain", "breeze",
             "unwind", "rest"]):
        return "calm"
    
    elif any(word in text_lower for word in
             ["melancholy", "nostalgic",
             "nostalgia", "wistful",
             "reflective", "sentimental",
             "pensive", "longing",
             "yearning", "bittersweet",
             "reminiscing", "memories",
             "memory", "childhood",
             "past", "old days",
             "reflection", "thoughtful",
             "emotional", "dreamy",
             "remembering", "miss those days",
             "old friends", "old photos"]):
        return "melancholy"

    # Fallback to ML model
    text_vector = vectorizer.transform([text])

    emotion = model.predict(text_vector)[0]

    mood_map = {

        "joy": "happy",
        "amusement": "happy",
        "approval": "happy",
        "admiration": "happy",
        "gratitude": "happy",
        "optimism": "happy",

        "sadness": "sad",
        "grief": "sad",

        "anger": "angry",
        "annoyance": "angry",

        "excitement": "energetic",

        "love": "romantic",
        "caring": "romantic",

        "curiosity": "focused",
        "realization": "focused",

        "fear": "calm",
        "nervousness": "calm",

        "disappointment": "melancholy",
        "remorse": "melancholy",
        "embarrassment": "melancholy"
    }

    return mood_map.get(emotion, "calm")


def recommend_playlist(mood):

    playlists = {

        "happy":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",

        "sad":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",

        "calm":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",

        "energetic":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",

        "focused":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ",

        "romantic":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWXbttAJcbphz",

        "angry":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl",

        "melancholy":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx"
    }

    return playlists.get(
        mood,
        playlists["calm"]
=======
import joblib

# Load model
model = joblib.load("model/mood_model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")


def predict_mood(text):

    text_lower = text.lower()

    # Keyword boosting (high accuracy)
    if any(word in text_lower for word in
           ["energetic", "motivated", "excited",
            "pumped", "active", "powerful",
            "confident", "enthusiastic",
            "driven", "inspired", "unstoppable",
            "productive", "strong", "vibrant",
            "adrenaline", "ambitious",
            "determined", "charged",
            "ready", "passionate",
            "workout", "gym",
            "exercise", "training",
            "beast mode", "conquer"]):
        return "energetic"

    elif any(word in text_lower for word in
             ["sad", "lonely", "depressed", "down",
             "heartbroken", "upset", "crying",
             "hurt", "miserable", "gloomy",
             "hopeless", "discouraged", "empty",
             "rejected", "isolated", "lost",
             "grief", "pain", "failure",
             "disappointed", "blue", "tearful",
             "broken", "unhappy", "regret"]):
        return "sad"
    
    elif any(word in text_lower for word in
             ["happy", "joy", "joyful", "excited",
             "delighted", "great", "amazing",
             "awesome", "wonderful", "thrilled",
             "grateful", "blessed", "positive",
             "smile", "smiling", "laughing",
             "fantastic", "proud", "accomplished",
             "success", "celebration", "love"]):
        return "happy"

    elif any(word in text_lower for word in
             ["angry", "mad", "furious",
             "annoyed", "irritated",
             "frustrated", "upset",
             "outraged", "enraged",
             "resentful", "agitated",
             "hostile", "stressed",
             "tense", "bitter",
             "offended", "triggered",
             "fed up", "impatient",
             "fuming", "livid",
             "argument", "unfair",
             "betrayed", "disrespected"]):
        return "angry"

    elif any(word in text_lower for word in
             ["love", "romantic", "loving",
             "adore", "affection", "sweet",
             "passionate", "caring",
             "devoted", "crush",
             "beloved", "heartfelt",
             "intimate", "attracted",
             "cherished", "dreamy",
             "flirty", "date",
             "boyfriend", "girlfriend",
             "partner", "relationship",
             "butterflies", "kiss",
             "hug", "soulmate"]):
        return "romantic"

    elif any(word in text_lower for word in
             ["focused", "focus", "study",
             "studying", "concentrated",
             "concentration", "productive",
             "productivity", "assignment",
             "exam", "revision", "learning",
             "coding", "project",
             "work", "goal",
             "discipline", "organized",
             "efficient", "deep work",
             "task", "deadline",
             "homework", "lecture",
             "practice", "skill"]):
        return "focused"

    elif any(word in text_lower for word in
             ["calm", "peaceful", "relaxed",
             "serene", "tranquil", "comfortable",
             "content", "quiet", "still",
             "balanced", "composed", "soothing",
             "restful", "mindful", "centered",
             "stable", "harmonious", "easygoing",
             "meditation", "yoga",
             "nature", "sunset",
             "rain", "breeze",
             "unwind", "rest"]):
        return "calm"
    
    elif any(word in text_lower for word in
             ["melancholy", "nostalgic",
             "nostalgia", "wistful",
             "reflective", "sentimental",
             "pensive", "longing",
             "yearning", "bittersweet",
             "reminiscing", "memories",
             "memory", "childhood",
             "past", "old days",
             "reflection", "thoughtful",
             "emotional", "dreamy",
             "remembering", "miss those days",
             "old friends", "old photos"]):
        return "melancholy"

    # Fallback to ML model
    text_vector = vectorizer.transform([text])

    emotion = model.predict(text_vector)[0]

    mood_map = {

        "joy": "happy",
        "amusement": "happy",
        "approval": "happy",
        "admiration": "happy",
        "gratitude": "happy",
        "optimism": "happy",

        "sadness": "sad",
        "grief": "sad",

        "anger": "angry",
        "annoyance": "angry",

        "excitement": "energetic",

        "love": "romantic",
        "caring": "romantic",

        "curiosity": "focused",
        "realization": "focused",

        "fear": "calm",
        "nervousness": "calm",

        "disappointment": "melancholy",
        "remorse": "melancholy",
        "embarrassment": "melancholy"
    }

    return mood_map.get(emotion, "calm")


def recommend_playlist(mood):

    playlists = {

        "happy":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",

        "sad":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",

        "calm":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",

        "energetic":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",

        "focused":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ",

        "romantic":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWXbttAJcbphz",

        "angry":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl",

        "melancholy":
        "https://open.spotify.com/embed/playlist/37i9dQZF1DX7gIoKXt0gmx"
    }

    return playlists.get(
        mood,
        playlists["calm"]
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
    )