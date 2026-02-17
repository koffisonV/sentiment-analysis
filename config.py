import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

PORT = int(os.getenv("PORT", 5001))
HOST = os.getenv("HOST", "0.0.0.0")
EMOTION_MODEL = os.getenv("EMOTION_MODEL", "j-hartmann/emotion-english-distilroberta-base")
CHATBOT_MODEL = os.getenv("CHATBOT_MODEL", "facebook/blenderbot-400M-distill")
IMAGE_CAPTION_MODEL = os.getenv("IMAGE_CAPTION_MODEL", "Salesforce/blip-image-captioning-base")
