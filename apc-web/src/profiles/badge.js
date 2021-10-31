import React, { useState, useEffect } from 'react'

import { apiProfileDetail } from './lookup'

import {UserDisplay} from './components'

function ProfileBadge (props) {
    const {user} = props
    console.log(user)
    return user ? <div>
        <p><UserDisplay user={user} includeFullName hideLink /></p>
        
    </div> : null
}

export function ProfileBadgeComponent (props) {
    const {username} = props
    // lookup
    const [didLookup, setDidLookup] = useState(false)
    const [profile, setProfile] = useState(null)

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
    return didLookup === false ? "Loading..." : profile ? <ProfileBadge user={profile} /> : null
}