from django.urls import path

from .views import (
    tweet_create_view, 
    tweet_detail_view, 
    tweet_list_view, 
    tweet_delete_view,
    tweet_action_view
)
'''
Client
Base Endpoint /api/tweets/
'''
urlpatterns = [
    path('', tweet_list_view),
    path('action/', tweet_action_view),
    path('create-tweet/', tweet_create_view),
    path('<int:tweet_id>/', tweet_detail_view),
    path('<int:tweet_id>/delete/', tweet_delete_view)
]