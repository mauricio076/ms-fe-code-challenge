import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

var options = {weekday:'short', year: 'numeric', month: 'short', day: 'numeric'};

function RenderTweet({tweet}) {


    if (!tweet) {
        return (<div></div>)
    } else {
        let url = !tweet.entities.urls[0] ? '': tweet.entities.urls[0].url;
        let text = tweet.text.replace(url, '');
        //let text = tweet.text
        return (
            <Card className="mt-3">
                {/*<CardImg width="100%" src={dish.image} alt={dish.name}/>*/}
                <CardBody>
                    <CardTitle>
                        {new Date(tweet.created_at).toLocaleDateString("en-US", options)}
                    </CardTitle>

                    <CardText>
                       {text} <a href={url}>{url}</a>
                    </CardText>
                </CardBody>
            </Card>

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
