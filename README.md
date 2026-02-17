# Sentiment & Emotion Detection Project

Simple web application and script collection for practicing NLP tools, focusing on emotion detection in text using Hugging Face Transformers and Flask.

## Features

- Detects emotions in user-provided text using a pre-trained transformer model.
- Web interface for emotion analysis.
- Includes a basic chatbot script for experimentation.
- Image captioning

## Setup environment

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the web server:**
   ```bash
   python server.py
   ```

## Files

- `server.py`: Flask app serving the web interface and API.
- `EmotionDetection/emotion_detection.py`: Core emotion detection logic.
- `chatbot.py`: Simple chatbot for further NLP practice.
- `test_emotion_detection.py`: Unit tests for emotion detection.