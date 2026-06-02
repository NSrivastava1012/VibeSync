<<<<<<< HEAD
import joblib


# ==========================
# LOAD MODEL
# ==========================

model = joblib.load(
    "model/mood_model.pkl"
)

print("Model Loaded Successfully!")


# ==========================
# TEST SENTENCES
# ==========================

while True:

    text = input(
        "\nEnter your mood (or type exit): "
    )

    if text.lower() == "exit":
        break

    prediction = model.predict(
        [text]
    )[0]

    print(
        "\nPredicted Emotion:",
        prediction
=======
import joblib


# ==========================
# LOAD MODEL
# ==========================

model = joblib.load(
    "model/mood_model.pkl"
)

print("Model Loaded Successfully!")


# ==========================
# TEST SENTENCES
# ==========================

while True:

    text = input(
        "\nEnter your mood (or type exit): "
    )

    if text.lower() == "exit":
        break

    prediction = model.predict(
        [text]
    )[0]

    print(
        "\nPredicted Emotion:",
        prediction
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
    )