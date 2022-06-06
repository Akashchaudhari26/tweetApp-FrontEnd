import React from 'react'

import PostTweet from './postTweet'
import Tweet from './tweet'

export default function Tweets() {
    return (

        <>
            <PostTweet></PostTweet>

            <ul className="list-unstyled">
                <Tweet></Tweet>
                <Tweet></Tweet>

            </ul>

        </>

    )
}
