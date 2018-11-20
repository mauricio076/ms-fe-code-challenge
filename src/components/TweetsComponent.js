import React, {Component} from 'react';
import TweetColum from "./ColumnComponent";
import {Alert} from 'reactstrap';

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

class TweetsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            error: null,
            alertVisible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({alertVisible: false});
    }

    componentWillMount() {
        const tweetsPerColumn = this.props.tweetsPerColumn;
        const storageName = this.props.screen_name+"_tweets";
        const tweets = sessionStorage.getItem(storageName);
        if(tweets)
        {
            console.log("Fetching cached data for: " + this.props.screen_name);
            this.setState({tweets: JSON.parse(tweets)});
        }else {
            console.log("Fetching API data for: " + this.props.screen_name + " tweetsPerColumn:" + tweetsPerColumn);
             fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=' + this.props.screen_name)
           // fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=' + tweetsPerColumn + '&screen_name=' + this.props.screen_name)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        response.json().then(
                            (error) => {
                                let errorMessage = "The API says: (" + error.errors[0].code + ') ' + error.errors[0].message;
                                console.log(errorMessage);
                                this.setState({error: "Not available"});
                                alert("Could not fetch tweets, API error");
                            }
                        );
                    }
                })
                .then(data => {
                    this.setState({tweets: data});
                    console.log(data);
                    sessionStorage.setItem(storageName, JSON.stringify(data));
                })
                .catch(error => {
                    console.log(error);
                    //alert(error.response.status + " - " + error.response.statusText);
                    this.setState({error: "Not available"})
                })
        }
    }

    // For dev purpose, to avoid unnecessary calling the API
    /*componentWillMount() {
        import('../shared/dev/' + this.props.screen_name + '.json')
            .then((data) => {
                this.setState({tweets: data.default});
            })
    }*/

    render() {
        const themeClass = this.props.theme;
        if (this.state.tweets === undefined || this.state.error) {
            return (
                <div>
                    <Alert color="danger" isOpen={this.state.alertVisible} toggle={this.onDismiss}>
                        {this.state.error}
                    </Alert>
                </div>)
        } else {
            const tweetsPerColumn = this.props.tweetsPerColumn;
            return (
                <div>
                    <TweetColum tweets={this.state.tweets.slice(0, tweetsPerColumn)} theme={themeClass}/>
                </div>
            );
        }
    }
}

export default TweetsComponent;

