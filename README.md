# 🎵 VibeSync – AI-Powered Music Recommendation System

VibeSync is a full-stack **AI-powered music recommendation system** that recommends songs based on the user's current mood. It uses **Natural Language Processing (NLP)** and **Machine Learning** to understand mood-related text and provide personalized music recommendations.

## ✨ Features

* 🎭 **Mood Detection** – Predicts the user's mood from text input.
* 🎵 **Mood-Based Recommendations** – Suggests songs based on the detected mood.
* 🤖 **Machine Learning** – Uses an ML model trained on mood-related text data.
* 🧠 **NLP Processing** – Preprocesses and analyzes user input to identify emotional context.
* 🌐 **Interactive Web Interface** – Simple and responsive frontend for entering moods and viewing recommendations.
* 🔌 **Flask Backend** – Handles ML prediction, APIs, and application logic.
* 💾 **SQLite Database** – Stores and manages music-related data.
* ⚡ **Real-Time Prediction** – Generates recommendations based on the user's input.

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask
* REST APIs

### AI/ML

* Natural Language Processing (NLP)
* Scikit-learn
* Machine Learning

### Database

* SQLite

## 🏗️ Project Architecture

```text
User Input
    ↓
Frontend (HTML/CSS/JavaScript)
    ↓
Flask API
    ↓
Text Preprocessing
    ↓
NLP + ML Model
    ↓
Mood Prediction
    ↓
Recommendation Engine
    ↓
SQLite Database
    ↓
Recommended Songs
```

## 🚀 How It Works

1. The user enters a sentence describing how they feel.
2. The input is sent to the Flask backend.
3. The text is cleaned and preprocessed using NLP techniques.
4. The trained machine learning model predicts the user's mood.
5. The recommendation engine identifies songs associated with that mood.
6. The selected songs are retrieved from the database.
7. Recommendations are displayed on the frontend.

## 📂 Project Structure

```text
VibeSync/
│
├── app.py
├── requirements.txt
├── README.md
│
├── model/
│   ├── model.pkl
│   └── vectorizer.pkl
│
├── database/
│   └── vibesync.db
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
└── data/
    └── dataset.csv
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/VibeSync.git
cd VibeSync
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python app.py
```

### 5. Open in your browser

```text
http://127.0.0.1:5000/
```

## 🧠 Machine Learning Pipeline

The ML pipeline consists of:

```text
Raw Text
   ↓
Text Cleaning
   ↓
Tokenization / Preprocessing
   ↓
Feature Extraction
   ↓
ML Model
   ↓
Mood Classification
   ↓
Music Recommendation
```

The system was designed to connect **NLP-based mood classification** with a practical recommendation system rather than simply building a standalone text-classification model.

## 🎯 Why I Built VibeSync

Music is strongly connected with emotions, but finding the right song manually can take time. I built VibeSync to explore how **NLP, machine learning, and full-stack development** can be combined to create a personalized user experience.

The project also helped me gain hands-on experience with:

* Building and training ML models
* NLP and text preprocessing
* Developing REST APIs with Flask
* Database integration using SQLite
* Connecting ML models with a web application
* Designing an end-to-end AI-powered application

## 💡 Challenges Faced

### 1. Understanding Mood from Text

Users can express the same emotion in many different ways. Handling variations in natural language was one of the main challenges.

### 2. Connecting ML with the Web Application

Integrating the trained model with Flask required creating an efficient flow from frontend input → API → prediction → recommendation.

### 3. Recommendation Logic

The system needed to map predicted moods to meaningful song recommendations rather than simply returning random songs.

### 4. Data Preprocessing

Cleaning and preparing text data was important for improving the quality and consistency of mood predictions.

## 🔮 Future Improvements

* 🎧 Spotify API integration
* 👤 User profiles and personalized recommendations
* 📊 Recommendation history
* ❤️ Like/dislike-based recommendation improvement
* 🗣️ Voice-based mood detection
* 📷 Facial-expression-based mood detection
* 🧠 More advanced transformer-based NLP models
* ☁️ Cloud deployment
* 📱 Mobile application

## 👩‍💻 My Role

**AI/ML & Backend Developer**

I worked on:

* Mood prediction logic
* NLP preprocessing
* Machine learning model development
* Recommendation engine
* Flask backend and APIs
* SQLite database integration
* Connecting the ML backend with the frontend

## 📌 Project Highlights

* **Project:** VibeSync
* **Category:** AI/ML + Full Stack
* **Role:** AI/ML & Backend Developer
* **Tech:** Python, Flask, NLP, Machine Learning, SQLite, HTML, CSS, JavaScript
* **Focus:** Mood-based music recommendation

## ⭐ Future Vision

VibeSync can be extended into a complete **AI-powered personal music companion** that understands a user's emotions through text, voice, or facial expressions and continuously adapts recommendations to their preferences.

---

### 📄 License

This project is developed for educational and portfolio purposes.
