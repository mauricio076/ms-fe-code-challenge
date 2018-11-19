import React, {Component} from 'react';

import TweetColum from "./ColumnComponent";


class  TweetsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }
    /*componentWillMount() {
        const tweetsPerColumn = this.state.tweetsPerColumn;
        fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count='+tweetsPerColumn+'&screen_name=' + this.props.screen_name)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({tweets: data});
            })
    }*/


    componentWillMount() {
        const tweetsPerColumn = this.props.tweetsPerColumn;
        import('../shared/' + this.props.screen_name+'.json')
            .then((data) => {
                this.setState({tweets:data.default});
            })
    }

    render() {
        const tweetsPerColumn = this.props.tweetsPerColumn;
        const tweetsLength = this.state.tweets.length;
        return (
            <div>
                <TweetColum tweets={this.state.tweets.slice(0,tweetsPerColumn)}/>
            </div>
        );
    }

}

export default TweetsComponent;
