"""
Flask application to expose the Emotion Detector service.
Provides a web endpoint to analyze text emotions and return the dominant emotion.
"""


from flask import Flask, render_template, request, jsonify
from EmotionDetection.emotion_detection import emotion_detector
from config import HOST, PORT

app = Flask("Emotion Detector")

@app.route("/emotionDetector")
def emotion_detector_endpoint():
    """
    Flask route to handle emotion detection requests.
    Returns the detected emotions and the dominant emotion,
    or an error message if the input is invalid.
    """
    text_to_analyze = request.args.get('textToAnalyze')

    response = emotion_detector(text_to_analyze)

    if response['dominant_emotion'] is None:
        return jsonify({"error": "Invalid text! Please try again!"}), 400

    # Return the response as JSON
    return jsonify(response)


@app.route("/")
def render_index_page():
    """
    Renders the index page for the Emotion Detector web application.
    """
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host=HOST, port=PORT)