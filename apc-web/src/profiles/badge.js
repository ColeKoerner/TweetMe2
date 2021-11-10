import React, { useState, useEffect } from 'react'

import numeral from 'numeral'

import { apiProfileDetail, apiProfileFollowToggle } from './lookup'

import {UserDisplay, UserPicture} from './components'

function DisplayCount(props) {
    return <span className={props.className}>{numeral(props.children).format("0.0a")}</span>
}

function ProfileBadge (props) {
    const {user, didFollowToggle, profileLoading} = props
    let currentVerb = (user && user.is_following) ? "Unfollow" : "Follow"
    currentVerb = profileLoading ? "Loading..." : currentVerb
    const handleFollowToggle = (event) => {
        event.preventDefault()
        if (didFollowToggle && !profileLoading){
            didFollowToggle(currentVerb)
        }
    }
    return user ? <div>
        <UserPicture user={user} hideLink/>
        <p><UserDisplay user={user} includeFullName hideLink /></p>
        <p>Followers: <DisplayCount> {user.follower_count}</DisplayCount></p>
        <p>Following: <DisplayCount>{user.following_count}</DisplayCount></p>
        <button className='btn btn-primary' onClick={handleFollowToggle}>{currentVerb} </button>
    </div> : null
}

export function ProfileBadgeComponent (props) {
    const {username} = props
    // lookup
    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)
    const [profileLoading, setProfileLoading] = useState(false)

    const handleBackendLookup = (response, status) =>{
        if (status === 200){
            setProfile(response)
        }
    }
    useEffect(()=>{
        if (didLookup === false){
            apiProfileDetail(username, handleBackendLookup)
            setDidLookup(true)
        }
    }, [didLookup, setDidLookup, username])

    const handleNewFollow = (actionVerb) => {
        apiProfileFollowToggle(username, actionVerb, (response, status)=>{
            if (status===200) {
                setProfile(response)
                // apiProfileDetail(username, handleBackendLookup)
            }
            setProfileLoading(false)
        })
        setProfileLoading(true)
    }
    return didLookup === false ? "Loading..." : profile ? <ProfileBadge user={profile} didFollowToggle={handleNewFollow} profileLoading={profileLoading}/> : null
}