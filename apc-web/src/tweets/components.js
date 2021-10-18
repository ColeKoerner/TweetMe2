import React, {useEffect, useState} from 'react'

import { TweetsList } from "./list";

import { TweetCreate } from './create';

import {apiTweetDetail} from './lookup';

import { Tweet } from './detail';

export function TweetsComponet(props) {
    const [newTweets, setNewTweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true
    const handleDidTweet = (newTweet) =>{
        // backend api response handler
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweet)
        setNewTweets(newTweet)
    }
    return <div className={props.className}>
            {canTweet === true && <TweetCreate didTweet={handleDidTweet} className='col-12 mb-3' />}
        <TweetsList newTweets={newTweets} {...props}/>
    </div>

}

export function TweetDetailComponent(props){
    const {tweetId} = props
    const [didLookup, setDidLookup] = useState(false)
    const [tweet, setTweet] = useState(null)

    const handleBackendLookup = (response, status) =>{
        if (status === 200){
            setTweet(response)
        } else {
            alert("Error while finding tweet")
        }
    }
    useEffect(()=>{
        if (didLookup === false){
            apiTweetDetail(tweetId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [didLookup, setDidLookup, tweetId])
    
    return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}