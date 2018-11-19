import React from 'react';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { Manager, Reference, Popper } from 'react-popper';

var options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};

function RenderTweet({tweet}) {

    if (!tweet) {
        return (<div></div>)
    } else {
        let url = !tweet.entities.urls[0] ? '' : tweet.entities.urls[0].url;
        let text = tweet.text.replace(url, '');
        return (

            <Card className="mt-3 custom-card" tag='button' href={url}>
                <CardBody>
                    <CardTitle>
                        {new Date(tweet.created_at).toLocaleDateString("en-US", options)}
                    </CardTitle>

                    <CardText>
                        {text} <a className="card-link" href={url}>{url}</a>
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
