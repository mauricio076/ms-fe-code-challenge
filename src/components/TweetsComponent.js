import React, {Component} from 'react';
import TweetColum from "./ColumnComponent";
import {Alert} from 'reactstrap';
import { Manager, Reference, Popper } from 'react-popper';

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
        const tweetsPerColumn = this.state.tweetsPerColumn;
        console.log("Fetching data for: " + this.props.screen_name);
        fetch('http://localhost:7890/1.1/statuses/user_timeline.json?count=' + tweetsPerColumn + '&screen_name=' + this.props.screen_name)
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                this.setState({tweets: data});
            })
            .catch(error => {
                console.log("Catch", error);
                this.setState({error: error})
            })
    }

    // For dev purpose, to avoid unnecessary calling the API
    /*componentWillMount() {
        import('../shared/dev/' + this.props.screen_name+'.json')
            .then((data) => {
                this.setState({tweets:data.default});
            })
    }*/

    render() {

        if (this.state.tweets === undefined || this.state.error) {
            console.log(this.state.error.statusText);
            return (
                <div>
                <Alert color="danger" isOpen={this.state.alertVisible} toggle={this.onDismiss}>
                    {this.state.error.message}
                </Alert>
                </div>)
        } else {
            console.log("normal render");
            const tweetsPerColumn = this.props.tweetsPerColumn;
            return (
                <div>
                    <TweetColum tweets={this.state.tweets.slice(0, tweetsPerColumn)}/>
                </div>
            );
        }
    }
}

export default TweetsComponent;

