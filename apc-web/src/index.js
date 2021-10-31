import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProfileBadgeComponent } from './profiles';
import { FeedComponet, TweetsComponet, TweetDetailComponent } from './tweets';
import reportWebVitals from './reportWebVitals';

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const e = React.createElement

const tweetsEl = document.getElementById("apc-web")
if (tweetsEl){
  ReactDOM.render(
    e(TweetsComponet, tweetsEl.dataset), 
    tweetsEl
  );
}

const tweetFeedEl = document.getElementById("apc-web-feed")
if (tweetFeedEl){
  ReactDOM.render(
    e(FeedComponet, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll(".apc-web-detail")

tweetDetailElements.forEach(container=>{
  ReactDOM.render(
    e(TweetDetailComponent, container.dataset), 
    container
  );
})

const userProfileBadgeElements = document.querySelectorAll(".apc-web-profile-badge")

userProfileBadgeElements.forEach(container=>{
  ReactDOM.render(
    e(ProfileBadgeComponent, container.dataset), 
    container
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
