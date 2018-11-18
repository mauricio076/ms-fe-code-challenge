import React from 'react';
import TweetDetail from './TweetComponent';

const TweetsColumn = (props) => {
    const tweetsCol = props.tweets.default.map((tweet) => {
        return (
            <div key={tweet.id}>
                <TweetDetail tweet={tweet}/>
            </div>
        );
    });

    return (

        <div>
            <h3 className="text-center">
                {props.tweets.default[0].user.name} <br/>
                <small className="text-muted">@{props.tweets.default[0].user.screen_name}</small>
            </h3>
            {tweetsCol}
        </div>

    );
};


export default TweetsColumn;
