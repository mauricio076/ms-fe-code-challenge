import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

var options = {weekday:'short', year: 'numeric', month: 'short', day: 'numeric'};

function RenderTweet({tweet}) {


    if (!tweet) {
        return (<div></div>)
    } else {
        let url = !tweet.entities.urls[0] ? '': tweet.entities.urls[0].url;
        let text = tweet.text.replace(url, '');
        return (
            <a href={url} className="custom-card">
            <Card className="mt-3">
                <CardBody>
                    <CardTitle>
                        {new Date(tweet.created_at).toLocaleDateString("en-US", options)}
                    </CardTitle>

                    <CardText>
                       {text} <a href={url}>{url}</a>
                    </CardText>
                </CardBody>
            </Card>
            </a>
        )
    }
}

const TweetDetail = (props) => {
    const tweet = props;
    if (tweet != null) {
        return (
            <RenderTweet tweet={props.tweet}/>
        )
    } else {
        return (
            <div></div>
        )
    }

};

export default TweetDetail;
