import React from 'react';
import TweetDetail from './TweetComponent';

const TweetsColumn = (props) => {

    const themeClass = props.theme;
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
                <div className="float-left pr-md-2 ">
                    <img alt='' src={props.tweets[0].user.profile_image_url} className="img-fluid"></img>
                </div>
                <div className={`media-body text-${themeClass === "dark" ? "light" : "dark"}`}>
                    <h3>
                        {props.tweets[0].user.name} <br/>
                        <small
                            className={`text-${themeClass === "dark" ? "light" : "dark"} text-muted`}>@{props.tweets[0].user.screen_name}</small>
                    </h3>

                </div>
                {tweetsCol}
            </div>

        );
    }
};


export default TweetsColumn;
