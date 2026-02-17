from transformers import pipeline

emotion_pipeline = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
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