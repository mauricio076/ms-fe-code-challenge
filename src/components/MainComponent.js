import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import TweetsComponent from "./TweetsComponent";
//import Header from './HeaderComponent';
//import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Frontend Coding Challenge</title>
                </Helmet>
                <h1>code challenge</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="MakeSchool"/>
                        </div>
                       <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="newsycombinator"/>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <TweetsComponent screen_name="ycombinator"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;
