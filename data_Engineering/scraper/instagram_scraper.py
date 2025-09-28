# data_engineering/scraper/instagram_scraper.py
import requests
from bs4 import BeautifulSoup
import json

def fetch_profile(username):
    """Fetch basic profile info: name, username, profile picture, followers, following, posts count"""
    url = f"https://www.instagram.com/{username}/"
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Failed to fetch profile: {username}")

    soup = BeautifulSoup(response.text, "html.parser")
    scripts = soup.find_all("script", type="text/javascript")
    
    shared_data_script = None
    for script in scripts:
        if "window._sharedData" in script.text:
            shared_data_script = script.text
            break
    
    if not shared_data_script:
        raise Exception("Could not find shared data script")

    json_text = shared_data_script.strip().replace("window._sharedData = ", "")[:-1]
    data = json.loads(json_text)
    
    user_data = data["entry_data"]["ProfilePage"][0]["graphql"]["user"]

    profile = {
        "name": user_data["full_name"],
        "username": user_data["username"],
        "profile_picture": user_data["profile_pic_url_hd"],
        "followers": user_data["edge_followed_by"]["count"],
        "following": user_data["edge_follow"]["count"],
        "posts": user_data["edge_owner_to_timeline_media"]["count"],
        "bio": user_data["biography"]
    }

    return profile

def fetch_posts(username, limit=10):
    """Fetch last `limit` posts with image, caption, likes, comments"""
    url = f"https://www.instagram.com/{username}/"
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Failed to fetch posts: {username}")

    soup = BeautifulSoup(response.text, "html.parser")
    scripts = soup.find_all("script", type="text/javascript")
    
    shared_data_script = None
    for script in scripts:
        if "window._sharedData" in script.text:
            shared_data_script = script.text
            break
    
    json_text = shared_data_script.strip().replace("window._sharedData = ", "")[:-1]
    data = json.loads(json_text)
    edges = data["entry_data"]["ProfilePage"][0]["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"]

    posts = []
    for edge in edges[:limit]:
        node = edge["node"]
        posts.append({
            "id": node["id"],
            "image_url": node["display_url"],
            "caption": node["edge_media_to_caption"]["edges"][0]["node"]["text"] if node["edge_media_to_caption"]["edges"] else "",
            "likes": node["edge_liked_by"]["count"],
            "comments": node["edge_media_to_comment"]["count"],
            "shortcode": node["shortcode"]
        })
    return posts

# Test code
if __name__ == "__main__":
    username = "instagram"  # Replace with target influencer
    profile = fetch_profile(username)
    print("Profile Info:", profile)

    posts = fetch_posts(username, limit=5)
    print("Recent Posts:", posts)
