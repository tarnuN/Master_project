# data_engineering/pipeline.py
from instagram_scraper.instagram_scraper import fetch_profile, fetch_posts, fetch_reels
from image_processing.image_analysis import extract_image_tags, classify_vibe, analyze_quality
from video_processing.video_analysis import extract_video_tags, classify_video_vibe, detect_video_objects

def process_influencer(username):
    """Fetch profile, posts, reels and enrich data with image/video analysis"""
    
    # 1. Fetch basic profile
    profile = fetch_profile(username)
    
    # 2. Fetch last 10 posts
    posts = fetch_posts(username, limit=10)
    
    # Enrich posts with image analysis
    for post in posts:
        post['tags'] = extract_image_tags(post['image_url'])
        post['vibe'] = classify_vibe(post['image_url'])
        post['quality'] = analyze_quality(post['image_url'])
    
    # 3. Fetch last 5 reels
    reels = fetch_reels(username, limit=5)
    
    # Enrich reels with video analysis
    for reel in reels:
        reel['tags'] = extract_video_tags(reel['video_url'])
        reel['vibe'] = classify_video_vibe(reel['video_url'])
        reel['objects'] = detect_video_objects(reel['video_url'])
    
    # 4. Combine all data
    influencer_data = {
        "profile": profile,
        "posts": posts,
        "reels": reels
    }
    
    return influencer_data

# Example usage
if __name__ == "__main__":
    username = "instagram"
    data = process_influencer(username)
    print(data)
