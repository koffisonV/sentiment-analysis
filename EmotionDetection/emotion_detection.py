
import sys
import os
from transformers import pipeline
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config import EMOTION_MODEL

emotion_pipeline = pipeline(
    "text-classification",
    model=EMOTION_MODEL,
    top_k=None  # Return all scores instead of return_all_scores=True
)

def emotion_detector(text_to_analyze):
    raw_results = emotion_pipeline(text_to_analyze)
    results = raw_results[0]
    
    # Build emotions dictionary with rounded percentages
    emotions = {item["label"].lower(): round(item["score"] * 100, 1) for item in results}
    dominant_emotion = max(emotions, key=emotions.get)

    return {
        **{k: v for k, v in emotions.items()},
        "dominant_emotion": dominant_emotion
    }