from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    profile_picture = models.ImageField(upload_to="profiles/", null=True, blank=True)
    bio = models.TextField(blank=True)
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    posts = models.IntegerField(default=0)

    def __str__(self):
        return self.username

class Post(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="posts_list")
    image = models.ImageField(upload_to="posts/")
    caption = models.TextField(blank=True)
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    tags = models.JSONField(default=list)  # ["food","travel"]
    vibe = models.CharField(max_length=50, blank=True)
    quality = models.JSONField(default=dict)  # {"lighting": "good"}
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.username} - {self.caption[:20]}"

class Analytics(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    avg_likes = models.FloatField(default=0)
    avg_comments = models.FloatField(default=0)
    engagement_rate = models.FloatField(default=0.0)
