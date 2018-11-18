import React from 'react';
import TweetDetail from './TweetComponent';

const TweetsColumn = (props) => {

    const tweetsCol = props.tweets.map((tweet) => {
        return (
            <div key={tweet.id}>
                <TweetDetail tweet={tweet}/>
            </div>
        );
    });

    if (!props.tweets[0]) {
        return (<div></div>)
    } else {
        return (

            <div>
                <div className="float-left pr-md-3">
                    <img width="100%" alt='' src={props.tweets[0].user.profile_image_url}></img>
                </div>
                <div className="media-body">
                <h3>
                    {props.tweets[0].user.name} <br/>
                    <small className="text-muted">@{props.tweets[0].user.screen_name}</small>
                </h3>

                </div>
                {tweetsCol}
              </div>

        );
    }
};


export default TweetsColumn;
