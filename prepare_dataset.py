import pandas as pd


# ==========================
# LOAD DATA
# ==========================

data = pd.read_csv(
    "dataset/train.tsv",
    sep="\t",
    header=None
)

data.columns = [
    "text",
    "emotion_id",
    "id"
]


# ==========================
# LOAD EMOTIONS
# ==========================

with open(
    "dataset/emotions.txt",
    "r",
    encoding="utf-8"
) as file:

    emotions = [
        line.strip()
        for line in file.readlines()
    ]


# ==========================
# REMOVE MULTI-LABEL ROWS
# ==========================

data = data[
    ~data["emotion_id"]
    .astype(str)
    .str.contains(",")
]


# ==========================
# CONVERT TO INTEGER
# ==========================

data["emotion_id"] = (
    data["emotion_id"]
    .astype(int)
)


# ==========================
# MAP LABELS
# ==========================

emotion_map = {
    i: emotions[i]
    for i in range(len(emotions))
}

data["emotion"] = (
    data["emotion_id"]
    .map(emotion_map)
)


# ==========================
# KEEP REQUIRED COLUMNS
# ==========================

cleaned_data = data[
    ["text", "emotion"]
]


# ==========================
# SAVE CLEAN DATA
# ==========================

cleaned_data.to_csv(
    "dataset/cleaned_train.csv",
    index=False
)

print("Dataset cleaned successfully!")
print(cleaned_data.head())