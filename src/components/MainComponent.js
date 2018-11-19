import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import TweetsComponent from "./TweetsComponent";
import {Jumbotron} from 'reactstrap';
import Footer from "./FooterComponent";
import EditLayout from "./EditLayoutComponent";

class Main extends Component {

    constructor(props) {
        super(props);

        this.handleTweetsPerColumnChange = this.handleTweetsPerColumnChange.bind(this);

        this.state = {
            tweetsPerColumn: 30
        };
    }

    handleTweetsPerColumnChange(tweetsPerColumn) {
        this.setState({tweetsPerColumn})
    }


    render() {

        const tweetsPerColumn = this.state.tweetsPerColumn;
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Frontend Coding Challenge</title>
                </Helmet>

                <Jumbotron className="jumbotron-fluid">
                    <h1 className="display-3 text-sm-center text-left">Code challenge</h1>

                </Jumbotron>
                <EditLayout tweetsPerColumn={tweetsPerColumn}
                            onTweetsPerColumnChange={this.handleTweetsPerColumnChange}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="MakeSchool" tweetsPerColumn={tweetsPerColumn}/>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="newsycombinator" tweetsPerColumn={tweetsPerColumn}/>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="ycombinator" tweetsPerColumn={tweetsPerColumn}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Main;
