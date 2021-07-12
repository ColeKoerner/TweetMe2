from projects.TweetMe2.tweetme2.settings import MAX_TWEET_LENGTH
from django.conf import settings
from rest_framework import serializers
from .models import Tweet

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH

class TweetSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        field = ['content']

    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError("This tweet is too long")
        return value