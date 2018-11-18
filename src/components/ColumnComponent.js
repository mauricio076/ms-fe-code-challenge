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
                <div className="float-left">
                    <img width="100%" alt='' src={props.tweets[0].user.profile_image_url}></img>
                </div>
                <h3 className="text-center ">
                    {props.tweets[0].user.name} <br/>
                    <small className="text-muted">@{props.tweets[0].user.screen_name}</small>
                </h3>
                {tweetsCol}
            </div>

        );
    }
};


export default TweetsColumn;
