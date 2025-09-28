# data_engineering/video_processing/video_analysis.py
import random

# Placeholder categories for demo purposes
VIDEO_TAGS = ["outdoor", "nightlife", "food review", "beach", "party", "dance", "travel", "car", "fitness"]
VIDEO_VIBES = ["party", "travel luxury", "casual daily life", "energetic", "relaxing"]

def extract_video_tags(video_url, top_n=3):
    """
    Generate descriptive tags for a video.
    Currently uses random selection for demo purposes.
    """
    tags = random.sample(VIDEO_TAGS, top_n)
    return tags

def classify_video_vibe(video_url):
    """
    Classify video vibe/ambience.
    """
    vibe = random.choice(VIDEO_VIBES)
    return vibe

def detect_video_objects(video_url):
    """
    Identify basic events or objects in the video.
    For demo, returns random objects.
    """
    possible_objects = ["person dancing", "beach", "car", "food", "gym", "pet", "mountain", "city"]
    objects = random.sample(possible_objects, 3)
    return objects

# Example usage
if __name__ == "__main__":
    test_video = "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"
    print("Tags:", extract_video_tags(test_video))
    print("Vibe:", classify_video_vibe(test_video))
    print("Objects:", detect_video_objects(test_video))
