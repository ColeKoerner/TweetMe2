import random
from django.conf import settings
from django.shortcuts import render


ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.
def home_view(request, *args, **kwargs):
    # return HttpResponse("<h1>Hello World </h1>")
    return render(request, 'pages/home.html', context={}, status=200)

def tweets_list_view(request, *args, **kwargs):
    return render(request, 'tweets/list.html')

def tweets_detail_view(request, tweet_id, *args, **kwargs):
    return render(request, 'tweets/detail.html', context={"tweet_id": tweet_id})