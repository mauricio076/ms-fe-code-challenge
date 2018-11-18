import React, {Component} from 'react';

import TweetColum from "./ColumnComponent";

class  TweetsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }
    componentWillMount() {
        fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=' + this.props.screen_name)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({tweets: data});
            })
    }

    componentDidMount() {
        console.log("TweetsComponent", "did mount" + this.props.screen_name);
    }

    render() {
        return (
            <div>
                <TweetColum tweets={this.state.tweets}/>
            </div>
        );
    }

}

export default TweetsComponent;
