from rest_framework import serializers
from .models import Profile, Post, Analytics

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class AnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = "__all__"

class ProfileSerializer(serializers.ModelSerializer):
    posts_list = PostSerializer(many=True, read_only=True)
    analytics = AnalyticsSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = "__all__"
