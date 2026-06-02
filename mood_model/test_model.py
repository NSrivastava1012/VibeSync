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
    )