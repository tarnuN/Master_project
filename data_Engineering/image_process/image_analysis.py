# data_engineering/image_processing/image_analysis.py
from PIL import Image
import requests
from io import BytesIO
import random

# For simplicity, we use dummy ML-based results
# In production, you could integrate TensorFlow/PyTorch models

TAGS = ["food", "travel", "fashion", "fitness", "nature", "tech", "lifestyle"]
VIBES = ["casual", "aesthetic", "luxury", "energetic", "minimal", "party"]

def extract_image_tags(image_url, top_n=3):
    """
    Auto-generate tags/keywords for a post image.
    Currently random selection for demo purposes.
    """
    tags = random.sample(TAGS, top_n)
    return tags

def classify_vibe(image_url):
    """
    Classify vibe/ambience of the image.
    """
    vibe = random.choice(VIBES)
    return vibe

def analyze_quality(image_url):
    """
    Analyze image quality: brightness, contrast, visual appeal.
    Returns dictionary with scores 0-100
    """
    try:
        response = requests.get(image_url)
        img = Image.open(BytesIO(response.content)).convert("RGB")
        # Simple placeholder: random quality scores
        quality = {
            "brightness": random.randint(60, 100),
            "contrast": random.randint(60, 100),
            "visual_appeal": random.randint(60, 100)
        }
        return quality
    except Exception as e:
        print(f"Failed to process image: {e}")
        return {"brightness": 0, "contrast": 0, "visual_appeal": 0}

# Example usage
if __name__ == "__main__":
    test_image = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    print("Tags:", extract_image_tags(test_image))
    print("Vibe:", classify_vibe(test_image))
    print("Quality:", analyze_quality(test_image))
