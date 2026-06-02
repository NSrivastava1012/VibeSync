import pandas as pd
import joblib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression


# Load dataset
df = pd.read_csv(
    "dataset/train.tsv",
    sep="\t",
    header=None
)

# Add column names
df.columns = [
    "text",
    "emotion",
    "id"
]

# Features and labels
X = df["text"]
y = df["emotion"]

# Text vectorizer
vectorizer = TfidfVectorizer(
    max_features=5000
)

X_vectorized = vectorizer.fit_transform(X)

# Train model
model = LogisticRegression(
    max_iter=1000
)

model.fit(
    X_vectorized,
    y
)

# Save trained model
joblib.dump(
    model,
    "model/mood_model.pkl"
)

# Save vectorizer
joblib.dump(
    vectorizer,
    "model/vectorizer.pkl"
)
print("Model + Vectorizer saved successfully!")
